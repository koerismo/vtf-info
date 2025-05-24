import { VEncodedImageData, VFlags, VFormats, VImageData, type Vtf } from 'vtf-js';
import * as Three from 'three';
import { remap } from './utils/math.ts';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { writable } from 'svelte/store';

// shit
import { AnimRunner, quartic_in_out, quartic_out } from './animate.ts';

export const enum ViewportModes {
	None, // only on startup
	Single,
	ArrayFrames,
	// ArraySlices,
	// ArrayMipmaps,
}

export const gViewportMode = writable(ViewportModes.None);

export class Viewport {
	mode: ViewportModes = ViewportModes.None;
	vtf?: Vtf;
	animator: AnimRunner = new AnimRunner();

	slicePlanes: Three.Mesh<Three.PlaneGeometry, Three.Material>[] = [];

	element: HTMLCanvasElement;
	cameraOrbit: Three.Object3D;
	camera: Three.OrthographicCamera;
	scene = new Three.Scene();

	renderer: Three.WebGLRenderer;
	rendering: number=0;

	static currentViewport?: Viewport;

	constructor(canvas: HTMLCanvasElement) {
		// TODO: FIGURE OUT A LESS STUPID WAY TO DO THIS
		gViewportMode.subscribe((v) => {
			this.animateInto(v);
		});
		
		Viewport.currentViewport = this;
		this.element = canvas;
		this.renderer = new Three.WebGLRenderer({ antialias: true, canvas });

		this.camera = new Three.OrthographicCamera();
		this.cameraOrbit = new Three.Object3D();
		this.camera.position.set(0, 0, 4);
		this.cameraOrbit.add(this.camera);

		const rotBase = 30*DEG2RAD;
		const rotSide = -20*DEG2RAD;
		this.cameraOrbit.rotation.order = 'YXZ';
		this.cameraOrbit.rotation.set(rotSide, rotBase, 0);
		
		this.scene.add(this.cameraOrbit);
		this.camera.updateProjectionMatrix();
		this.onResized();

		this.scene.background = new Three.Color(0x151515);
		// this.scene.add(new Three.AxesHelper(2));
		// this.scene.add(new Three.PlaneHelper(new Three.Plane(new Three.Vector3(0, 1, 0)), 2));
		// this.scene.add(
		// 	this.makeSlicePlane(-1, null!),
		// 	this.makeSlicePlane(-0.5, null!),
		// 	this.makeSlicePlane(0, null!),
		// 	this.makeSlicePlane(0.5, null!),
		// 	this.makeSlicePlane(1, null!)
		// );
		
		let resizeTimeout: number | undefined;
		window.addEventListener('resize', () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => this.onResized(), 10);
		});
		
		this.render();
	}

	render() {
		if (this.rendering) return console.error('VIEWPORT HAS >1 RENDERING THREADS!!!! WTF!!!!!');
		this.rendering ++;

		this.animator.frame();
		// this.cameraOrbit.rotation.y = approach(this.cameraOrbit.rotation.y, 30*DEG2RAD, 0.02);
		// this.cameraOrbit.rotation.x = approach(this.cameraOrbit.rotation.x, -20*DEG2RAD, 0.02);
		this.renderer.render(this.scene, this.camera);
		
		this.rendering --;
		requestAnimationFrame(() => this.render());
	}

	onResized() {
		const w = this.element.clientWidth, h = this.element.clientHeight;
		const aspect = w / h;
		const camWidth = 1.2;
		this.camera.left = -camWidth * aspect;
		this.camera.right = camWidth * aspect;
		this.camera.top = camWidth;
		this.camera.bottom = -camWidth;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(w * devicePixelRatio, h * devicePixelRatio, false);
	}

	makeSlicePlane(z: number, aspect: number, mat: Three.Material) {
		const geo = new Three.PlaneGeometry(1, -1/aspect);
		const obj = new Three.Mesh(geo, mat);
		obj.position.z = z;
		
		return obj;
	}

	makeSliceMaterial(img: VEncodedImageData | VImageData, flags: VFlags, fallbackTint: number): Three.Material {
		const tex = this.convertTexture(img, flags);
		if (!tex) return new Three.MeshBasicMaterial({ color: new Three.Color(fallbackTint, fallbackTint, fallbackTint), transparent: true, opacity: 0.0, side: Three.BackSide });
		return new Three.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.0, side: Three.BackSide });
	}

	convertTexture(img: VEncodedImageData | VImageData, flags: VFlags): Three.Texture | undefined {
		if (!img || !img.data.length) return undefined;

		const setupTexture = (tex: Three.Texture): Three.Texture => {
			if (flags & VFlags.PointSample) tex.minFilter = tex.magFilter = Three.NearestFilter;
			tex.wrapT = (flags & VFlags.ClampT) ? Three.ClampToEdgeWrapping : Three.RepeatWrapping;
			tex.wrapS = (flags & VFlags.ClampS) ? Three.ClampToEdgeWrapping : Three.RepeatWrapping;
			// tex.flipY = true; // doesn't work on compressed textures
			tex.colorSpace = Three.SRGBColorSpace;
			tex.needsUpdate = true;
			return tex;
		}

		// Skip a bunch of stuff if already decoded
	
		if (!img.isEncoded) {
			let glType: Three.TextureDataType = Three.UnsignedByteType;
			if      (img.data instanceof Uint8Array) {}
			else if (img.data instanceof Uint16Array)  glType = Three.UnsignedShortType;
			else if (img.data instanceof Uint32Array)  glType = Three.UnsignedIntType;
			else if (img.data instanceof Float32Array) glType = Three.FloatType;
			return setupTexture(new Three.DataTexture(img.data, img.width, img.height, Three.RGBAFormat, glType));
		}

		// Check GPU-compressed formats first

		if (img.format === VFormats.DXT5) {
			return setupTexture(new Three.CompressedTexture([
				{ data: img.data, width: img.width, height: img.height }
			], img.width, img.height, Three.RGBA_S3TC_DXT5_Format));
		}

		if (img.format === VFormats.DXT3) {
			return setupTexture(new Three.CompressedTexture([
				{ data: img.data, width: img.width, height: img.height }
			], img.width, img.height, Three.RGBA_S3TC_DXT3_Format));
		}

		if (img.format === VFormats.DXT1 || img.format === VFormats.DXT1_ONEBITALPHA) {
			const format = flags & VFlags.OneBitAlpha ? Three.RGBA_S3TC_DXT1_Format : Three.RGB_S3TC_DXT1_Format;
			return setupTexture(new Three.CompressedTexture([
				{ data: img.data, width: img.width, height: img.height }
			], img.width, img.height, format));
		}

		let glFormat: Three.PixelFormat | undefined;
		let glType!: Three.TextureDataType;

		// Attempt to find uncompressed GPU match

		switch (img.format) {
			case VFormats.RGBA8888: { glFormat = Three.RGBAFormat; glType = Three.UnsignedByteType; break }
			case VFormats.RGB888: { glFormat = Three.RGBFormat; glType = Three.UnsignedByteType; break }
			case VFormats.I8: { glFormat = Three.LuminanceFormat; glType = Three.UnsignedByteType; break }
			case VFormats.IA88: { glFormat = Three.LuminanceAlphaFormat; glType = Three.UnsignedByteType; break }
			case VFormats.RGBA16161616: { glFormat = Three.RGBAFormat; glType = Three.UnsignedShortType; break }
			case VFormats.RGBA16161616F: { glFormat = Three.RGBAFormat; glType = Three.HalfFloatType; break }
			case VFormats.R32F: { glFormat = Three.RedFormat; glType = Three.FloatType; break }
		}
		
		if (glFormat) {
			return setupTexture(new Three.DataTexture(img.data, img.width, img.height, glFormat, glType));
		}

		// Fallback to CPU decoding

		try {
			const decoded = img.decode();
			let decoded_data = decoded.data;
			glType = Three.UnsignedByteType;
			if      (decoded.data instanceof Uint8Array) {}
			else if (decoded.data instanceof Uint16Array)  glType = Three.UnsignedShortType;
			else if (decoded.data instanceof Uint32Array)  glType = Three.UnsignedIntType;
			else if (decoded.data instanceof Float32Array) glType = Three.FloatType;
			else { decoded_data = decoded.convert(Uint8Array).data; } // gotta be a strange texture if all of these fail
			return setupTexture(new Three.DataTexture(decoded_data, decoded.width, decoded.height, Three.RGBAFormat, glType));
		}
		catch (e) {
			console.error(`Failed to decode image with size ${img.width}x${img.height} and format ${VFormats[img.format] ?? ('UNKNOWN (id='+img.format+')')}`);
		}

		return;
	}

	makeSlices(slices: (VEncodedImageData | VImageData)[], aspect: number, flags: VFlags) {
		if (this.slicePlanes.length) {
			// Remove all old shit
			this.scene.remove(...this.slicePlanes);
			for (const plane of this.slicePlanes) {
				const mat = <Three.MeshBasicMaterial>plane.material;
				if (mat.isMeshBasicMaterial) mat.map?.dispose();
				mat.dispose();
				plane.geometry.dispose();
			}
			this.slicePlanes.length = 0;
		}

		const count = slices.length;
		const spacing = Math.min(0.15, 1.5 / count);
		const startZ = (count-1) / 2 * spacing;

		for (let i=0; i<count; i++) {
			const tint = remap(i, 0, count, 0.15, 0.4) ** 2.2;
			const mat = this.makeSliceMaterial(slices[i], flags, tint);
			const plane = this.makeSlicePlane(startZ + i * -spacing, aspect, mat);
			this.slicePlanes.push(plane);
		}

		this.scene.add(...this.slicePlanes);
	}

	getDefaultMode() {
		return (this.slicePlanes.length > 1) ? ViewportModes.ArrayFrames : ViewportModes.Single;
	}

	animateInto(mode: ViewportModes) {
		console.log('Requesting animate from', this.mode, 'to', mode);
		if (this.mode === mode) return;
		this.animator.clear();

		if (this.mode === ViewportModes.None && mode === ViewportModes.ArrayFrames) {
			// Slide planes upwards and fade in staggered
			for (let i=0; i<this.slicePlanes.length; i++) {
				const plane = this.slicePlanes[i];
				const A = i / this.slicePlanes.length * 0.4;
				this.animator.quart_out(plane.position, 'y',       A, A+0.5, -0.1, 0);
				this.animator.quart_out(plane.material, 'opacity', A, A+0.5,    0, 1);
			}
			
			// Rotate camera into place
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.5, -20*DEG2RAD, -20*DEG2RAD);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.5,  40*DEG2RAD,  30*DEG2RAD);
		}

		else if (this.mode === ViewportModes.None && mode === ViewportModes.Single) {
			// Fade in front
			if (this.slicePlanes.length) {
				this.animator.quart_out(this.slicePlanes[0].material, 'opacity', 0, 0.4, 0, 1);
			}
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.4, 0, 0);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.4, 0, 0);
		}

		else if (this.mode === ViewportModes.ArrayFrames && mode === ViewportModes.Single) {
			// Fade out all except front
			for (let i=1; i<this.slicePlanes.length; i++) {
				const plane = this.slicePlanes[i];
				const A = 0; // i * 0.05;
				this.animator.quart_out(plane.material, 'opacity', A, A+0.4,    1, 0);
			}
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.4, -20*DEG2RAD, 0);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.4,  40*DEG2RAD, 0);
		}

		else if (this.mode === ViewportModes.Single && mode === ViewportModes.ArrayFrames) {
			// Fade out all except front
			for (let i=1; i<this.slicePlanes.length; i++) {
				const plane = this.slicePlanes[i];
				const A = 0; // i * 0.05;
				this.animator.quart_out(plane.material, 'opacity', A, A+0.4,    0, 1);
			}
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.4, 0, -20*DEG2RAD);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.4, 0,  40*DEG2RAD);
		}

		this.mode = mode;
		this.animator.start();
	}

	setupFile(vtf: Vtf) {
		if (this.vtf) throw Error('Viewport cannot setup new file without running teardownFile!');
		this.vtf = vtf;

		const frameCount = this.vtf.data.frameCount();
		const frames: (VEncodedImageData | VImageData)[] = new Array(frameCount);
		for (let i=0; i<frameCount; i++) {
			frames[i] = this.vtf.data.getImage(0, i, 0, 0, true);
		}
		
		const size = this.vtf.data.getSize(0, 0, 0, 0);
		const aspectRatio = size[0] / size[1];
		this.makeSlices(frames, aspectRatio, this.vtf.flags);

		this.mode = ViewportModes.None; // this sucks
		if (this.slicePlanes.length > 1)
			gViewportMode.set(ViewportModes.ArrayFrames)
		else
			gViewportMode.set(ViewportModes.Single)


		// this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.5, 40*DEG2RAD, 30*DEG2RAD);
		// this.animator.quint_out(this.cameraOrbit.rotation, 'y', 2, 3, 30*DEG2RAD, 0);
		// this.animator.quint_out(this.cameraOrbit.rotation, 'x', 2, 3, -20*DEG2RAD, 0);

		// this.animator.quint_out(this.cameraOrbit.rotation, 'y', 3.5, 4.5, 0, 30*DEG2RAD);
		// this.animator.quint_out(this.cameraOrbit.rotation, 'x', 3.5, 4.5, 0, -20*DEG2RAD);

		this.animator.start();
	}

	teardownFile() {
		this.animator.stop();
		this.mode = ViewportModes.None;
		gViewportMode.set(ViewportModes.None);
		this.vtf = undefined;
	}
}
