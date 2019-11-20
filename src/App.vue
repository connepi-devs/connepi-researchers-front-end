<template>
  <v-app>
    <v-app-bar dark color="blue darken-3" app>
      <v-spacer />
        <span class="headline">Repositório CONNEPI</span>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
