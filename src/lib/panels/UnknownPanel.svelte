<script lang='ts'>
	import Panel from '$lib/components/Panel.svelte';
	import type { VBaseResource } from 'vtf-js/resources';
	import { hex_tag, as_bytelength } from '$lib/js/utils/math.ts';
	import BitFlags from '$lib/components/BitFlags.svelte';
	const { chunk }: { chunk: VBaseResource } = $props();

	const flagDescMap: Record<number, string> = {
		1: '0x1: Unknown',
		2: '0x2: No Data',
		4: '0x4: Unknown',
		8: '0x8: Unknown',
		16: '0x10: Unknown',
		32: '0x20: Unknown',
		64: '0x40: Unknown',
		128: '0x80: Unknown',
		256: '0x100: Unknown'
	}
</script>

<Panel title='vtf &rarr; unknown'>
	<div class="pgrid">
		<!-- <div class="u-chunk-header">
			<code>{hex_tag(chunk.tag)}</code>
			<code class="code-text">"{chunk.tag}"</code>
		</div> -->
		<div class="pgrid-row">
			<span>tag</span>
			<code><span>0x</span> {hex_tag(chunk.tag)} <span>"{chunk.tag}"</span></code>
		</div>
		<div class="pgrid-row">
			<span>data</span>
			{#if !(chunk.flags & 0x2)}
				<span>{as_bytelength(chunk.data!.length)}</span>
			{:else}
				<span>none</span>
			{/if}
		</div>
	</div>
	<h5>Flags</h5>
	<BitFlags flags={flagDescMap} value={chunk.flags} size={8}></BitFlags>
</Panel>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;
	
	/* div.u-chunk-header {
		display: flex;
		justify-content: space-between;
		
		background-color: #000;
		border: 1px solid #555;
		padding: 0.2rem;
	}

	code.code-text {
		color: #ffbf5e;
	} */

	div#chunk-tag {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		grid-column: 1/3;
		align-items: end;
		
		code {
			font-size: 1.4em;
			font-weight: 300;
			font-family: $font-header;

			span {
				color: $light-300;
			}
		}
	
		span.value {
			font-size: 0.8em;
			color: $light-300;
		}
	}
</style>