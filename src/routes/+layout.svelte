<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavLink from '$lib/components/NavLink.svelte';
	
	let { children } = $props();
</script>

<nav>
	<NavLink href="/">Inicio</NavLink>
	<NavLink href="/publicaciones">Publicaciones</NavLink>
</nav>

{@render children()}

<style>
	nav {
		padding: 1rem 1rem;
		background-color: teal;
		display: flex;
		justify-content: center;
	}
</style>