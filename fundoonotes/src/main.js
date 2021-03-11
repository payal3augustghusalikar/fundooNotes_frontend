import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";

import Vuetify from "vuetify/lib/framework";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import router from "./router/route.js";
import "./services/axios";
Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
    router: router,
    vuetify: new Vuetify(),
    render: (h) => h(App),
}).$mount("#app");