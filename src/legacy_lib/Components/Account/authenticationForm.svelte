<script lang="ts">
	import { pb, GithubIcon } from '$lib';
	let { type = 'login' }: { type: 'register' | 'login' } = $props();
</script>

<section class="login-register section--lg">
	<div class=" container">
		<div class="rounded-2xl border border-gray-300 p-10 lg:mx-[10%]">
			{#if type == 'login'}
				<h3 class="section__title">Login</h3>
				<form class="form grid">
					<input type="email" placeholder="Your Email" class="form__input" />
					<input type="password" placeholder="Your Password" class="form__input" />
					<div class=" flex">
						<button class=" btn w-full">Login</button>
					</div>

					<div>
						<h3>
							don't have an account yet?
							<strong>
								<a class="text-[#088179] hover:underline" href="/account/register">register</a>
							</strong>
						</h3>
					</div>

					<div class="flex w-full items-center justify-center">
						<hr class="w-full" />
						or
						<hr class="w-full" />
					</div>

					<div class="flex">
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<button
							onclick={async () => {
								await pb.collection('users').authWithOAuth2({ provider: 'github' });
							}}
							class="btn github flex w-full items-center justify-center"
						>
							<GithubIcon />
							Github
						</button>
					</div>
				</form>
			{/if}

			{#if type == 'register'}
				<h3 class="section__title">Create an Account</h3>
				<form class="form grid">
					<input type="text" placeholder="Username" class="form__input" />
					<input type="email" placeholder="Your Email" class="form__input" />
					<input type="password" placeholder="Your Password" class="form__input" />
					<input type="password" placeholder="Confirm Password" class="form__input" />
					<div class="flex">
						<button class="btn w-full">Submit & Register</button>
					</div>

					<div>
						<h3>
							already have an account ?
							<strong>
								<a class="text-[#088179] hover:underline" href="/account/login">login</a>
							</strong>
						</h3>
					</div>

					<div class="flex w-full items-center justify-center">
						<hr class="w-full" />
						or
						<hr class="w-full" />
					</div>

					<div class="flex">
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<button
							onclick={async () => {
								await pb.collection('users').authWithOAuth2({ provider: 'github' });
							}}
							class="btn github flex w-full items-center justify-center"
						>
							<GithubIcon />

							Github
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	.github {
		background-color: black;
		border: 2px solid black;
	}
	.github:hover {
		color: black;
		background-color: transparent;
	}
</style>
