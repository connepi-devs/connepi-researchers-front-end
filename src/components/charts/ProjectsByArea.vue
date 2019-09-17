<template>
  <v-layout column>
    <h2>Total de artigos por Área</h2>
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
        columns: [
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
      },
    };
  },
};
</script>
