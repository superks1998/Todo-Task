import api from "./api";
import { API_CATEGORIES } from "../constant/urlApi";

const categoryApi = () => {
  const url = API_CATEGORIES;
  return api.get(url);
};

export default categoryApi;
