import axios from "axios";

const Axios2 = axios.create({
    baseURL:"http://localhost:5000/",
    withCredentials:true,
});
export default Axios2;