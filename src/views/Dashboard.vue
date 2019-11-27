<template>
  <v-container grid-list-lg>
    <v-dialog v-model="loading" fullscreen>
      <v-card>
        <v-card-text>
          <div class="loader-container">
            <v-progress-circular
              class="mb-4"
              indeterminate
              color="primary"
              size="100"
            />
            <span class="headline">Carregando dados...</span>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-row wrap>
      <!-- Cards -->
      <v-col cols="12">
        <cards :cardsData="articlesPerYear" />
      </v-col>
      <!-- Charts and Tables -->
      <v-row>
        <v-col cols="5">
          <articles-per-area :chartData="articlesPerArea" />
        </v-col>
        <v-col cols="7">
          <institutes-ranking :chartData="totalArticlesPerInstituteData" />
        </v-col>
      </v-row>
      <v-col cols="12">
        <articles-per-area-per-institute-per-year
          :chartData="articlesPerInstitutePerAreaPerYearWithFilter"
          :institutes="institutes"
          @filter="filter"
        />
      </v-col>
      <v-col cols="12">
        <articles-per-institute :chartData="totalArticlesPerInstituteData" />
      </v-col>
      <v-col cols="12">
        <articles-per-area-per-year :chartData="articlesPerInstitutePerAreaPerYearData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticlesPerArea from '@/components/charts/ArticlesPerArea.vue';
import ArticlesPerInstitute from '@/components/charts/ArticlesPerInstitute.vue';
import ArticlesPerAreaPerInstitutePerYear from '@/components/charts/ArticlesPerAreaPerInstitutePerYear.vue';
import ArticlesPerAreaPerYear from '@/components/charts/ArticlesPerAreaPerYear.vue';
import Cards from '@/components/cards/Cards.vue';
import InstitutesRanking from '@/components/tables/InstitutesRanking.vue';
import dashboardService from '@/services/dashboard-service';
import instituteService from '@/services/institute-service';
import handleErrors from '@/utils/handle-errors';

export default {
  name: 'Dashboard',
  components: {
    ArticlesPerArea,
    ArticlesPerInstitute,
    ArticlesPerAreaPerInstitutePerYear,
    ArticlesPerAreaPerYear,
    Cards,
    InstitutesRanking,
  },
  created() {
    this.getDashboardData();
  },
  data() {
    return {
      articlesPerInstitutePerAreaPerYearData: [],
      articlesPerInstitutePerAreaPerYearWithFilter: [],
      institutes: [],
      totalArticlesPerInstituteData: [],
      articlesPerArea: [],
      articlesPerYear: [],
      loading: false,
    };
  },
  methods: {
    getDashboardData() {
      this.loading = true;

      Promise.all([
        instituteService.get('regiao[]=norte&regiao[]=nordeste'),
        dashboardService.getArticlesPerInstitutePerAreaPerYear(''),
        dashboardService.getTotalArticlesPerInstitute(),
        dashboardService.getArticlesCount('publications[group_by]=area'),
        dashboardService.getArticlesCount('publications[group_by]=ano'),
      ])
        // eslint-disable-next-line
        .then(([getInstitutes, getArticlesPerInstitutePerAreaPerYear, getTotalArticlesPerInstitute, getArticlesCountByArea, getArticlesCountByYear]) => {
          this.institutes = getInstitutes.data;
          // eslint-disable-next-line
            this.articlesPerInstitutePerAreaPerYearWithFilter = getArticlesPerInstitutePerAreaPerYear.data;
          // eslint-disable-next-line
            this.articlesPerInstitutePerAreaPerYearData = getArticlesPerInstitutePerAreaPerYear.data;
          this.totalArticlesPerInstituteData = getTotalArticlesPerInstitute.data;
          this.articlesPerArea = getArticlesCountByArea.data;
          this.articlesPerYear = getArticlesCountByYear.data;
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
    filter(queryParams) {
      dashboardService.getArticlesPerInstitutePerAreaPerYear(queryParams)
        .then(({ data }) => {
          this.articlesPerInstitutePerAreaPerYearWithFilter = data;
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

<style scoped>
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 64px);
    width: 100%;
  }
</style>
