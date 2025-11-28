<script>
  export let title;
  export let id;
  export let cuerpo;
</script>

<div>
  <a class="post" href={`/publicaciones/${id}`}>
    <h1>{title}</h1>
    <span>ID: {id}</span>
    <p>{cuerpo}</p>
  </a>
  <a class="edit" href={`/publicaciones/${id}/editar`}>
    Editar
  </a>
</div>

<style>
  div {
    position: relative;
  }
  
  .edit {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    padding: 4px 8px;
  }
  
  .post {
    display: inline-block;
    width: 20rem;
    padding: 1rem 1.5rem 3.5rem;
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p {
    height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 14px;
  }
</style>