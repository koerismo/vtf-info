import { decompress as decompressZSTD } from 'fzstd';
import { VCompressionMethods } from 'vtf-js';
import { setCompressionMethod, decompress, compress } from 'vtf-js/utils';

const og_decomp = decompress;
setCompressionMethod(
	compress,
	async (data, method, _level) => {
		if (method === VCompressionMethods.ZSTD)
			return decompressZSTD(data)
		return og_decomp(data, method, _level);
	}
);
