<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error }) {
		return {
			props: { message: error.message },
		};
	}
</script>

<script>
	export let message;
</script>

<div class="error">
	<h2>Ooopsi</h2>
	<p>{message}</p>
	<a href="/">Go back to home</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
