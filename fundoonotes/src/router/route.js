import Vue from 'vue';
import Router from 'vue-router';
import register from '../pages/register.vue';
import login from '../pages/login.vue';
import forgotPassword from '../pages/forgotPassword.vue';
import resetPassword from '../pages/resetPassword.vue';
import dashboard from '../components/dashboard.vue';
import noteCards from '../components/noteCards.vue';
import trashNotes from '../components/trashNotes.vue';
import archieved from '../components/archieved.vue';

Vue.use(Router);

function lazyLoad(view) {
    return () =>
        import (`@/components/${view}.vue`);
}

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'register',
            component: register,
        },

        {
            path: '/register',
            name: 'register',
            component: register,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/dashboard/',
            name: 'dashboard',
            component: dashboard,
            children: [{
                    path: '/notes',
                    name: 'Note',
                    // component: noteCards,
                    component: lazyLoad('noteCards')
                },
                {
                    path: '/trash',
                    name: 'Trash',
                    component: trashNotes,

                },

                {
                    path: '/archieved',
                    name: 'Archieved',
                    component: archieved,

                },

            ]

        },
        {
            path: '/forgotpassword',
            name: 'forgotPassword',
            component: forgotPassword,
        },
        {
            path: '/resetpassword/:token',
            name: 'resetPassword',
            component: resetPassword,
        }

    ]

});