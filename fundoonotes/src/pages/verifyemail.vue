
<template>
  <div>
    <form novalidate class="md-layout jc-center verify"  @submit.prevent="verifyAndLogin">
      <md-card
        class="md-layout-item md-size-80 md-small-size-100 overflow-y overflow-x "
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
              class="md-raised md-primary verify-button"
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
      router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
@import url("../scss/verifyemail.scss");
</style>
