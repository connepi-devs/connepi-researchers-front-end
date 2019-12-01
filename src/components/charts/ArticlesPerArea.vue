<template>
  <v-card elevation="0" max-height="370">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="my-2" align-center>
            <v-icon class="mr-2">mdi-test-tube</v-icon>
            <h2 class="title font-weight-bold">Total de artigos por Área</h2>
          </v-layout>
          <ve-ring
            :data="chart"
            :extend="chartExtend"
            :legend="chartSettings.legend"
            :settings="chartSettings"
            width="100"
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
        center: this.$vuetify.breakpoint.xs ? ['50%', '45%'] : ['22%', '38%'],
      },
    };
    this.chartSettings = {
      radius: this.$vuetify.breakpoint.xs ? ['55%', '65%'] : ['30%', '45%'],
      legend: {
        type: this.$vuetify.breakpoint.xs ? 'scroll' : '',
        orient: this.$vuetify.breakpoint.xs ? 'horizontal' : 'vertical',
        right: 20,
        top: this.$vuetify.breakpoint.xs ? 20 : 50,
        bottom: 200,
        fontSize: 10,
      },
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: this.$vuetify.breakpoint.xs ? 9 : 7,
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
