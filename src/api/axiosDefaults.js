import axios from "axios";

axios.defaults.baseURL = "https://restdemo-a68cc29b2722.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();