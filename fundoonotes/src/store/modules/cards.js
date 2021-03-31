import note from '../../services/note.js';

const state = {
    notes: [],

};
const getters = {
    allActiveNotes: state => {
        return state.notes.filter(note =>
            (note.isDeleted == false && note.isArchived == false))
    },

    allArchivedNotes: state => {
        return state.notes.filter(note =>
            (note.isArchived == true))
    },

    allTrashNotes: state => {
        return state.notes.filter(note =>
            (note.isDeleted == true))
    }


    // this.allNotes = [...this.result].reverse();
    // this.archievedNotes = this.allNotes.filter(
    //   (note) => note.isArchived == true
    // );
    // allNotes: [...this.result].reverse(),
    // activeNotes: this.allNotes.filter(
    //     note => (note.isDeleted == false && note.isArchived == false)
    // ),


};

const actions = {
    getAllNotes({ commit }) {
        console.log("inside get all notes")
        note
            .getNotes()
            .then(result => {
                this.result = result.data.data;
                commit("setAllNotes", this.result)
            }).catch(error => {
                console.log("error", error)
            });
    },

    addNote({ commit }, noteData) {
        note.createNote(noteData).then(result => {
            this.result = result.data.data;
            commit("newNote", this.result)
        }).catch(error => {
            console.log("error", error)
        });
    },

    trashNote({ commit }, noteData, id) {
        note.moveToTrash(noteData, id).then(result => {
            this.result = result.data.data;
            commit("trash", this.result)
        }).catch(error => {
            console.log("error", error)
        });
    }
};

const mutations = {
    setAllNotes: (state, notes) => (state.notes = notes),
    newNote: (state, noteData) => state.notes.unshift(noteData),
    trashNote: (state, noteData) => state.notes.unshift(noteData)
};

export default {
    state,
    getters,
    actions,
    mutations
}