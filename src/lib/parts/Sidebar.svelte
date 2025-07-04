<script lang="ts">
	import { app } from '$lib/js/index.svelte.ts';

	import HeaderPanel from '$lib/panels/HeaderPanel.svelte';
	import CrcPanel from '$lib/panels/CrcPanel.svelte';
	import UnknownPanel from '$lib/panels/UnknownPanel.svelte';
	import KeyValuesPanel from '$lib/panels/KeyValuesPanel.svelte';
	import HotspotPanel from '$lib/panels/HotspotPanel.svelte';

	import { VCrcResource } from '$lib/js/vtf/crc';
	import { VKeyValuesResource } from '$lib/js/vtf/kv';
	import { onMount } from 'svelte';
	import CompressPanel from '$lib/panels/CompressPanel.svelte';
    import { VHotspotResource } from 'vtf-js/dist/core/resources.js';

	let header: HTMLElement;
	let hideHeader = $state(false);
	function onSidebarScroll(e: UIEvent) {
		const scrollAmount = (<HTMLDivElement>e.target).scrollTop;
		hideHeader = scrollAmount > 14;
	}

	// Scrollbar on the left makes everything sucky :(
	function doShitFirefoxPositioningHack() {
		if (!header) return console.warn('whoops');
		if (!navigator.userAgent.includes('Firefox/')) return;
		header.style.left = 'calc(2rem + 11px)';
	}

	onMount(() => doShitFirefoxPositioningHack());
</script>

<h1 bind:this={header} class:hidden={hideHeader}>{app.fileName}</h1>
<div id="sidebar" onscroll={onSidebarScroll}>
	{#if app.vtf}
	<div id="sidebar-panels">
		<HeaderPanel vtf={app.vtf} fileSize={app.fileSize!}></HeaderPanel>
		{#if app.vtf.compression_level}
		<CompressPanel vtf={app.vtf}></CompressPanel>
		{/if}
		{#each app.vtf.meta as chunk}
			{#if chunk instanceof VCrcResource}
			<CrcPanel {chunk} />
			{:else if chunk instanceof VKeyValuesResource}
			<KeyValuesPanel {chunk} />
			{:else if chunk instanceof VHotspotResource}
			<HotspotPanel {chunk} />
			{:else}
			<UnknownPanel {chunk} />
			{/if}
		{/each}
	</div>
	{:else}
	<h1>Drop</h1>
	{/if}
</div>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	div#sidebar {
		display: flex;
		flex-direction: column;
		direction: rtl;

		position: relative;
		z-index: 1;

		// Scrollbar on right
		// margin: 2.5em 0;
		// padding: 4em 2.0em 0 2.5em;

		margin: 2.5rem 0 2.5rem 1.0rem;
		padding: 4rem 1rem 0 1rem;
		gap: 1.4rem;

		width: max(min(400px, 40vw), 220px);
		height: calc(100vh - 5.0em);
		overflow-y: scroll;

		scrollbar-color: $dark-600 transparent;
		scrollbar-width: thin;

		div#sidebar-panels {
			direction: ltr;
			background-color: $dark-500;
			box-shadow: 0 0 20px 10px $dark-500;

			display: flex;
			flex-direction: column;
			gap: 1.0em;
		}

		&::-webkit-scrollbar {
			width: 0.5em;
		}

		&::-webkit-scrollbar-thumb {
			background-color: $dark-600;
		}
	}

	h1 {
		position: absolute;
		top: 1.2em;
		left: 1.2em;
		transition: opacity 0.15s linear;

		&.hidden {
			opacity: 0;
		}
	}
</style>