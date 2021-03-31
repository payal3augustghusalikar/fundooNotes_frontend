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
                commit("SHOW_MESSAGE", {
                    text: "Retrived all Notes",
                    timeout: 2000
                });
                commit("setAllNotes", this.result)

            }).catch(error => {
                commit("SHOW_MESSAGE", {
                    text: "Error while Retriving Notes",
                    timeout: 2000
                });

            });
    },

    addNote({ commit }, noteData) {
        note.createNote(noteData).then(result => {
            this.result = result.data.data;
            commit("SHOW_MESSAGE", {
                text: "Successfully added new Note",
                timeout: 2000
            });
            commit("newNote", this.result)
        }).catch(error => {
            commit("SHOW_MESSAGE", {
                text: "Error adding new Note",
                timeout: 2000
            });

        });
    },

    trashNote({ commit }, noteData, id) {
        note.moveToTrash(noteData, id).then(result => {
            this.result = result.data.data;
            commit("SHOW_MESSAGE", {
                text: "Moved To trash",
                timeout: 2000
            });
            commit("trash", this.result)
        }).catch(error => {
            commit("SHOW_MESSAGE", {
                text: "Error, please try again!",
                timeout: 2000
            });
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