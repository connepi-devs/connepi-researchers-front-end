<template>
  <v-card class="my-2" elevation="0">
    <v-card-text>
      <v-container>
        <v-layout column>
          <h2 class="mt-2 mb-4">Total de artigos por IF</h2>
          <ve-histogram :data="chart" />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: 'ArticlesPerInstitute',
  data() {
    return {
      chart: {
        columns: ['instituicao', 'publicacoes'],
        rows: [],
      },
    };
  },
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    chartData(val) {
      this.chart.rows = orderBy(val, ['instituicao']);
    },
  },
};
</script>
