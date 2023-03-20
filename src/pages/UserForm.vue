<template>
  <div class="user-profile">
    <div class="user-profile__body">
      <form
        class="form"
        :class="{
          errorForm: showFormError,
        }"
        @click="showFormError = false"
      >
        <div class="form__content">
          <!-- name  -->
          <div class="form__body">
            <label class="form__name form__label">Name</label>
            <input
              @blur="v$.form.name.$reset"
              @focus="v$.form.name.$touch"
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
              @blur="v$.form.phone.$reset"
              @focus="v$.form.phone.$touch"
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
              @blur="v$.form.email.$reset"
              @focus="v$.form.email.$touch"
              autocomplete="off"
              v-model="form.email"
            />
            <div class="errorMsg" v-if="v$.form.email.$error">
              Type correct email
            </div>
          </div>
          <!-- password  -->
          <div class="form__body passwords">
            <div class="form__body_password">
              <label class="form__password form__label">Password</label>
              <input
                @blur="v$.form.password.$reset"
                @focus="v$.form.password.$touch"
                maxlength="20"
                autocomplete="off"
                v-model="form.password"
                type="password"
              />
              <div class="errorMsg" v-if="v$.form.password.$error">
                Min length is 8 symbols.
              </div>
            </div>
            <div class="form__body_password">
              <label class="form__passwordConfirmation form__label"
                >Confirm the password</label
              >
              <input
                @blur="v$.form.passwordConfirmation.$reset"
                @focus="v$.form.passwordConfirmation.$touch"
                maxlength="20"
                autocomplete="off"
                v-model="form.passwordConfirmation"
                type="password"
              />
              <div class="errorMsg" v-if="v$.form.passwordConfirmation.$error">
                Passwords don`t match
              </div>
            </div>
          </div>
          <!-- sex  -->
          <div class="form__body">
            <label class="form__sex form__label">Sex</label>
            <select
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
            <input autocomplete="off" type="checkbox" v-model="form.checkbox" />
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
              @click.prevent.stop="submitForm"
            >
              Submit
            </button>
            <button
              @click.prevent="resetForm"
              class="form__button form__button_reset"
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
        this.resetForm();
        this.$router.push("/user");
      }
    },
    resetForm() {
      for (let field in this.form) {
        this.form[field] = "";
      }
      this.form.sex = "male";
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
  margin-top: 5px;
  color: red;
}
.errorMsgCheckbox {
  color: red;
}
.errorForm {
  border: 2px solid red;
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
  display: block;
  max-width: 400px;
}
.form__body input {
  display: block;
  background-color: #e2e2e2;
  height: 20px;
  width: 190px;
  padding: 0px 5px;
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

.form__select {
  background-color: #e2e2e2;
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
</style>
