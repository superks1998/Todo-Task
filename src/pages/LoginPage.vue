<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit({ username, password })">
      <h4>Login</h4>
      <div class="form-field">
        <label for="username">Username</label>
        <input
          class="form-field-input"
          v-model="username"
          type="text"
          name="username"
        />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input
          class="form-field-input"
          v-model="password"
          type="text"
          name="password"
        />
      </div>
      <div class="form-field">
        <input class="form-field-input submit" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { HOME_PATH } from "../constant/urlPath";
import {
  MESSAGE_LOGIN_SUCCESS,
  MESSAGE_LOGIN_FAILED,
} from "../constant/alertMessage";
import { TYPE_ALERT_SUCCESS, TYPE_ALERT_ERROR } from "../constant/alertType";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      alertMessage: "alert/alertMessage",
    }),
    async handleSubmit({ username, password }) {
      this.login({ username, password });
      try {
        await this.login({ username, password });
        this.alertMessage({
          type: TYPE_ALERT_SUCCESS,
          message: MESSAGE_LOGIN_SUCCESS,
        });
        setTimeout(() => {
          this.$router.push(HOME_PATH);
        }, 500);
      } catch (error) {
        this.alertMessage({
          type: TYPE_ALERT_ERROR,
          message: MESSAGE_LOGIN_FAILED,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.form-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
</style>
