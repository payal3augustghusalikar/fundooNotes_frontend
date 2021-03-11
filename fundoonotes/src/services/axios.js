import axios from "axios";

axios.defaults.baseURL = "http://localhost:2001/";

axios.defaults.headers.common["Authorization"] =
    "Bearer" + sessionStorage.getItem("token");