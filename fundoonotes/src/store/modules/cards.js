import note from '../../services/note.js';

const state = {
    notes: []
};
const getters = {
    allNotes: state => state.notes
};

const actions = {
    getAllNotes({ commit }) {
        note
            .getNotes()
            .then(result => {
                this.result = result.data.data;
                // const allNotes = [...this.result].reverse();
                commit("setAllNotes", this.result)
            })
    },



    addNote({ commit }, noteData) {
        console.log("inside addNote")
        note.createNote(noteData).then(result => {
            this.result = result.data.data;
            console.log(" this.result ", this.result)
                // const allNotes = [...this.result].reverse();
            commit("newNote", this.result)
        })
    }
};

const mutations = {
    setAllNotes: (state, notes) => (state.notes = notes),
    newNote: (state, noteData) => state.notes.unshift(noteData)
};

export default {
    state,
    getters,
    actions,
    mutations
}