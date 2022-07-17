import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'pages/register',
            component: () => import('@/layouts/Layout'),
            children: [
                {
                    name: 'Profile',
                    path: 'pages/profile',
                    component: () => import('@/views/pages/Profile'),
                },
                {
                    name: 'Register',
                    path: 'pages/register',
                    component: () => import('@/views/pages/Register'),
                },
                {
                    name: 'Login',
                    path: 'pages/Login',
                    component: () => import('@/views/pages/Login'),
                },
                { path: "*",  redirect: 'pages/register' }
            ]
        },
    ],
})