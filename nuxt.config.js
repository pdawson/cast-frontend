require('dotenv').config();

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'cast',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Multi-server vHost management for nginx',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    loading: {
        color: '#3273dc',
        height: '3px',
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['@/assets/scss/app.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['@/plugins/vee-validate', '~/plugins/components'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/google-fonts',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/buefy
        ['nuxt-buefy', { css: false }],
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv',
        '@nuxtjs/auth-next',
        '@nuxtjs/router',
    ],

    googleFonts: {
        families: {
            Oxygen: true,
            'Fira+Code': true,
        },
        display: 'swap',
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseUrl: process.env.API_URL,
        https: process.env.HTTPS,
        progress: true,
        retry: false,
        debug: process.env.NODE_ENV !== 'production',
        auth: true,
    },

    // Global route middleware, everything is authed except the login page
    router: {
        middleware: ['auth'],
    },

    // Auth module configuration (https://dev.auth.nuxtjs.org/api/auth/)
    auth: {
        redirect: {
            home: false,
        },
        strategies: {
            // JWT Provider (https://dev.auth.nuxtjs.org/providers/laravel-jwt)
            api: {
                provider: 'laravel/jwt',
                url: process.env.API_URL,
                endpoints: {
                    login: {
                        url: '/auth/token',
                        method: 'post',
                    },
                    refresh: {
                        url: '/auth/refresh',
                        method: 'get',
                    },
                    user: {
                        url: '/auth/user',
                        method: 'get',
                    },
                    logout: {
                        url: '/auth/logout',
                        method: 'post',
                    },
                },
                token: {
                    property: 'access_token',
                    maxAge: (process.env.JWT_TTL || 60) * 60,
                },
                refreshToken: {
                    maxAge: (process.env.JWT_REFRESH_TTL || 21600) * 60,
                },
                autoLogout: true,
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        analyze: process.env.NODE_ENV !== 'production',
        devtools: true,
        transpile: ['vee-validate/dist/rules'],
    },
};
