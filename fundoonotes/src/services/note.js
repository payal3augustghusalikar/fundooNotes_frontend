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

    /**
     * @description  update the note
     * @returns the response from api calling methods
     */
    updateNote(noteInput, noteId) {
        const noteData = {
            userInput: noteInput,
            endPoint: '/notes/' + noteId
        };
        return apiCall.put(noteData);
    },

    /**
     * @description  delete note by moving to trash  the note
     * @returns the response from api calling methods
     */
    moveToTrash(noteInput, noteId) {
        const noteData = {
            userInput: noteInput,
            endPoint: '/notes/delete/' + noteId
        };
        return apiCall.put(noteData);
    },

    /**
     * @description  delete the note permanently
     * @returns the response from api calling methods
     */
    deleteForever(noteId) {
        const noteData = {
            endPoint: '/notes/deleteforever/' + noteId
        };
        return apiCall.delete(noteData);
    },

    /**
     * @description  archieveNote the note 
     * @returns the response from api calling methods
     */
    archieveNote(noteInput, noteId) {
        const noteData = {
            userInput: noteInput,
            endPoint: '/notes/archive/' + noteId
        };
        return apiCall.put(noteData);
    },

    /**
     * @description  archieveNote the note 
     * @returns the response from api calling methods
     */
    unArchieveNote(noteInput, noteId) {
        const noteData = {
            userInput: noteInput,
            endPoint: '/notes/unarchive/' + noteId
        };
        return apiCall.put(noteData);
    },

    /**
     * @description  restoreNote the note 
     * @returns the response from api calling methods
     */
    restoreNote(noteId, noteInput) {
        const noteData = {
            userInput: noteInput,
            endPoint: '/notes/restore/' + noteId
        };
        return apiCall.put(noteData);
    },

};