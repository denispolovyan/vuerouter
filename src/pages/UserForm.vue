<template>
  <div class="user-profile">
    <div class="user-profile__body">
      <form
        class="form"
        :class="{
          errorForm: showFormError,
        }"
      >
        <div
          class="form__content"
          :class="{
            blackThemeForm: !$store.getters.getColorTheme,
          }"
        >
          <!-- name  -->
          <div class="form__body">
            <label class="form__name form__label">Name</label>
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @blur="v$.form.name.$touch"
              @focus="v$.form.name.$reset"
              maxlength="35"
              autocomplete="off"
              v-model="form.name"
            />
            <div class="errorMsg" v-if="v$.form.name.$error">
              Min length is 2 symbols
            </div>
          </div>
          <!-- phone  -->
          <div class="form__body">
            <label class="form__phone form__label">Phone</label>
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @blur="v$.form.phone.$touch"
              @focus="v$.form.phone.$reset"
              maxlength="35"
              autocomplete="off"
              v-model="form.phone"
            />
            <div class="errorMsg" v-if="v$.form.phone.$error">
              Type real phone
            </div>
          </div>
          <!-- email  -->
          <div class="form__body">
            <label class="form__email form__label">Email address</label>
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @blur="v$.form.email.$touch"
              @focus="v$.form.email.$reset"
              autocomplete="off"
              maxlength="35"
              v-model="form.email"
            />
            <div class="errorMsg" v-if="v$.form.email.$error">
              Type correct email
            </div>
          </div>
          <!-- password  -->
          <div class="form__body">
            <label class="form__password form__label">Password</label>
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @blur="v$.form.password.$touch"
              @focus="v$.form.password.$reset"
              maxlength="20"
              autocomplete="off"
              v-model="form.password"
              type="password"
            />
            <div class="errorMsg" v-if="v$.form.password.$error">
              Min length is 8 symbols.
            </div>
          </div>
          <div class="form__body">
            <label class="form__passwordConfirmation form__label"
              >Confirm the password</label
            >
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @blur.stop="v$.form.passwordConfirmation.$touch"
              @focus.stop="v$.form.passwordConfirmation.$reset"
              maxlength="20"
              autocomplete="off"
              v-model="form.passwordConfirmation"
              type="password"
            />
            <div class="errorMsg" v-if="v$.form.passwordConfirmation.$error">
              Passwords don`t match
            </div>
          </div>
          <!-- age  -->
          <div class="form__body">
            <label class="form__passwordConfirmation form__label">Age</label>
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @blur.stop="v$.form.age.$touch"
              @focus.stop="v$.form.age.$reset"
              maxlength="2"
              autocomplete="off"
              v-model="form.age"
              type="text"
            />
            <div class="errorMsg" v-if="v$.form.age.$error">
              Age isn`t correcct
            </div>
          </div>
          <!-- sex  -->
          <div class="form__body form__body_select">
            <select
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              @focus="v$.form.sex.$touch"
              @blur="v$.form.sex.$reset"
              v-model="form.sex"
              class="form__select"
            >
              <option selected value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
            <div class="errorMsg" v-if="v$.form.sex.$error">
              Select your sex
            </div>
          </div>
          <!-- checkbox  -->
          <div class="form__body form__body_checkbox">
            <input
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click="resetErrors()"
              autocomplete="off"
              type="checkbox"
              v-model="form.checkbox"
            />
            <label
              class="form__checkbox"
              :class="{
                errorMsgCheckbox: !form.checkbox,
              }"
              >I agree to send form</label
            >
          </div>
          <!-- buttons -->
          <div class="form__buttons">
            <button
              class="form__button form__button_submit"
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
              @click.prevent.stop="submitForm"
            >
              Submit
            </button>
            <button
              @click.prevent="resetForm"
              class="form__button form__button_reset"
              :class="{
                blackThemeButton: !$store.getters.getColorTheme,
              }"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => {
    return {
      userData: false,
      showFormError: false,
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: "",
        age: "",
        sex: "male",
        checkbox: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        this.showFormError = true;
        return;
      } else {
        localStorage.setItem("user-info", JSON.stringify(this.form));
        this.$store.commit("setUserInfo", Object.assign({}, this.form));
        this.$router.push("/user");
        this.resetForm();
      }
    },
    resetForm() {
      for (let field in this.form) {
        this.form[field] = "";
      }
      this.form.sex = "male";
    },
    resetErrors() {
      this.showFormError = false;
      for (let field in this.form) {
        this.v$.form[field].$dirty = false;
      }
    },
  },
  validations() {
    return {
      form: {
        name: {
          nameMinLength: minLength(2),
          required,
        },
        phone: {
          phoneMinLength: minLength(2),
          phoneValidator(value) {
            return !isNaN(value);
          },
          required,
        },
        email: {
          emailMinLength: minLength(8),
          emaillValidation: email,
          required,
        },
        password: {
          passwordMinLength: minLength(8),
          required,
        },
        passwordConfirmation: {
          passwordMinLength: minLength(8),
          passwordConfirmationConfirm: sameAs(this.form.password),
          required,
        },
        age: {
          required,
          ageNumberValidator(value) {
            return !isNaN(value);
          },
          ageCorrectValidator(value) {
            return value > 0;
          },
        },
        sex: { required },
        checkbox: {
          checkboxValidator(value) {
            return value == true;
          },
        },
        required,
      },
    };
  },
};
</script>

<style scoped>
.errorMsg {
  color: red;
}
.errorMsgCheckbox {
  color: red;
}

.form {
  margin: 40px auto;
  max-width: 230px;
}
.form__content {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
  padding: 20px;
}
.form__body {
  height: 55px;
  display: block;
  max-width: 400px;
}
.form__body input {
  display: block;
  height: 20px;
  width: 190px;
  padding: 0px 5px;
  border: 1px solid #79787e;
}
.form__body_password {
  height: 40px;
}
.passwords {
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.form__label {
  display: block;
  margin-bottom: 4px;
}
.form__body_select {
  height: 30px;
}
.form__select {
  border: 1px solid #000;
}
.form__body_checkbox input {
  width: 20px;
  margin-bottom: 5px;
}
.form__buttons {
  display: flex;
  gap: 30px;
}
.form__button {
  padding: 10px;
  border: 1px solid #000;
  background-color: #fff;
}
.form__button:hover {
  transition-duration: 0.5s;
  background-color: #000;
  color: #fff;
}

@media (max-width: 600px) {
  .form {
    margin: 20px auto;
  }
}
/* black__theme */
.blackThemeForm {
  background-color: #e0e0cd;
  color: #000;
}
.blackThemeButton {
  border: 1px solid #d0d0c4;
  background-color: #f6f6f3;
  color: #000;
}
.blackThemeButton:hover {
  transition-duration: 0.5s;
  border: 1px solid #000;
  background-color: #f6f6f3;
  color: #000;
}
</style>
