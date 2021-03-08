import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib/framework';
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.config.productionTip = false

new Vue({
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app')