<template>
  <div>
    <Header />
    <div v-if="alert.message" :class="`alert ${alert.type}`">
      {{ alert.message }}
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "./Header.vue";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  computed: mapState(["alert"]),
  methods: mapActions(["alertMessage"]),
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
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
