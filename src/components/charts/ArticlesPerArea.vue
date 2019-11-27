<template>
  <v-card elevation="0" max-height="370">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="my-2" align-end>
            <v-icon class="mr-2">mdi-test-tube</v-icon>
            <h2>Total de artigos por Área</h2>
          </v-layout>
          <ve-ring
            :data="chart"
            :extend="chartExtend"
            :legend="chartSettings.legend"
            :settings="chartSettings"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ArticlesPerArea',
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    this.chartExtend = {
      series: {
        center: ['25%', '40%'],
      },
    };
    this.chartSettings = {
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 5,
        top: 50,
        bottom: 20,
      },
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '10',
            fontWeight: 'bold',
          },
        },
      },
    };
    return {
      chart: {
        columns: ['area', 'publicacoes'],
        rows: [],
      },
    };
  },
  watch: {
    chartData(val) {
      if (val.length > 0) {
        this.chart.rows = val;
      }
    },
  },
};
</script>
