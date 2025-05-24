<script lang="ts">
	import { ViewportModes, gViewportMode } from '$lib/js/viewport.ts';
	// let { selected = $bindable() }: { selected: ViewportModes } = $props();

	// TODO: This is abhorrent
	let selected: ViewportModes = $state(ViewportModes.None);
	gViewportMode.subscribe(v => {selected = v});

	function setSelected(x: ViewportModes) {
		gViewportMode.set(x);
		selected = x;
	}
</script>

<div id="menubar-positioner">
	<div id="menubar">
		<!-- <button aria-label="video mode" class:active={selected === ViewportModes.Single} onclick={() => setSelected(ViewportModes.Single)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z"/></svg>
		</button> -->
		<button aria-label="array mode" class:active={selected === ViewportModes.ArrayFrames} onclick={() => setSelected(ViewportModes.ArrayFrames)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#e3e3e3"><path d="M16,6C16.55,6 17.021,6.196 17.412,6.588C17.804,6.979 18,7.45 18,8L18,20C18,20.55 17.804,21.021 17.412,21.413C17.021,21.804 16.55,22 16,22L4,22C3.45,22 2.979,21.804 2.587,21.413C2.196,21.021 2,20.55 2,20L2,8C2,7.45 2.196,6.979 2.587,6.588C2.979,6.196 3.45,6 4,6L16,6ZM20,2C20.55,2 21.021,2.196 21.413,2.587C21.804,2.979 22,3.45 22,4L22,18L20,18L20,4L6,4L6,2L20,2Z" /></svg>
		</button>
		<button aria-label="flat mode" class:active={selected === ViewportModes.Single} onclick={() => setSelected(ViewportModes.Single)}>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z"/></svg>
		</button>
	</div>
</div>

<style lang="scss">
	@use '$lib/style/theme.scss' as *;

	div#menubar-positioner {
		z-index: 1;
		display: flex;
		justify-content: center;

		position: absolute;
		left: 35vw;
		right: 5vw;
		bottom: 10vh;
	}

	div#menubar {
		display: flex;
		background-color: $dark-700;
	}

	button {
		all: unset;
		aspect-ratio: 1 / 1;
		display: flex;

		width: 40px;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		& > svg {
			fill: $dark-500;
		}

		&.active {
			background-color: $light-400;
			cursor: default;
		}

		&:hover {
			background-color: $light-400;
		}

		&:active {
			background-color: $light-300;
		}

		&.active:hover {
			background-color: $light-500;
			cursor: default;
		}
	}
</style>
