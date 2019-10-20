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
import { orderBy } from 'lodash';
import dashboardService from '@/services/dashboard-service';

export default {
  name: 'ArticlesPerInstitute',
  data() {
    return {
      chartData: {
        columns: ['instituicao', 'publicacoes'],
        rows: [],
      },
    };
  },
  mounted() {
    dashboardService.getTotalArticlesPerInstitute()
      .then(({ data }) => {
        this.chartData.rows = orderBy(data, ['instituicao']);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
