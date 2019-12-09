import axios from "axios";

const api = axios.create({ baseURL: "https://fleemasys-api.herokuapp.com/" });

export default api;
