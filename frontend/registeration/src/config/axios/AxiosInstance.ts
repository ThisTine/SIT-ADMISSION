import axiosA from "axios";
const axios = axiosA.create({
  baseURL: "https://admission.sit.kmutt.ac.th/api",
  withCredentials: true,
});

export default axios;
