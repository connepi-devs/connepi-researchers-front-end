import Vue from 'vue';
import Vuetify from 'vuetify/lib/index';
import '../sass/variables.scss';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.darken2,
      },
      dark: {
        primary: colors.green.darken2,
      },
    },
    icons: {
      iconfont: 'mdi',
    },
  }
});
