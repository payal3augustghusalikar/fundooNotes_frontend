import axios from "axios";
axios.defaults.baseURL = "http://localhost:2001/";

axios.defaults.headers.common["Authorization"] =
    "Bearer" + sessionStorage.getItem("token");

export default {
    post(postUrl, data) {
        return axios.post(postUrl, data);
    },

    put(putUrl, userData) {
        const token = userData.token
        return axios.put(putUrl, userData.userData, token);

    }

}