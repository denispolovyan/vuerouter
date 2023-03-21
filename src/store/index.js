import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      whiteTheme: true,
    };
  },
  getters: {
    getColorTheme(state) {
      return state.whiteTheme;
    },
  },
  mutations: {
    changeColorTheme(state) {
      state.whiteTheme = !state.whiteTheme;
    },
  },
  actions: {},
});
