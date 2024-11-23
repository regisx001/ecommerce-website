<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib';
</script>

<Header route={String($page.route.id)} />
{@render children()}

<Footer />
