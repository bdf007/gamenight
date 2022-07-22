// eslint-disable-next-line import/no-unresolved
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default instance;
