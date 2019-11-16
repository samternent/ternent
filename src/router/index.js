import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

Vue.use(VueRouter);

const Login = () => import('../pages/Login.vue');
const Dashboard = () => import('../pages/Dashboard.vue');
const Signup = () => import('../pages/Signup.vue');
const Home = () => import('../pages/Home.vue');
const Create = () => import('../pages/Create.vue');
// const NewGame = () => import('../pages/NewGame.vue');
const Chunk = () => import('../pages/Chunk.vue');
// const Play = () => import('../pages/Play.vue');
// const Table = () => import('../pages/Table.vue');

export const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'signup',
        path: '/signup',
        component: Signup,
    },
    {
        name: 'home',
        path: '/',
        meta: {
            requiresAuth: true,
        },
        component: Home,
        children: [
            {
                name: 'dashboard',
                path: '/',
                component: Dashboard,
            },
            {
                name: 'create',
                path: '/create',
                component: Create,
            },
            {
                name: 'chunk',
                path: '/chunk/:slug',
                component: Chunk,
                children: [
                    {
                        name: '/create',
                        path: ':id',
                        component: {
                            render: ()=> {}
                        },
                    },
                ],
            },
            {
                path: '*',
                redirect: '/',
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from ,next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next({ name: 'login' });
    } else if (!requiresAuth && currentUser) {
        next({ name: 'home' });
    } else {
        next();
    }
});

export default router;
