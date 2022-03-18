import categoryApi from "../../api/categoryApi";

const state = () => ({
  categories: [],
});

const getters = {
  categories: (state) => state.categories,
};

const actions = {
  async getCategories({ commit }) {
    try {
      const response = await categoryApi();

      commit("SET_CATEGORIES", response.items);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
