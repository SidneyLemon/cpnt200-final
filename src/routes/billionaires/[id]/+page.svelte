<script>
  export let data;
  console.log(data)
</script>


{#if data.billionaire[0].id}
<h1>{data.billionaire[0].name}, {data.billionaire[0].age} years of age is one of the richest people in the world and they are from {data.billionaire[0].country.country_name}. Their main field is {data.billionaire[0].industry.industry_name} and they work in {data.billionaire[0].billionaire_info[0].source_id.source}.Their net worth is {data.billionaire[0].net_worth}</h1>
{:else}
<h1>Billionaire not found</h1>
{/if}
