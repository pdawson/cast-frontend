<template>
    <main class="servers">
        <page-title title="Create Server">
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
                        <a href="#" aria-current="page">Create Server</a>
                    </li>
                </ul>
            </nav>
        </page-title>

        <section class="section">
            <div class="container">
                <server-form />
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
};
</script>
