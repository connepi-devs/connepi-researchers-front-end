<template>
  <v-container>
    <articles-by-area-and-institute />
  </v-container>
</template>

<script>
import ArticlesByAreaAndInstitute from '@/components/charts/ArticlesByAreaAndInstitute.vue';

export default {
  name: 'Home',
  components: {
    ArticlesByAreaAndInstitute,
  },
};
</script>
