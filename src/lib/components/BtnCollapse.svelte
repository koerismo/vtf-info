<script lang="ts">
	let { checked = $bindable(false), dark = false }: { checked: boolean, dark?: boolean } = $props();
	const stroke = dark ? '#e0e0e0' : '#151515';
</script>

<button onclick={() => checked = !checked } aria-label="{ checked ? "collapse" : "expand" }">
	<svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="15" height="15" stroke="{stroke}" />
		<g>
			<line x1="-3" x2="19" y1="8" y2="8" stroke="{stroke}" class="rotate" class:active={checked} />
			<line x1="-3" x2="19" y1="8" y2="8" stroke="{stroke}" class="rotate inv" class:active={checked} />
		</g>
	</svg>
</button>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	button {
		all: unset;
		padding: 0;
		margin: 0;
		aspect-ratio: 1 / 1;
		cursor: pointer;
	}

	line.rotate {
		transform-box: content-box;
		transform-origin: center;
		transition: transform $transition-sm;
	}

	line.rotate.active {
		transform: rotate(-45deg);
	}

	line.rotate.inv.active {
		transform: rotate(45deg);
	}
	
</style>
