<template>
  <v-app>
    <v-navigation-drawer
      app
      absolute
      dark
      color="primary darken-3"
      permanent
      height="100%"
    >
      <v-list-item class="my-5" @click="$router.push({ name: 'Home' })">
        <v-list-item-content>
          <v-list-item-title class="title font-weight-bold">
            Repositório CONNEPI
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item
          link
          v-for="({ label, icon, routeName }, i) in items"
          :key="i"
          :to="{name: routeName}"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    items: [
      { label: 'Publicações', icon: 'mdi-file-outline', routeName: 'Search' },
      { label: 'Sobre', icon: 'mdi-script-text-outline', routeName: 'About' },
      { label: 'Coleções', icon: 'mdi-folder-multiple-outline', routeName: 'CommunitiesAndCollections' },
      { label: 'Downloads', icon: 'mdi-folder-download-outline', routeName: 'Downloads' },
      { label: 'Estatísticas', icon: 'mdi-chart-line', routeName: 'Dashboard' },
      { label: 'Gerenciar', icon: 'mdi-account-tie', routeName: 'Manage' },
    ],
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
    margin-top: 64px;
    color: white;
    width: 100%;
  }
</style>
