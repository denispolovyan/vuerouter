<template>
  <div class="main-page">
    <div class="main-page__body">
      <div class="main-page__button">
        <router-link to="/films">
          <button class="button__body">Start</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.main-page {
  font-family: "Josefin Sans", sans-serif;

  background-color: #000;
  height: 100%;
  width: 100%;
}
.main-page__body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button__body {
  border: 1px solid #fff181;
  padding: 15px 35px 12px 35px;
  font-size: 26px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffca63;
  background-color: #000;
}
.button__body:hover {
  transition-duration: 0.5s;
  color: #000;
  background-color: #ffca63;
}
</style>
