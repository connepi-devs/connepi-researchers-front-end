<template>
  <v-card elevation="0" max-height="370">
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-layout class="my-2" align-end>
            <v-icon class="mr-2">mdi-test-tube</v-icon>
            <h2>Total de artigos por Área</h2>
          </v-layout>
          <ve-ring
            :data="chartData"
            :extend="chartExtend"
            :legend="chartSettings.legend"
            :settings="chartSettings"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';
import dashboardService from '@/services/dashboard-service';

export default {
  name: 'ArticlesPerArea',
  data() {
    this.chartExtend = {
      series: {
        center: ['30%', '40%'],
      },
    };
    this.chartSettings = {
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 5,
        top: 50,
        bottom: 20,
      },
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '10',
            fontWeight: 'bold',
          },
        },
      },
    };
    return {
      chartData: {
        columns: ['area', 'publicacoes'],
        rows: [],
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      dashboardService.getArticlesCount('group_by=area')
        .then(({ data }) => {
          this.chartData.rows = orderBy(data, ['area']);
        })
        .catch((err) => {
          console.error(err);
        })
    },
  },
};
</script>
