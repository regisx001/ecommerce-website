<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Header, Footer } from '$lib';
</script>

<Header />
{@render children()}

<Footer />
