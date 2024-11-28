<script lang="ts">
	type Link = {
		name: string;
		href: string;
	};

	let { links }: { links: Link[] } = $props();
</script>

<!-- TODO LATER -->

<section class="breadcrumb">
	<ul class="breadcrumb__list container flex">
		<li><a href="index.html" class="breadcrumb__link">Home</a></li>
		<li><span class="breadcrumb__link"></span></li>
		<li><span class="breadcrumb__link">Shop</span></li>
	</ul>
</section>
