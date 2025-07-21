export async function get() {
	const guides = [
		{ id: 1, title: 'Getting Started with SvelteKit' },
		{ id: 2, title: 'Building a SvelteKit Application' },
		{ id: 3, title: 'Deploying SvelteKit Apps' },
		{ id: 4, title: 'SvelteKit Routing' },
		{ id: 5, title: 'State Management in SvelteKit' },
	];

	return {
		status: 200,
		body: {
			guides,
		},
	};
}
