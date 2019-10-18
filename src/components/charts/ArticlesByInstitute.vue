<template>
  <v-card class="my-2" elevation="0">
    <v-card-text>
      <v-container>
        <v-layout column>
          <h2 class="mt-2 mb-4">Total de artigos por IF</h2>
          <ve-histogram :data="chartData" />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
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
