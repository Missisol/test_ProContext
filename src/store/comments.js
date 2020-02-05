export default {
    state: {
        comments: [],
    },
    mutations: {
        setComments(state, payload) {
            state.comments.push( ...payload)
        }
    },
    actions: {
        async fetchCommentsById({ commit }, payload) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${payload}`)
                const result = await response.json()
                commit('setComments', result)
              } catch (error) {
                throw error
              }
        }
    },
    getters: {
        comments(state) {
            return state.comments
        },
        commentsById: (state) => postId => {
            return state.comments.filter(comment => comment.postId === postId)
        }
    }
}
