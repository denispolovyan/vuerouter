<template>
  <div class="films-layout">
    <div class="filns-layout__body">
      <header-navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNavbar from "../components/HeaderNavbar";

export default {
  components: {
    HeaderNavbar,
  },
};
</script>
