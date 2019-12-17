<template>
  <v-container grid-list-lg>
    <v-row justify="center">
      <v-col cols="12">
        <v-card width="100%" height="88vh">
          <v-card-title class="font-weight-bold primary white--text">
            <span>Visualização da Publicação</span>
          </v-card-title>
          <v-card-text>
            <div class="flex column subtitle-1 pt-3">
              <span>
                <strong>Título: </strong> {{ file.titulo || 'Não possui' }}
              </span>
              <span>
                <strong>Autor: </strong> {{ file.autor || 'Não possui' }}
              </span>
              <span>
                <strong>Ano: </strong> {{ file.ano || 'Não possui' }}
              </span>
              <span>
                <strong>Instituição: </strong> {{ file.instituicao || 'Não possui' }}
              </span>

              <!-- PDF -->
              <div
                v-if="loading && fileUrl"
                class="flex column justify-center align-center"
                style="width: 100%; height: 100%; position: absolute"
              >
                <v-progress-circular size="48" color="primary" indeterminate />
                <span class="headline">Carregando PDF...</span>
              </div>
              <div
                v-if="!fileUrl"
                class="flex column justify-center align-center"
                style="width: 100%; height: 100%; position: absolute"
              >
                <v-icon size="48">mdi-link-off</v-icon>
                <span class="headline">Infelizmente a publicação não possui PDF carregado</span>
              </div>
              <iframe
                v-if="fileUrl"
                id="iframe"
                class="mt-5"
                :src="fileUrl"
                width="100%"
                :height="$vuetify.breakpoint.xs ? '100%' : 480"
                @load="loading = false"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import publicationsService from '@/services/publications-service';
import handleErrors from '@/utils/handle-errors';

export default {
  name: 'Publication',
  created() {
    this.getPublication();
  },
  props: {
    id: {},
  },
  data() {
    return {
      loading: true,
      file: {},
      fileUrl: null,
      firstRender: true,
    };
  },
  methods: {
    ...mapActions('base', ['setSnackbar']),
    getPublication() {
      publicationsService.show(this.id)
        .then(({ data }) => {
          this.file = data;
          this.fileUrl = data.file_url;
        })
        .catch((err) => {
          this.setSnackbar({
            color: 'error',
            message: handleErrors(err),
            show: true,
          });
        });
    },
  },
};
</script>
