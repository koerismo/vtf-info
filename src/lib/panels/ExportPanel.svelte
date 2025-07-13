<script lang="ts">
	import { hover } from '$lib/js/hover.svelte.ts';
	import { app, ExportableReturn } from '$lib/js/index.svelte.ts';
	let canExportTga = app.canExportFileTga();

	const failMessages: Record<ExportableReturn, string> = {
		[ExportableReturn.Ok]: '',
		[ExportableReturn.ErrIncompatibleFormat]: 'Cannot export high-precision images as TGA!',
		[ExportableReturn.ErrCannotDecode]: 'Format cannot be decoded on the CPU!',
		[ExportableReturn.ErrUnknown]: 'Unknown error!',
	}

	function onmouseenter() {
		if (canExportTga !== ExportableReturn.Ok)
			hover.setHover(failMessages[canExportTga]);
	}

	function onmouseleave() {
		hover.setHover(undefined);
	}

</script>

{#if app.vtf}
<button disabled={canExportTga !== ExportableReturn.Ok} onclick={() => app.exportFileTga()} {onmouseenter} {onmouseleave}>export &rarr; tga</button>
{/if}

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	button {
		padding: 0.5em 0.8em;
		margin-left: auto;

		background-color: $light-500;
		color: $dark-500;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: $light-600;
		}

		&:active {
			background-color: $light-400;
		}

		&:disabled {
			background-color: $light-300;
			cursor: default;
		}
	}
</style>