<template>
  <v-card class="my-2" elevation="0">
    <v-card-text>
      <v-container>
        <v-layout column>
          <h2 class="mt-2 mb-4">Total de artigos por área por ano</h2>
          <ve-line :data="chartData" />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import rows from '@/data/articles-by-area-by-year.json';

export default {
  name: 'ArticlesByAreaByYear',
  computed: {
    chartData() {
      return {
        columns: [
          'year',
          'Ciências Exatas e da Terra',
          'Ciências Biológicas',
          'Engenharias',
          'Ciências da Saúde',
          'Ciências Agrárias',
          'Ciências Sociais Aplicadas',
          'Ciências Humanas',
          'Linguística, Letras e Artes',
          'Outros',
        ],
        rows,
      };
    },
  },
};
</script>
