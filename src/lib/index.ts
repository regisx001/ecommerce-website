import { PUBLIC_PB_URL } from "$env/static/public"
import Pocketbase from "pocketbase"


export let pb = new Pocketbase(PUBLIC_PB_URL);


// Components Export

export { default as Header } from "./Components/Header/header.svelte"
export { default as Footer } from "./Components/Footer/footer.svelte"


export { default as Hero } from "./Components/INDEX/Hero/hero.svelte"
export { default as Carousel } from "./Components/INDEX/Carousel/carousel.svelte"
export { default as Products } from "./Components/INDEX/Products/products.svelte"
export { default as Deals } from "./Components/INDEX/Deals/deals.svelte"
export { default as Arrivals } from "./Components/INDEX/Arrivals/arrivals.svelte"
export { default as Showcase } from "./Components/INDEX/Showcase/showcase.svelte"
export { default as Newsletter } from "./Components/INDEX/Newsletter/newsletter.svelte"

export { default as AuthenticationForm } from "./Components/Account/authenticationForm.svelte"