<template>
    <v-row justify="end">
      <v-spacer></v-spacer>
      <v-col align-self="end" cols="12" sm="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar na tabela de resultados"
          hide-details
          clearable
        />
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="publications"
          calculate-widths
          fixed-header
          height="300px"
          :search="search"
        >
          <template v-slot:item.file_url="{ item }">
            <v-btn text small>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
      <div
        class="flex mt-3"
        :class="{
          'justify-end': $vuetify.breakpoint.mdAndUp,
          'justify-center': $vuetify.breakpoint.smAndDown
        }"
      >
        <strong>Resultado:&nbsp;</strong>
        <span>{{ publications.length }} publicações encontradas</span>
      </div>
    </v-row>
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
        { text: 'Insitituição', value: 'instituicao' },
        { text: 'Visualizar', value: 'file_url' },
      ],
      search: '',
    };
  },
};
</script>
