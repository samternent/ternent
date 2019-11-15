export default {
    namespaced: true,
    state: {
        user: {
            email: '',
        },
    },
    mutations: {
        user(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        login({ commit }, user) {
            commit('user', user);
        },
    },
}
