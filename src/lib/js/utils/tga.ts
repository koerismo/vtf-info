import { DataBuffer, VImageData } from 'vtf-js';
// import assert from 'node:assert';

export class Targa {
	constructor(
		public image: VImageData<Uint8Array>) {
	}

	save() {
		const colors = new Uint32Array(this.image.data.buffer);
		const file = new DataBuffer(colors.length * 5 + 18);

		file.write_u8(0); // No image ID
		file.write_u8(0); // No color map
		file.write_u8(10); // true-color RLE
		file.pad(5);
		file.write_u16(0); // X origin
		file.write_u16(0); // Y origin
		file.write_u16(this.image.width);
		file.write_u16(this.image.height);
		file.write_u8(8 * 4); // BPP
		file.write_u8(0b00101000); // Alpha depth 8, default ordering

		let current_count = 0;
		let current_idx = -1;
		
		let i = 0;
		while (i < colors.length) {
			const color0 = colors[i];

			// Init chunk
			current_count = 0;
			current_idx = file.pointer;
			file.write_u8(0);

			// RLE chunk, only if colors[0] == colors[1]
			if (color0 === colors[i+1]) {

				// Keep going until we hit a different color
				while (current_count < 128 && color0 === colors[i + current_count]) {
					current_count++;
				}

				i += current_count;

				const color0_bgra = (
					(color0 & 0xff00ff00)
					| (color0 & 0x00ff0000) >> 16
					| (color0 & 0x000000ff) << 16);

				file.write_u32(color0_bgra);

				if (current_count > 128 || current_count < 1) throw Error('raw: whoops '+current_count);
				file.view.setUint8(current_idx, (current_count - 1) | 128);
			}

			// Raw chunk
			else {
				while (current_count < 128 && i + current_count < colors.length) {
					const colorN = colors[i + current_count];
					if (
						(i + current_count + 2 < colors.length)
						&& colorN === colors[i + current_count + 1]
						&& colorN === colors[i + current_count + 2]) {
						break;
					}
					current_count++;
				}

				const colorsrc = new Uint32Array(colors.buffer, i * 4, current_count);
				i += current_count;

				// Convert RGBA to BGRA
				for (let c=0; c<colorsrc.length; c++) {
					const rgba = colorsrc[c];
					colorsrc[c] = (
						(rgba & 0xff00ff00)
						| (rgba & 0x00ff0000) >> 16
						| (rgba & 0x000000ff) << 16);
				}

				file.write_u32(colorsrc);
				if (current_count > 128 || current_count < 1) throw Error('rle: whoops '+current_count);
				file.view.setUint8(current_idx, (current_count - 1));
			}
		}

		console.log(file.pointer / (colors.length * 4), 'compression ratio')
		return file.slice(0, file.pointer);
	}
}

/*
const arr = new Uint8Array([
	0x00, 0x00, 0x00, 0x00, // 0
	0x10, 0x10, 0x10, 0x10, // 1
	0x10, 0x10, 0x10, 0x10,
	0x10, 0x10, 0x10, 0x10,
	0x10, 0x10, 0x10, 0x10,
	0x20, 0x20, 0x20, 0x20, // 2
	0x30, 0x30, 0x30, 0x30, // 3
	0x40, 0x40, 0x40, 0x40, // 4
	0x40, 0x40, 0x40, 0x40,
	0x40, 0x40, 0x40, 0x40,
]);

const expected = new Uint8Array([
	(1-1), // RAW, count=1
	0x00, 0x00, 0x00, 0x00,

	128 | (4-1), // RLE, count=4
	0x10, 0x10, 0x10, 0x10,

	(2-1), // RAW, count=2
	0x20, 0x20, 0x20, 0x20,
	0x30, 0x30, 0x30, 0x30,

	128 | (3-1), // RLE, count=3
	0x40, 0x40, 0x40, 0x40,
]);

const tga = new Targa(new VImageData(arr, 4, 4));
const out = tga.save();

assert.deepStrictEqual(out, expected);
*/