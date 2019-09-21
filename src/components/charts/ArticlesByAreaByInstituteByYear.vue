<template>
  <v-layout column>
    <h2>Total de artigos por área por IF</h2>
    <ve-histogram
      :data="chartData"
      :settings="chartSettings"
    />
  </v-layout>
</template>

<script>
import rows from '@/data/articles-by-area-and-institute.json';

export default {
  name: 'ArticlesByAreaByInstituteByYear',
  data() {
    this.chartSettings = {
      metrics: [
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
      stack: {
        areas: [
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
      },
    };
    return {
      chartData: {
        columns: [
          'institute',
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
