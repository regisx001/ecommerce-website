<script lang="ts">
	import { base } from '$app/paths';
	let footerData = {
		adress: '13 Tlemcen Road, Street 32, Beb-Wahren',
		phone: '+01 2222 365 /(+91) 01 2345 6789',
		workingHours: '10:00 - 18:00, Mon - Sat',
		social: [
			{ icon: 'facebook', url: '' },
			{ icon: 'instagram', url: '' },
			{ icon: 'twitter', url: '' },
			{ icon: 'pinterest', url: '' },
			{ icon: 'email', url: '' }
		]
	};
</script>

<footer class="footer container">
	<div class="footer__container grid">
		<div class="footer__content">
			<a href="{base}/" class="footer__logo">
				<img src="/assets/img/logo.svg" alt="" class="footer__logo-img" />
			</a>
			<h4 class="footer__subtitle">Contact</h4>
			<p class="footer__description">
				<span>Address:</span>
				{footerData.adress}
			</p>
			<p class="footer__description">
				<span>Phone:</span>
				{footerData.phone}
			</p>
			<p class="footer__description">
				<span>Hours:</span>
				{footerData.workingHours}
			</p>

			<div class="footer__social">
				<h4 class="footer__subtitle">Follow Me</h4>
				<div class="footer__links flex">
					{#each footerData.social as social}
						<a href={social.url}>
							<img src="./assets/img/icon-{social.icon}.svg" alt="" class="footer__social-icon" />
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="footer__content">
			<h3 class="footer__title">Address</h3>
			<ul class="footer__links">
				<!-- Todo Later -->
				<li><a href="/" class="footer__link">About Us</a></li>
				<li><a href="/" class="footer__link">Delivery Information</a></li>
				<li><a href="/" class="footer__link">Privacy Policy</a></li>
				<li><a href="/" class="footer__link">Terms & Conditions</a></li>
				<li><a href="/" class="footer__link">Contact Us</a></li>
				<li><a href="/" class="footer__link">Support Center</a></li>
			</ul>
		</div>
		<div class="footer__content">
			<h3 class="footer__title">My Account</h3>
			<ul class="footer__links">
				<li><a href="/account/register" class="footer__link">Sign In</a></li>
				<li><a href="/cart" class="footer__link">View Cart</a></li>
				<li><a href="/wishlist" class="footer__link">My Wishlist</a></li>
				<li><a href="/" class="footer__link">Track My Order</a></li>
				<li><a href="/" class="footer__link">Help</a></li>
				<li><a href="/" class="footer__link">Order</a></li>
			</ul>
		</div>
		<div class="footer__content">
			<h3 class="footer__title">Secured Payed Gateways</h3>
			<img src="/assets/img/payment-method.png" alt="" class="payment__img" />
		</div>
	</div>
	<div class="footer__bottom">
		<p class="copyright">&copy; {new Date().getFullYear()} Regisx001. All right reserved</p>
		<span class="designer">Developed By Ezzoubair Zarqi</span>
	</div>
</footer>
