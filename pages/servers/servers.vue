<template>
    <main class="servers">
        <page-title title="Servers">
            <b-button
                type="is-success"
                tag="router-link"
                :to="{ name: 'servers.create' }"
            >
                Create Server
            </b-button>
        </page-title>

        <section class="section">
            <div class="container">
                <data-table endpoint="servers">
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

                    <b-table-column v-slot="item" field="hostname" label="Hostname">
                        <code>{{ item.row.hostname }}</code>
                    </b-table-column>

                    <b-table-column v-slot="item" field="path" label="Path">
                        <code>{{ item.row.path }}</code>
                    </b-table-column>

                    <b-table-column v-slot="item" class="actions" centered>
                        <b-button
                            type="is-warning is-light"
                            size="is-small"
                            icon-left="magnify"
                            tag="router-link"
                            :to="{
                                name: 'servers.sites',
                                params: { server: item.row.id },
                            }"
                        >
                            Sites
                        </b-button>
                        <b-button
                            type="is-info is-light"
                            size="is-small"
                            icon-left="pencil"
                            tag="router-link"
                            :to="{
                                name: 'servers.edit',
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
