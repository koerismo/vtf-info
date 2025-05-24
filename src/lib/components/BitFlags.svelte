<script lang="ts">
	// import Hover from '$lib/components/Hover.svelte';
	import { hover } from '$lib/js/hover.svelte.ts';
	import { app } from '$lib/js/index.svelte';

	let { flags, value, size, start=0 }: { flags: Record<number, string>, value: number, size: number, start?: number } = $props();
	
	let currentHover: number|undefined = $state(undefined);
	$effect(() => {
		hover.setHover(currentHover ? flags[currentHover] : undefined, currentHover ? !!(value & currentHover) : false);
	});

	const bits = new Array<number>(size);
	for (let i=0; i<size; i++) {
		bits[i] = 2**(i + start);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onmouseleave={() => currentHover = undefined}>
	{#each bits.entries() as [k, b]}
		{@const one = +!!(value & b)}
		<span class:one={one} onmouseenter={() => currentHover = b}>{one}</span>
		{#if k % 8 === 7 && k !== size-1}
		<div></div>
		{/if}
	{/each}
</div>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;
	@use 'sass:color';
	
	div {
		display: flex;
		justify-content: stretch;

		background-color: $dark-600;
		color: $light-300;
		
		font-size: 0.7em;
		text-align: center;

		// overflow: hidden;
		// border-radius: 0.3em;

		& > div {
			// background-color: $dark-500;
			width: 50%;
		}

		& > span {
			display: block;
			width: 100%;
			padding: 0.4em 0;
			user-select: none;
			cursor: default;

			&:hover {
				background-color: color.adjust($dark-600, $lightness: 5%);
			}

			&.one {
				background-color: $dark-700;
				color: $light-500;

				&:hover {
					background-color: color.adjust($dark-700, $lightness: 5%);
				}
			}
		}
	}
</style>