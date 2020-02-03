export default {
    state: {
        comments: [],
    },
    mutations: {
        setComments(state, payload) {
            state.comments.push( ...payload)
            // console.log(state.comments)
        }
    },
    actions: {
        async fetchCommentsById({ commit }, payload) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${payload}`)
                const result = await response.json()
                // console.log(result)
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
        commentsById(state) {
            return postId => {
                return state.comments.filter(comment => comment.postId === postId)
            }
        }
    }
}
