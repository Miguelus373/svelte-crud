<script>
  import { publicaciones } from '$lib';
  import { page } from '$app/stores';
	import Lorem from '$lib/components/Lorem.svelte';

  $: slug = $page.params.slug;

  $: publicacion = slug ? publicaciones.find(p => p.slug === slug) : null;

  $: title = publicacion ? publicacion.title : 'Loading...';
  $: author = publicacion ? publicacion.author : 'Unknown';
</script>

<div>
  <a href="/publicaciones">Volver</a> 

  <h1>{title}</h1>
  <span>{author}</span>
  <Lorem count={Math.floor(Math.random() * 4) + 1} />
  <Lorem count={Math.floor(Math.random() * 4) + 1} />
  <Lorem count={Math.floor(Math.random() * 4) + 1} />
</div>

<style>
  div { 
    max-width: 70vw;
    margin: 2rem auto;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  a {
    color: rgb(0, 87, 87);
  }
</style>