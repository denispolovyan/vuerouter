<template>
  <div class="films-carousel">
    <div class="films-carousel__body">
      <div class="films__container">
        <div
          class="film"
          v-for="film in films"
          :key="film"
          @mouseover="selectFilm(film)"
        >
          <div class="film__body">
            <div class="image">
              <div class="image__name">
                {{ film.name }}
              </div>
              <img :src="film.img" />
              <router-link
                :to="{ name: 'film', params: { id: film.id } }"
                class="image__background"
              >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { films } from "@/api";

export default {
  data: () => {
    return {
      selectedFilm: null,
      registrated: false,
    };
  },
  methods: {
    selectFilm(film) {
      this.selectedFilm = film;
    },
  },
  created() {
    this.films = films;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");
.film {
  font-family: "Josefin Sans", sans-serif;
  max-width: 750px;
  margin: 40px auto;
  text-align: center;
  margin-bottom: 20px;
}
.image__name {
  z-index: 50;
  position: absolute;
  font-size: 20px;
  color: #fff;
  background: #000;
  padding: 10px;
}
.image {
  position: relative;
  max-width: 750px;
  margin: 0px auto;
}
.image img {
  max-width: 750px;
}
.image__background {
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.image__background:hover {
  transition-duration: 0.3s;
  background: rgba(116, 108, 99, 0.64);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
