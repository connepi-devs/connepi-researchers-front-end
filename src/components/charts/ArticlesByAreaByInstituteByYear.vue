<template>
  <v-card elevation="0" class="my-2">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="mt-2 mb-4">
            <h2>Total de artigos por área por IF por ano</h2>
            <v-spacer />
            <v-autocomplete
              v-model="filter"
              label="Filtrar por Instituição"
              outlined
              :items="institutes"
              item-text="sigla"
              item-value="id"
              return-object
              @input="getData"
            />
          </v-layout>
          <ve-histogram :data="chartData" />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';
import dashboardService from '@/services/dashboard-service';
import instituteService from '@/services/institute-service';

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
      filter: { id: -1, sigla: 'Todos' },
      institutes: [{ id: -1, sigla: 'Todos' }],
    };
  },
  created() {
    this.getInstitutes();
    this.getData();
  },
  methods: {
    getData() {
      const queryParams = this.defineParams();
      
      dashboardService.getArticlesPerInstitutePerAreaPerYear(queryParams)
        .then(({ data }) => {
          this.chartData.rows = orderBy(data, ['ano']);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getInstitutes() {
      instituteService.get()
        .then(({ data }) => {
          const orderedInstitutes = orderBy(data, ['nome']);
          this.institutes = [...this.institutes, ...orderedInstitutes, { id: -2, sigla: 'Outros' }];
        })
        .catch((err) => {
          console.error(err);
        });
    },
    defineParams() {
      if (this.filter.sigla === 'Outros') {
        return 'outros=true'
      } else if (this.filter.sigla === 'Todos') {
        return '';
      } else {
        return `instituicao_id=${this.filter.id}`;
      }
    },
  },
};
</script>
