<template>
    <div class="is-light is-fullheight">
        <navbar />

        <nuxt />

        <cast-footer />
    </div>
</template>

<script>
import { interopDefault } from '~/utils';

const Navbar = () =>
    interopDefault(
        import(
            /* webpackChunkName: "components" */ '@/components/layout/navbar.vue'
        )
    );
const Footer = () =>
    interopDefault(
        import(
            /* webpackChunkName: "components" */ '@/components/layout/footer.vue'
        )
    );

export default {
    components: {
        Navbar,
        'cast-footer': Footer,
    },
};
</script>
