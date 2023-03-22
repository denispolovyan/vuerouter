<template>
  <div class="user__info__wrapper">
    <div
      class="user-info"
      :class="{
        blackThemeCard: !$store.getters.getColorTheme,
      }"
    >
      <div class="user-info__body" v-if="userInfo">
        <div class="user-info__row">
          <div class="user-info__name">{{ userInfo.name }}</div>
        </div>
        <div class="user-info__row">
          <div class="user-info__sex">Sex: {{ userInfo.sex }}</div>
        </div>

        <div class="user-info__row">
          <div class="user-info__phone">{{ userInfo.phone }}</div>
        </div>
        <div class="user-info__row">
          <div class="user-info__email">{{ userInfo.email }}</div>
        </div>
        <div class="user-info__row" v-if="!premiumState">
          <p style="margin-bottom: 10px">Status: basic</p>
          <button
            :class="{
              blackThemeButton: !$store.getters.getColorTheme,
            }"
            class="user-info__premium user-info__button"
            @click.prevent="switchToPremiumPaymentForm"
          >
            buy premium
          </button>
        </div>
        <p style="margin-bottom: 0px" v-else>Status: premium</p>

        <div class="user-info__row">
          <button
            class="user-info-delete user-info__button"
            :class="{
              blackThemeButton: !$store.getters.getColorTheme,
            }"
            @click.prevent="deleteUser"
          >
            sign out
          </button>
        </div>
      </div>
    </div>
    <div class="films-review">
      <div class="films-review__body">
        <div
          class="films-review__row"
          :class="{
            blackThemeCard: !$store.getters.getColorTheme,
          }"
          v-for="review in $store.getters.getReviewOnFilms"
          :key="review"
        >
          <div class="films__review__column">
            <router-link :to="'/films/' + review.id" class="films-review__link">
              <div class="films-review__name">{{ review.name }}</div>
              <div class="films-review__rate">Rate: {{ review.reaction }}</div>
            </router-link>
            <div
              :class="{
                blackThemeCard: !$store.getters.getColorTheme,
              }"
              class="films-review__delete"
              @click="deleteReviewOnFilms(review)"
            >
              delete review
            </div>
          </div>
          <div class="films-review__column">
            <img
              :src="review.img"
              alt="film preview"
              class="films-review__img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userInfo: null,
      premiumState: false,
    };
  },
  methods: {
    deleteUser() {
      const confirmationResult = window.confirm(
        `Confirm deletion of "${this.userInfo.name}"`
      );
      if (confirmationResult) {
        if (JSON.parse(localStorage.getItem("user-info")).premium == true) {
          this.$store.commit("changeAccountState");
        }
        this.$store.commit("deleteAllReviewsOnFilms");
        localStorage.removeItem("user-info");
        localStorage.removeItem("films-review");
        this.$router.push("/films");
      }
    },
    switchToPremiumPaymentForm() {
      this.$router.push("/user/premium");
    },
    deleteReviewOnFilms(review) {
      this.$store.commit("deleteReviewOnFilms", review);
      const reviewOnFilms = this.$store.getters.getReviewOnFilms;
      if (reviewOnFilms) {
        localStorage.setItem(
          "films-review",
          JSON.stringify(this.$store.getters.getReviewOnFilms)
        );
      }
    },
  },
  created() {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      this.userInfo.premium ? (this.premiumState = true) : null;
    }
  },
};
</script>

<style scoped style="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.user-info {
  font-family: "Josefin Sans", sans-serif;
  max-width: 270px;
  padding: 20px;
  margin: 40px auto;
  border: 1px solid #000;
}
.user-info__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-info__name {
  text-transform: uppercase;
}
.user-info__button {
  background-color: #fff;
  padding: 5px;
  border: 1px solid #000;
}
.user-info__premium:hover {
  transition-duration: 0.5s;
  background-color: #000;
  color: #fff;
}
.user-info-delete {
  background-color: #fff;
  padding: 5px;
  border: 1px solid #000;
}
.user-info-delete:hover {
  transition-duration: 0.5s;
  background-color: #000;
  color: #fff;
}
@media (max-width: 600px) {
  .user-info {
    margin: 20px auto;
  }
}
/* black theme */
.blackThemeButton {
  border: 1px solid #d0d0c4;
  background-color: #f6f6f3;
  color: #000;
}
.blackThemeButton:hover {
  transition-duration: 0.5s;
  border: 1px solid #000;
  background-color: #f6f6f3;
  color: #000;
}
.blackThemeCard {
  background-color: #e0e0cd;
  color: #000;
}

/* reviews */
.films-review {
  font-family: "Josefin Sans", sans-serif;
}
.films-review__body {
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0px auto;
}
.films-review__row {
  display: flex;
  justify-content: space-between;
  color: #000;
  border: 1px solid #000;
}
.films-review__link {
  color: #000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
}
.films-review__column {
  display: flex;
}
.films-review__img {
  align-self: center;
  height: 80px;
  width: 135px;
}
.films-review__delete {
  cursor: pointer;
  margin: 0px 0px 10px 10px;
  color: #000;
  text-decoration: underline;
}
</style>
