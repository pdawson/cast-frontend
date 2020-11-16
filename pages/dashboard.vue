<template>
    <main class="dashboard">
        <page-title title="Dashboard" :subtitle="subtitle" />

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <stats-widget />
                    </div>
                    <div class="column">
                        <info-widget />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { interopDefault } from '~/utils';
const StatsWidget = () =>
    interopDefault(
        import(
            /* webpackChunkName: "widgets" */ '@/components/widgets/stats-widget.vue'
        )
    );
const InfoWidget = () =>
    interopDefault(
        import(
            /* webpackChunkName: "widgets" */ '@/components/widgets/info-widget.vue'
        )
    );

export default {
    components: {
        StatsWidget,
        InfoWidget,
    },
    middleware: 'auth',
    computed: {
        subtitle() {
            return `Welcome back, ${this.user.name}`;
        },
        user() {
            return this.$auth.user;
        },
    },
};
</script>
