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
import { orderBy } from 'lodash';
import dashboardService from '@/services/dashboard-service';

export default {
  name: 'ArticlesPerAreaPerYear',
  data() {
    return {
      rows: [],
      chartData: {
        columns: [
          'ano',
          'CIÊNCIAS EXATAS E DA TERRA',
          'CIÊNCIAS BIOLÓGICAS',
          'ENGENHARIAS',
          'CIÊNCIAS DA SAÚDE',
          'CIÊNCIAS AGRÁRIAS',
          'CIÊNCIAS SOCIAIS APLICADAS',
          'CIÊNCIAS HUMANAS',
          'LINGUÍSTICA, LETRAS E ARTES',
          'OUTROS',
        ],
        rows: [],
      },
    };
  },
  mounted() {
    dashboardService.getArticlesPerInstitutePerAreaPerYear('')
      .then(({ data }) => {
        const dataWithYearAsString = data.map(item => ({
          ...item,
          ano: String(item.ano),
        }));
        this.chartData.rows = orderBy(dataWithYearAsString, ['ano']);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
