<script lang="ts">
	import '../app.css';

	import { Header, Footer } from '$lib';
	let { children } = $props();

	import { page } from '$app/stores';
</script>

<Header />

{@render children()}

<Footer />
