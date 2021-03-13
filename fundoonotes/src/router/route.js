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
import forgotPassword from "../pages/forgotPassword.vue";
import resetPassword from "../pages/resetPassword.vue";
import dashboard from "../components/dashboard.vue";
import verifyEmail from "../pages/verifyEmail.vue";

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
            name: "forgotPassword",
            component: forgotPassword,
        },
        {
            path: "/resetpassword/:token",
            name: "resetPassword",
            component: resetPassword,
        },
        {
            path: "/verifyemail",
            name: "verifyEmail",
            component: verifyEmail,
        },
    ],

});