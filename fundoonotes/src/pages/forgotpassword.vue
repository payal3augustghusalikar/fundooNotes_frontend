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
           Enter Your Email
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
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-content> </md-card-content>
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
        <md-snackbar :md-active.sync="isLinkSent"
          >The reset password link is sent to your emailId please reset your
          password</md-snackbar
        >
        <md-snackbar :md-active.sync="isLinkNotSent"
          >Error Occured, please try again!</md-snackbar
        >

      </md-card>
    </form>
  </div>
</template>

<script>

import fundooTitle from '../components/fundooTitle.vue';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
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
    },

    isLinkSent: false,
    isLinkNotSent: false,
    sending: false,
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
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.email = null;
    },
    forgotPassword() {
      this.sending = true;
      let data = {
        emailId: this.form.email,
      };
      user
        .forgotPassword(data)
        .then((result) => {
          console.log('Success', result);
          window.setTimeout(() => {
            this.isLinkSent = true;
            this.sending = false;
            this.clearForm();
          }, 4000);
        })
        .catch((error) => {
          this.isLinkNotSent = true;
          console.warn('error for forget password is ', error);
        } );
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
<style lang="scss" scoped>
@import url("../scss/login.scss");
</style>
