<template>
  <v-layout>
    <v-flex xs4 v-for="card in cards" :key="card.id">
      <card :data="card" />
    </v-flex>
  </v-layout>
</template>

<script>
import { sumBy } from 'lodash';
import Card from '@/components/cards/Card.vue';
import dashboardService from '@/services/dashboard-service';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    dashboardService.getArticlesCount('group_by=ano')
      .then(({ data }) => {
        this.createCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    createCards(data) {
      const totalArticles = {
        cor: 'green',
        icone: 'mdi-file-document-box-check-outline',
        titulo: 'Total de Publicações',
        total: sumBy(data, 'publicacoes'),
      };
      const totalEvents = {
        cor: 'blue',
        icone: 'mdi-calendar-range-outline',
        titulo: 'Total de eventos',
        total: data.length,
      };
      const articlesAverage = {
        id: 3,
        cor: 'orange',
        icone: 'mdi-file-document-box-multiple-outline',
        titulo: 'Publicações/Ano',
        total: Math.round(sumBy(data, 'publicacoes') / data.length),
      };

      this.cards = [...this.cards, totalEvents, totalArticles, articlesAverage];
    },
  },
};
</script>
