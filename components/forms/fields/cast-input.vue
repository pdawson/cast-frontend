<template>
    <ValidationProvider
        v-slot="{ errors, valid, pristine }"
        :vid="vid"
        :name="$attrs.name || $attrs.label"
        :rules="rules"
    >
        <b-field
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': !pristine && valid }"
            :message="errors.length ? errors : message"
            :label-for="vid"
            class="mb-4"
        >
            <b-input :id="vid" v-model="model" v-bind="$attrs" />
        </b-field>
    </ValidationProvider>
</template>

<script>
export default {
    props: {
        vid: {
            type: String,
            required: true,
            default: '',
        },
        rules: {
            type: [Object, String],
            default: '',
        },
        value: {
            type: null,
            required: false,
            default: () => null,
        },
        message: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    computed: {
        model: {
            get() {
                return this.internalValue;
            },
            set(value) {
                this.$emit('input', value);
            },
        },
    },
    watch: {
        value(newValue) {
            this.internalValue = newValue;
        },
    },
};
</script>
