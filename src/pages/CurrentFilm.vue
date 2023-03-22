<template>
  <div class="current-film">
    <div class="current-film__body" v-if="film">
      <div class="current-film__name">{{ film.name }}</div>
      <img class="current-film__image" :src="film.img" />
      <div class="current-film__plot">
        <p>Plot:</p>
        <br />{{ film.description }}
        <div class="reactions">
          <div
            class="reaction"
            v-for="reaction in $store.getters.getReactions"
            :key="reaction"
            @click="addReaction(reaction)"
          >
            <button class="reaction__button">{{ reaction.reaction }}</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-if="showToast"
    >
      <div class="toast-header">
        <strong class="mr-auto">films app</strong>
      </div>
      <div class="toast-body">Thank you for review!</div>
    </div>
  </div>
</template>

<script>
import { films } from "../data/films.js";

export default {
  data() {
    return {
      film: null,
      showToast: false,
    };
  },
  methods: {
    addReaction(reaction) {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
      const filmReview = {
        reaction: reaction.reaction,
        name: this.film.name,
        img: this.film.img,
        id: this.film.id,
      };
      this.$store.commit("setReviewOnFilms", filmReview);
      localStorage.setItem(
        "films-review",
        JSON.stringify(this.$store.getters.getReviewOnFilms)
      );
    },
  },
  created() {
    const film = films.find((film) => film.id == this.$route.params.id);
    if (film) {
      this.film = film;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.current-film {
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  max-width: 780px;
  padding: 0px 15px;
  margin: 40px auto;
  text-align: center;
  margin-bottom: 20px;
}
.current-film__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.current-film__name {
  text-align: left;
  font-size: 20px;
}
.current-film__image {
  position: relative;
  max-width: 100%;
  margin: 0px auto;
}
.current-film__plot {
  text-align: left;
  font-size: 16px;
  margin-bottom: 40px;
}
.current-film__plot p {
  text-decoration: underline;
  margin-bottom: -6px;
}
@media (max-width: 600px) {
  .current-film {
    margin: 20px auto;
  }
}

/* reactions */
.reactions {
  margin-top: 10px;
  display: flex;
  gap: 5px;
}
.reaction__button {
  padding: 5px;
  border: 1px solid #000;
  background-color: #fff;
}
.reaction__button:hover {
  transition-duration: 0.5s;
  border: 1px solid #fff;
  background-color: #000;
  color: #fff;
}
/* toast  */
.toast:not(.show) {
  width: 150px;
  text-align: left;
  position: absolute;
  top: -10px;
  right: 15px;
  display: block;
}
@media (min-width: 600px) {
  .toast:not(.show) {
    top: 40px;
    right: 25px;
  }
}
</style>
