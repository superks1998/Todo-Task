import api from "./api";
import { API_TASKS } from "../constant/urlApi";

const tasksApi = {
  getAll: () => {
    const url = API_TASKS;
    return api.get(url);
  },
  get: (id) => {
    const url = `${API_TASKS}${id}`;
    return api.get(url);
  },
  add: (task) => {
    const url = API_TASKS;
    return api.post(url, task);
  },
  update: (id, taskUpdate) => {
    const url = `${API_TASKS}${id}`;
    return api.patch(url, taskUpdate);
  },
  delete: (id) => {
    const url = `${API_TASKS}${id}`;
    return api.delete(url);
  },
};

export default tasksApi;
