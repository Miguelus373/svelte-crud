<script>
  export let title;
  export let author;
  export let slug;
</script>

<a href={`/publicaciones/${slug}`}>
  <h1>{title}</h1>
  <span>Autor: {author}</span>
</a>

<style>
  a {
    display: inline-block;
    width: 20rem;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 2px solid teal;
    min-height: 8rem;
    border-radius: 8px;
    background-color: rgb(182, 248, 226);
  }

  a:hover {
    cursor: pointer;
    background-color: rgb(67, 253, 191);
    box-shadow: 3px 4px 15px gray;
    transition: all .3s;
  }
  
  h1 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }
</style>