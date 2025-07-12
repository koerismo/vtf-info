import { Vtf } from 'vtf-js';
import { registerResourceType } from 'vtf-js/resources';

import { VKeyValuesResource } from './vtf/kv.ts';
import { VCrcResource } from './vtf/crc.ts';
import { Viewport } from './viewport.ts';

// TEMP
import { VFakeData } from './utils/fakedata.ts';
import { getFaceCount } from 'vtf-js/utils';
import './vtf/bcn.ts';
import './vtf/zstd.ts';
import { Targa } from './utils/tga.ts';

registerResourceType(VKeyValuesResource, VKeyValuesResource.tag);
registerResourceType(VCrcResource, VCrcResource.tag);

export class App {
	public vtf: Vtf|undefined = $state();
	public fileName: string|undefined = $state();
	public fileSize: number|undefined = $state();
	
	constructor() {
		// setTimeout(() => this.loadTestImage(), 200);
	}

	async decodeFile(file: File) {
		const buf = await file.arrayBuffer();
		try {
			return await Vtf.decode(buf, false, true);
		}
		catch (e) {
			console.error('Failed to decode vtf! trying just header...', e);
			const header = await Vtf.decode(buf, true);
			const data = new VFakeData(header.width,header.height, header.mipmaps, header.frames, getFaceCount(header), header.slices);
			return new Vtf(data, {
				version: header.version,
				format: header.format,
				bump_scale: header.bump_scale,
				reflectivity: header.reflectivity,
				flags: header.flags
			});
		}
	}

	async loadFromFile(file: File) {
		this.vtf = await this.decodeFile(file);
		this.fileSize = file.size;
		this.fileName = file.name;

		const vp = Viewport.currentViewport;
		if (vp) {
			vp.teardownFile();
			vp.setupFile(this.vtf);
		}
	}

	async loadTestImage() {
		const req = await fetch('/indicator_lights_wall.vtf');
		const file = new File([await req.blob()], 'indicator_lights_wall.vtf');
		await this.loadFromFile(file);
	}

	async exportFile() {
		if (!this.vtf) throw Error('whoops');
		const img = this.vtf.data.getImage(0, 0, 0, 0);
		if (!(img.data instanceof Uint8Array)) throw Error('Cannot TGAify non-uint8 image!');
		const tga = new Targa(img.convert(Uint8Array));
		const data = tga.save();

		const a = document.createElement('a');
		a.download = this.fileName + '.tga';
		a.href = URL.createObjectURL(new Blob([data], { type: 'image/tga' }));
		a.click();
		setTimeout(() => {
			URL.revokeObjectURL(a.href);
		}, 5000);
	}
}

export const app = new App();
