import api from "./api";

const tasksApi = {
    getAll: () => {
        const url = "/api/tasks";
        return api.get(url);
    },
    get: (id) => {
        const url = `/api/tasks/${id}`;
        return api.get(url);
    },
    add: (task) => {
        const url = "/api/tasks";
        return api.post(url, task);
    },
    update: (id, taskUpdate) => {
        const url = `/api/tasks/${id}`;
        return api.patch(url, taskUpdate);
    },
    delete: (id) => {
        const url = `/api/tasks/${id}`;
        return api.delete(url);
    },
};

export default tasksApi;
