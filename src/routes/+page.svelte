<script lang="ts">
	const links = [
		{
			to: "/full-page",
			name: "full page",
		},
		{
			to: "/horizontal-page",
			name: "horzontal page",
		},
		{
			to: "/product-page",
			name: "product page",
		},
		{
			to: "/json-full-feed",
			name: "json full feed",
		},
		{
			to: "json-product-feed",
			name: "json product feed",
		},
	];
</script>

<div class="home">
	<h1>Pages to show data:</h1>
	{#each links as link}
		<div>
			<a href={link.to}>{link.name}</a>
		</div>
	{/each}
</div>
