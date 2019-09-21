<template>
  <v-card elevation="0" max-height="370">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="my-2" align-end>
            <v-icon class="mr-2">mdi-podium</v-icon>
            <h2>Ranking Pesquisadores</h2>
          </v-layout>
          <v-data-table
            :items="data"
            item-text="nome"
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
            <template v-slot:item.nome="{ item }">
              <strong
                v-if="item.posicao <= 3"
                :class="`${getColor(item.posicao)}--text`"
              >
                {{ item.nome }}
              </strong>
              <span v-else>{{ item.nome }}</span>
            </template>
          </v-data-table>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';
import data from '@/data/researchers-ranking.json';

export default {
  name: 'ResearchersRanking',
  data() {
    return {
      data: orderBy(data, ['posicao']),
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'posicao',
        },
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        {
          text: 'Projetos',
          align: 'center',
          sortable: false,
          value: 'projetos',
        },
      ],
    };
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
  },
};
</script>
