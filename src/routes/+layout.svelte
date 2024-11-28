<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { page } from '$app/stores';
</script>

{@render children()}
