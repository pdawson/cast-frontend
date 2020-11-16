<template>
    <b-navbar wrapper-class="container" :fixed-top="true" :shadow="true">
        <template slot="brand">
            <b-navbar-item
                name="Cast"
                tag="router-link"
                :to="{ name: 'dashboard' }"
                :active="false"
            >
                <logo />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item
                tag="router-link"
                :to="{ name: 'dashboard' }"
                class="requires-exact-active"
            >
                Dashboard
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'servers.manage' }">
                Servers
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'sites.manage' }">
                Sites
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'users.manage' }">
                Users
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-dropdown v-if="user">
                <template #label>
                    <span class="avatar-image box is-light p-0 mr-2">
                        <b-image
                            :src="user.avatar"
                            :alt="user.name"
                            class="is-24x24"
                            rounded
                        />
                    </span>
                    {{ user.name }}
                </template>

                <b-navbar-item
                    tag="router-link"
                    :to="{ name: 'users.profile' }"
                >
                    Profile
                </b-navbar-item>
                <b-navbar-item @click="onLogout">Logout</b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$auth.user;
        },
    },
    methods: {
        async onLogout() {
            await this.$auth.logout();
            await this.$router.push({ name: 'login' });
        },
    },
};
</script>
