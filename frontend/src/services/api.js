import axios from "axios";

const API = axios.create({
  baseURL: "https://carboniq-0h6t.onrender.com/api",
});

export default API;
