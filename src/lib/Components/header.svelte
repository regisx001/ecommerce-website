<script>
</script>

<header class="header--style-1 header--box-shadow">
	<!--====== Nav 1 ======-->
	<nav class="primary-nav primary-nav-wrapper--border">
		<div class="container">
			<!--====== Primary Nav ======-->
			<div class="primary-nav">
				<!--====== Main Logo ======-->

				<a class="main-logo" href="index.html"> <img src="images/logo/logo-1.png" alt="" /></a>
				<!--====== End - Main Logo ======-->

				<!--====== Search Form ======-->
				<form class="main-form">
					<label for="main-search"></label>

					<input
						class="input-text input-text--border-radius input-text--style-1"
						type="text"
						id="main-search"
						placeholder="Search"
					/>

					<button
						class="btn btn--icon fas fa-search main-search-button"
						type="submit"
						aria-label="Search"
					></button>
				</form>
				<!--====== End - Search Form ======-->

				<!--====== Dropdown Main plugin ======-->
				<div class="menu-init" id="navigation">
					<button
						class="btn btn--icon toggle-button fas fa-cogs"
						type="button"
						aria-label="Settings"
					></button>

					<!--====== Menu ======-->
					<div class="ah-lg-mode">
						<span class="ah-close">✕ Close</span>

						<!--====== List ======-->
						<ul class="ah-list ah-list--design1 ah-list--link-color-secondary">
							<li class="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">
								<a href="#a" aria-label="Account"><i class="far fa-user-circle"></i></a>

								<!--====== Dropdown ======-->

								<span class="js-menu-toggle"></span>
								<ul style="width:120px">
									<li>
										<a href="dashboard.html"
											><i class="fas fa-user-circle u-s-m-r-6"></i>

											<span>Account</span></a
										>
									</li>
									<li>
										<a href="signup.html"
											><i class="fas fa-user-plus u-s-m-r-6"></i>

											<span>Signup</span></a
										>
									</li>
									<li>
										<a href="signin.html"
											><i class="fas fa-lock u-s-m-r-6"></i>

											<span>Signin</span></a
										>
									</li>
									<li>
										<a href="signup.html"
											><i class="fas fa-lock-open u-s-m-r-6"></i>

											<span>Signout</span></a
										>
									</li>
								</ul>
								<!--====== End - Dropdown ======-->
							</li>
							<li
								class="has-dropdown"
								data-tooltip="tooltip"
								data-placement="left"
								title="Settings"
							>
								<a href="#a" aria-label="Settings"><i class="fas fa-user-cog"></i></a>

								<!--====== Dropdown ======-->

								<span class="js-menu-toggle"></span>
								<ul style="width:120px">
									<li class="has-dropdown has-dropdown--ul-right-100">
										<a href="#a" aria-label="Language"
											>Language<i class="fas fa-angle-down u-s-m-l-6"></i></a
										>

										<!--====== Dropdown ======-->

										<span class="js-menu-toggle"></span>
										<ul style="width:120px">
											<li>
												<a href="#a" class="u-c-brand" aria-label="English">ENGLISH</a>
											</li>
											<li>
												<a href="#a" aria-label="Arabic">ARABIC</a>
											</li>
											<li>
												<a href="#a" aria-label="Francais">FRANCAIS</a>
											</li>
											<li>
												<a href="#a" aria-label="Espanol">ESPANOL</a>
											</li>
										</ul>
										<!--====== End - Dropdown ======-->
									</li>
									<li class="has-dropdown has-dropdown--ul-right-100">
										<a href="#a" aria-label="Currency"
											>Currency<i class="fas fa-angle-down u-s-m-l-6"></i></a
										>

										<!--====== Dropdown ======-->

										<span class="js-menu-toggle"></span>
										<ul style="width:225px">
											<li>
												<a href="#a" class="u-c-brand" aria-label="US Dollar">$ - US DOLLAR</a>
											</li>
											<li>
												<a href="#a" aria-label="British Pound Sterling"
													>£ - BRITISH POUND STERLING</a
												>
											</li>
											<li>
												<a href="#a" aria-label="Euro">€ - EURO</a>
											</li>
										</ul>
										<!--====== End - Dropdown ======-->
									</li>
								</ul>
								<!--====== End - Dropdown ======-->
							</li>
							<li data-tooltip="tooltip" data-placement="left" title="Contact">
								<a href="tel:+0900901904" aria-label="Contact"
									><i class="fas fa-phone-volume"></i></a
								>
							</li>
							<li data-tooltip="tooltip" data-placement="left" title="Mail">
								<a href="mailto:contact@domain.com" aria-label="Mail"
									><i class="far fa-envelope"></i></a
								>
							</li>
						</ul>
						<!--====== End - List ======-->
					</div>
					<!--====== End - Menu ======-->
				</div>
				<!--====== End - Dropdown Main plugin ======-->
			</div>
			<!--====== End - Primary Nav ======-->
		</div>
	</nav>
</header>
