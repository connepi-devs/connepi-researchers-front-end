<template>
  <v-row>
    <v-col cols="4" v-for="card in cards" :key="card.id">
      <card :data="card" />
    </v-col>
  </v-row>
</template>

<script>
import { sumBy } from 'lodash';
import Card from '@/components/cards/Card.vue';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  props: {
    cardsData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    createCards(data) {
      const totalEvents = {
        id: 1,
        cor: 'blue',
        icone: 'mdi-calendar-check-outline',
        titulo: 'Total de eventos',
        total: data.length,
      };
      const totalArticles = {
        id: 2,
        cor: 'green',
        icone: 'mdi-file-document-box-check-outline',
        titulo: 'Total de Publicações',
        total: sumBy(data, 'publicacoes'),
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
  watch: {
    cardsData(val) {
      this.createCards(val);
    },
  },
};
</script>
