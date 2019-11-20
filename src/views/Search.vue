<template>
  <v-container fill-height grid-list-lg>
    <v-card width="100%">
      <v-card-title class="font-weight-bold">Buscar Artigos</v-card-title>
      <v-form @submit.prevent="searchArticle" ref="form" v-model="valid">
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="search"
                label="Digite um termo para pesquisar"
                outlined
                dense
                clearable
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
                <publications v-if="results.length > 0 && !loading" :publications="results" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import Publications from '@/components/publications/Publications.vue';
import { requiredRule } from "@/utils/validation-rules";

export default {
  name: 'Search',
  components: {
    Publications,
  },
  data() {
    return {
      filters: [
        { label: 'Ano', value: 'year' },
        { label: 'Autor', value: 'author' },
        { label: 'Área', value: 'area' },
        { label: 'Instituição', value: 'institute' },
        { label: 'Título', value: 'title' },
      ],
      filter: { label: 'Título', value: 'title' },
      firstSearch: true,
      loading: false,
      results: [],
      search: '',
      valid: false,
    };
  },
  methods: {
    requiredRule,
    searchArticle() {
      this.firstSearch = false;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
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
