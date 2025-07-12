<script lang="ts">
	import { app } from '$lib/js/index.svelte.ts';
</script>

{#if app.vtf}
<button disabled={app.vtf === undefined || !(app.vtf.data.getImage(0, 0, 0, 0).data instanceof Uint8Array)} onclick={() => app.exportFileTga()}>export &rarr; tga</button>
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

		&:disabled {
			background-color: $light-300;
		}
	}
</style>