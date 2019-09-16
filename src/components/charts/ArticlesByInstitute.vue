<template>
  <v-layout column>
    <h2>Total de artigos por IF</h2>
    <ve-histogram :data="chartData" />
  </v-layout>
</template>

<script>
import rows from '@/data/articles-by-institute.json';

export default {
  name: 'ArticlesByInstitute',
  data() {
    return {
      chartData: {
        columns: ['instituto', 'artigos'],
        rows,
      },
    };
  },
};
</script>
