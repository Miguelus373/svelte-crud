<script>
  import { publicaciones } from '$lib';
	import Publicacion from '$lib/components/Publicacion.svelte';
  export let data;
</script>

<div>
  <div class="publicacioines-bar">
    <a href="/publicaciones/nueva">Crear Publicación</a>
  </div>
  <div class="publicacioines">
    {#each data.posts as post}
      <Publicacion title={post.title} id={post.id} cuerpo={post.body} />
    {/each}
  </div>
</div>

<style>
  .publicacioines {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 2rem auto 2rem;
    width: 75vw;
    place-items: center;
  }

  .publicacioines-bar {
    margin: 2rem auto 0;
    width: 68vw;
    text-align: right;
  }

  a {
    padding: 10px 1.5rem;
    background-color: teal;
    border-radius: 8px;
    color: white;
  }
</style>