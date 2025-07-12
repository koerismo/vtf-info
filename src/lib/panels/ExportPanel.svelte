<script lang="ts">
	import { app } from '$lib/js/index.svelte.ts';
</script>

{#if app.vtf}
<button onclick={() => app.exportFile()}>export &rarr; tga</button>
{/if}

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	button {
		padding: 0.5em 0.8em;
		margin-left: auto;

		background-color: $light-500;
		color: $dark-500;
		border: none;

		&:hover {
			background-color: $light-400;
		}
	}
</style>