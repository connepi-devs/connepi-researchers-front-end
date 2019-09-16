<template>
  <v-container>
    <v-layout column>
      <articles-by-area-and-institute />
      <articles-by-institute />
    </v-layout>
  </v-container>
</template>

<script>
import ArticlesByAreaAndInstitute from '@/components/charts/ArticlesByAreaAndInstitute.vue';
import ArticlesByInstitute from '@/components/charts/ArticlesByInstitute.vue';

export default {
  name: 'Home',
  components: {
    ArticlesByAreaAndInstitute,
    ArticlesByInstitute,
  },
};
</script>
