import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import alert from "./modules/alert";
import tasks from "./modules/tasks";
import categories from "./modules/categories";

Vue.use(Vuex);

const storeData = {
    modules: {
        auth,
        alert,
        tasks,
        categories,
    },
    plugins: [createPersistedState()],
};

const store = new Vuex.Store(storeData);

export default store;
