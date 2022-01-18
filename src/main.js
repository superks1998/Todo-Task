import Vue from "vue";
import * as VeeValidate from "vee-validate";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.scss";

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
