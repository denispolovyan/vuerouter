<template>
  <div class="main-page">
    <div class="main-page__body">
      <div class="main-page__button">
        <router-link to="/films">
          <button class="button__body">Почати</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page {
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
.main-page__button {
  border: 1px solid #fff181;
  padding: 20px 30px;
}
.button__body {
  font-size: 26px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffca63;
  background-color: #000;
}
</style>
