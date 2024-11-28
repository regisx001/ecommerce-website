<script lang="ts">
	import { base } from '$app/paths';

	let { route }: { route: string } = $props();

	let navData = [
		{ name: 'Home', url: '/' },
		{ name: 'Shop', url: '/shop' },
		{ name: 'My Account', url: '/account' },
		{ name: 'Compare', url: '/compare' },
		{ name: 'Login', url: '/account/login' }
	];
</script>

<header class="header">
	<nav class="nav container">
		<a href="{base}/" class="nav__logo">
			<img class="nav__logo-img" src="assets/img/logo.svg" alt="website logo" />
		</a>

		<div class="nav__menu" id="nav-menu">
			{@render navBar(navData)}

			{@render searchBar()}
		</div>

		{@render navActions()}
	</nav>
</header>

<!--  Nav Bar Componnent Started -->
{#snippet navBar(navData: any)}
	<div class="nav__menu-top">
		<a href="{base}/" class="nav__menu-logo">
			<img src="assets/img/logo.svg" alt="" />
		</a>
		<div class="nav__close" id="nav-close">
			<i class="fi fi-rs-cross-small"></i>
		</div>
	</div>

	<ul class="nav__list">
		{#each navData as navUrl}
			<li class="nav__item">
				<a href={navUrl.url} class:active-link={route === navUrl.url} class="nav__link">
					{navUrl.name}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}
<!--  Nav Bar Componnent Ended -->

<!-- Search Bar Componnent Started -->
{#snippet searchBar()}
	<div class="header__search">
		<input type="text" placeholder="Search For Items..." class="form__input" />
		<button class="search__btn">
			<img src="assets/img/search.png" alt="search icon" />
		</button>
	</div>
{/snippet}
<!-- Search Bar Componnent Ended -->

<!-- Top Banner Componnent Started -->
{#snippet topBanner()}
	<div class="header__top">
		<div class="header__container container">
			<div class="header__contact">
				<span>(+01) - 2345 - 6789</span>
				<span>Our location</span>
			</div>
			<p class="header__alert-news">Super Values Deals - Save more coupons</p>
			<a href="{base}/login" class="header__top-action"> Log In / Sign Up </a>
		</div>
	</div>
{/snippet}
<!-- Top Banner Componnent Ended -->

{#snippet navActions()}
	<div class="header__user-actions">
		<a href="/wishlist" class="header__action-btn" title="Wishlist">
			<img src="/assets/img/icon-heart.svg" alt="" />
			<span class="count">3</span>
		</a>
		<a href="/cart" class="header__action-btn" title="Cart">
			<img src="/assets/img/icon-cart.svg" alt="" />
			<span class="count">3</span>
		</a>
		<div class="header__action-btn nav__toggle" id="nav-toggle">
			<img src="/assets/img/menu-burger.svg" alt="" />
		</div>
	</div>
{/snippet}
