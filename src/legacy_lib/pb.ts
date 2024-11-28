import { PUBLIC_PB_URL } from "$env/static/public"
import Pocketbase from "pocketbase"


export let pb = new Pocketbase(PUBLIC_PB_URL);