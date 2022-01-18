const state = () => ({
  type: null,
  message: null,
});

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
  state,
  mutations,
  actions,
};
