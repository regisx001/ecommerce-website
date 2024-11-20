<script lang="ts">
	import { pb } from '$lib';
	let { type = 'login' }: { type: 'register' | 'login' } = $props();
</script>

{#if type == 'login'}
	<section class="login-register section--lg">
		<div class=" container">
			<div class="rounded-2xl border border-gray-300 p-10 lg:mx-[10%]">
				<h3 class="section__title">Login</h3>
				<form class="form grid">
					<input type="email" placeholder="Your Email" class="form__input" />
					<input type="password" placeholder="Your Password" class="form__input" />
					<div class=" flex">
						<button class=" btn w-full">Login</button>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
								/></svg
							>
							Github
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
{/if}

{#if type == 'register'}
	<section class="login-register section--lg">
		<div class="container">
			<div class="rounded-2xl border border-gray-300 p-10 lg:mx-[10%]">
				<h3 class="section__title">Create an Account</h3>
				<form class="form grid">
					<input type="text" placeholder="Username" class="form__input" />
					<input type="email" placeholder="Your Email" class="form__input" />
					<input type="password" placeholder="Your Password" class="form__input" />
					<input type="password" placeholder="Confirm Password" class="form__input" />
					<div class="flex">
						<button class="btn w-full">Submit & Register</button>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
								/></svg
							>
							Github
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
{/if}

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
