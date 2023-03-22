import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      whiteTheme: true,
      premiumAccount: false,
      reactions: [],
      reviewOnFilms: [],
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
    getReactions(state) {
      return state.reactions;
    },
    getReviewOnFilms(state) {
      return state.reviewOnFilms;
    },
  },
  mutations: {
    changeColorTheme(state) {
      state.whiteTheme = !state.whiteTheme;
    },
    changeAccountState(state) {
      state.premiumAccount = !state.premiumAccount;
    },
    setReactions(state, reactions) {
      state.reactions = reactions;
    },
    setReviewOnFilms(state, filmReview) {
      state.reviewOnFilms = state.reviewOnFilms.filter(
        (t) => t.name != filmReview.name
      );
      state.reviewOnFilms.push(filmReview);
    },
    deleteReviewOnFilms(state, filmReviewToDelete) {
      state.reviewOnFilms = state.reviewOnFilms.filter(
        (t) => t.name != filmReviewToDelete.name
      );
    },
    deleteAllReviewsOnFilms(state) {
      state.reviewOnFilms = [];
    },
  },
  actions: {},
});
