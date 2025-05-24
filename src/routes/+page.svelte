<script lang="ts">
	import { app } from '$lib/js/index.svelte.ts';
	import Hover from '$lib/components/Hover.svelte';
	import Sidebar from '$lib/parts/Sidebar.svelte';
	import Viewport from '$lib/parts/Viewport.svelte';
	import { fade } from 'svelte/transition';
	import ViewportMenu from '$lib/components/ViewportMenu.svelte';

	let dragging = $state(false);

	function onDragOver(ev: DragEvent) {
		ev.preventDefault();
		dragging = true;
	}

	function onDragCancel(ev: DragEvent) {
		dragging = false;
	}

	function onDrop(ev: DragEvent) {
		ev.preventDefault();
		if (!ev.dataTransfer) return;
		if (!ev.dataTransfer.files.length) return;
		dragging = false;
		app.loadFromFile(ev.dataTransfer.files[0]);
	}
</script>

<main ondragover={onDragOver} ondragexit={onDragCancel} ondrop={onDrop}>
	{#if app.vtf}
	<Sidebar></Sidebar>
	<ViewportMenu></ViewportMenu>
	{:else}
	<div id="drag-text-underlay">
		<h3>drag a .vtf to view</h3>
	</div>
	{/if}
	<Viewport></Viewport>
	<Hover></Hover>
	{#if dragging}
	<div id="drag-overlay" transition:fade={{ duration: 0.2 }}>
	</div>
	{/if}
</main>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	main {
		padding: 0.0em;
		height: 100vh;
		width: 100vw;
	}

	div#drag-text-underlay,
	div#drag-overlay {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		z-index: 5;
	}

	div#drag-text-underlay {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div#drag-overlay {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		pointer-events: none;
		background-color: #8882;
	}
</style>