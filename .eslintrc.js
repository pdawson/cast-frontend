module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'prettier/vue',
        'plugin:prettier/recommended',
    ],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/component-definition-name-casing': ['error', 'kebab-case'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
