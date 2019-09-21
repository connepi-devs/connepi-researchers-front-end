<template>
  <v-layout column align-center>
    <h2>Total de artigos por área por ano</h2>
    <ve-line :data="chartData" />
  </v-layout>
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
