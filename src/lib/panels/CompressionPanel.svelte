<script lang='ts'>
	import Panel from '$lib/components/Panel.svelte';
	import { type Vtf, VCompressionMethods } from 'vtf-js';

	const { vtf }: { vtf: Vtf } = $props();
</script>

<Panel title='vtf &rarr; compression'>
	<div class="pgrid">
		<div class="pgrid-row">
			<span>method</span>
			<span>{ VCompressionMethods[vtf.compression_method] ?? 'unknown' }</span>
		</div>
		<div class="pgrid-row">
			<span>level</span>
			<span>{ vtf.compression_level === -1 ? 'default' : vtf.compression_level }</span>
		</div>
	</div>
</Panel>
