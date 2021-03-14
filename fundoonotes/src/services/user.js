import apiCall from './apiCall.js';
export default {
    registerUser(data) {
        const postUrl = '/register';
        return apiCall.post(postUrl, data);
    },

    loginUser(data) {
        const postUrl = '/login';
        return apiCall.post(postUrl, data);
    },

    forgotPassword(data) {
        const postUrl = '/forgotpassword';
        console.warn('inside post');
        return apiCall.post(postUrl, data);
    },

    resetPassword(data, token) {
        console.log('reset tok: ');
        const resetdData = {
            userData: data,
            token: token
        };
        const putUrl = '/resetpassword';
        return apiCall.put(putUrl, resetdData);
    },

    verifyAndLogin(token) {
        const putUrl = '/verifyemail';
        return apiCall.put(putUrl, token);
    }

};