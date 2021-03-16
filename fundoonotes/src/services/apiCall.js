import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:2001/';

axios.defaults.headers.common['Authorization'] =
    'Bearer' + sessionStorage.getItem('token');

export default {
    // post(postUrl, data) {
    //     console.warn('inside post');
    //     console.warn('inside post url ', postUrl);
    //     console.warn('inside post data ', data);
    //     return axios.post(postUrl, data);
    // },


    post(userData) {
        console.warn('inside post');
        // console.warn('inside post url ', postUrl);
        //   console.warn('inside post data ', data);
        return axios.post(userData.endPoint, userData.userInput);
    },


    // put(putUrl, userData) {
    //     console.warn('insideput');
    //     const token = userData.token;
    //     console.warn('token is ', token);
    //     return axios.put(putUrl, userData.token, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });

    // },


    put(userData) {
        console.warn('insideput');
        //   console.warn('token is ', token);
        return axios.put(userData.endPoint, userData.userInput, {
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        });

    },




};