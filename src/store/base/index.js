export default {
  namespaced: true,
  state: {
    snackbar: {
      show: false,
      message: '',
      color: 'primary darken-2',
      timeout: 6000,
    },
  },
  mutations: {
    SET_SNACKBAR(state, payload) {
      Object.assign(state, { snackbar: payload });
    },
  },
  actions: {
    setSnackbar({ commit }, payload) {
      commit('SET_SNACKBAR', payload);
    },
  },
  getters: {
    snackbar: state => state.snackbar,
  },
};
