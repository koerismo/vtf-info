<script lang="ts">
	import { app } from '$lib/js/index.svelte.ts';
	import Panel from '$lib/components/Panel.svelte';
	import KeyValuesPanel from '$lib/panels/KeyValuesPanel.svelte';

	// temp
	import { VKeyValuesResource } from '$lib/js/vtf/kv';
	import { VCrcResource } from '$lib/js/vtf/crc';
	import { KeyVRoot } from 'fast-vdf';
	import CrcPanel from '$lib/panels/CrcPanel.svelte';
	import Vtf, { VFlags, VFormats, VFrameCollection, VImageData } from 'vtf-js';
	import UnknownPanel from '$lib/panels/UnknownPanel.svelte';
	import HeaderPanel from '$lib/panels/HeaderPanel.svelte';

	const test_image_d = new Uint8Array(128 * 256 * 4);
	const test_image = new VImageData(test_image_d, 128, 256);

	const test_vtf = new Vtf(new VFrameCollection([test_image], { mipmaps: 3 }), {
		format: VFormats.DXT5,
		flags: VFlags.ClampS | VFlags.ClampT | VFlags.EightBitAlpha
	});

	const test_kv = new VKeyValuesResource(
		new KeyVRoot().factory()
			.pair('key1', 'value1')
			.pair('key2', 'value2')
			.dir('key3').back().exit() as KeyVRoot<string>
	);

	const test_crc = new VCrcResource(12345678);
</script>

<main>
	<div id="sidebar">
		<h1>petergriffin.vtf</h1>
		<div id="sidebar-panels">
			<HeaderPanel vtf={test_vtf} fileSize={1_000}></HeaderPanel>
			<Panel title="vtf &rarr; info">
				<div class="pgrid">
					<div class="pgrid-row">
						<span>version</span>
						<span>b</span>
					</div>
					<div class="pgrid-row">
						<span>dimensions</span>
						<span>b</span>
					</div>
					<div class="pgrid-row">
						<span>format</span>
						<span>b</span>
					</div>
				</div>
			</Panel>
			<KeyValuesPanel chunk={test_kv} />
			<CrcPanel chunk={test_crc} />
			<UnknownPanel chunk={test_crc}></UnknownPanel>
		</div>
	</div>
</main>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	main {
		padding: 0.0em;
	}

	div#sidebar {
		display: flex;
		flex-direction: column;

		margin: 2.5em 0;
		padding: 0 2.0em 0 2.5em;
		gap: 1.4em;

		width: min(400px, 40vw);
		height: calc(100vh - 4.0em);
		overflow-y: scroll;

		scrollbar-color: $dark-600 transparent;
		scrollbar-width: thin;

		div#sidebar-panels {
			background-color: $dark-500;
			box-shadow: 0 0 20px 10px $dark-500;

			display: flex;
			flex-direction: column;
			gap: 1.0em;
		}

		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: $dark-600;
		}
	}

	h1 {
		position: sticky;
		top: 0.0em;
		z-index: -2;
	}
</style>