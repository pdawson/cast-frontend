<template>
    <div class="data-table">
        <b-table
            :data="data"
            :hoverable="true"
            :loading="$fetchState.pending"
            :mobile-cards="true"
            :paginated="hasPagination"
            :per-page="meta.perPage"
            :current-page.sync="meta.page"
            pagination-position="both"
        >
            <slot />

            <template #empty>
                <p v-show="!$fetchState.pending">
                    No records have been created yet.
                </p>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    props: {
        endpoint: {
            type: String,
            required: true,
        },
        params: {
            type: Object,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {
            data: [],
            meta: {
                page: 1,
                perPage: 15,
                total: 0,
                from: null,
                to: null,
            },
        };
    },
    async fetch() {
        const params = this.params || {};
        const response = await this.$axios.get(this.endpoint, { params });
        const { data, meta } = response.data;

        this.data = data;
        this.meta = {
            page: meta.current_page || 1,
            perPage: meta.per_page || 15,
            total: meta.total || 0,
            from: meta.from || null,
            to: meta.to || null,
        };
    },
    computed: {
        hasPagination() {
            const { total, perPage } = this.meta;

            return total > perPage;
        },
    },
    watch: {
        params: '$fetch',
    },
};
</script>
