<template>
  <div
    class="header-navbar"
    :class="{
      blackTheme: !$store.getters.getColorTheme,
    }"
  >
    <div class="header-navbar__container">
      <div class="header-navbar__logo" @click="setFilmsPage">vuerouter</div>
      <div class="header-navbar__navbar">
        <div class="header-navbar__item">
          <div class="form-check form-switch">
            <input
              @click="changeColorTheme"
              class="form-check-input"
              type="checkbox"
              role="switch"
              v-model="checked"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div class="header-navbar__item" @click="switchToAuthState">
          <div class="header-navbar__auth">
            <span>{{ signedIn ? "watch profile" : "sign in" }}</span>
            <img
              v-if="$store.getters.getAccountState"
              class="header-navbar__premium"
              src="https://cdn-icons-png.flaticon.com/512/6016/6016804.png"
              alt="premium"
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
      signedIn: false,
      checked: false,
    };
  },
  methods: {
    switchToAuthState() {
      if (this.signedIn) {
        this.$router.push("/user");
      } else {
        this.$router.push("/user-auth");
      }
    },
    changeColorTheme() {
      this.$store.commit("changeColorTheme");
      localStorage.setItem(
        "white-theme",
        JSON.stringify(this.$store.getters.getColorTheme)
      );
    },
    setFilmsPage() {
      this.$router.push("/films");
    },
    checkLocalStorage() {
      const signedIn = localStorage.getItem("user-info");
      if (signedIn) {
        this.signedIn = true;
      }
    },
  },
  created() {
    this.checked = !this.$store.getters.getColorTheme;
    const whiteTheme = localStorage.getItem("white-theme");
    if (!whiteTheme) {
      localStorage.setItem("white-theme", JSON.stringify(true));
      this.checked = this.$store.getters.getColorTheme;
    } else {
      if (JSON.parse(whiteTheme) != this.$store.getters.getColorTheme) {
        this.$store.commit("changeColorTheme");
        this.checked = !this.$store.getters.getColorTheme;
      }
    }

    let signedIn = localStorage.getItem("user-info");
    if (signedIn) {
      this.signedIn = true;
      signedIn = JSON.parse(signedIn);
      signedIn.premium != this.$store.getters.getAccountState
        ? this.$store.commit("changeAccountState")
        : null;
    }
  },
  watch: {
    "$route.path"() {
      const signedIn = localStorage.getItem("user-info");
      this.signedIn = signedIn ? true : false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.header-navbar {
  width: 100%;
  font-family: "Josefin Sans", sans-serif;
  background-color: #ffd347;
}
.header-navbar__container {
  padding: 0px 15px;
  height: 60px;
  max-width: 780px;
  margin: 0px auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.header-navbar__logo {
  cursor: pointer;
}
.header-navbar__navbar {
  display: flex;
  gap: 25px;
}
.header-navbar__item {
  cursor: pointer;
  display: flex;
  align-self: center;
}
.header-navbar__auth {
  display: flex;
  align-items: center;
  gap: 5px;
}
.header-navbar__premium {
  height: 20px;
  width: 20px;
}

/* black__theme */
.blackTheme {
  background-color: #8c8377;
  color: #fff;
}
</style>
