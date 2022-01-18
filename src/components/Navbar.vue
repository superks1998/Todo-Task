<template>
  <ul class="navbar">
    <li>
      <router-link to="/"><button>Home</button></router-link>
    </li>
    <li v-if="auth.isAuthenticated">
      <router-link to="/task/add"><button>Add Task</button></router-link>
      <button @click="logout">Logout</button>
    </li>
    <li v-else>
      <router-link to="/login"><button>Login</button></router-link
      ><router-link to="/register"><button>Register</button></router-link>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Navbar",
  computed: mapState(["auth"]),
  methods: mapActions(["logout"]),
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.navbar {
  max-width: 960px;
  margin: 10px auto 20px;
  padding-left: 0;
  list-style: none;
  button {
    margin-right: 20px;
    padding: 6px 20px;
    color: white;
    background: $primary-color;
    box-shadow: $button-shadow;
    border: none;
    border-radius: 10px;
  }
}
</style>
