<template>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="card mb-5">
                <header class="card-header">
                    <p class="card-header-title">Profile</p>
                </header>
                <div class="card-content">
                    <cast-input
                        v-model="data.name"
                        vid="name"
                        rules="required|max:255|alpha_spaces"
                        type="text"
                        label="Your Name"
                    />

                    <cast-input
                        v-model="data.email"
                        vid="hostname"
                        rules="required|email|max:255"
                        type="email"
                        label="Email Address"
                        disabled
                    />

                    <cast-input
                        v-model="data.current_password"
                        vid="current_password"
                        rules="required|min:6|max:255"
                        type="password"
                        label="Current Password"
                    />

                    <div class="columns">
                        <div class="column">
                            <cast-input
                                v-model="data.password"
                                vid="password"
                                rules="min:6|max:255|confirmed:password_confirmation"
                                type="password"
                                autocomplete="new-password"
                                label="New Password"
                            />
                        </div>

                        <div class="column">
                            <cast-input
                                v-model="data.password_confirmation"
                                vid="password_confirmation"
                                rules=""
                                type="password"
                                autocomplete="new-password"
                                label="New Password Confirmation"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="buttons mt-5">
                <b-button
                    type="is-link"
                    native-type="submit"
                    :loading="submitting"
                >
                    Update Profile
                </b-button>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
const defaults = {
    name: '',
    email: '',
    current_password: '',
    password: '',
    password_confirmation: '',
};

export default {
    name: 'profile-form',
    data() {
        return {
            data: { ...defaults, ...this.resource },
            submitting: false,
        };
    },
    computed: {
        resource() {
            return this.$auth.user;
        },
    },
    watch: {
        resource: {
            immediate: true,
            handler(value) {
                this.data = { ...defaults, ...value };
            },
        },
    },
    methods: {
        onSubmit() {
            this.submitting = true;

            console.log('submitting');
        },
    },
};
</script>
