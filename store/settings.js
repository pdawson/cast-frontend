export const state = () => ({
    settings: [],
});

export const getters = {
    setting: (state) => (id) =>
        state.settings.filter((setting) => setting.id === id),
    settings: (state) => state.settings,
};

export const mutations = {
    setSettings(state, settings) {
        state.settings = settings || [];
    },
};

export const actions = {
    async load({ commit }) {
        const { data } = await this.$axios.get('settings');

        commit('setSettings', data.data || []);
    },
};
