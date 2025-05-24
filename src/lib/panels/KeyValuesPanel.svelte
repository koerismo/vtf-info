<script lang='ts'>
	import Panel from '$lib/components/Panel.svelte';
	import { type VKeyValuesResource } from '$lib/js/vtf/kv.ts';
	const { chunk }: { chunk: VKeyValuesResource } = $props();
</script>

<Panel title='vtf &rarr; keyvalues'>
	<div class="pgrid">
		{#each chunk.enumerate() as [k, v, isDir] }
			<div class="pgrid-row">
				<span>{ k }</span>
				{#if isDir}
				<i>{ v }</i>
				{:else}
				<span>{ v }</span>
				{/if}
			</div>
		{/each}
	</div>
</Panel>
