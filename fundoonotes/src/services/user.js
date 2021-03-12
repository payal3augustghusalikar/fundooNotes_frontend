const axios = require("axios");

//const URL = process.env.VUE_BASEURL;

export default {
    registerUser(data) {
        return axios.post("/register", data);
    },

    loginUser(data) {
        return axios.post("/login", data);
    },

    forgotPassword(data) {
        return axios.post("/forgotpassword", data);
    },
    resetPassword(data) {
        console.log("reset :  ")
        const token = data.token
        console.log("token is :", token)
        return axios.put("/resetpassword", data);
    },
};