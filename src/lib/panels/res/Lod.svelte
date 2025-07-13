<script module>
	import { VHeaderTags } from 'vtf-js/resources';
	export const TAG = VHeaderTags.TAG_LOD;
</script>

<script lang='ts'>
	import { type VTextureLODResource } from 'vtf-js/resources';
	import Panel from '$lib/components/Panel.svelte';

	const { chunk }: { chunk: VTextureLODResource } = $props();
</script>

<Panel title='vtf &rarr; lod'>
	<div class="pgrid">
		<div class="pgrid-row">
			<span>clamp x</span>
			<span>{ chunk.resolutionClampX }</span>
		</div>
		<div class="pgrid-row">
			<span>clamp y</span>
			<span>{ chunk.resolutionClampY }</span>
		</div>
		<div class="pgrid-row">
			<span>clamp x (x360)</span>
			<span>{ chunk.x360_resolutionClampX }</span>
		</div>
		<div class="pgrid-row">
			<span>clamp y (x360)</span>
			<span>{ chunk.x360_resolutionClampY }</span>
		</div>
	</div>
</Panel>
