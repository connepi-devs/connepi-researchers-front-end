<template>
  <v-container grid-list-lg>
    <div class="headline font-weight-black section-title">Comunidades e coleções</div>
    <v-row class="fill-height" align="start">
      <v-card width="100%">
        <v-card-title
          class="title font-weight-bold primary white--text"
        >
          Coleção: CONNEPI
        </v-card-title>
        <v-card-text class="mt-5">
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(item, index) in areas"
              :key="index"
            >
              <v-expansion-panel-header>
                <div>
                  <v-icon class="mr-3">mdi-folder-multiple</v-icon>
                  <span class="font-weight-bold">Connepi {{ item.ano }}</span>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list two-line subheader>
                  <v-list-item
                    v-for="(total, area) in omit(item, ['ano'])"
                    :key="area"
                    @click="showCollection"
                  >
                    <v-list-item-avatar
                      v-if="$vuetify.breakpoint.smAndUp"
                      color="amber"
                    >
                      <v-icon color="white">mdi-folder</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ area }} ({{ total }})</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn @click="showCollection" icon>
                        <v-icon color="grey darken-2">mdi-download</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { omit, orderBy } from 'lodash';
import dashboardService from '@/services/dashboard-service';

export default {
  name: 'CommunitiesAndCollections',
  created() {
    dashboardService.getArticlesPerInstitutePerAreaPerYear('')
      .then(({ data }) => {
        this.areas = orderBy(data, ['ano']);
      });
  },
  data() {
    return {
      areas: [],
    };
  },
  methods: {
    omit,
    showCollection() {
      console.log('showCollection');
    },
  },
};
</script>
