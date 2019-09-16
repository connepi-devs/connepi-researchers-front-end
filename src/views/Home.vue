<template>
  <v-container>
    <ve-histogram
      :data="chartData"
      :settings="chartSettings"
    />
  </v-container>
</template>

<script>
import rows from './rows.json';

export default {

  name: 'Home',
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
