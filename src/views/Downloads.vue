<template>
  <v-container grid-list-lg>
    <div class="headline font-weight-black section-title">
      Downloads
    </div>
    <v-row class="fill-height" align="start">
      <v-col cols="12">
        <v-card outlined width="100%">
          <v-card-title
            class="title font-weight-bold primary white--text"
            style="word-break: break-word"
          >
            Anais das edições do CONNEPI
          </v-card-title>
          <v-card-text class="mt-5">
            <v-data-table
              :loading="loading"
              v-if="$vuetify.breakpoint.smAndUp"
              :headers="headers"
              :items="rows"
              :items-per-page="8"
            >
              <template v-slot:item.file_url="{ item }">
                <v-tooltip v-if="item.file !== null" top>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" @click="download(item)" text small>
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                  </template>
                  <span>Baixar</span>
                </v-tooltip>
                <v-tooltip v-else top>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" @click="download(item)" text small>
                      <v-icon>mdi-download-off</v-icon>
                    </v-btn>
                  </template>
                  <span>Download indisponível</span>
                </v-tooltip>
              </template>
            </v-data-table>
            <template v-if="$vuetify.breakpoint.xs">
              <v-card
                class="mb-4"
                v-for="row in rows"
                :key="row.id"
                @click="download(row)"
              >
                <v-card-title
                  class="primary darken-2 white--text"
                  style="word-break: break-word"
                >
                  {{ row.name }}
                </v-card-title>
                <v-card-text>
                  <div class="flex column">
                    <div class="flex py-1">
                      <strong>Estado:&nbsp;</strong>
                      <span>{{ row.state }}</span>
                    </div>
                    <div class="flex py-1">
                      <strong>Ano:&nbsp;</strong>
                      <span>{{ row.year }}</span>
                    </div>
                    <div class="flex py-1">
                      <strong>Download:&nbsp;</strong>
                      <a
                        v-if="row.file !== null"
                        class="blue--text"
                        :href="row.file"
                      >
                        Baixar
                      </a>
                      <span v-else>Indisponível</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { orderBy } from 'lodash';
import { mapActions } from 'vuex';
import eventsService from '@/services/events-service';
import handleErrors from '@/utils/handle-errors';

export default {
  name: 'Downloads',
  created() {
    this.getAnais();
  },
  data() {
    return {
      headers: [
        {
          text: 'Evento',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Estado', value: 'state' },
        { text: 'Ano', value: 'year' },
        { text: 'Download', value: 'file_url' },
      ],
      rows: [],
      loading: false,
    };
  },
  methods: {
    ...mapActions('base', ['setSnackbar']),
    getAnais() {
      this.loading = true;
      eventsService.get()
        .then(({ data }) => {
          this.rows = orderBy(data, ['year']);
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
    download(event) {
      if (event.file !== null) {
        window.open(`https://connepi-api.herokuapp.com/${event.file}`);
      }
    },
  },
};
</script>
