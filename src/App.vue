<template>
  <v-app>
    <v-app-bar dark color="blue darken-3" app>
      <span
        class="toolbar-title headline font-weight-bold clickable"
        @click="$router.push({ name: 'Home' })"
      >
        Repositório CONNEPI
      </span>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Search' })">
          <span
            :class="{
              'text-underline font-weight-bold': $router.currentRoute.name === 'Search',
            }"
          >
            Buscar Publicações
          </span>
        </v-btn>
        <v-btn text @click="$router.push({ name: 'About' })">
          <span
            :class="{
              'text-underline font-weight-bold': $router.currentRoute.name === 'About',
            }"
          >
            Sobre o CONNEPI
          </span>
        </v-btn>
        <v-btn text @click="$router.push({ name: 'Dashboard' })">
          <span
            :class="{
              'text-underline font-weight-bold': $router.currentRoute.name === 'Dashboard',
            }"
          >
          Dashboard
        </span>
        </v-btn>
        <v-btn
          v-if="!isAuthenticated()"
          @click="$router.push({ name: 'Login' })"
          text
        >
          Login
        </v-btn>
        <v-btn v-if="isAuthenticated()" title="Sair" text @click="logout">
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
    width: 100%;
  }
</style>
