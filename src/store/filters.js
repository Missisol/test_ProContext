export default {
    state: {
        author: '',
        text: ''
    },
    mutations: {
        searchAuthor(state, payload) {
            state.author = payload
        },
        searchText(state, payload) {
            state.text = payload
        }
    },
    actions: {},
    getters: {
        author(state) {
            return state.author
        },
        text(state) {
            return state.text
        }
    }
}