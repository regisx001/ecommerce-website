<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Header } from '$lib';
</script>

<Header />
{@render children()}
