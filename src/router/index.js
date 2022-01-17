import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TasksPage from "../pages/TasksPage";
import TaskFormPage from "../pages/TaskFormPage";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/register",
        component: RegisterPage,
    },
    { path: "/home", component: TasksPage },
    { path: "/", component: TasksPage },
    { path: "/tasks/add", component: TaskFormPage },
    { path: "/tasks/edit/:id", component: TaskFormPage },
    { path: "*", component: TasksPage },
];

const router = new VueRouter({
    routes,
});

export default router;
