import axios from "axios";
import store from "../store";

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = store.state.auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
api.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return (
        response,
        (error) => {
            throw error;
        }
    );
});

export default api;
