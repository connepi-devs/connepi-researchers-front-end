<template>
  <v-layout column>
    <h2>Ranking Pesquisadores</h2>
    <v-data-table
      :items="data"
      item-text="nome"
      :headers="headers"
      :items-per-page="5"
    />
  </v-layout>
</template>

<script>
import data from '@/data/researchers-ranking.json';

export default {
  name: 'ResearchersRanking',
  data() {
    return {
      data,
      headers: [
        {
          text: '',
          align: 'left',
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
          align: 'left',
          sortable: false,
          value: 'projetos',
        },
      ],
    };
  },
};
</script>
