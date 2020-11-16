<template>
    <main class="sites">
        <page-title
            title="Sites"
            :subtitle="subtitle"
            :subtitle-loading="$fetchState.pending"
        >
            <b-button
                v-if="server && server.id"
                class="mr-2"
                icon-left="arrow-left"
                type="is-link"
                tag="router-link"
                :to="{ name: 'servers.manage' }"
            >
                Manage Servers
            </b-button>
            <b-button
                type="is-success"
                tag="router-link"
                :to="createLink"
            >
                Create Site
            </b-button>
        </page-title>

        <section class="section">
            <div class="container">
                <data-table endpoint="sites" :params="params">
                    <b-table-column
                        v-slot="item"
                        field="id"
                        label="ID"
                        width="40"
                        numeric
                    >
                        {{ item.row.id }}
                    </b-table-column>

                    <b-table-column v-slot="item" field="name" label="Name">
                        {{ item.row.name }}
                    </b-table-column>

                    <b-table-column v-slot="item" field="domain" label="Domain">
                        <code>{{ item.row.domain }}</code>
                    </b-table-column>

                    <b-table-column v-slot="item" field="active" label="Active">
                        <b-button v-if="item.row.active" type="is-primary" size="is-small">
                            Active
                        </b-button>
                        <b-button v-else type="is-light" size="is-small">
                            Inactive
                        </b-button>
                    </b-table-column>

                    <b-table-column
                        v-slot="item"
                        class="actions"
                        centered
                    >
                        <b-button
                            type="is-info is-light"
                            size="is-small"
                            icon-left="pencil"
                            tag="router-link"
                            :to="{
                                name: 'sites.edit',
                                params: { id: item.row.id },
                            }"
                        >
                            Edit
                        </b-button>
                        <b-button
                            type="is-danger is-light"
                            size="is-small"
                            icon-left="delete"
                        >
                            Delete
                        </b-button>
                    </b-table-column>
                </data-table>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            server: {},
        };
    },
    async fetch() {
        const resource = this.$route.params.server;

        if (!resource) {
            this.server = {};
            return;
        }

        try {
            const response = await this.$axios.get(`servers/${resource}`);
            const { server } = response.data;

            this.server = server;
        } catch (error) {
            this.server = {};
        }
    },
    computed: {
        subtitle() {
            const server = this.server && this.server.name;

            return server ? `On ${server}` : null;
        },
        params() {
            const serverId = this.$route.params.server;

            return serverId ? { server_id: serverId } : {};
        },
        createLink() {
            const serverId = this.$route.params.server;

            if (serverId) {
                return {
                    name: 'servers.sites.create',
                    params: { server: serverId },
                };
            }

            return { name: 'sites.create' };
        },
    },
    watch: {
        '$route.params': '$fetch',
    },
};
</script>
