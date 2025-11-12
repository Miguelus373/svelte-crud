<script>
  import { publicaciones } from '$lib';
	import Publicacion from '$lib/components/Publicacion.svelte';
</script>

<div class="d-flex">
  {#each publicaciones as p}
    <Publicacion slug={p.slug} title={p.title} author={p.author} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-rows: 8rem 8rem;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 2rem auto 0;
    width: 75vw;
  }
</style>