import note from '../../services/note.js';

//namespaced: true,
const state = {
    notes: [],
    // text: "",
    // color: "",
    // timeout: "",

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

};
//...mapActions("snackbar", ["showSnack"]),

const actions = {
    // showSnack({ commit }, payload) {
    //     console.log("show snackbar ")
    //     console.log("payload", payload)
    //     commit("SHOW_MESSAGE", payload);
    // },
    getAllNotes({ commit }) {
        console.log("inside get all notes")
        note
            .getNotes()
            .then(result => {
                this.result = result.data.data;

                commit("setAllNotes", this.result)
                    // this.showSnack({
                    //     text: "Successfully Saved!",
                    //     color: "success",
                    //     timeout: 3500,
                    // });

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
    trashNote: (state, noteData) => state.notes.unshift(noteData),
    // SHOW_MESSAGE(state, payload) {
    //     state.text = payload.text;
    //     state.color = payload.color;
    //     state.timeout = payload.timeout;
    // },
};

export default {
    state,
    getters,
    actions,
    mutations,

}