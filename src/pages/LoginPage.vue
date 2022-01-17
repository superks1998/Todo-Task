<template>
    <div class="form-wrapper">
        <form @submit.prevent="handleSubmit({ username, password })">
            <h4>Login</h4>
            <div class="form-field">
                <label for="username">Username</label>
                <input v-model="username" type="text" name="username" />
            </div>
            <div class="form-field">
                <label for="password">Password</label>
                <input v-model="password" type="text" name="password" />
            </div>
            <div class="form-field">
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "LoginPage",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(["login", "alertSuccess", "alertError", "alertClear"]),
        async handleSubmit({ username, password }) {
            this.login({ username, password });
            try {
                await this.login({ username, password });
                this.alertSuccess("Đăng nhập thành công!");
                this.username = "";
                this.password = "";
                setTimeout(() => {
                    this.$router.push("/");
                }, 500);
            } catch (error) {
                this.alertError("Đăng nhập thất bại!");
            }
        },
    },
    computed: mapState(["auth"]),
};
</script>

<style>
.form-wrapper {
    display: flex;
    justify-content: center;
    margin: 50px 0;
}
.form-field input[type="text"] {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 600px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

.form-field input[type="submit"] {
    background-color: rgb(84, 105, 212);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
        rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 600px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
}

.form-field label {
    display: block;
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
}
</style>
