<template>
    <div class="form-wrapper">
        <form @submit.prevent="handleSubmit({ username, password })">
            <h4>Register</h4>
            <div class="form-field">
                <label for="username">Username</label>
                <input v-model="username" type="text" name="username" />
            </div>
            <div class="form-field">
                <label for="password">Password</label>
                <input v-model="password" type="text" name="password" />
                <!-- <span>{{ errors.first("password") }}</span> -->
            </div>
            <div class="form-field">
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "RegisterPage",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(["register", "alertSuccess", "alertError", "alertClear"]),
        async handleSubmit({ username, password }) {
            try {
                await this.register({ username, password });
                this.alertSuccess("Đăng ký thành công!");
                setTimeout(() => {
                    this.$router.push("/login");
                }, 500);
                this.username = "";
                this.password = "";
            } catch (error) {
                this.alertError("Đăng ký thất bại!");
            }
        },
    },
};
</script>

<style></style>
