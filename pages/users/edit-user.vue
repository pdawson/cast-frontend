<template>
    <main class="sites">
        <page-title title="Edit User">
            <nav
                class="breadcrumb has-arrow-separator"
                aria-label="breadcrumbs"
            >
                <ul>
                    <li>
                        <router-link :to="{ name: 'users.manage' }">
                            Users
                        </router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">Edit User</a>
                    </li>
                </ul>
            </nav>
        </page-title>

        <section class="section">
            <div class="container">
                <user-form :resource="resource" />
            </div>
        </section>
    </main>
</template>

<script>
import UserForm from '~/components/forms/user-form';

export default {
    components: {
        UserForm,
    },
    data() {
        return {
            resource: {},
        };
    },
    async fetch() {
        try {
            const response = await this.$axios.get(
                `users/${this.$route.params.id}`
            );
            const { data } = response.data;

            this.resource = data;
        } catch (error) {
            console.error('failed to fetch user');
            // return 404 or something...
        }
    },
    watch: {
        '$route.params': '$fetch',
    },
};
</script>
