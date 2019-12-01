<template>
  <v-app style="overflow: hidden">
    <v-toolbar app color="primary" dark v-if="$vuetify.breakpoint.smAndDown">
      <v-toolbar-content>
        <div class="flex align-center">
          <v-btn @click="sidebar = !sidebar" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <div class="flex justify-center font-weight-bold">
            Repositório CONNEPI
          </div>
        </div>
      </v-toolbar-content>
    </v-toolbar>
    <v-navigation-drawer
      v-model="sidebar"
      app
      fixed
      dark
      color="primary darken-3"
      :permanent="$vuetify.breakpoint.mdAndUp"
      :temporary="$vuetify.breakpoint.smAndDown"
      height="100%"
      src="@/assets/images/sidebar-background.png"
    >
      <v-list-item class="my-5" @click="$router.push({ name: 'Home' })">
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            <v-avatar size="40" color="white">
              <v-img src="@/assets/images/ifal-fav.png" />
            </v-avatar>
            <span class="ml-2" style="font-family: 'Raleway', sans-serif">
              Repositório CONNEPI
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item
          active-class="green darken-2"
          link
          v-for="({ label, icon, routeName }, i) in items"
          :key="i"
          :to="{name: routeName}"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="white--text">
            <v-list-item-title>{{ label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content class="app-content">
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
  created() {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.sidebar = false;
    }
  },
  data: () => ({
    sidebar: true,
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
  .app-content {
    margin: 50px 30px;
    max-width: 100%;
  }
</style>
