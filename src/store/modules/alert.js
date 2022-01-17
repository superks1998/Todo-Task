const state = () => ({
    type: null,
    message: null,
});

const actions = {
    alertSuccess({ commit }, message) {
        commit("ALERT_SUCCESS", message);
    },
    alertError({ commit }, message) {
        commit("ALERT_ERROR", message);
    },
    alertClear({ commit }) {
        commit("ALERT_CLEAR");
    },
};

const mutations = {
    ALERT_SUCCESS(state, message) {
        state.type = "alert-success";
        state.message = message;
    },
    ALERT_ERROR(state, message) {
        state.type = "alert-danger";
        state.message = message;
    },
    ALERT_CLEAR(state) {
        state.type = null;
        state.message = null;
    },
};

export default {
    state,
    mutations,
    actions,
};
