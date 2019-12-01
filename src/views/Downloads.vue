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
              v-if="$vuetify.breakpoint.smAndUp"
              :headers="headers"
              :items="rows"
              :items-per-page="8"
            >
              <template v-slot:item.file_url="{ item }">
                <v-btn @click="download(item.file_url)" text small>
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </template>
            </v-data-table>
            <template v-if="$vuetify.breakpoint.xs">
              <v-card
                @click="download"
                class="mb-4"
                v-for="row in rows"
                :key="row.id"
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
export default {
  name: 'Downloads',
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
      rows: [
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'RIO GRANDE DO NORTE',
          year: 2006,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'PARAÍBA',
          year: 2007,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'CEARÁ',
          year: 2008,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'ALAGOAS',
          year: 2010,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'RIO GRANDE DO NORTE',
          year: 2011,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'TOCANTINS',
          year: 2012,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'BAHIA',
          year: 2013,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'MARANHÃO',
          year: 2014,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'ACRE',
          year: 2015,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'CONNEPI - Congresso Norte-Nordeste de Pesquisa e Inovação',
          state: 'ALAGOAS',
          year: 2016,
          file_url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
      ],
    };
  },
  methods: {
    download(url) {
      window.open(url, '_blank');
    },
  },
};
</script>
