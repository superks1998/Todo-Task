import api from "./api";

const categoryApi = () => {
    const url = "/api/categories";
    return api.get(url);
};

export default categoryApi;
