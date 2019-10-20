<template>
  <v-container grid-list-lg>
    <v-layout column>
      <!-- Cards -->
      <cards />
      <!-- Charts and Tables -->
      <v-layout>
        <v-flex xs5>
          <projects-by-area />
        </v-flex>
        <v-flex xs7>
          <institutes-ranking />
        </v-flex>
      </v-layout>
      <articles-per-area-per-institute-per-year />
      <articles-per-institute />
      <articles-by-area-by-year />
    </v-layout>
  </v-container>
</template>

<script>
import ArticlesPerAreaPerInstitutePerYear from '@/components/charts/ArticlesPerAreaPerInstitutePerYear.vue';
import ArticlesByAreaByYear from '@/components/charts/ArticlesByAreaByYear.vue';
import ArticlesPerInstitute from '@/components/charts/ArticlesPerInstitute.vue';
import Cards from '@/components/cards/Cards.vue';
import ProjectsByArea from '@/components/charts/ProjectsByArea.vue';
import InstitutesRanking from '@/components/tables/InstitutesRanking.vue';

export default {
  name: 'Home',
  components: {
    ArticlesPerAreaPerInstitutePerYear,
    ArticlesByAreaByYear,
    ArticlesPerInstitute,
    Cards,
    ProjectsByArea,
    InstitutesRanking,
  },
};
</script>
