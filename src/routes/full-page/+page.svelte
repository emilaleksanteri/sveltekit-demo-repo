<script lang="ts">
	import { onMount } from "svelte";
	import {
		PUBLIC_API_URL,
		PUBLIC_APP_ID,
		PUBLIC_STORE_SLUG,
	} from "$env/static/public";

	onMount(async () => {
		fetch(
			`${PUBLIC_API_URL}/api/v0/feed/embed/${PUBLIC_APP_ID}/${PUBLIC_STORE_SLUG}/full-page`,
		)
			.then((response) => response.text())
			.then((text) => {
				const body = document.getElementById("preview");
				if (body) {
					body.innerHTML = text;
				}
			})
			.then(() => {
				// asserts that embed is on the right domain for testing purposes,
				// can be removed in production
				const scriptElement =
					document.getElementById("webhook-post");
				if (scriptElement) {
					const script = document
						.createRange()
						.createContextualFragment(
							scriptElement.innerHTML,
						);
					document.getElementById(
						"script",
					)?.append(script);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	});
</script>

<div id="preview" />
<div id="script" />

<style>
	#preview {
		height: 800px;
	}
</style>
