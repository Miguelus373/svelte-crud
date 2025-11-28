<script>
	export let nombre = '';
	export let cuerpo = '';
  export let title = '';
  export let action = '';
  export let id;
</script>

<form method="POST" action={action}>
  {#if id}
    <input type="hidden" value={id} name="id">
  {/if}
  
  <h1>{title}</h1>

  <label for="nombre">Nombre de la publicaión</label>
  <input type="text" name="nombre" bind:value={nombre} placeholder="Nombre" />

  <label for="nombre">Cuerpo de la publicaión</label>
  <textarea
    type="text"
    name="cuerpo"
    bind:value={cuerpo}
    placeholder="Ingrese aqui el cuerpo de la publicación"
    rows={6}
  ></textarea>

  <button type="submit">Enviar</button>
</form>

<style>
	form {
		width: 100%;
	}

	h1 {
		font-size: 1.5rem;
		margin: 10px 0;
	}

	label {
		display: block;
		margin-bottom: 10px;
	}

	input,
	textarea {
		border-radius: 12px;
		border: 1px solid grey;
		padding: 4px 12px;
		margin-bottom: 14px;
		width: 100%;
		display: block;
	}

  button {
    width: 100%;
    border-radius: 8px;
    padding: 6px;
    background-color: teal;
    color: white;
    cursor: pointer;
  }
</style>
