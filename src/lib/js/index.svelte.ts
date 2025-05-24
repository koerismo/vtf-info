import { Vtf, VCompressionMethods, VDataCollection, VImageData } from 'vtf-js';
import { registerResourceType, VBaseResource } from 'vtf-js/resources';

import { VKeyValuesResource } from './vtf/kv.ts';
import { VCrcResource } from './vtf/crc.ts';
import { Viewport } from './viewport.ts';

// TEMP
import { parse } from 'fast-vdf';
import { VFakeData } from './utils/fakedata.ts';
import { getFaceCount } from 'vtf-js/utils';
import './vtf/zstd.ts';

registerResourceType(VKeyValuesResource);
registerResourceType(VCrcResource);

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
		// const req = await fetch('/pistol_256x.vtf');
		// const file = new File([await req.blob()], 'pistol_256x.vtf');
		await this.loadFromFile(file);
		
		// const v = this.vtf!;
		// this.vtf = undefined;

		// v.compression_method = VCompressionMethods.Deflate;
		// v.compression_level = 4;

		// v.meta.push(
		// 	new VKeyValuesResource(parse('abc def ghi jkl')),
		// 	new VCrcResource(0x78563412),
		// 	new VBaseResource('ABC', 0x6),
		// );

		// this.vtf = v;
	}
}

export const app = new App();
