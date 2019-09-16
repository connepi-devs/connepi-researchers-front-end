<template>
  <ve-histogram
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
import rows from '@/data/articles-by-area-and-institute.json';

export default {
  name: 'ArticlesByAreaAndInstitute',
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
