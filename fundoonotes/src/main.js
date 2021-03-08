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
//import register from "./pages/register.vue";
import router from './router/route.js'
// const routes = [{
//         path: '/',
//         name: 'register',
//         component: register
//     },
//     {
//         path: '/register',
//         name: 'Register',
//         component: register
//     }
// ]


// const router = new VueRouter({
//     routes
// })


Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.config.productionTip = false

new Vue({
    router: router,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app')