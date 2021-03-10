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
Vue.use(Router);

export default new Router({
    mode: 'history',
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
    ],
});

// export default new Router({
//     routes: [{
//             path: '/',
//             name: 'register',
//             component: register
//         },
//         {
//             path: '/register',
//             name: 'Register',
//             component: register
//         }
//     ]
// })