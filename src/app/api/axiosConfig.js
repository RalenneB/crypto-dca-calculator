// src/api/axiosConfig.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5066/api", // Update with your backend API base URL, if with or without api
  // timeout: 1000,
  headers: {
    "Content-Type": "application-json",
  },
});

export default api;
