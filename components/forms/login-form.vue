<template>
    <div class="box">
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <cast-input
                    v-model="data.email"
                    vid="email"
                    rules="required|email|max:255"
                    type="email"
                    label="Email Address"
                    autocomplete="email"
                />

                <cast-input
                    v-model="data.password"
                    vid="password"
                    rules="required|min:6|max:255"
                    type="password"
                    label="Password"
                    autocomplete="current-password"
                />

                <div class="buttons mt-5">
                    <b-button
                        type="is-link"
                        native-type="submit"
                        :loading="submitting"
                    >
                        Login
                    </b-button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
export default {
    name: 'login-form',
    data() {
        return {
            data: {
                email: 'me@pauldawson.me',
                password: 'secret',
            },
            submitting: false,
        };
    },
    methods: {
        async onSubmit() {
            this.submitting = true;

            try {
                await this.$auth.loginWith('api', { data: this.data });
                await this.$store.dispatch('settings/load');

                if (this.$auth.$state.redirect) {
                    await this.$router.push(this.$auth.$state.redirect);
                } else {
                    this.$auth.redirect('home');
                }
            } catch (error) {
                console.error(error);
                console.error(error.response || 'No response data');
            }
        },
    },
};
</script>
