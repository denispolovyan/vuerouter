<template>
  <div class="payment-form">
    <div class="payment-form__body">
      <div class="container p-0">
        <div
          class="card px-4"
          :class="{
            blackThemeCard: !$store.getters.getColorTheme,
          }"
        >
          <p class="h8 py-3">Payment Details</p>
          <div class="row gx-3">
            <div class="col-12">
              <div class="d-flex flex-column">
                <p class="text mb-1">Person Name</p>
                <input
                  :class="{
                    blackThemeInput: !$store.getters.getColorTheme,
                  }"
                  style="color: #000"
                  class="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  value="Barry Allen"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex flex-column">
                <p class="text mb-1">Card Number</p>
                <input
                  :class="{
                    blackThemeInput: !$store.getters.getColorTheme,
                  }"
                  class="form-control mb-3"
                  type="text"
                  placeholder="1234 5678 435678"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">Expiry</p>
                <input
                  :class="{
                    blackThemeInput: !$store.getters.getColorTheme,
                  }"
                  class="form-control mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">CVV/CVC</p>
                <input
                  :class="{
                    blackThemeInput: !$store.getters.getColorTheme,
                  }"
                  class="form-control mb-3 pt-2"
                  type="password"
                  placeholder="***"
                />
              </div>
            </div>
            <div class="col-12" @click="setPremiumState">
              <div
                class="btn btn-primary mb-3"
                :class="{
                  blackThemeInput: !$store.getters.getColorTheme,
                }"
              >
                <span style="color: #000" class="ps-3">Pay $9</span>
                <span class="fas fa-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setPremiumState() {
      const userInfo = JSON.parse(localStorage.getItem("user-info"));
      userInfo["premium"] = true;
      localStorage.setItem("user-info", JSON.stringify(userInfo));
      this.$router.push("/user");
		this.$store.commit('changeAccountState');
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&display=swap");

.payment-form__body {
  font-family: "Josefin Sans", sans-serif;
  padding: 0px 15px;
  margin: 40px 0px;
}
.card {
  max-width: 500px;
  margin: auto;
  color: black;
  border-radius: 20px;
}

p {
  margin: 0px;
}

.container .h8 {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}

.btn.btn-primary {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-image: linear-gradient(
    to right,
    #f1e873 0%,
    #fffc7b 51%,
    #ffe13c 100%
  );
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
}

.btn.btn.btn-primary:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.btn.btn-primary:hover .fas.fa-arrow-right {
  transform: translate(15px);
  transition: transform 0.2s ease-in;
}

.form-control {
  color: white;
  background-color: #f3ff77;
  border: 2px solid transparent;
  height: 60px;
  padding-left: 20px;
  vertical-align: middle;
}

.form-control:focus {
  color: white;
  background-color: #ecd66c;
  border: 2px solid #e7c03d;
  box-shadow: none;
}

.text {
  font-size: 14px;
  font-weight: 600;
}

::placeholder {
  font-size: 14px;
  font-weight: 600;
}
@media (max-width: 600px) {
  .payment-form__body {
    margin: 20px 0px;
  }
}

/* black__theme */
.blackThemeCard {
  background-color: #e0e0cd;
}
.blackThemeInput {
  background-color: #f6f6f3;
  transition: 0s !important;
  background-image: none !important;
}
</style>
