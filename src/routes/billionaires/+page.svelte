<script>
  export let data;
  let { billionaire } = data;
  console.log(data);
</script>

<ul>
  <h1>Billionaires:</h1>
  {#each billionaire as billionaire}
    <ul>
      {billionaire.id}:
      {billionaire.name},
      {billionaire.age},
      {billionaire.country.country_name},
      {billionaire.industry.industry_name}
    </ul>
  {/each}
</ul>
