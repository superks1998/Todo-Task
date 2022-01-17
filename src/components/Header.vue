<template>
    <div class="header">
        <h1>Todo App</h1>
        <ul class="navbar">
            <li>
                <router-link to="/home"><button>Home</button></router-link>
            </li>
            <li v-if="auth.isAuthenticated">
                <router-link to="/tasks/add"
                    ><button>Add Task</button></router-link
                >
                <button @click="logout">Logout</button>
            </li>
            <li v-else>
                <router-link to="/login"><button>Login</button></router-link
                ><router-link to="/register"
                    ><button>Register</button></router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "Header",
    computed: mapState(["auth"]),
    methods: mapActions(["logout"]),
};
</script>

<style>
.header {
}
.header h1 {
    text-align: center;
    line-height: 40px;
    margin: 0;
    padding: 20px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
        rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
    background: rgb(84, 105, 212);
}
.navbar {
    list-style: none;
    margin: 10px auto 20px;
    padding-left: 0;
    max-width: 960px;
}

.navbar button {
    background: rgb(84, 105, 212);
    color: white;
    border: none;
    margin-right: 20px;
    border-radius: 10px;
    padding: 6px 20px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
        rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
}
</style>
