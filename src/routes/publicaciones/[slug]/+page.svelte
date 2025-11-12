<script>
  import { publicaciones } from '$lib';
  import { page } from '$app/stores';

  $: slug = $page.params.slug;

  $: publicacion = slug ? publicaciones.find(p => p.slug === slug) : null;

  $: title = publicacion ? publicacion.title : 'Loading...';
  $: author = publicacion ? publicacion.author : 'Unknown';
</script>

<div>
  <a href="/publicaciones">Volver</a> 
  <div class="img"></div>

  <h1>{title}</h1>
  <span>{author}</span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda reiciendis quo dolore suscipit inventore nesciunt architecto nobis hic nulla voluptates repellendus in animi rerum, cumque numquam doloremque, excepturi maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda reiciendis quo dolore suscipit inventore nesciunt architecto nobis hic nulla voluptates repellendus in animi rerum, cumque numquam doloremque, excepturi maxime?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda reiciendis quo dolore suscipit inventore nesciunt architecto nobis hic nulla voluptates repellendus in animi rerum, cumque numquam doloremque, excepturi maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda reiciendis quo dolore suscipit inventore nesciunt architecto nobis hic nulla voluptates repellendus in animi rerum, cumque numquam doloremque, excepturi maxime?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda reiciendis quo dolore suscipit inventore nesciunt architecto nobis hic nulla voluptates repellendus in animi rerum, cumque numquam doloremque, excepturi maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda reiciendis quo dolore suscipit inventore nesciunt architecto nobis hic nulla voluptates repellendus in animi rerum, cumque numquam doloremque, excepturi maxime?</p>
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

  p {
    padding: 1rem 0;
  }

  a {
    color: rgb(0, 87, 87);
  }
</style>