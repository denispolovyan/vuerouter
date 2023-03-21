<template>
  <div class="no-premium">
    <div class="no-premium__body">
      <div class="no-registation__title">No access</div>
      <div class="no-registation__text">
        For watching some films you need to buy premium status
      </div>
      <div class="no-registation__buttons">
        <router-link to="/films"
          ><button class="no-premium__button">To films</button></router-link
        >
        <router-link to="/user/premium"
          ><button class="no-premium__button">Premium</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.no-premium {
  padding: 0px 15px;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 24px;
}
.no-premium__body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.no-registation__buttons {
  display: flex;
  gap: 20px;
}
.no-premium__button {
  background: #000;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #fff;
}
.no-premium__button:hover {
  transition-duration: 0.5s;
  background: #fff;
  color: #000;
}
</style>
