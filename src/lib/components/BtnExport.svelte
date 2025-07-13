<script lang="ts">
	const { onclick, dark = false }: { onclick(): void, dark?: boolean } = $props();
	const stroke = dark ? '#e0e0e0' : '#151515';
</script>

<button onclick={onclick} aria-label="export">
	<svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g transform="matrix(-0.836508,1.02443e-16,-1.02443e-16,-0.836508,15.5571,15.5)">
			<path d="M0,7.011L0,0L18,0.021L17.979,18L11,18" stroke={stroke} stroke-width="1.5" />
		</g>
		<g transform="matrix(0.836508,0,0,0.836508,0.5,0.442857)">
			<path d="M11.254,0L18,0L18,6.735" stroke={stroke} stroke-width="1.5" />
		</g>
		<g transform="matrix(0.833984,0.00252393,0.00252393,0.833984,0.563096,0.379761)">
			<path d="M3.914,14.086L17.979,0.021" stroke={stroke}  stroke-width="1.5" />
		</g>
	</svg>
</button>

<style lang="scss">
	button {
		all: unset;
		padding: 0;
		margin: 0;
		aspect-ratio: 1 / 1;
		cursor: pointer;
	}
</style>