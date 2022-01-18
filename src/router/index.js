import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TasksPage from "../pages/TasksPage";
import TaskFormPage from "../pages/TaskFormPage";
import ErrorPage from "../pages/ErrorPage";
import * as path from "../constant/urlPath";

Vue.use(VueRouter);

const routes = [
  {
    path: path.LOGIN_PATH,
    component: LoginPage,
  },
  {
    path: path.REGISTER_PATH,
    component: RegisterPage,
  },
  { path: path.HOME_PATH, component: TasksPage },
  { path: path.TASK_ADD_PATH, component: TaskFormPage },
  { path: path.TASK_DETAIL_EDIT_PATH, component: TaskFormPage },
  { path: path.ERROR_PATH, component: ErrorPage },
];

const router = new VueRouter({
  routes,
});

export default router;
