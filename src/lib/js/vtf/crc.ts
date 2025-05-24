import { DataBuffer, VFileHeader } from 'vtf-js';
import { VBaseResource, type VHeader } from 'vtf-js/resources';
import { hex_le32 } from '../utils/math.ts';

export class VCrcResource extends VBaseResource {
	static tag = 'CRC';

	constructor(public readonly crc: number) {
		super('CRC', 0x2);
	}

	static decode(header: VHeader, view: DataBuffer, info: VFileHeader): VCrcResource {
		return new VCrcResource(header.start);
	}

	encode(info: VFileHeader): ArrayBuffer {
		throw 'whoops';
	}

	toString() {
		return hex_le32(this.crc);
	}
}
