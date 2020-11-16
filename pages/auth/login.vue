<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop">
                <div class="block">
                    <logo />
                </div>
                <login-form />
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/forms/login-form.vue';

export default {
    name: 'auth-login',
    components: {
        LoginForm,
    },
    layout: 'full-page',
    auth: 'guest',
};
</script>
