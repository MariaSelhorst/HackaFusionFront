import axios from "axios";

const API = axios.create({
    baseURL: "https://schoolmanager-api.onrender.com/api",
    timeout: 10000
})

export default API