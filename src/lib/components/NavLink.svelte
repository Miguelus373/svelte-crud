<script>
  import { page } from "$app/state";
  export let href;

  $: isActive = page.url.pathname == href;
</script>

<a href={href}>
  <slot />
</a>

<style>
  a {
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem;
    color: azure;
  }
</style>