<template>
  <ul class="navbar">
    <li v-for="item in listItemNav" :key="item.text">
      <router-link :to="item.path"
        ><button class="btn">{{ item.text }}</button></router-link
      >
    </li>
  </ul>
</template>

<script>
import { LOGIN_PATH, REGISTER_PATH, HOME_PATH } from "../constant/urlPath";

export default {
  name: "Navbar",
  data() {
    return {
      listItemNav: [
        { path: HOME_PATH, text: "Home" },
        { path: LOGIN_PATH, text: "Login" },
        { path: REGISTER_PATH, text: "Register" },
      ],
    };
  },
};
</script>

<style lang="scss">
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
