<template>
  <v-card elevation="0" class="my-2">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="mt-2 mb-4" align-end>
            <h2>Total de artigos por área por IF por ano</h2>
          </v-layout>
          <ve-histogram
            :data="chartData"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import dashboardService from '@/services/dashboard-service';
import { sortBy } from 'lodash';
export default {
  name: 'ArticlesByAreaByInstituteByYear',
  data() {
    return {
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
    this.getData();
  },
  methods: {
    getData() {
      dashboardService.getArticlesPerInstitutePerAreaPerYear()
        .then(({ data }) => {
          this.chartData.rows = sortBy(data, ['ano']);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
