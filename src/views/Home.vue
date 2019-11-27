<template>
  <v-container grid-list-lg>
    Home
  </v-container>
</template>

<script>
import ArticlesPerAreaPerInstitutePerYear from '@/components/charts/ArticlesPerAreaPerInstitutePerYear.vue';
import ArticlesPerAreaPerYear from '@/components/charts/ArticlesPerAreaPerYear.vue';
import ArticlesPerInstitute from '@/components/charts/ArticlesPerInstitute.vue';
import Cards from '@/components/cards/Cards.vue';
import ArticlesPerArea from '@/components/charts/ArticlesPerArea.vue';
import InstitutesRanking from '@/components/tables/InstitutesRanking.vue';

export default {
  name: 'Home',
  components: {
    ArticlesPerAreaPerInstitutePerYear,
    ArticlesPerAreaPerYear,
    ArticlesPerInstitute,
    Cards,
    ArticlesPerArea,
    InstitutesRanking,
  },
};
</script>
