import axios from "axios";

const API_BASE_URL = "http://13.61.142.222";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
