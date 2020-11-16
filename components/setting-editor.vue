<template>
    <div class="setting-editor">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Array,
            required: false,
            default: () => [],
        },
    },
    data() {
        return {
            fields: this.value,
        };
    },
    computed: {
        settings() {
            return this.$store.getters['settings/settings'] || [];
        },
    },
    methods: {
        getFieldModel(key) {
            const field = this.getField(key);

            return (field && field.value) || null;
        },
        setFieldValue(key, value) {
            const setting = this.getSetting(key);
            const settingId = (setting && setting.id) || null;
            const field = this.fields.filter(
                (field) => field.id === settingId
            );

            if (field && field[0]) {
                this.fields[this.fields.indexOf(field[0])].value = value;
            } else {
                this.fields.push({
                    id: settingId,
                    value,
                });
            }
        },
        getField(key) {
            const setting = this.getSetting(key);
            const filtered = this.fields.filter(
                (field) => field.id === setting.id
            );

            return (filtered && filtered[0]) || null;
        },
        getSetting(key) {
            const setting = this.settings.filter(
                (setting) => setting.key === key
            );

            return (setting && setting[0]) || null;
        },
    },
};
</script>
