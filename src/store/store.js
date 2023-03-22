import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      whiteTheme: true,
      premiumAccount: false,
      userInfo: "",
    };
  },
  getters: {
    getColorTheme(state) {
      return state.whiteTheme;
    },
    getAccountState(state) {
      return state.premiumAccount;
    },
    getUserInfo(state) {
      return state.userInfo;
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
