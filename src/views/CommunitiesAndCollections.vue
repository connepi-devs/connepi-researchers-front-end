<template>
  <v-container grid-list-lg>
    <v-card width="100%" height="100%">
      <v-card-title>Comunidades e Coleções</v-card-title>
      <v-card-text>
        <v-expansion-panels focusable>
          <v-expansion-panel
            v-for="(item,i) in 4"
            :key="i"
          >
            <v-expansion-panel-header>
              <div>
                <v-icon class="mr-3">mdi-folder-multiple</v-icon>
                <span class="font-weight-bold">Connepi 200{{ i + 6 }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list two-line subheader>
                <v-list-item
                  v-for="i in 5"
                  :key="i"
                  @click="showCollection"
                >
                  <v-list-item-avatar color="amber">
                    <v-icon color="white">mdi-folder</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Ciências Exatas e da Terra (50)</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn @click="showCollection" icon>
                      <v-icon color="grey darken-2">mdi-eye</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CommunitiesAndCollections',
  methods: {
    showCollection() {
      console.log('showCollection');
    },
  },
};
</script>
