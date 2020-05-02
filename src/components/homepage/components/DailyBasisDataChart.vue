<template>
  <v-card
    class="mx-auto text-center"
  >
    <v-card-text>
      <v-sheet color="blue lighten-2">
        <chartist
        :data="dailyCaseChart.data"
        ratio="ct-major-second"
        type="Line"
        :options="dailyCaseChart.options"
        style="max-height: 400px;"
      />
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="font-weight-thin">Daily Basis Data</div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'DailyBasisDataChart',
    data: () => ({
        dailyCaseChart: {
          data: {
            labels: ['1/4', '2/4', '3/4', '5/4', '6/4', '7/4', '8/4'],
            series: [
              [
                    423,
                    446,
                    675,
                    510,
                    590,
                    610,
                    760,
              ],
            ],
          },
          options: {
            lineSmooth: false,
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
    }),
  }
</script>
<style scoped>
  .ct-grid {
      stroke: rgba(255, 255, 255, 0.2);
  }
    .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut {
       stroke: rgba(255,255,255,.8);
  }
</style>