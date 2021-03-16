import apiCall from './apiCall.js';
export default {
    registerUser(data) {
        const userData = {
            userInput: data,
            endPoint: '/register'
        };
        //const postUrl = '/register';
        //return apiCall.post(postUrl, data);
        return apiCall.post(userData);
    },

    // loginUser(data) {
    //     const postUrl = '/login';
    //     return apiCall.post(postUrl, data);
    // },

    loginUser(data) {
        const userData = {
            userInput: data,
            endPoint: '/login'
        };
        return apiCall.post(userData);
    },

    // forgotPassword(data) {
    //     const postUrl = '/forgotpassword';
    //     console.warn('inside post');
    //     return apiCall.post(postUrl, data);
    // },
    forgotPassword(data) {
        const userData = {
            userInput: data,
            endPoint: '/forgotpassword'
        };
        console.warn('inside post');
        return apiCall.post(userData);
    },


    // resetPassword(data, token) {
    //     console.log('reset tok: ');
    //     const resetdData = {
    //         userData: data,
    //         token: token
    //     };
    //     const putUrl = '/resetpassword';
    //     return apiCall.put(putUrl, resetdData);
    // },

    // resetPassword(data) {
    //     console.log('reset tok: ');
    //     const userData={
    //         token:token,
    //         userInput:{
    //             newPassword: data.newPassword,
    //             confirmPassword: data.confirmPassword,
    //         },   
    //         endPoint:'/resetpassword'
    //     }
    //    // const putUrl = '/resetpassword';
    //     return apiCall.put(userData);
    // },





    resetPassword(data) {
        console.log('reset tok: ');
        const userData = {
            userInput: data,
            token: data.token,
            endPoint: '/resetpassword'
        };
        return apiCall.put(userData);
    },

    activateEmail(data) {
        const userData = {
            userInput: data,
            token: data.token,
            endPoint: '/activateemail'
        };
        console.log('activate email');

        return apiCall.put(userData);
    }


    // verifyAndLogin(token) {
    //     const verifydData = {
    //         token: token
    //     };
    //     console.log('verify email');
    //     const putUrl = '/activateemail';
    //     return apiCall.put(putUrl, verifydData);
    // }

};