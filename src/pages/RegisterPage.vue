<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit({ username, password })">
      <h4>Register</h4>
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
import { LOGIN_PATH } from "../constant/urlPath";
import {
  MESSAGE_REGISTER_SUCCESS,
  MESSAGE_REGISTER_FAILED,
} from "../constant/alertMessage";
import { TYPE_ALERT_SUCCESS, TYPE_ALERT_ERROR } from "../constant/alertType";

export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register",
      alertMessage: "alert/alertMessage",
    }),
    async handleSubmit({ username, password }) {
      try {
        await this.register({ username, password });
        this.alertMessage({
          type: TYPE_ALERT_SUCCESS,
          message: MESSAGE_REGISTER_SUCCESS,
        });
        setTimeout(() => {
          this.$router.push(LOGIN_PATH);
        }, 500);
      } catch (error) {
        this.alertMessage({
          type: TYPE_ALERT_ERROR,
          message: MESSAGE_REGISTER_FAILED,
        });
      }
    },
  },
};
</script>

<style></style>
