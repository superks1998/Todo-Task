const state = () => ({
  type: null,
  message: null,
});

const getters = {
  message: (state) => state.message,
  type: (state) => state.type,
};

const actions = {
  alertMessage({ commit }, { type, message }) {
    commit("ALERT_MESSAGE", { type, message });
  },
};

const mutations = {
  ALERT_MESSAGE(state, { type, message }) {
    state.type = type;
    state.message = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
