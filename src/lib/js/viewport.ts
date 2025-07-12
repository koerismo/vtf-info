import { VEncodedImageData, VFlags, VFormats, VImageData, type Vtf } from 'vtf-js';
import { VHeaderTags, type HotspotRect, type VHotspotResource } from 'vtf-js/resources';

import * as Three from 'three';
import { remap } from './utils/math.ts';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { writable } from 'svelte/store';

const ZOOM_MIN = 0.8;
const ZOOM_MAX = 1.18;

// shit
import { AnimRunner } from './animate.ts';
import { hover } from './hover.svelte.ts';

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
	needsRender: boolean = true;

	slicePlanes: Three.Mesh<Three.PlaneGeometry, Three.Material>[] = [];
	hotspotObject: HotspotObject | undefined;

	element: HTMLCanvasElement;
	cameraOrbit: Three.Object3D;
	camera: Three.OrthographicCamera;
	scene = new Three.Scene();

	renderer: Three.WebGLRenderer;
	rendering: number=0;

	mousePos = new Three.Vector2();
	mouseActive: boolean = false;
	mouseInBounds: boolean = false;

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

		this.element.addEventListener('mouseenter', ev => {
			this.mouseActive = true;
			this.mousePos.x = ev.offsetX;
			this.mousePos.y = ev.offsetY;
		});

		this.element.addEventListener('mouseleave', ev => {
			this.mouseActive = false;
			this.mousePos.x = ev.offsetX;
			this.mousePos.y = ev.offsetY;

			if (this.hotspotObject && this.mouseInBounds) {
				hover.setHover(undefined);
				this.mouseInBounds = false;
				if (this.hotspotObject.setActiveRect(null)) {
					this.needsRender = true;
				}
			}
		});

		this.element.addEventListener('mousemove', ev => {
			this.mousePos.x = ev.offsetX;
			this.mousePos.y = ev.offsetY;
			if (this.mode === ViewportModes.Single && this.hotspotObject) {
				const uv = this.getWorldFromScreen(this.mousePos);
				const inBounds = Math.abs(uv.x) <= 0.5 && Math.abs(uv.y) <= 0.5;
				uv.addScalar(0.5);

				// In rect
				if (inBounds) {
					const rid = this.hotspotObject.getRectAtCoords(uv);
					const rect = this.hotspotObject.getRect(rid);
					if (this.hotspotObject.setActiveRect(rid)) {
						if (rect) {
							const rectFlagStr = Object.keys(HotSpotRectFlagNames)
									.filter(x => (+x) & rect.flags)
									.map(x => HotSpotRectFlagNames[x])
									.join(' | ');
							hover.setHover(`${rid}: ${rectFlagStr}`);
						}
						this.needsRender = true;
					}
				}

				// Exiting rect
				else if (this.mouseInBounds) {
					hover.setHover(undefined);
					if (this.hotspotObject.setActiveRect(null)) {
						this.needsRender = true;
					}
				}

				// Update
				this.mouseInBounds = inBounds;
			}
		});
		
		this.render();
	}

	render() {
		if (this.rendering) return console.error('VIEWPORT HAS >1 RENDERING THREADS!!!! WTF!!!!!');
		this.rendering ++;

		if (this.animator.frame()) this.needsRender ||= true;

		// this.cameraOrbit.rotation.y = approach(this.cameraOrbit.rotation.y, 30*DEG2RAD, 0.02);
		// this.cameraOrbit.rotation.x = approach(this.cameraOrbit.rotation.x, -20*DEG2RAD, 0.02);
	
		if (this.needsRender) {
			this.camera.updateProjectionMatrix();
			this.renderer.render(this.scene, this.camera);
			this.needsRender = false;
		}
		
		this.rendering --;
		requestAnimationFrame(() => this.render());
	}

	getWorldFromScreen(coords: Three.Vector2): Three.Vector3 {
		const origin = new Three.Vector3(
			(coords.x * 2 / this.element.offsetWidth - 1),
			(coords.y * 2 / this.element.offsetHeight - 1), 1);
		origin.unproject(this.camera);
		return origin;
	}

	onResized() {
		const w = this.element.clientWidth, h = this.element.clientHeight;
		const aspect = w / h;
		const camWidth = 0.8;
		this.camera.left = -camWidth * aspect;
		this.camera.right = camWidth * aspect;
		this.camera.top = camWidth;
		this.camera.bottom = -camWidth;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(w * devicePixelRatio, h * devicePixelRatio, false);
		this.needsRender = true;
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

		if (img.format === VFormats.BC7) {
			return setupTexture(new Three.CompressedTexture([
				{ data: img.data, width: img.width, height: img.height }
			], img.width, img.height, Three.RGBA_BPTC_Format ))
		}

		if (img.format === VFormats.BC6H) {
			return setupTexture(new Three.CompressedTexture([
				{ data: img.data, width: img.width, height: img.height }
			], img.width, img.height, Three.RGB_BPTC_UNSIGNED_Format ))
		}

		let glFormat: Three.PixelFormat | undefined;
		let glType!: Three.TextureDataType;

		// Attempt to find uncompressed GPU match

		switch (img.format) {
			case VFormats.RGBA8888: { glFormat = Three.RGBAFormat; glType = Three.UnsignedByteType; break }
			// case VFormats.RGB888: { glFormat = Three.RGBFormat; glType = Three.UnsignedByteType; break }
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

	setSceneSlices(slices: (VEncodedImageData | VImageData)[], aspect: number, flags: VFlags) {
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
		return startZ;
	}

	setSceneHotspots(width: number, height: number, z: number, res?: VHotspotResource) {
		if (this.hotspotObject) {
			this.scene.remove(this.hotspotObject);
			delete this.hotspotObject;
		}
		if (!res) return;

		const hs = this.hotspotObject = new HotspotObject(res.rects, width, height);
		hs.position.set(-0.5, 0.5, z + 0.05);
		hs.rotation.set(0, Math.PI, Math.PI);
		this.scene.add(hs);
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
			this.camera.zoom = ZOOM_MIN;

			if (this.hotspotObject) {
				this.hotspotObject.opacity = 0.0;
			}
		}

		else if (this.mode === ViewportModes.None && mode === ViewportModes.Single) {
			// Fade in front
			if (this.slicePlanes.length) {
				this.animator.quart_out(this.slicePlanes[0].material, 'opacity', 0, 0.4, 0, 1);
			}
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.5, 0, 0);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.5, 0, 0);
			this.camera.zoom = ZOOM_MAX;

			if (this.hotspotObject) {
				this.animator.quart_out(this.hotspotObject, 'opacity', 0.2, 1.5, 0.0, 1.0);
			}
		}

		else if (this.mode === ViewportModes.ArrayFrames && mode === ViewportModes.Single) {
			// Fade out all except front
			for (let i=1; i<this.slicePlanes.length; i++) {
				const plane = this.slicePlanes[i];
				const A = 0; // i * 0.05;
				this.animator.quart_out(plane.material, 'opacity', A, A+0.4,    1, 0);
			}
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.5, -20*DEG2RAD, 0);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.5,  40*DEG2RAD, 0);
			this.animator.quint_out(this.camera, 'zoom', 0, 0.8, ZOOM_MIN, ZOOM_MAX);

			if (this.hotspotObject) {
				this.animator.quart_out(this.hotspotObject, 'opacity', 0.2, 1.5, 0.0, 1.0);
			}
		}

		else if (this.mode === ViewportModes.Single && mode === ViewportModes.ArrayFrames) {
			// Fade out all except front
			for (let i=1; i<this.slicePlanes.length; i++) {
				const plane = this.slicePlanes[i];
				const A = 0; // i * 0.05;
				this.animator.quart_out(plane.material, 'opacity', A, A+0.4,    0, 1);
			}
			this.animator.quint_out(this.cameraOrbit.rotation, 'x', 0, 0.5, 0, -20*DEG2RAD);
			this.animator.quint_out(this.cameraOrbit.rotation, 'y', 0, 0.5, 0,  40*DEG2RAD);
			this.animator.quint_out(this.camera, 'zoom', 0, 0.8, ZOOM_MAX, ZOOM_MIN);

			if (this.hotspotObject) {
				this.animator.quart_out(this.hotspotObject, 'opacity', 0.0, 0.5, 1.0, 0.0);
			}
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

		// Create scene slices
		const size = this.vtf.data.getSize(0, 0, 0, 0);
		const aspectRatio = size[0] / size[1];
		const frontZ = this.setSceneSlices(frames, aspectRatio, this.vtf.flags);

		// Create scene hotspots
		const res_hotspots = <VHotspotResource|undefined>vtf.meta.find(x => x.tag === VHeaderTags.TAG_HOTSPOT);
		this.setSceneHotspots(size[0], size[1], frontZ, res_hotspots);

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

// let ColorSetIndex = 0;
// const ColorSet = Object.values(Three.Color.NAMES);
// function nextColor() {
// 	ColorSetIndex++;
// 	if (ColorSetIndex >= ColorSet.length) ColorSetIndex = 0;
// 	return ColorSet[ColorSetIndex-1];
// }

const RECT = new Three.Color(0x888888);
const RECT_ALT = new Three.Color(0x992222);
const RECT_ACTIVE = new Three.Color(0xffffff);
const RECT_ACTIVE_ALT = new Three.Color(0xff5555);

export const enum HotSpotRectFlags {
    AllowRotation = 1,
    AllowReflection = 2,
    AltGroup = 4
}

export const HotSpotRectFlagNames: Record<string | number, string> = {
	[HotSpotRectFlags.AllowRotation]: 'ROT',
	[HotSpotRectFlags.AllowReflection]: 'FLIP',
	[HotSpotRectFlags.AltGroup]: 'ALT'
}

export class HotspotObject extends Three.Object3D {
	protected mat: Three.Material;
	protected meshes: Three.InstancedMesh;
	protected lastActiveRect: number = -1;

	constructor(
			protected rects: HotspotRect[],
			protected imageWidth: number,
			protected imageHeight: number) {
		super();

		const plane = new Three.PlaneGeometry(1, 1);
		plane.translate(0.5, 0.5, 0);

		const mat = this.mat = new Three.MeshBasicMaterial({ color: 0xffffff, wireframe: true, blending: Three.NormalBlending, transparent: true, opacity: 0 });
		const meshes = this.meshes = new Three.InstancedMesh(plane, mat, rects.length);

		const PAD = 0.5;
		for (let i=0; i<rects.length; i++) {
			const rect = rects[i];
			const matrix = new Three.Matrix4();
			matrix.makeScale((rect.max_x - rect.min_x - PAD*2) / imageWidth, (rect.max_y - rect.min_y - PAD*2) / imageHeight, 1);
			matrix.setPosition((rect.min_x+PAD) / imageWidth, (rect.min_y+PAD) / imageHeight, 0);
			meshes.setMatrixAt(i, matrix);
			meshes.setColorAt(i, this.getColor(rect));
		}

		this.add(meshes);
	}

	getColor(rect: HotspotRect, active?: boolean): Three.Color {
		const alt = (rect.flags & HotSpotRectFlags.AltGroup) !== 0;
		if (active) return alt ? RECT_ACTIVE_ALT : RECT_ACTIVE;
		return alt ? RECT_ALT : RECT;
	}

	getRectAtCoords(uv: Three.Vector2Like): number | null {
		const x = uv.x * this.imageWidth;
		const y = uv.y * this.imageHeight;

		for (let i=0; i<this.rects.length; i++) {
			const r = this.rects[i];
			if (x >= r.min_x && x <= r.max_x && y >= r.min_y && y <= r.max_y) return i;
		}
		return null;
	}

	getRect(id: number | null): HotspotRect | null {
		if (id !== null) return this.rects[id];
		return null;
	}

	/** Sets the currently-active rect, and returns true if a render update is necessary. */
	setActiveRect(id: number | null): boolean {
		if (this.lastActiveRect !== -1) {
			if (this.lastActiveRect === id) return false;
			const r = this.rects[this.lastActiveRect];
			this.meshes.setColorAt(this.lastActiveRect, this.getColor(r));
			this.lastActiveRect = -1;
		}
		if (id !== null) {
			const r = this.rects[id];
			this.meshes.setColorAt(id, this.getColor(r, true));
			this.lastActiveRect = id;
		}
		this.meshes.instanceColor!.needsUpdate = true;
		return true;
	}

	set opacity(v: number) {
		this.mat.opacity = v;
		this.mat.needsUpdate = true;
	}
	
	get opacity() {
		return this.mat.opacity;
	}
}
