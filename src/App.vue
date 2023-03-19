<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  methods: {
    goToDashboard() {
      this.$router.push("/two");
    },
  },
};
</script>

<style >
@import url('./assets/css/nullstyle');
#app{
	height: 100%;
}
</style>
