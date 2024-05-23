<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div>
	<h1>full feed json:</h1>
	{JSON.stringify(data.feed)}
</div>

