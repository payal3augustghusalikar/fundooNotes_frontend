<template>
  <div>
    <form novalidate class="md-layout jc-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-55 md-small-size-140 overflow-x">
        <md-card-header>
          <md-card-title>
            <fundooTitle />
          </md-card-title>
          <v-card-title>
            Use Your Account
          </v-card-title>
        </md-card-header>
        <md-card-content>

<md-field :class="getValidationClass('email')">
         
             <v-text-field
                      v-model="firstName"
                      outlined
                      dense
                      label="First name"
                    
                    />
            <span class="md-error" v-if="!$v.form.email.required"
              >The email is required</span
            >
            <span class="md-error" v-else-if="!$v.form.email.email"
              >Invalid email</span
            >
          </md-field>
       
          <md-field :class="getValidationClass('email')">
            <label for="email">email</label>
            <md-input
              outline
              dense
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.email.required"
              >The email is required</span
            >
            <span class="md-error" v-else-if="!$v.form.email.email"
              >Invalid email</span
            >
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input
              name="password"
              type="password"
              id="password"
              v-model="form.password"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.password.required"
              >The password is required</span
            >
            <span class="md-error" v-else-if="!$v.form.password.minlength"
              >Password should contain minimum 4 charecters
            </span>
          </md-field>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-content>
          <md-card-actions>
            <span>
              <router-link to="/register">create account</router-link>
            </span>

            <v-spacer> </v-spacer>
            <md-button
              type="submit"
              class="md-raised md-primary"
              :disabled="sending"
              >Next</md-button
            >
          </md-card-actions>
        </md-card-content>
      </md-card>

      <md-snackbar :md-active.sync="userSaved"
        >The user {{ lastUser }} was saved with success please
        login!</md-snackbar
      >
    </form>
  </div>
</template>

<script>
import router from "../router/route.js";
import fundooTitle from "../components/fundooTitle.vue";

import { validationMixin } from "vuelidate";

import { required, email, minLength } from "vuelidate/lib/validators";

import user from "../services/user.js";
//const user = require('../services/user.js')

export default {
  components: {
    fundooTitle,
  },

  name: "register",
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      cpassword: null,
    },

    userSaved: false,
    sending: false,
    lastUser: null,
  }),

  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      //  phone: {
      //   required,
      //    minLength: minLength(10)
      // },
      password: {
        required,
        minLength: minLength(4),
      },
      cpassword: {
        required,
        minLength: minLength(4),
      },
    },
  },

  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.email = null;
      this.form.password = null;
      this.form.cpassword = null;
      window.setTimeout(() => {
        router.push({ name: "register" });
      }, 2000);
    },
    saveUser() {
      this.sending = true;
      let data = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        emailId: this.form.email,
        password: this.form.password,
      };
      // Instead of this timeout, here you can call your API
     
      user
        .registerUser(data)
        .then((result) => {
        
          window.setTimeout(() => {
            this.lastUser = `${data.firstName} ${data.lastName}`;
            this.userSaved = true;
            this.sending = false;
            this.clearForm();
          }, 1500);
        })
        .catch((error) => console.warn("error ", error));
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  },
};
</script>
<style scoped>
@import url("../scss/login.scss");
</style>
