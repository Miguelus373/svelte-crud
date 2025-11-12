<script>
  export let count = 1;

  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iure iste iusto animi tempore quibusdam deserunt saepe vitae at eos voluptatum ut illo tempora cupiditate aperiam quo necessitatibus!';
</script>

<p>
  {#each {length: count}}
    {lorem}
  {/each}
</p>

<style>
  p {
    padding: 1rem 0;
    text-align: justify;
  }
</style>