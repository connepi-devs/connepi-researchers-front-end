<template>
  <v-app>
    <v-app-bar dark color="blue darken-3" app>
      <div class="toolbar-title">
        <span class="headline font-weight-bold">Repositório CONNEPI</span>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="isAuthenticated" title="Sair" text @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <snackbar />
  </v-app>
</template>

<script>
import Snackbar from '@/components/base/Snackbar.vue';
import isAuthenticated from '@/utils/is-authenticated';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Snackbar,
  },
  methods: {
    isAuthenticated,
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style scoped>
  .toolbar-title {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-right: -64px;
  }
</style>
