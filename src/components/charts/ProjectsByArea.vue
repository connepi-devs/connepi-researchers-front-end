<template>
  <v-layout column>
    <h2>Total de artigos por Área</h2>
    <ve-pie :data="chartData" :legend-visible="false" />
  </v-layout>
</template>

<script>
import rows from '@/data/projects-by-area.json';

export default {
  name: 'ArticlesByInstitute',
  data() {
    this.chartSettings = {
      legend: {
        show: false,
      },
    };
    return {
      chartData: {
        columns: ['areaDoConhecimento', 'total'],
        rows,
      },
    };
  },
};
</script>
