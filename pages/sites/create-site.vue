<template>
    <main class="sites">
        <page-title title="Create Site">
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
                        <a href="#" aria-current="page">Create Site</a>
                    </li>
                </ul>
            </nav>
        </page-title>

        <section class="section">
            <div class="container">
                <site-form />
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
};
</script>
