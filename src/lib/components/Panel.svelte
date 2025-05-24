<script lang="ts">
	import { type Snippet } from 'svelte';
	import BtnCollapse from './BtnCollapse.svelte';

	let { children, title }: { children?: Snippet, title: string } = $props();
	
	let expanded = $state(true);
	let header: HTMLElement;
</script>

<div class="container" class:active={expanded}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div bind:this={header} class="header" onclick={ e => {if (e.target === header) expanded = !expanded;} }>
		<h3>{ title }</h3>
		<BtnCollapse bind:checked={expanded}></BtnCollapse>
	</div>
	
	<div class="body">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	div.container {
		display: flex;
		flex-direction: column;
		gap: 0.4em;
	}

	div.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		user-select: none;

		padding: 0.5em;
		background-color: $light-500;
		color: $dark-500;
		transition: background-color 0.15s linear;

		h3 {
			line-height: 1;
			font-weight: 400;
		}
	}
	
	div.body {
		border: 1px solid $light-300;
		padding: 0.8em;

		overflow: hidden;
		transition: opacity 0.2s linear;
		display: none;
	}

	div.body > :global(h5) {
		text-align: right;
		font-size: 0.8em;
		font-weight: 400;
		color: $light-300;
		margin: 0.5em 0;

		&:first-child {
			margin-top: 0;
		}
	}

	div.container.active {		
		div.body {
			animation: fade-in 0.15s linear;
			display: block;
		}
	}

	@keyframes fade-in {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
</style>
