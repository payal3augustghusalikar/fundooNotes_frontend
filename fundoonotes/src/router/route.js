// import Vue from 'vue'
// import Router from 'vue-router'
// //import HomePage from '@/components/HomePage';
// //import SignUp from '@/components/SignUp';
// import register from "./pages/register.vue";
// Vue.use(Router)

import Vue from "vue";
import Router from "vue-router";
import register from "../pages/register.vue";
import login from "../pages/login.vue";
import forgotpassword from "../pages/forgotpassword.vue";
import resetpassword from "../pages/resetpassword.vue";
import dashboard from "../components/dashboard.vue";
Vue.use(Router);


export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "register",
            component: register,
        },
        {
            path: "/register",
            name: "register",
            component: register,
        },
        {
            path: "/login",
            name: "login",
            component: login,
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: dashboard,
        },

        {
            path: "/forgotpassword",
            name: "forgotpassword",
            component: forgotpassword,
        },
        {
            path: "/resetpassword/:token",
            name: "resetpassword",
            component: resetpassword,
        },
    ],
});