<template>
  <v-container grid-list-lg>
    <div class="headline font-weight-black section-title">
      Downloads
    </div>
    <v-row class="fill-height" align="start">
      <v-card outlined width="100%">
        <v-card-title class="title font-weight-bold primary white--text">
          Anais das edições do CONNEPI
        </v-card-title>
        <v-card-text class="mt-5">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="8"
          >
            <template v-slot:item.file_url="{ item }">
              <v-btn @click="download(item.file_url)" text small>
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
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
      desserts: [
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
