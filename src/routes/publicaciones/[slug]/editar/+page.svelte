<script>
	import PostForm from '$lib/components/PostForm.svelte';
	export let data;
</script>

<div>
	<a href="/publicaciones">Volver</a>

	<PostForm title="Editar Publicaión" nombre={data.post.title} cuerpo={data.post.body} />
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
