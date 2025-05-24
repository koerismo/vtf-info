<script lang="ts">
	import { onMount } from 'svelte';
	import { Viewport } from '$lib/js/viewport.ts';

	let canvas: HTMLCanvasElement;
	let viewport: Viewport;

	onMount(() => {
		if (!canvas) throw 'whoops no canvas';
		viewport = new Viewport(canvas);
	});
</script>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
	canvas {
		position: absolute;
		z-index: -1;
		left: 35vw;
		right: 5vw;
		top: 0;
		bottom: 0;
		width: 60vw;
		height: 100vh;
	}
</style>