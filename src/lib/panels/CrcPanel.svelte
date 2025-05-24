<script lang='ts'>
	import Panel from '$lib/components/Panel.svelte';
	import { type VCrcResource } from '$lib/js/vtf/crc.ts';
	const { chunk }: { chunk: VCrcResource } = $props();
</script>

<Panel title='vtf &rarr; crc'>
	<div class="crc">
		<code class="hex"><span>0x</span> { chunk.toString() }</code>
		<span class="value">{ chunk.crc }</span>
	</div>
</Panel>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;
	div.crc {
		display: flex;
		flex-direction: column;
		gap: 0.1em;
		
		code.hex {
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