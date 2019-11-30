<template>
  <v-card dark elevation="0" :color="data.cor" min-height="100">
    <v-card-text>
      <v-list :color="data.cor" two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon size="40">{{ data.icone }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline font-weight-bold">
              {{ data.titulo }}
            </v-list-item-title>
            <v-list-item-subtitle class="title">{{ data.total }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>
