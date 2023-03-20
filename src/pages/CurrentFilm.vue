<template>
  <div class="current-film">
    <div class="current-film__body" v-if="film">
      <div class="current-film__name">{{ film.name }}</div>
      <img class="current-film__image" :src="film.img" />
      <div class="current-film__plot">
        <p>Plot:</p>
        <br />{{ film.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { films } from "../api.js";

export default {
  data() {
    return {
      film: null,
    };
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
  height: 100%;
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
</style>
