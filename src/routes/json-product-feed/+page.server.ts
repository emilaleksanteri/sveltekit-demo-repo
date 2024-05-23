import { PUBLIC_API_KEY, PUBLIC_API_URL, PUBLIC_APP_ID, PUBLIC_EXAMPLE_PROD_REFERENCE, PUBLIC_STORE_SLUG } from "$env/static/public";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const res = await fetch(
		`${PUBLIC_API_URL}/api/v0/feed/json/${PUBLIC_APP_ID}/${PUBLIC_STORE_SLUG}/product/${PUBLIC_EXAMPLE_PROD_REFERENCE}`,
		{
			headers: {
				"Authorization-Bearer": `Bearer ${PUBLIC_API_KEY}`,
			},
		},
	);
	const json = await res.json();

	return {
		feed: json
	}

}
