import loginApi from "../../api/loginApi";

const state = () => ({
  token: "",
  isAuthenticated: false,
});
const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
};
const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await loginApi.login(username, password);
      if (response) {
        commit("LOGIN", response.token);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async register({ commit }, { username, password }) {
    try {
      await loginApi.register(username, password);
      commit("REGISTER");
    } catch (error) {
      console.log(error);
    }
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
};
const mutations = {
  LOGIN(state, token) {
    state.token = token;
    state.isAuthenticated = true;
  },
  REGISTER(state) {
    console.log(state);
  },
  LOGOUT(state) {
    state.token = "";
    state.isAuthenticated = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
