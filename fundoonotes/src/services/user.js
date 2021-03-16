/**
 * @module       services
 * @file         user.js
 * @description  holds the methods calling from pages
 * @author       Payal Ghusalikar <payal.ghusalikar9@gmail.com>
*  @since        05/03/2021  
-----------------------------------------------------------------------------------------------*/

import apiCall from './apiCall.js';
export default {
    /**
     * @description takes the user input and call the axios post method and return response to register page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    registerUser(data) {
        const userData = {
            userInput: data,
            endPoint: '/register'
        };
        return apiCall.post(userData);
    },

    /**
     * @description takes the user input and call the axios p[ost method and return response to login page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    loginUser(data) {
        const userData = {
            userInput: data,
            endPoint: '/login'
        };
        return apiCall.post(userData);
    },

    /**
     * @description takes the user input and call the axios post method and return response to forgotPassword page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    forgotPassword(data) {
        const userData = {
            userInput: data,
            endPoint: '/forgotpassword'
        };
        return apiCall.post(userData);
    },

    /**
     * @description takes the user input and call the axios put method and return response to resetPassword page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    resetPassword(data) {
        const userData = {
            userInput: data,
            token: data.token,
            endPoint: '/resetpassword'
        };
        return apiCall.put(userData);
    },

    /**
     * @description takes the user input and call the axios put method and return response to resetPassword page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    activateEmail(data) {
        const userData = {
            userInput: data,
            token: data.token,
            endPoint: '/activateemail'
        };
        return apiCall.put(userData);
    }

};