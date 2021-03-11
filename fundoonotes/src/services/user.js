const axios = require("axios");

//const URL = process.env.VUE_BASEURL;

export default {
    registerUser(data) {
        //  const url = "http://localhost:2001" + "/register";
        // return axios.post(url, data)
        return axios.post("/register", data);
    },




    loginUser(data) {
        return axios.post("/login", data);
    }
};

