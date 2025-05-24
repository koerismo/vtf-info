<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	let { message = undefined, special = false }: { message?: string, special?: boolean } = $props();
	let element: HTMLElement;

	function onMouse(e: MouseEvent) {
		// Prevent flashing from changing content
		if (!element.clientWidth || !element.clientHeight) return;

		const x = e.clientX, y = e.clientY;
		const windowW = window.innerWidth, windowH = window.innerHeight;
		const midX = windowW / 2, midY = windowH / 2;
		const topLeftX = x < midX ? x + 2 : x - element.clientWidth;
		const topLeftY = y < midY ? y + 2 : y - element.clientHeight;
		// const window_w25 = windowW * 1/3;
		// const window_w75 = windowW * 2/3;
		// const window_h25 = windowH * 1/3;
		// const window_h75 = windowH * 2/3;
		// const topLeftX = x - element.clientWidth * clamp(remap(x, window_w25, window_w75, 0, 1), 0, 1);
		// const topLeftY = y - element.clientHeight * clamp(remap(y, window_h25, window_h75, 0, 1), 0, 1);

		element.style.left = topLeftX + 'px';
		element.style.top = topLeftY + 'px';
	}

	$effect(() => {
		element.style.display = message ? 'block' : 'none';
	});

	onMount(() => {
		document.addEventListener('mousemove', onMouse);
	});

	onDestroy(() => {
		document.removeEventListener('mousemove', onMouse);
	});

</script>

<div bind:this={element} class:special={special}>
	{message}
</div>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	div {
		position: absolute;
		z-index: 100;
		padding: 0.6em;
		background-color: $dark-300;
		color: $light-400;

		pointer-events: none;
		// transition: $transition-md;

		&.special {
			background-color: $dark-400;
			color: $light-500;
		}
	}
</style>
