
<template>
  <div>
    <form novalidate class="md-layout jc-center reset"  @submit.prevent="verifyAndLogin">
      <md-card
        class="md-layout-item md-size-50 md-small-size-120 overflow-y overflow-x "
      >
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-card-header>
              <h4>
            <md-card-title class="title">
              <fundooTitle />
            </md-card-title>
          </h4>
            </md-card-header>
       <br>
            <md-card-content>
              <md-card-actions>
                <h4>
            <md-button
              type="submit"
              class="md-raised md-primary"
              :disabled="sending"
              >Verify Here</md-button
            >
          </h4>
              </md-card-actions>
            </md-card-content>
          </div>
        </div> 
      </md-card>
    </form>
  </div>
</template>

<script>
import router from "../router/route.js";
import fundooTitle from "../components/fundooTitle.vue";

export default {
  components: {
    fundooTitle,
  },
  name: "App",
  methods: {
    verifyAndLogin() {
      alert("Email Verifies Successfullly, please login.");
      router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
@import url("../scss/verifyemail.scss");
</style>
