<script>
  export let data;
  console.log(data)
</script>

<h1>Hello World</h1>

{#if data.billionaire[0].id}
<h1>Hello {data.billionaire[0].name}</h1>
{:else}
<h1>Billionaire not found</h1>
{/if}
