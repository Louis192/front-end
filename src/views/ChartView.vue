<template>
  <div>
    <apexchart width="880" type="donut" :options="options" :series="series">
    </apexchart>
  </div>
  <div>
  <apexchart type="bar" height="350" :options="options" :series="series">
  </apexchart>
</div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from "vue";

export default {
  name: "ChartView",
  setup() {
    const options = ref({});
    const series = ref([44, 55, 41, 17, 15]);

    

    onMounted(async () => {
      var response = await fetch("/api/bookings/aggregate/groupby");

      if (response.ok) {
        var heroes = await response.json();

        series.value = heroes.map((a) => a.count);
        options.value = { labels: heroes.map((a) => a._id) };
      }
    });

    return {
      options,
      series,
    };
  },
};
</script>
