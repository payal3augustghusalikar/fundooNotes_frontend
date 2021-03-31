const state = {
    text: "",
    color: "",
    timeout: "",
};

const actions = {
    showSnack({ commit }, payload) {
        console.log("show snackbar ")
        console.log("payload", payload)
        commit("SHOW_MESSAGE", payload);
    },
}

const mutations = {

    SHOW_MESSAGE(state, payload) {
        console.log("payload", payload)
        console.log("payload.text", payload.text)
        state.text = payload.text;
        state.color = payload.color;
        state.timeout = payload.timeout;
    },
};

export default {
    state,
    actions,
    mutations
}