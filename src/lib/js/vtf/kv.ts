import { DataBuffer, VFileHeader } from 'vtf-js';
import { VBaseResource, VHeaderTags, type VHeader } from 'vtf-js/resources';
import { KeyVRoot, KeyVSet, parse } from 'fast-vdf';

export class VKeyValuesResource extends VBaseResource {
	static tag = 0x48_56_44;
	kvs?: KeyVRoot<string>;

	constructor(kvs?: KeyVRoot<string>) {
		super(VKeyValuesResource.tag, 0x0);
		this.kvs = kvs;
	}

	static decode(header: VHeader, view: DataBuffer, info: VFileHeader): VKeyValuesResource {
		const strValue = view.read_str(view.length);
		let kValue: KeyVRoot<string> | undefined;
		try {
			kValue = parse(strValue);
		}
		catch (e) {
			console.error(e);
		}
		return new VKeyValuesResource(kValue);
	}

	encode(info: VFileHeader): ArrayBuffer {
		throw 'whoops';
	}

	ok() {
		return !!this.kvs;
	}

	enumerate(): [string, string, boolean][] {
		if (!this.kvs) return [['Error', 'Error', false]];
		return this.kvs.all().map(k => {
			if (k instanceof KeyVSet) return [k.key, '...', true];
			return [k.key, k.value, false];
		});
	}
}
