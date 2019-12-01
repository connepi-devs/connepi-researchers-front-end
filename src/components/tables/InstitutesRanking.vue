<template>
  <v-card elevation="0" :max-height="$vuetify.breakpoint.smAndup ? 370: '100%'">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="my-2" align-center>
            <v-icon class="mr-2">mdi-podium</v-icon>
            <h2 class="font-weight-bold title">TOP 5 Institutos</h2>
          </v-layout>
          <v-data-table
            :items="data"
            item-text="instituicao"
            :headers="headers"
            :items-per-page="5"
            hide-default-footer
          >
            <template v-slot:item.posicao="{ item }">
              <v-chip
                v-if="item.posicao <= 3"
                dark
                :color="getColor(item.posicao)"
              >
                {{ item.posicao }}
              </v-chip>
              <span v-else>{{ item.posicao }}</span>
            </template>
            <template v-slot:item.instituicao="{ item }">
              <strong
                v-if="item.posicao <= 3"
                :class="`${getColor(item.posicao)}--text`"
              >
                {{ item.instituicao }}
              </strong>
              <span v-else>{{ item.instituicao }}</span>
            </template>
          </v-data-table>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: 'InstitutesRanking',
  data() {
    return {
      data: [],
      headers: [
        {
          text: this.$vuetify.breakpoint.smAndUp ? '' : 'Posição',
          align: 'center',
          sortable: false,
          value: 'posicao',
        },
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'instituicao',
        },
        {
          text: 'Publicações',
          align: 'center',
          sortable: false,
          value: 'publicacoes',
        },
      ],
    };
  },
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getColor(posicao) {
      const posicoes = {
        1: 'amber',
        2: 'grey',
        3: 'deep-orange',
      };
      return posicoes[posicao];
    },
    orderData(data) {
      let institutes = data.filter(institute => institute.regiao !== 'Outras');
      institutes = orderBy(institutes, ['publicacoes'], ['desc']);
      institutes = institutes.map((item, index) => ({
        ...item,
        posicao: index + 1,
      }));
      this.data = institutes;
    },
  },
  watch: {
    chartData(val) {
      this.orderData(val);
    },
  },
};
</script>
