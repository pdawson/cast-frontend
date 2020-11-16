<template>
    <div class="page-title hero is-light">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column has-text-centered has-text-left-tablet">
                        <h1 class="title">{{ title }}</h1>
                        <h2 v-if="subtitle || subtitleLoading" class="subtitle">
                            <b-skeleton
                                v-if="subtitleLoading"
                                :active="subtitle && subtitleLoading"
                            />
                            <span v-else>{{ subtitle }}</span>
                        </h2>
                    </div>
                    <div v-if="$slots.default" class="column page-title-right is-flex is-justify-content-center">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            default: '',
        },
        subtitleLoading: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            loadingSubtitle: this.subtitleLoading,
        };
    },
};
</script>
