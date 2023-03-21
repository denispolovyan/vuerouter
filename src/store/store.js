import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      whiteTheme: true,
      premiumAccount: false,
    };
  },
  getters: {
    getColorTheme(state) {
      return state.whiteTheme;
    },
    getAccountState(state) {
      return state.premiumAccount;
    },
  },
  mutations: {
    changeColorTheme(state) {
      state.whiteTheme = !state.whiteTheme;
    },
    changeAccountState(state) {
      state.premiumAccount = !state.premiumAccount;
    },
  },
  actions: {},
});
