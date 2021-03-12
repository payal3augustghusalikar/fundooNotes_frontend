<template>
  <div>
    <form
      novalidate
      class="md-layout jc-center login"
      @submit.prevent="validateUser"
    >
      <md-card
        class="md-layout-item md-size-60 md-small-size-100 overflow-x overflow-y"
      >
        <md-card-header>
          <md-card-title>
            <fundooTitle />
          </md-card-title>
          <v-card-title>
            Sign in
          </v-card-title>
        </md-card-header>
        <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input
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
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-content> </md-card-content>
        <md-card-content>
          <md-card-actions>
            <span>
              <h5>
                <router-link to="/register">create account</router-link>
              </h5>
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

      <md-snackbar :md-active.sync="userLoggedIn"
        >The user {{ lastUser }} is logged in!</md-snackbar
      >
    </form>
  </div>
</template>

<script>
//import router from "../router/route.js";
import fundooTitle from "../components/fundooTitle.vue";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import user from "../services/user.js";

export default {
  components: {
    fundooTitle,
  },

  name: "register",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
    },

    userLoggedIn: false,
    sending: false,
    lastUser: null,
  }),

  validations: {
    form: {
      email: {
        required,
        email,
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
    
    forgotPassword() {
      this.sending = true;
      let data = {
        emailId: this.form.email,
      };
      user
        .forgotPassword(data)
        .then((data) => {
          console.warn("login detatils result is1 ", data);
          window.setTimeout(() => {
            this.userLoggedIn = true;
            this.sending = false;
            alert("email has been sent to you please verify!");
          }, 1500);
        })
        .catch((error) => console.warn("error for login is ", error));
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.forgotPassword();
      }
    },
  },
};
</script>
<style scoped>
@import url("../scss/login.scss");
</style>
