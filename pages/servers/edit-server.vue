<template>
    <main class="servers">
        <page-title title="Edit Server">
            <nav
                class="breadcrumb has-arrow-separator"
                aria-label="breadcrumbs"
            >
                <ul>
                    <li>
                        <router-link :to="{ name: 'servers.manage' }">
                            Servers
                        </router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">Edit Server</a>
                    </li>
                </ul>
            </nav>
        </page-title>

        <section class="section">
            <div class="container">
                <server-form :resource="resource" />
            </div>
        </section>
    </main>
</template>

<script>
import ServerForm from '@/components/forms/server-form.vue';

export default {
    components: {
        ServerForm,
    },
    data() {
        return {
            resource: {},
        };
    },
    async fetch() {
        try {
            const response = await this.$axios.get(
                `servers/${this.$route.params.id}`
            );

            const { server, settings } = response.data;
            this.resource = {
                ...server,
                settings,
            };
        } catch (error) {
            console.error('failed to fetch server');
            // return 404 or something...
        }
    },
    watch: {
        '$route.params': '$fetch',
    },
};
</script>
