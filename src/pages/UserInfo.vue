<template>
  <div class="user-info">
    <div class="user-info__body" v-if="userInfo">
      <div class="user-info__row">
        <div class="user-info__name">{{ userInfo.name }}</div>
      </div>
      <div class="user-info__row">
        <div class="user-info__sex">Sex: {{ userInfo.sex }}</div>
      </div>

      <div class="user-info__row">
        <div class="user-info__phone">{{ userInfo.phone }}</div>
      </div>
      <div class="user-info__row">
        <div class="user-info__email">{{ userInfo.email }}</div>
      </div>
      <div class="user-info__row">
        <button class="user-info-delete" @click.prevent="deleteUser">
          sign out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userInfo: null,
    };
  },
  methods: {
    deleteUser() {
      const confirmationResult = window.confirm(
        `Confirm deletion of "${this.userInfo.name}"`
      );
      if (confirmationResult) {
        localStorage.removeItem("user-info");
        this.$router.push("/films");
      }
    },
  },
  created() {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.user-info {
  font-family: "Josefin Sans", sans-serif;
  max-width: 220px;
  padding: 20px;
  margin: 40px auto;
  border: 1px solid #000;
}
.user-info__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.user-info__row {
}
.user-info__name {
  text-transform: uppercase;
}
.user-info-delete {
  background-color: #fff;
  padding: 5px;
  border: 1px solid #000;
}
.user-info-delete:hover {
  transition-duration: 0.5s;
  background-color: #000;
  color: #fff;
}
</style>
