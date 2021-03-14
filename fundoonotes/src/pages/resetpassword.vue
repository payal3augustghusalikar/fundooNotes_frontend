<template>
  <div>
    <form novalidate class="md-layout jc-center reset" @submit.prevent="validateUser">
      <md-card
        class="md-layout-item md-size-50 md-small-size-120 overflow-y overflow-x "
      >
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-card-header>
              <md-card-title>
                <fundooTitle />
              </md-card-title>
              <v-card-title>
                Reset Password
              </v-card-title>
            </md-card-header>
            <md-card-content>
             
                <div class="md-layout-item md-small-size-100">
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
                    <span
                      class="md-error"
                      v-else-if="!$v.form.password.minlength"
                      >Password should contain minimum 4 charecters
                    </span>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('password')">
                    <label for="cpassword">Confirm</label>
                    <md-input
                      name="cpassword"
                      type="password"
                   
                      v-model="form.cpassword"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.cpassword.required"
                      >The confirm password is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.cpassword.minlength"
                      >Confirm Password should contain minimum 4 charecters
                    </span>
                  </md-field>
                </div>
         
              <p class="password-hint">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </md-card-content>
            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-content>
              <md-card-actions>
                <span>
                    <router-link to="/login">sign in instead</router-link>
                </span>
                <v-spacer> </v-spacer>
                <md-button
                  type="submit"
                  class="md-raised md-primary"
                  :disabled="sending"
                  >Reset</md-button
                >
              </md-card-actions>
            </md-card-content>
          </div>
        </div>
        <md-snackbar :md-active.sync="isPasswordReset"
          >Password has been reset, please
          login!</md-snackbar
        >
         <md-snackbar :md-active.sync="isPasswordReset"
          >Error occured, Please try again!</md-snackbar
        >
      </md-card>
    </form>
  </div>
</template>

<script>
import router from '../router/route.js';
import fundooTitle from '../components/fundooTitle.vue';

import { validationMixin } from 'vuelidate';

import { required, minLength } from 'vuelidate/lib/validators';

import user from '../services/user.js';

export default {
  components: {
    fundooTitle,
  },

  name: 'register',
  mixins: [validationMixin],
  data: () => ({
    form: {
      password: null,
      cpassword: null,
    },
isPasswordNotReset: false,
   isPasswordReset: false,
    sending: false,
   
  }),

  validations: {
    form: {
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
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.password = null;
      this.form.cpassword = null;
        router.push({ name: 'login' });
    },
    resetPassword() {
      this.sending = true;
      let data = {
        newPassword: this.form.password,
        confirmPassword:this.form.cpassword,
       
      };
       const  token = this.$route.params.token;
       console.log('token 1',token );
      user
        .resetPassword(data, token)
        .then((result) => {
          console.log('Success', result);
             window.setTimeout(() => {
            this.isPasswordReset = true;
            this.sending = false;
            this.clearForm();
             }, 4000);
        }).catch((error) => {
          this.isPasswordNotReset = true;
           console.warn('error ', error);
        } );
        
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.resetPassword();
      }
    },
  },
};
</script>
<style scoped>
@import url("../scss/resetPassword.scss");
</style>
