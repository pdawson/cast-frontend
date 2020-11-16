import Vue from 'vue';
import VueRouter from 'vue-router';

import { interopDefault } from '@/utils';

// Auth
const AuthLogin = () =>
    interopDefault(
        import(/* webpackChunkName: "auth" */ '@/pages/auth/login.vue')
    );
const UserProfile = () =>
    interopDefault(
        import(/* webpackChunkName: "auth" */ '@/pages/users/profile.vue')
    );

// Sections
const Dashboard = () =>
    interopDefault(
        import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard.vue')
    );
const Servers = () =>
    interopDefault(
        import(/* webpackChunkName: "servers" */ '@/pages/servers/servers.vue')
    );
const ServersCreate = () =>
    interopDefault(
        import(
            /* webpackChunkName: "servers" */ '@/pages/servers/create-server.vue'
        )
    );
const ServersEdit = () =>
    interopDefault(
        import(
            /* webpackChunkName: "servers" */ '@/pages/servers/edit-server.vue'
        )
    );
const Sites = () =>
    interopDefault(
        import(/* webpackChunkName: "sites" */ '@/pages/sites/sites.vue')
    );
const SitesCreate = () =>
    interopDefault(
        import(/* webpackChunkName: "sites" */ '@/pages/sites/create-site.vue')
    );
const SitesEdit = () =>
    interopDefault(
        import(/* webpackChunkName: "sites" */ '@/pages/sites/edit-site.vue')
    );
const Users = () =>
    interopDefault(
        import(/* webpackChunkName: "users" */ '@/pages/users/users.vue')
    );
const UsersCreate = () =>
    interopDefault(
        import(/* webpackChunkName: "sites" */ '@/pages/users/create-user.vue')
    );
const UsersEdit = () =>
    interopDefault(
        import(/* webpackChunkName: "sites" */ '@/pages/users/edit-user.vue')
    );

Vue.use(VueRouter);

const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: AuthLogin,
    },
];

const baseRoutes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
];

const serverRoutes = [
    {
        path: '/servers',
        name: 'servers.manage',
        component: Servers,
    },
    {
        path: '/servers/create',
        name: 'servers.create',
        component: ServersCreate,
    },
    {
        path: '/servers/:id',
        name: 'servers.edit',
        component: ServersEdit,
    },
    {
        path: '/servers/:server/sites',
        name: 'servers.sites',
        component: Sites,
    },
    {
        path: '/servers/:server/sites/create',
        name: 'servers.sites.create',
        component: SitesCreate,
    },
];

const siteRoutes = [
    {
        path: '/sites',
        name: 'sites.manage',
        component: Sites,
    },
    {
        path: '/sites/create',
        name: 'sites.create',
        component: SitesCreate,
    },
    {
        path: '/sites/:id',
        name: 'sites.edit',
        component: SitesEdit,
    },
];

const userRoutes = [
    {
        path: '/users',
        name: 'users.manage',
        component: Users,
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: UsersCreate,
    },
    {
        path: '/users/:id',
        name: 'users.edit',
        component: UsersEdit,
    },
    {
        path: '/profile',
        name: 'users.profile',
        component: UserProfile,
    },
];

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-exact-active',
        routes: [
            ...authRoutes,
            ...baseRoutes,
            ...serverRoutes,
            ...siteRoutes,
            ...userRoutes,
        ],
    });
}
