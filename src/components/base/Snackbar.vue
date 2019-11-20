<template>
  <v-snackbar
    v-model="snackbar.show"
    dark
    bottom
    :color="snackbar.color"
  >
    <v-layout align-center justify-center>
      <v-icon>{{ snackbar.icon }}</v-icon>
      <span>{{ snackbar.message }}</span>
      <v-spacer></v-spacer>
      <v-btn @click="setSnackbar({ show: false })" text>
        <v-icon size="20">mdi-close</v-icon>
      </v-btn>
    </v-layout>
  </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Snackbar',
  computed: {
    ...mapGetters('base', ['snackbar']),
  },
  methods: {
    ...mapActions('base', ['setSnackbar']),
  },
};
</script>
