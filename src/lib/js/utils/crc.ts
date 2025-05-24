function makeCrcTable(): Int32Array {
	let c;
	const table = new Int32Array(256);
	for (let i=0; i<256; i++) {
		c = i;
		for (let k=0; k<8; k++) {
			c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
		}
		table[i] = c;
	}
	return table;
}

const CrcTable = makeCrcTable();

export function crc32(buf: Uint8Array, crc: number=0) {
	const tb = CrcTable;

	crc ^= -1;
	for (let i=0; i<buf.length; i++) {
		crc = (crc >>> 8) ^ tb[(crc ^ buf[i]) & 0xFF];
	}
	return (crc ^ -1);
}

