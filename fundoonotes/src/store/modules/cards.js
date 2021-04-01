import note from '../../services/note.js';

const state = {
    notes: [],
};
const getters = {
    allActiveNotes: state => {
        return state.notes.filter(note =>
            (note.isDeleted == false && note.isArchived == false));
    },

    allArchivedNotes: state => {
        return state.notes.filter(note =>
            (note.isArchived == true));
    },

    allTrashNotes: state => {
        return state.notes.filter(note =>
            (note.isDeleted == true));
    }
};

const actions = {

    getAllNotes({ commit }) {
        console.log('inside get all notes');
        note
            .getNotes()
            .then(result => {
                this.result = result.data.data;
                commit('setAllNotes', this.result);
            }).catch(error => {
                commit('SHOW_MESSAGE', {
                    text: 'Error while Retriving Notes',
                    timeout: 2000
                });
            });
    },

    addNote({ commit }, noteData) {
        note.createNote(noteData).then(result => {
            this.result = result.data.data;
            commit('SHOW_MESSAGE', {
                text: 'Successfully added new Note',
                timeout: 2000
            });
            commit('newNote', this.result);
        }).catch(error => {
            commit('SHOW_MESSAGE', {
                text: 'Error adding new Note',
                timeout: 2000
            });
        });
    },

    trashNote({ commit }, id) {
        const noteInput = {
            isDeleted: true
        };
        console.log('noteData, id', id, noteInput);
        note.moveToTrash(noteInput, id).then(result => {
            this.result = result.data.data;
            console.log('Moved To trash', result);
            commit('SHOW_MESSAGE', {
                text: 'Moved To trash',
                timeout: 2000
            });
        }).catch(error => {
            commit('SHOW_MESSAGE', {
                text: 'Error, please try again!',
                timeout: 2000
            });
        });
    }
};

const mutations = {
    setAllNotes: (state, notes) => (state.notes = notes),
    newNote: (state, noteData) => state.notes.unshift(noteData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};