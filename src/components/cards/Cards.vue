<template>
  <v-layout>
    <v-flex xs4 v-for="card in cards" :key="card.id">
      <card :data="card" />
    </v-flex>
  </v-layout>
</template>

<script>
import Card from '@/components/cards/Card.vue';
import cards from '@/data/cards.json';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  data() {
    return {
      cards,
    };
  },
}
</script>
