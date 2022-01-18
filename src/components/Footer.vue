<template>
  <div class="footer">
    <p>Footer</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.footer {
  color: white;
  background: $primary-color;
  box-shadow: $button-shadow;
  p {
    margin: 0;
    padding: 10px;
    font-size: 14px;
    text-align: center;
  }
}
</style>
