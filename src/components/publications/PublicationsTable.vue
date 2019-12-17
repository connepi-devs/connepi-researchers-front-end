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
      <v-col cols="12" v-if="$vuetify.breakpoint.xs">
        <div class="flex mt-3 justify-center">
          <strong>Total:&nbsp;</strong>
          <span>{{ publications.length }} publicações encontradas</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="publications"
          calculate-widths
          :fixed-header="$vuetify.breakpoint.smAndUp"
          :height="$vuetify.breakpoint.smAndUp ? '300px' : ''"
          :search="search"
          :disable-pagination="$vuetify.breakpoint.xs || $vuetify.breakpoint.lg"
          :hide-default-footer="$vuetify.breakpoint.xs || $vuetify.breakpoint.lg"
          no-data-text="Sem resultados para a filtragem realizada"
        >
          <template v-slot:item.file_url="{ item }">
            <v-tooltip v-if="item.file_url !== null" top>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" @click="show(item)" text small>
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>Visualizar publicação</span>
            </v-tooltip>
            <v-tooltip top v-else>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" @click="show(item)" text small>
                  <v-icon>mdi-eye-off</v-icon>
                </v-btn>
              </template>
              <span>A publicação não possui link de visualização</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
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
  methods: {
    show(publication) {
      const route = this.$router.resolve({ path: `/publications/${publication.id}` });
      window.open(route.href, '_blank');
    },
  },
};
</script>
