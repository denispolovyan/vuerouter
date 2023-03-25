import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      userInfo: [],
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
    getUserAge(state) {
      return state.userInfo.age;
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
    deleteUserInfo(state) {
      state.userInfo = [];
    },
    setFilms(state, films) {
      state.films = films;
      state.filteredFilms = films;
    },
    setFilteredFilms(state, filter) {
      let includeFilteredFilms = state.films.filter((t) =>
        t.name.includes(filter)
      );
      state.filteredFilms = state.userInfo.age
        ? includeFilteredFilms.filter((t) => t.age <= state.userInfo.age)
        : includeFilteredFilms;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
});
