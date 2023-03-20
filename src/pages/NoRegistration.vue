<template>
  <div class="no-registration">
    <div class="no-registration__body">
      <div class="no-registation__title">No access</div>
      <div class="no-registation__text">
        For watching films info you need to sign in
      </div>
      <div class="no-registation__buttons">
        <router-link to="/films"
          ><button class="no-registration__button">
            To films
          </button></router-link
        >
        <router-link to="/user-auth"
          ><button class="no-registration__button">Sign in</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.no-registration {
  font-family: "Josefin Sans", sans-serif;
  height: 100%;
  background-color: #000;
  color: #fff;
  font-size: 24px;
}
.no-registration__body {
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
.no-registration__button {
  background: #000;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #fff;
}
.no-registration__button:hover {
  transition-duration: 0.5s;
  background: #fff;
  color: #000;
}
</style>
