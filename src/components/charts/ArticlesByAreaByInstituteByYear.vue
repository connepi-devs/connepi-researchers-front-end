<template>
  <v-card elevation="0" class="my-2">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="mt-2 mb-4" align-end>
            <h2>Total de artigos por área por IF</h2>
          </v-layout>
          <ve-histogram
            :data="chartData"
            :settings="chartSettings"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
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
