import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:2001/'


//axios.create({ baseURL: " " });


// const instance = axios.create({
//     baseURL: "",
//     withCredentials: false,
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
// })