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
              autocomplete="off"
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
              <router-link to="/forgotpassword">Forgot Password</router-link>
            </span>
          </md-card-actions>
        </md-card-content>
        <md-card-content>
          <md-card-actions>
            <span>
              <router-link to="/register">Create account</router-link>
            </span>
            <v-spacer> </v-spacer>
            <md-button
              type="submit"
              class="md-raised md-primary"
              :disabled="sending"
              >Login</md-button
            >
          </md-card-actions>
        </md-card-content>
      </md-card>
      <md-snackbar :md-active.sync="userLoggedIn"
        >The user {{ User }} is logged in!</md-snackbar
      >
      <md-snackbar :md-active.sync="userNotLoggedIn"
        >Could not login, Please verify your emailId and try again!</md-snackbar
      >
    </form>
  </div>
</template>

<script>
import router from '../router/route.js';
import fundooTitle from '../components/fundooTitle.vue';
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import user from '../services/user.js';
export default {
  components: {
    fundooTitle,
  },
  name: 'register',
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
      password: null,
    },
    userLoggedIn: false,
    userNotLoggedIn: false,
    sending: false,
    User: null,
  }),
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
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
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.email = null;
      this.form.password = null;   
    },
    loginUser() {
      this.sending = true;
      let data = {
        emailId: this.form.email,
        password: this.form.password,
      };
      user
        .loginUser(data)
        .then((data) => { 
          sessionStorage.setItem('token', data.data.token);
          sessionStorage.setItem('firstName', data.data.user[0].firstName);
          sessionStorage.setItem('lastName', data.data.user[0].lastName);
          sessionStorage.setItem('emailId', data.data.user[0].emailId);
            window.setTimeout(() => {
            this.userLoggedIn = true;
            this.sending = false;
            this.clearForm();
             router.push({ name: 'dashboard' });
                }, 4000);  
        })
        .catch((error) => {this.userNotLoggedIn = true;
         this.sending = false;
        console.warn('error for login is ', error);});
            router.push({ name: 'login' });
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loginUser();
      }
    },
  },
};
</script>
<style scoped>
@import url("../scss/login.scss");
</style>