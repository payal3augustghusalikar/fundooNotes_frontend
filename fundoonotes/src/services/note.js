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
    createNote(data) {
        const noteData = {
            userInput: data,
            endPoint: '/notes'
        };
        return apiCall.postWithToken(noteData);
    },

    /**
     * @description  gets all note
     * @returns the response from api calling methods
     */
    getNotes() {
        const noteData = {
            endPoint: '/notes'
        };
        return apiCall.get(noteData);
    },
};