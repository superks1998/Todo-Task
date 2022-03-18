<template>
  <div>
    <Header />
    <div v-if="message" :class="`alert ${type}`">
      {{ message }}
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./Header.vue";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  computed: mapGetters("alert", ["message", "type"]),
  methods: mapActions("alert", ["alertMessage"]),
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.alertMessage({ type: null, message: null });
    },
  },
};
</script>

<style>
.alert {
  max-width: 600px;
  margin: 0 auto;
}
</style>
