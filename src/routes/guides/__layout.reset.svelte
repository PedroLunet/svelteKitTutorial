<script>
	import Title from '$lib/title.svelte';
	import '../../styles/global.css';
</script>

<header>
	<nav>
		<Title />
		<div class="links">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</nav>
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
		background: rgba(0, 0, 0, 0.1);
	}
	.links {
		margin-left: auto;
	}

	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
	nav {
		display: flex;
		max-width: 960px;
		align-items: center;
		margin: 0 auto;
	}
</style>
