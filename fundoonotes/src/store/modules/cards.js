import note from '../../services/note.js';

const state = {
    notes: []
};
const getters = {
    allNotes: state => state.notes
};

const actions = {
    getAllNotes({ commit }) {
        console.log("inside getAllNotes")
        note
            .getNotes()
            .then(result => {
                this.result = result.data.data;
                return allNotes = [...this.result].reverse();

            })
        commit("setAllNotes", this.allNotes)
    }
};
const mutations = {

    setAllNotes: (state, notes) => (state.notes = notes)

};

export default {
    state,
    getters,
    actions,
    mutations
}