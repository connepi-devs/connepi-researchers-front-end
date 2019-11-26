<template>
  <v-container fill-height grid-list-lg>
    <v-card width="100%">
      <v-card-title class="font-weight-bold">Buscar Artigos</v-card-title>
      <v-form @submit.prevent="searchArticle" ref="form" v-model="valid">
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-if="filter !== 'instituicao_id'"
                v-model="search"
                label="Digite um termo para pesquisar"
                outlined
                dense
                clearable
                :rules="[requiredRule]"
              />
              <v-autocomplete
                v-if="filter === 'instituicao_id'"
                v-model="search"
                label="Selecione um instituto"
                outlined
                dense
                clearable
                :items="institutes"
                item-text="sigla"
                item-value="id"
                no-data-text="Não foram encontrados institutos com o termo pesquisado"
                :rules="[requiredRule]"
              />
            </v-col>
            <v-col cols="3">
              <v-select
                v-model="filter"
                :items="filters"
                item-text="label"
                item-value="value"
                label="Filtrar por"
                outlined
                dense
              />
            </v-col>
            <v-col cols="3">
              <v-btn
                @click="searchArticle"
                width="100%"
                color="primary"
                :disabled="loading || !valid"
                type="submit"
              >
                Pesquisar
              </v-btn>
            </v-col>

            <!-- Results -->
            <v-col cols="12">
              <div class="results">
                <div v-if="loading" class="flex column justify-center align-center">
                  <v-progress-circular size="64" class="mb-3" color="primary" indeterminate />
                  <span class="headline">Buscando publicações...</span>
                </div>
                <span class="headline" v-if="firstSearch && !loading">
                  Busque uma publicação no campo acima!
                </span>
                <span class="headline" v-if="!firstSearch && results.length === 0 && !loading">
                  Não foram encontradas publicações com o termo e filtro pesquisado
                </span>
                <publications-table v-if="results.length > 0 && !loading" :publications="results" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import PublicationsTable from '@/components/publications/PublicationsTable.vue';
import { requiredRule } from '@/utils/validation-rules';
import handleErrors from '@/utils/handle-errors';
import publicationsService from '@/services/publications-service';
import institutesService from '@/services/institute-service';

export default {
  name: 'Search',
  components: {
    PublicationsTable,
  },
  created() {
    this.getInstitutes();
  },
  data() {
    return {
      filters: [
        { label: 'Ano', value: 'ano' },
        { label: 'Autor', value: 'autor' },
        { label: 'Área', value: 'area_id' },
        { label: 'Instituição', value: 'instituicao_id' },
        { label: 'Título', value: 'titulo' },
      ],
      institutes: [],
      filter: 'titulo',
      firstSearch: true,
      loading: false,
      results: [],
      search: '',
      valid: false,
    };
  },
  methods: {
    requiredRule,
    getInstitutes() {
      institutesService.get()
        .then(({ data }) => {
          this.institutes = data;
        })
        .catch((err) => {
          this.setSnackbar({
            color: 'error',
            message: handleErrors(err),
            show: true,
          });
        });
    },
    searchArticle() {
      this.firstSearch = false;
      this.loading = true;
      const params = `publications[${this.filter}]=${this.search}`;
      publicationsService.get(params)
        .then(({ data }) => {
          this.results = data;
        })
        .catch((err) => {
          this.setSnackbar({
            color: 'error',
            message: handleErrors(err),
            show: true,
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    ...mapActions('base', ['setSnackbar']),
  },
};
</script>

<style scoped>
  .results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
</style>
