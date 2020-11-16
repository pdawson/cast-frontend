<template>
    <div class="setting-field">
        <cast-input
            v-model="model"
            :vid="name"
            :rules="rules"
            type="text"
            :label="setting.name"
            :placeholder="setting.value"
            :message="setting.description"
        />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: 'input',
        },
        rules: {
            type: [Object, String],
            default: '',
        },
    },
    computed: {
        setting() {
            const parent = this.getParent();

            return parent && parent.getSetting(this.name);
        },
        model: {
            get() {
                const parent = this.getParent();

                return (parent && parent.getFieldModel(this.name)) || '';
            },
            set(value) {
                const parent = this.getParent();

                parent && parent.setFieldValue(this.name, value);
            },
        },
    },
    methods: {
        getParent() {
            let p = this.$parent;
            while (typeof p !== 'undefined') {
                // eslint-disable-next-line no-underscore-dangle
                if (p.$options._componentTag === 'setting-editor') {
                    return p;
                }
                p = p.$parent;
            }
            return null;
        },
    },
};
</script>
