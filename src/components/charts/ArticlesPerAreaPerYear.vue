<template>
  <v-card class="my-2" elevation="0">
    <v-card-text>
      <v-container>
        <v-layout column>
          <h2
            class="mt-2 mb-4 title font-weight-bold"
            :class="{'text-center': $vuetify.breakpoint.xs}"
          >
            Total de artigos por área por ano
          </h2>
          <ve-line
            :data="chart"
            :legend="chartSettings.legend"
            :after-config="afterConfig"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: 'ArticlesPerAreaPerYear',
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    this.chartSettings = {
      legend: {
        type: this.$vuetify.breakpoint.xs ? 'scroll' : '',
      },
    };
    return {
      rows: [],
      chart: {
        columns: [
          'ano',
          'CIÊNCIAS EXATAS E DA TERRA',
          'CIÊNCIAS BIOLÓGICAS',
          'ENGENHARIAS',
          'CIÊNCIAS DA SAÚDE',
          'CIÊNCIAS AGRÁRIAS',
          'CIÊNCIAS SOCIAIS APLICADAS',
          'CIÊNCIAS HUMANAS',
          'LINGUÍSTICA, LETRAS E ARTES',
          'OUTROS',
        ],
        rows: [],
      },
    };
  },
  methods: {
    afterConfig(options) {
      options.tooltip.position = this.$vuetify.breakpoint.xs ? (pt) =>  (['0%', '10%']) : options.tooltip.position;
      return options;
    },
  },
  watch: {
    chartData(val) {
      const dataWithYearAsString = val.map(item => ({
        ...item,
        ano: String(item.ano),
      }));
      this.chart.rows = orderBy(dataWithYearAsString, ['ano']);
    },
  },
};
</script>
