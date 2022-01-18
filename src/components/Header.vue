<template>
  <div class="header">
    <h1>Todo App</h1>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Header",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

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
}
</style>
