<script>
	import Lorem from "$lib/components/Lorem.svelte";

</script>

<div>
  <h1>Navegación Svelte</h1>

  <span>Miguel Uzcátegui</span>
  
  <Lorem count={5} />
</div>

<style>
  div {
    max-width: 70vw;
    margin: 4rem auto;
  }

  span {
    font-size: 14px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
</style>