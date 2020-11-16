<template>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="card mb-5">
                <header class="card-header">
                    <p class="card-header-title">User Details</p>
                </header>
                <div class="card-content">
                    <cast-input
                        v-model="data.name"
                        vid="name"
                        rules="required|max:255"
                        type="text"
                        label="Your Name"
                    />

                    <cast-input
                        v-model="data.email"
                        vid="hostname"
                        rules="required|email|max:255"
                        type="email"
                        label="Email Address"
                        autocomplete="current-password"
                        :disabled="editing"
                    />

                    <div v-if="editing" class="columns">
                        <div class="column">
                            <cast-input
                                v-model="data.password"
                                vid="password"
                                rules="min:6|max:255|confirmed:password_confirmation"
                                type="password"
                                label="New Password"
                                autocomplete="new-password"
                                message="To change the users password, enter a new one"
                            />
                        </div>

                        <div class="column">
                            <cast-input
                                v-model="data.password_confirmation"
                                vid="password_confirmation"
                                rules=""
                                type="password"
                                label="New Password Confirmation"
                                autocomplete="new-password"
                            />
                        </div>
                    </div>
                    <div v-else class="columns">
                        <div class="column">
                            <cast-input
                                v-model="data.password"
                                vid="password"
                                rules="required|min:6|max:255"
                                type="password"
                                label="Password"
                                autocomplete="new-password"
                            />
                        </div>

                        <div class="column">
                            <cast-input
                                v-model="data.password_confirmation"
                                vid="password_confirmation"
                                rules="required|same_as:password"
                                type="password"
                                label="Password Confirmation"
                                autocomplete="new-password"
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
                    <span v-if="creating">Create</span>
                    <span v-else>Edit</span>
                    User
                </b-button>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
const defaults = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
};

export default {
    name: 'user-form',
    props: {
        resource: {
            type: Object,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {
            data: { ...defaults, ...this.resource },
            submitting: false,
            entity: this.resource || {},
        };
    },
    computed: {
        editing() {
            return this.entity && this.entity.id;
        },
        creating() {
            return !this.editing;
        },
    },
    watch: {
        resource: {
            deep: true,
            immediate: true,
            handler(value) {
                this.entity = value || {};
                this.data = { ...defaults, ...this.entity };
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
