<template>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="card mb-5">
                <header class="card-header">
                    <p class="card-header-title">Details</p>
                </header>
                <div class="card-content">
                    <cast-input
                        v-model="data.name"
                        vid="name"
                        rules="required|alpha_spaces|max:255"
                        type="text"
                        label="Server Name"
                    />

                    <div class="columns">
                        <div class="column">
                            <cast-input
                                v-model="data.hostname"
                                vid="hostname"
                                :rules="{
                                    required: true,
                                    max: 255,
                                    regex: /^(?=.{1,253}\.?$)(?:(?!-|[^.]+_)[A-Za-z0-9-_]{1,63}(?<!-)(?:\.|$)){2,}$/,
                                }"
                                type="text"
                                label="Hostname"
                                placeholder="e.g. example.com"
                            />
                        </div>

                        <div class="column">
                            <cast-input
                                v-model="data.path"
                                vid="path"
                                :rules="{
                                    required: true,
                                    regex: /^\/$|(\/[a-zA-Z_0-9-]+)+$/,
                                }"
                                type="text"
                                label="WWW Path"
                                placeholder="e.g. /var/www"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <setting-editor v-model="data.settings">
                <div class="card mb-5">
                    <header class="card-header">
                        <p class="card-header-title">Nginx</p>
                    </header>
                    <div class="card-content">
                        <div class="columns">
                            <div class="column">
                                <setting-input
                                    name="nginx-user"
                                    rules="alpha_num"
                                />
                            </div>
                            <div class="column">
                                <setting-input
                                    name="nginx-group"
                                    rules="alpha_num"
                                />
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <setting-input name="client-max-body-size" />
                            </div>
                            <div class="column">
                                <setting-input name="server-tokens" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5">
                    <header class="card-header">
                        <p class="card-header-title">Security</p>
                    </header>
                    <div class="card-content">
                        <setting-input name="ssl-protocols" />
                        <setting-input name="referrer-policy" />
                        <setting-input name="content-security-policy" />

                        <div class="columns">
                            <div class="column">
                                <setting-input name="lets-encrypt-root" />
                            </div>
                            <div class="column">
                                <setting-input name="lets-encrypt-dir" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5">
                    <header class="card-header">
                        <p class="card-header-title">Performance</p>
                    </header>
                    <div class="card-content">
                        <div class="columns">
                            <div class="column">
                                <setting-input name="enable-gzip" />
                            </div>
                            <div class="column">
                                <setting-input name="enable-brotli" />
                            </div>
                        </div>
                        <div class="columns is-multiline">
                            <div class="column is-half is-one-quarter-desktop">
                                <setting-input name="expiration-assets" />
                            </div>
                            <div class="column is-half is-one-quarter-desktop">
                                <setting-input name="expiration-media" />
                            </div>
                            <div class="column is-half is-one-quarter-desktop">
                                <setting-input name="expiration-svg" />
                            </div>
                            <div class="column is-half is-one-quarter-desktop">
                                <setting-input name="expiration-fonts" />
                            </div>
                        </div>
                    </div>
                </div>
            </setting-editor>

            <div class="buttons mt-5">
                <b-button
                    type="is-link"
                    native-type="submit"
                    :loading="submitting"
                >
                    <span v-if="creating">Create</span>
                    <span v-else>Edit</span>
                    Server
                </b-button>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
const defaults = {
    name: '',
    hostname: '',
    path: '',
    settings: [],
};

export default {
    name: 'server-form',
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
        };
    },
    computed: {
        editing() {
            return this.resource && this.resource.id;
        },
        creating() {
            return !this.editing;
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
