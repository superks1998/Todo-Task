import api from "./api";
import { AUTH_LOGIN, AUTH_REGISTER } from "../constant/urlApi";

const loginApi = {
  login: (username, password) => {
    const url = AUTH_LOGIN;
    return api.post(url, {
      username,
      password,
    });
  },
  register: (username, password) => {
    const url = AUTH_REGISTER;
    return api.post(url, {
      username,
      password,
    });
  },
};

export default loginApi;
