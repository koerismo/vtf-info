import { registerCodec, VFormats } from 'vtf-js';
import { ceil4 } from 'vtf-js/utils';

registerCodec(VFormats.BC7, {
	encode(data) { throw Error('BC7 does not support CPU encoding!'); },
	decode(data) { throw Error('BC7 does not support CPU decoding!'); },
	length(width, height) {
		return ceil4(width) * ceil4(height);
	},
});

registerCodec(VFormats.BC6H, {
	encode(data) { throw Error('BC6H does not support CPU encoding!'); },
	decode(data) { throw Error('BC6H does not support CPU decoding!'); },
	length(width, height) {
		return ceil4(width) * ceil4(height);
	},
});
