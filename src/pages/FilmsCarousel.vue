<template>
  <div
    class="films-carousel"
    :class="{
      blackTheme: !$store.getters.getColorTheme,
    }"
  >
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
                <img
                  class="image__premium"
                  v-if="film.premium"
                  src="https://cdn-icons-png.flaticon.com/512/6016/6016804.png"
                  alt="premium"
                />
              </div>
              <img :src="film.img" />
              <div
                class="image__background"
                @click="switchToCurrentFilm(film)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { films } from "@/data/films";

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
    switchToCurrentFilm(currentFilm) {
      let userInfo = localStorage.getItem("user-info");
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        if (!currentFilm.premium) {
          this.$router.push(`/films/${currentFilm.id}`);
        } else {
          userInfo.premium
            ? this.$router.push(`/films/${currentFilm.id}`)
            : this.$router.push("/no-premium");
        }
      } else {
        this.$router.push("/no-registration");
      }
    },
  },
  created() {
    this.films = films;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.films-carousel__body {
  padding: 40px 0px;
  margin: 0px auto;
}
.film {
  font-family: "Josefin Sans", sans-serif;
  max-width: 780px;
  padding: 0px 15px;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
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
  max-width: 100%;
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
.image__premium {
  height: 20px;
  width: 20px;
}
@media (max-width: 600px) {
  .films-carousel__body {
      padding: 20px 0px;

  }
}

/* black__theme */
.blackTheme {
  background-color: #e2e2e2;
}
</style>
