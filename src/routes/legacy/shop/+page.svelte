<script>
	let shopItems = [
		{
			title: 'Colorful Pattern Shirts',
			category: 'Clothing',
			new_price: '$238.85',
			old_price: '$245.8'
		}
	];
	let count = 13;
</script>

<main class="main">
	<!--=============== BREADCRUMB ===============-->
	<!-- <section class="breadcrumb">
		<ul class="breadcrumb__list container flex">
			<li><a href="index.html" class="breadcrumb__link">Home</a></li>
			<li><span class="breadcrumb__link"></span>></li>
			<li><span class="breadcrumb__link">Shop</span></li>
		</ul>
	</section> -->

	<!--=============== PRODUCTS ===============-->
	<section class="products section--lg container">
		<p class="total__products">We found <span>{count}</span> items for you!</p>
		<div class="products__container grid">
			{#each Array(13) as x, i}
				{#each shopItems as item}
					<div class="product__item">
						<div class="product__banner">
							<a href="/details" class="product__images">
								<img src="assets/img/product-{i + 1}-1.jpg" alt="" class="product__img default" />
								<img src="assets/img/product-{i + 1}-2.jpg" alt="" class="product__img hover" />
							</a>
							<div class="product__actions">
								<a href="#1" class="action__btn" aria-label="Quick View">
									<i class="fi fi-rs-eye"></i>
								</a>
								<a href="#1" class="action__btn" aria-label="Add to Wishlist">
									<i class="fi fi-rs-heart"></i>
								</a>
								<a href="#1" class="action__btn" aria-label="Compare">
									<i class="fi fi-rs-shuffle"></i>
								</a>
							</div>
							<div class="product__badge light-pink">{i}</div>
						</div>
						<div class="product__content">
							<span class="product__category">{item.category}</span>
							<a href="details.html">
								<h3 class="product__title">{item.title}</h3>
							</a>
							<div class="product__rating">
								<i class="fi fi-rs-star"></i>
								<i class="fi fi-rs-star"></i>
								<i class="fi fi-rs-star"></i>
								<i class="fi fi-rs-star"></i>
								<i class="fi fi-rs-star"></i>
							</div>
							<div class="product__price flex">
								<span class="new__price">{item.new_price}</span>
								<span class="old__price">{item.old_price}</span>
							</div>
							<a href="#00" class="action__btn cart__btn" aria-label="Add To Cart">
								<i class="fi fi-rs-shopping-bag-add"></i>
							</a>
						</div>
					</div>
				{/each}
			{/each}
		</div>
		<ul class="pagination">
			<li><a href="#1" class="pagination__link active">01</a></li>
			<li><a href="#2" class="pagination__link">02</a></li>
			<li><a href="#3" class="pagination__link">03</a></li>
			<li><a href="#4" class="pagination__link">...</a></li>
			<li><a href="#5" class="pagination__link">16</a></li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="#6" class="pagination__link icon">
					<i class="fi-rs-angle-double-small-right"></i>
				</a>
			</li>
		</ul>
	</section>
</main>
