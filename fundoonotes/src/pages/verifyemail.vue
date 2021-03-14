<template>
  <div>
    <form
      novalidate
      class="md-layout jc-center verify"
      @submit.prevent="verifyAndLogin"
    >
      <md-card
        class="md-layout-item md-size-80 md-small-size-100 overflow-y overflow-x "
      >
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-card-header>
              <md-card-title class="title">
                <fundooTitle />
              </md-card-title>
            </md-card-header>
            <br />
            <md-card-content>
              <md-card-actions>
                <md-button
                  type="submit"
                  class="md-raised md-primary verify-button"
                  >Verify Your Email</md-button
                >
              </md-card-actions>
            </md-card-content>
          </div>
        </div>
        <md-snackbar :md-active.sync="isVerified"
          >Email has been verified, please login!</md-snackbar
        >
        <md-snackbar :md-active.sync="isNotVerified"
          >Please Verify your email Id!</md-snackbar
        >
      </md-card>
    </form>
  </div>
</template>

<script>
import router from '../router/route.js';
import fundooTitle from '../components/fundooTitle.vue';
import user from '../services/user.js';
export default {
  components: {
    fundooTitle,
  },
  name: 'App',
   data: () => ({
    isNotVerified: false,
    isVerified: false,
  }),

  methods: {
   verifyAndLogin() {
   const  token = this.$route.params.token;
   console.log('verify ');
   user.verifyAndLogin(token)
        .then((result) => {
          console.log('Success', result);
            window.setTimeout(() => {
            this.isVerified = true;
            router.push({ name: 'login' });
             }, 4000);
        }).catch((error) => {
          this.isNotVerified = true;
           console.warn('error ', error);
        });
   }
}
};
</script>

<style scoped>
@import url("../scss/verifyEmail.scss");
</style>
