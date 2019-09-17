<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-layout>
        <v-flex xs6>
          <researchers-ranking />
        </v-flex>
      </v-layout>
      <articles-by-area-by-institute-by-year />
      <articles-by-institute />
      <articles-by-area-by-year />
    </v-layout>
  </v-container>
</template>

<script>
import ArticlesByAreaByInstituteByYear from '@/components/charts/ArticlesByAreaByInstituteByYear.vue';
import ArticlesByAreaByYear from '@/components/charts/ArticlesByAreaByYear.vue';
import ArticlesByInstitute from '@/components/charts/ArticlesByInstitute.vue';
import ResearchersRanking from '@/components/tables/ResearchersRanking.vue';

export default {
  name: 'Home',
  components: {
    ArticlesByAreaByInstituteByYear,
    ArticlesByAreaByYear,
    ArticlesByInstitute,
    ResearchersRanking,
  },
};
</script>
