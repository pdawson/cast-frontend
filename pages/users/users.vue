<template>
    <main class="users">
        <page-title title="Users">
            <b-button
                type="is-success"
                tag="router-link"
                :to="{ name: 'users.create' }"
            >
                Create User
            </b-button>
        </page-title>

        <section class="section">
            <div class="container">
                <data-table endpoint="users">
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

                    <b-table-column
                        v-slot="item"
                        field="email"
                        label="Email Address"
                    >
                        <code>{{ item.row.email }}</code>
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
                                name: 'users.edit',
                                params: { id: item.row.id },
                            }"
                        >
                            Edit
                        </b-button>
                        <b-button
                            v-if="canDelete(item.row.id)"
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
    computed: {
        user() {
            return this.$auth.user || {};
        },
    },
    methods: {
        canDelete(id) {
            return !this.user.id === id;
        },
    },
};
</script>
