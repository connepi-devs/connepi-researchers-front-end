<template>
  <v-container>
    <v-layout column>
      <articles-by-area-and-institute />
      <articles-by-institute />
      <articles-by-area-by-year />
    </v-layout>
  </v-container>
</template>

<script>
import ArticlesByAreaAndInstitute from '@/components/charts/ArticlesByAreaAndInstitute.vue';
import ArticlesByAreaByYear from '@/components/charts/ArticlesByAreaByYear.vue';
import ArticlesByInstitute from '@/components/charts/ArticlesByInstitute.vue';

export default {
  name: 'Home',
  components: {
    ArticlesByAreaAndInstitute,
    ArticlesByAreaByYear,
    ArticlesByInstitute,
  },
};
</script>
