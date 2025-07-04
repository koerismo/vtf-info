<script lang='ts'>
	import Panel from '$lib/components/Panel.svelte';
	import BitFlags from '$lib/components/BitFlags.svelte';
	import type { VHotspotResource } from 'vtf-js/resources';
	const { chunk }: { chunk: VHotspotResource } = $props();

	const editorFlagMap: Record<number, string> = {
		1: '0x1: Unknown',
		2: '0x2: Unknown',
		4: '0x4: Unknown',
		8: '0x8: Unknown',
		16: '0x10: Unknown',
		32: '0x20: Unknown',
		64: '0x40: Unknown',
		128: '0x80: Unknown',
		256: '0x100: Unknown'
	};
</script>

<Panel title='vtf &rarr; hotspots'>
	<div class='pgrid'>
		<div class='pgrid-row'>
			<span>version</span>
			<span>{ chunk.version }</span>
		</div>
		<div class='pgrid-row'>
			<span>count</span>
			<span>{ chunk.rects.length }</span>
		</div>
	</div>
	<h5>Editor Flags</h5>
	<BitFlags flags={editorFlagMap} value={chunk.editorFlags} size={8}></BitFlags>
</Panel>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;
</style>