<template>
  <div class="header-navbar">
    <div class="header-navbar__container">
      <div class="header-navbar__logo" @click="setFilmsPage">
        vuerouter
      </div>
      <div class="header-navbar__navbar">
        <div class="header-navbar__item" @click="switchToAuthState">
          <div class="header-navbar__auth">
            {{ signedIn ? "watch profile" : "sign in" }}
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
    const signedIn = localStorage.getItem("user-info");
    if (signedIn) {
      this.signedIn = true;
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
.header-navbar__logo p {
  cursor: pointer;
}
.header-navbar__navbar {
  display: flex;
  gap: 20px;
}
.header-navbar__item {
  cursor: pointer;
}
</style>
