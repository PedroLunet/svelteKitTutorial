<script>
	import Title from '$lib/title.svelte';
</script>

<header>
	<Title />
</header>
<main>
	<slot></slot>
</main>
<footer>
	<p>&copy; 2025 Pedro Lunet</p>
</footer>

<style>
	header {
		text-align: center;
		display: flex;
	}

	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
</style>
