import axios from "axios";

const PyAPI = axios.create({
    baseURL: "https://hackafusiondataprocessing.onrender.com/data",
    timeout: 10000
})

export default PyAPI