<script lang="ts">
	let { message, severity }: { message: string, severity: 0|1|2 } = $props();
</script>

<div>{ message }</div>
