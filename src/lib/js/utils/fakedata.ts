import { type VDataProvider, VImageData } from 'vtf-js';
import { getMipSize } from 'vtf-js/utils';

export class VFakeData implements VDataProvider {
	constructor(
		public _width: number,
		public _height: number,
		public _mipCount: number,
		public _frameCount: number,
		public _faceCount: number,
		public _sliceCount: number,
	) {}
	
	getImage(mip: number, frame: number, face: number, slice: number, allowEncoded?: boolean): VImageData {
		const size = getMipSize(mip, this._width, this._height);
		return new VImageData(new Uint8Array(), size[0], size[1]);
	}

	getSize(mip: number=0, frame?: number, face?: number, slice?: number): [number, number] {
		return getMipSize(mip, this._width, this._height);
	}
	mipmapCount(): number {
		return this._mipCount;
	}
	frameCount(): number {
		return this._frameCount;
	}
	faceCount(): number {
		return this._faceCount;
	}
	sliceCount(): number {
		return this._sliceCount;
	}
}
