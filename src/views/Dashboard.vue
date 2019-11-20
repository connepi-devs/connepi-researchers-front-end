<template>
  <v-container grid-list-lg>
    <v-row wrap>
      <!-- Cards -->
      <v-col cols="12">
        <cards />
      </v-col>
      <!-- Charts and Tables -->
      <v-row>
        <v-col cols="5">
          <articles-per-area />
        </v-col>
        <v-col cols="7">
          <institutes-ranking />
        </v-col>
      </v-row>
      <v-col cols="12">
        <articles-per-area-per-institute-per-year />
      </v-col>
      <v-col cols="12">
        <articles-per-institute />
      </v-col>
      <v-col cols="12">
        <articles-per-area-per-year />
      </v-col>
    </v-row>
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
  name: 'Dashboard',
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
