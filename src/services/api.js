import axios from "axios";

const api = axios.create({
  baseURL: "https://bethehero11-backend.herokuapp.com/",
});

export default api;
