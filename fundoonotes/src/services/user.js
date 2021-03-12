// import axios from "axios";
// axios.defaults.baseURL = "http://localhost:2001/";

// axios.defaults.headers.common["Authorization"] =
//     "Bearer" + sessionStorage.getItem("token");
//const URL = process.env.VUE_BASEURL;

// export default {
//     forgotPassword(data) {
//         return axios.post("/forgotpassword", data);
//     },
// }











import apiCall from "./apiCall.js";

export default {
    registerUser(data) {
        const postUrl = "/register"
        return apiCall.post(postUrl, data);
    },

    loginUser(data) {
        const postUrl = "/login"
        return apiCall.post(postUrl, data);
    },

    forgotPassword(data) {
        const postUrl = "/forgotpassword"
        console.warn("inside post")
        return apiCall.post(postUrl, data);
    },

    resetPassword(data) {
        const putUrl = "/resetpassword"
        console.log("reset :  ")
        const token = data.token
        console.log("token is :", token)
        return apiCall.put(putUrl, data);
    },
};