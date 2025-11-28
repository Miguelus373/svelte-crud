<script>
  import { publicaciones } from '$lib';
  import { page } from '$app/stores';
	import Lorem from '$lib/components/Lorem.svelte';

  $: slug = $page.params.slug;

  $: publicacion = slug ? publicaciones.find(p => p.slug === slug) : null;

  $: title = publicacion ? publicacion.title : 'Loading...';
  $: author = publicacion ? publicacion.author : 'Unknown';

  export let data;
</script>

<div>
  <a href="/publicaciones">Volver</a> 
  
  <h1>{data.post.title}</h1>
  <span>ID: {data.post.id}</span>
  <p>{data.post.body}</p>
</div>

<style>
  div { 
    max-width: 50vw;
    margin: 2rem auto;
  }

  p {
    padding: 1rem 0;
    text-align: justify;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  a {
    color: rgb(0, 87, 87);
  }
</style>