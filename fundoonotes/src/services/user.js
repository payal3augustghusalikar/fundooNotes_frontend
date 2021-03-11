const axios = require("axios");

//const URL = process.env.VUE_BASEURL;

export default {
    registerUser(data) {
        return axios.post("/register", data);
    },

    loginUser(data) {
        return axios.post("/login", data);
    }
};