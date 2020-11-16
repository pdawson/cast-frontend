import Vue from 'vue';
import { interopDefault } from '~/utils';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

const Logo = () =>
    interopDefault(
        import(/* webpackChunkName: "components" */ '@/components/logo.vue')
    );
const CastInput = () =>
    interopDefault(
        import(
            /* webpackChunkName: "components" */ '@/components/forms/fields/cast-input.vue'
        )
    );
const PageTitle = () =>
    interopDefault(
        import(
            /* webpackChunkName: "components" */ '@/components/layout/page-title.vue'
        )
    );
const DataTable = () =>
    interopDefault(
        import(
            /* webpackChunkName: "components" */ '@/components/data-table.vue'
        )
    );

const SettingEditor = () =>
    interopDefault(
        import(
            /* webpackChunkName: "settings" */ '@/components/setting-editor.vue'
        )
    );
const SettingInput = () =>
    interopDefault(
        import(
            /* webpackChunkName: "settings" */ '@/components/setting-input.vue'
        )
    );

const components = {
    ValidationProvider,
    ValidationObserver,
    PageTitle,
    DataTable,
    SettingEditor,
    SettingInput,
    CastInput,
    Logo,
};

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
});
