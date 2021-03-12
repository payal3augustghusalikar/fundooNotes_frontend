import axios from "axios";
axios.defaults.baseURL = "http://localhost:2001/";

axios.defaults.headers.common["Authorization"] =
    "Bearer" + sessionStorage.getItem("token");

export default {
    post(postUrl, data) {
        console.warn("inside post")
        console.warn("inside post url ", postUrl)
        console.warn("inside post data ", data)
        return axios.post(postUrl, data);
    },
    put(putUrl, data) {
        return axios.post(putUrl, data);
    }

}