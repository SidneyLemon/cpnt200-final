<script>
  import { Line } from 'svelte-chartjs'
</script>

<Line
  data={ [65, 59, 80, 81, 56, 55, 40]}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>