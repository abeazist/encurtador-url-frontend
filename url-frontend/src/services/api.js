import axios from "axios";

const api = axios.create({
  baseURL: "https://encurtador-url-backend-l9dr.onrender.com",
});

export default api;
