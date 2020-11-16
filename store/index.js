export const getters = {
    isLoggedIn(state) {
        return state.auth.loggedIn;
    },
    loggedInUser(state) {
        return state.auth.user;
    },
};

export const actions = {
    async nuxtServerInit({ dispatch }, { $auth }) {
        if ($auth.loggedIn) {
            await dispatch('settings/load');
        }
    },
};
