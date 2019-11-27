<template>
  <v-card elevation="0" class="my-2">
    <div v-if="loading" class="loader-container">
      <v-progress-circular indeterminate color="primary" size="64" />
      <span>Carregando dados...</span>
    </div>
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
              :items="orederedInstitutes"
              item-text="sigla"
              item-value="id"
              return-object
              @input="filterPerInstitute"
            />
          </v-layout>
          <ve-histogram :data="chart" :width="300" />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: 'ArticlesPerAreaPerInstitutePerYear',
  data() {
    return {
      chart: {
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
      loading: false,
      filter: { id: -1, sigla: 'Todos' },
      orederedInstitutes: [{ id: -1, sigla: 'Todos' }],
    };
  },
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
    institutes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    filterPerInstitute() {
      this.$emit('filter', this.params);
    },
  },
  computed: {
    params() {
      if (this.filter.sigla === 'Outros') {
        return 'outros=true';
      } if (this.filter.sigla === 'Todos') {
        return '';
      }
      return `instituicao_id=${this.filter.id}`;
    },
  },
  watch: {
    institutes(val) {
      const orderedInstitutes = orderBy(val, ['sigla']);
      this.orederedInstitutes = [...this.orederedInstitutes, ...orderedInstitutes, { id: -2, sigla: 'Outros' }];
    },
    chartData(val) {
      this.loading = true;
      setTimeout(() => {
        this.chart.rows = orderBy(val, ['ano']);
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
  .loader-container {
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    min-width: 100%;
    z-index: 9;
  }
</style>
