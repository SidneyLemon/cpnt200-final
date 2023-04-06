<script>
  export let data;
  let { billionaire } = data;

  console.log(data);
</script>

<h1>Billionaires</h1>
<ul>
  {#each billionaire as billionaire}
    <ul>
      {billionaire.id}:
      {billionaire.name},
      {billionaire.age},
      {billionaire.country_name},
      {billionaire.industry_name}
    </ul>
  {/each}
</ul>
