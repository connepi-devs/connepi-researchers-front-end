<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.view="{ item }">
      <v-btn text small>
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Publications',
  props: {
    results: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Título da Publicação',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Autor(a)', value: 'calories' },
        { text: 'Área', value: 'fat' },
        { text: 'Ano', value: 'carbs' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
        },
      ],
    };
  },
}
</script>