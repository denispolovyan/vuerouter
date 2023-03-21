<template>
  <div
    id="app"
    :class="{
      blackTheme: !$store.getters.getColorTheme,
    }"
  >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url("./assets/css/nullstyle");
#app {
  min-height: 100vh;
}
/* black__theme */
.blackTheme {
  background-color: #e2e2e2;
}
</style>
