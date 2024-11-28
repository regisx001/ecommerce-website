<script lang="ts">
	import '../app.css';

	import { Header } from '$lib';
	let { children } = $props();

	import { page } from '$app/stores';
</script>

<Header />

{@render children()}
