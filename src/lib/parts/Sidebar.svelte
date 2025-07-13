<script lang="ts">
	import { app } from '$lib/js/index.svelte.ts';
	import { onMount, type Component } from 'svelte';

	// Hardcoded panels
	import HeaderPanel from '$lib/panels/HeaderPanel.svelte';
	import ExportPanel from '$lib/panels/ExportPanel.svelte';
	import CompressionPanel from '$lib/panels/CompressionPanel.svelte';
	import UnknownPanel from '$lib/panels/UnknownPanel.svelte';

	//
	import type { VResource } from 'vtf-js/resources';

	const resPanels = import.meta.glob('$lib/panels/res/*.svelte', { eager: true });
	const resPanelMap: Record<number, Component<{ chunk: VResource }>> = {};
	for (const key in resPanels) {
		const panel = resPanels[key] as { TAG: number, default: Component };
		resPanelMap[panel.TAG] = panel.default;
	}

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
		<CompressionPanel vtf={app.vtf}></CompressionPanel>
		{/if}
		{#each app.vtf.meta as chunk}
			{#if chunk.tag in resPanelMap}
				{@const ResourcePanel = resPanelMap[chunk.tag]}
				<ResourcePanel chunk={chunk}></ResourcePanel>
			{:else}
				<UnknownPanel chunk={chunk}></UnknownPanel>
			{/if}
		{/each}
		<ExportPanel></ExportPanel>
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
		padding: 4rem 1.5rem 0 1rem;
		gap: 1.4rem;

		width: max(min(400px, 40vw), 220px);
		height: calc(100vh - 5.0em);
		overflow-y: scroll;

		scrollbar-color: $dark-600 transparent;
		scrollbar-width: thin;

		div#sidebar-panels {
			direction: ltr;
			background-color: $dark-500;
			box-shadow: 0 0 1.0em 0.5em #151515;

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
		z-index: 1;
		top: 1.2em;
		left: 1.2em;
		transition: opacity 0.15s linear;

		&.hidden {
			opacity: 0;
		}
	}
</style>