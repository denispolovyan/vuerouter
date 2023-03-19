<template>
  <div class="header-navbar">
    <div class="header-navbar__container">
      <div class="header-navbar__logo">vuerouter</div>
      <div class="header-navbar__navbar">
        <div class="header-navbar__item"></div>
        <div class="header-navbar__item"></div>
        <div class="header-navbar__item">registrate / sign in</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

/* header  */
.header-navbar {
  font-family: "Josefin Sans", sans-serif;

  background-color: #ffffba;
}
.header-navbar__container {
  height: 60px;
  max-width: 750px;
  margin: 0px auto;
  align-items: center;
  display: flex;
}
.header-navbar__logo {
  flex: 1 1 200px;
}
.header-navbar__navbar {
  display: flex;
  gap: 20px;
}
.header-navbar__item {
  cursor: pointer;
}
</style>
