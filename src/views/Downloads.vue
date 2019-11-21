<template>
  <v-container grid-list-lg fill-height>
    <v-card width="100%" height="88vh">
      <v-card-title class="font-weight-bold">
        Anais das edições do CONNEPI
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.url="{ item }">
            <v-btn @click="download(item.url)" text small>
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
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
        { text: 'Cidade', value: 'calories' },
        { text: 'Estado', value: 'fat' },
        { text: 'Ano', value: 'carbs' },
        { text: 'Download', value: 'url' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          url: 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf',
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
