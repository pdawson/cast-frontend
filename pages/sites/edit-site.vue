<template>
    <main class="sites">
        <page-title title="Edit Site">
            <nav
                class="breadcrumb has-arrow-separator"
                aria-label="breadcrumbs"
            >
                <ul>
                    <li>
                        <router-link :to="{ name: 'sites.manage' }">
                            Sites
                        </router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">Edit Site</a>
                    </li>
                </ul>
            </nav>
        </page-title>

        <section class="section">
            <div class="container">
                <site-form :resource="resource" />
            </div>
        </section>
    </main>
</template>

<script>
import SiteForm from '@/components/forms/site-form.vue';

export default {
    components: {
        SiteForm,
    },
    data() {
        return {
            resource: {},
        };
    },
    async fetch() {
        try {
            const response = await this.$axios.get(
                `sites/${this.$route.params.id}`
            );

            const { site, settings } = response.data;
            this.resource = {
                ...site,
                settings,
            };
        } catch (error) {
            console.error('failed to fetch site');
            // return 404 or something...
        }
    },
    watch: {
        '$route.params': '$fetch',
    },
};
</script>
