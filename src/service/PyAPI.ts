import axios from "axios";

const PyAPI = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000
})

export default PyAPI