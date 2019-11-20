<template>
  <v-app>
    <v-app-bar dark color="blue darken-3" app>
      <v-spacer />
        <span class="headline font-weight-bold">Repositório CONNEPI</span>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <snackbar />
  </v-app>
</template>

<script>
import Snackbar from '@/components/base/Snackbar.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Snackbar,
  },
};
</script>
