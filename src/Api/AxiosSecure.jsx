import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://server-steel-alpha.vercel.app/",
});
export default axiosSecure;
