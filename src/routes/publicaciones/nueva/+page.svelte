<script>
	import PostForm from "$lib/components/PostForm.svelte";
</script>

<div>
	<a href="/publicaciones">Volver</a>

	<PostForm title="Crear Publicaión" action="?/create" />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 28rem;
		margin: 3rem auto;
	}

	a {
		color: rgb(0, 87, 87);
		width: 100%;
	}
</style>
