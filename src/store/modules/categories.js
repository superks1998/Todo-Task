import categoryApi from "../../api/categoryApi";

const state = () => ({
  categories: [],
});

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
  state,
  mutations,
  actions,
};
