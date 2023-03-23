import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      whiteTheme: true,
      premiumAccount: false,
      reactions: [],
      reviewOnFilms: [],
      films: [],
      filteredFilms: [],
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
    getFilteredFilms(state) {
      return state.filteredFilms;
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
    setFilms(state, films) {
      state.films = films;
		state.filteredFilms = films;
    },
    setFilteredFilms(state, filter) {
      state.filteredFilms = state.films.filter((t) => t.name.includes(filter));
    },
  },
  actions: {},
});
