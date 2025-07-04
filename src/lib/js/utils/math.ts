// Math

export function remap(x: number, a: number, b: number, c: number, d: number) {
	return (x - a) / (b - a) * (d - c) + c;
}

export function clamp(x: number, a: number, b: number) {
	return x < a ? a : x > b ? b : x;
}

// Bytelengths

export function as_bytelength(bytes: number) {
	if (bytes < 1_000) return bytes + ' B';
	if (bytes < 1_000_000) return Math.round(bytes/10)/100 + ' KB';
	if (bytes < 1_000_000_000) return Math.round(bytes/10_000)/100 + ' MB';
	return Math.round(bytes/10_000_000)/100 + ' GB';
}

// Hex

export function hex(x: number) {
	return (x & 0xff).toString(16).padStart(2, '0');
}

export function char(x: number) {
	return String.fromCharCode(x);
}

export function hex_le32(x: number) {
	return [hex(x >> 0), hex(x >> 8), hex(x >> 16), hex(x >> 24)].join(' ');
}

export function hex_tag(x: number) {
	return [hex(x >> 0), hex(x >> 8), hex(x >> 16)].join(' ');
}

export function str_tag(x: number) {
	return String.fromCharCode((x >> 0) & 0xff, (x >> 8) & 0xff, (x >> 16) & 0xff);
}
