<script lang='ts'>
	import BitFlags from '$lib/components/BitFlags.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import { as_bytelength } from '$lib/js/utils/math.ts';
	import { type Vtf, VFormats } from 'vtf-js';

	const { vtf, fileSize }: { vtf: Vtf, fileSize: number } = $props();
	let [width, height] = $derived(vtf.data.getSize());
	let frameCount = $derived(vtf.data.frameCount());
	let faceCount = $derived(vtf.data.faceCount());
	let sliceCount = $derived(vtf.data.sliceCount());
	let mipCount = $derived(vtf.data.mipmapCount());

	const flagDescMap: Record<number, string> = {
		'1': 'PointSample: Use point sampling when rendering the texture in-engine. This results in pixelated textures!',
		'2': 'Trilinear: Use trilinear sampling when rendering the texture in-engine.',
		'4': 'ClampS: Clamp the image coordinates instead of wrapping them vertically.',
		'8': 'ClampT: Clamp the image coordinates instead of wrapping them horizontally.',
		'16': 'Anistrophic: TODO WRITE THIS',
		'32': 'HintDXT5: Used internally by VTEX.',
		'64': 'sRGB: Marks this image as being sRGB rather than linear RGB.',
		'128': 'Normal: Marks this image as a bumpmap. This has no effect in-engine.',
		'256': 'NoMip: Tells the engine to ignore any mipmaps present in this texture.',
		'512': 'NoLOD: TODO WRITE THIS',
		'1024': 'MinMip: Tells the engine to use the smallest mipmap in this texture.',
		'2048': 'Procedural: TODO WRITE THIS',
		'4096': 'OneBitAlpha: Used by DXT1 when encoding with alpha.',
		'8192': 'EightBitAlpha: Used by DXT5 and all other formats with alpha.',
		'16384': 'Envmap: Marks this texture as being an environment map.',
		'32768': 'RenderTarget: TODO WRITE THIS',
		'65536': 'DepthRenderTarget: TODO WRITE THIS',
		'131072': 'NoDebugOverride: TODO WRITE THIS',
		'262144': 'SingleCopy: TODO WRITE THIS',
		'524288': 'DEPRECATED_OneOverMipLevelInAlpha: TODO WRITE THIS',
		'1048576': 'DEPRECATED_PreMultColorByOneOverMipLevel: TODO WRITE THIS',
		'2097152': 'DEPRECATED_NormalToDuDv: TODO WRITE THIS',
		'4194304': 'DEPRECATED_AlphaTestMipGeneration: TODO WRITE THIS',
		'8388608': 'NoDepthBuffer: TODO WRITE THIS',
		'16777216': 'DEPRECATED_NICEFiltered: TODO WRITE THIS',
		'33554432': 'ClampU: TODO WRITE THIS',
		'67108864': 'VertexTexture: TODO WRITE THIS',
		'134217728': 'SSBump: TODO WRITE THIS',
		'268435456': 'DEPRECATED_UnfilterableOK: TODO WRITE THIS',
		'536870912': 'Border: TODO WRITE THIS',
		'1073741824': 'DEPRECATED_SpecVar_Red: TODO WRITE THIS',
		'2147483648': 'DEPRECATED_SpecVar_Alpha: TODO WRITE THIS'
	}
</script>

<Panel title='vtf &rarr; info'>
	<h5>Info</h5>
	<div class='pgrid'>
		<div class='pgrid-row'>
			<span>version</span>
			<span>7.{ vtf.version }</span>
		</div>
		<div class='pgrid-row'>
			<span>size</span>
			<span>{as_bytelength(fileSize)}</span>
		</div>
		<div class='pgrid-row'>
			<span>format</span>
			<span>{ VFormats[vtf.format] ?? 'Unknown' }</span>
		</div>
		<div class='pgrid-row'>
			<span>dimensions</span>
			<span>
				<span>{width}</span> &cross; <span>{height}</span> {#if sliceCount>1}&cross; <span>{sliceCount}</span>{/if}
			</span>
		</div>
		<div class='pgrid-row'>
			<span>frames</span>
			<span>{frameCount}</span>
		</div>
		<div class='pgrid-row'>
			<span>faces</span>
			<span>{faceCount}</span>
		</div>
		<div class='pgrid-row'>
			<span>mipmaps</span>
			<span>{mipCount}</span>
		</div>
	</div>
	<h5>Flags</h5>
	<BitFlags flags={flagDescMap} value={vtf.flags} size={16}></BitFlags>
	<BitFlags flags={flagDescMap} value={vtf.flags} size={16} start={16}></BitFlags>
</Panel>
