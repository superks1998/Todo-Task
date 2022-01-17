import api from "./api";

const loginApi = {
    login: (username, password) => {
        const url = "/auth/login";
        return api.post(url, {
            username,
            password,
        });
    },
    register: (username, password) => {
        const url = "/auth/register";
        return api.post(url, {
            username,
            password,
        });
    },
};

export default loginApi;
