<template>
  <v-data-table
    :headers="headers"
    :items="publications"
    :items-per-page="5"
    calculate-widths
  >
    <template v-slot:item.file_url="{ item }">
      <v-btn text small>
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'PublicationsTable',
  props: {
    publications: {
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
          value: 'titulo',
        },
        { text: 'Autor(a)', value: 'autor' },
        { text: 'Área', value: 'area' },
        { text: 'Ano', value: 'ano' },
        { text: 'Insitituição', value: 'sigla' },
        { text: 'Visualizar', value: 'file_url' },
      ],
    };
  },
};
</script>
