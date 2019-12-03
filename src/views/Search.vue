<template>
  <v-container grid-list-lg>
    <div class="headline font-weight-black section-title">
      Publicações
    </div>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="app-cards" outlined width="100%">
          <v-card-title class="title font-weight-bold primary white--text">
            Buscar Artigos
          </v-card-title>
          <v-form @submit.prevent="searchArticle" ref="form" v-model="valid">
            <v-card-text>
              <v-row>
                <v-col md="6" cols="12">
                  <v-text-field
                    v-if="filter !== 'instituicao' && filter !== 'area'"
                    v-model="search"
                    label="Digite um termo para pesquisar"
                    outlined
                    dense
                    clearable
                    :rules="[requiredRule]"
                  />
                  <v-autocomplete
                    v-if="filter === 'instituicao'"
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
                    @change="searchArticle"
                  />
                  <v-select
                    v-if="filter === 'area'"
                    v-model="search"
                    label="Selecione uma área do conhecimento"
                    outlined
                    dense
                    clearable
                    :items="areas"
                    item-text="nome"
                    item-value="id"
                    :rules="[requiredRule]"
                    @change="searchArticle"
                  />
                </v-col>
                <v-col md="3" cols="12">
                  <v-select
                    v-model="filter"
                    :items="filters"
                    item-text="label"
                    item-value="value"
                    label="Filtrar por"
                    outlined
                    dense
                    @change="search = ''"
                  />
                </v-col>
                <v-col md="3" cols="12">
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
                      <span class="headline text-center">Buscando publicações...</span>
                    </div>
                    <span class="headline text-center" v-if="firstSearch && !loading">
                      Busque uma publicação no campo acima!
                    </span>
                    <span class="headline text-center" v-if="!firstSearch && results.length === 0 && !loading">
                      Não foram encontradas publicações com o termo e filtro pesquisado
                    </span>
                    <publications-table
                      style="max-width: 100%"
                      v-if="results.length > 0 && !loading && $vuetify.breakpoint.smAndUp"
                      :publications="results"
                    />
                    <div
                      class="flex column align-center"
                      v-if="results.length > 0 && !loading && $vuetify.breakpoint.xs"
                    >
                      <div class="flex justify-center mb-5">
                        <strong>Resultado:&nbsp;</strong>
                        {{ results.length }} publicações encontradas
                      </div>
                      <publications-cards
                        style="max-width: 100%"
                        :publications="results"
                      />
                    </div>
                  </div>
                  <div
                    class="flex justify-center subtitle-1 mt-3"
                    :class="{'column align-center text-center': $vuetify.breakpoint.xs}"
                  >
                    <span>Encontrou alguma inconsistência? Fale conosco no email&nbsp;</span>
                    <a
                      class="primary--text"
                      href="mailto:connepirep@gmail.com"
                    >
                      connepirep@gmail.com
                    </a>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import PublicationsCards from '@/components/publications/PublicationsCards.vue';
import PublicationsTable from '@/components/publications/PublicationsTable.vue';
import { requiredRule } from '@/utils/validation-rules';
import handleErrors from '@/utils/handle-errors';
import publicationsService from '@/services/publications-service';
import institutesService from '@/services/institute-service';
import areasService from '@/services/areas-service';

export default {
  name: 'Search',
  components: {
    PublicationsCards,
    PublicationsTable,
  },
  created() {
    this.getInstitutesAndAreas();
  },
  data() {
    return {
      filters: [
        { label: 'Ano', value: 'ano' },
        { label: 'Autor', value: 'autor' },
        { label: 'Área', value: 'area' },
        { label: 'Instituição', value: 'instituicao' },
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
    getInstitutesAndAreas() {
      Promise.all([institutesService.get(), areasService.get()])
        .then(([institutes, areas]) => {
          this.institutes = institutes.data;
          this.areas = areas.data;
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
