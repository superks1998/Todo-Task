<template>
  <div class="header">
    <h1>Todo App</h1>
    <div class="header-nav" v-if="auth.isAuthenticated">
      <router-link :to="pathHome"
        ><button class="btn">Home</button></router-link
      >
      <router-link :to="pathAdd"
        ><button class="btn">Add Task</button></router-link
      >
      <button class="btn" @click="logout">Logout</button>
    </div>
    <div v-else><Navbar /></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { HOME_PATH, TASK_ADD_PATH } from "../constant/urlPath";

import Navbar from "./Navbar.vue";
export default {
  name: "Header",
  data() {
    return {
      pathAdd: TASK_ADD_PATH,
      pathHome: HOME_PATH,
    };
  },
  components: {
    Navbar,
  },

  computed: mapState(["auth"]),
  methods: mapActions(["logout"]),
};
</script>

<style lang="scss">
.header {
  h1 {
    margin: 0;
    padding: 20px;
    color: white;
    text-align: center;
    line-height: 40px;
    background: $primary-color;
    box-shadow: $button-shadow;
  }
  .header-nav {
    width: fit-content;
    margin: 20px auto;
  }
}
</style>
