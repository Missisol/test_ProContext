export default {
    state: {
        posts: [],
        users: [],
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload
        },
        setUsers(state, payload) {
            state.users = payload
        }
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const result = await response.json()
                commit('setPosts', result)
            } catch (error) {
                throw error
            }
        },
        async fetchUsers({ commit }) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
                const result = await response.json()
                commit('setUsers', result)

            } catch (error) {
                throw error
            }
        }
    },
    getters: {
        posts(state) {
            return state.posts
        },
        users(state) {
            return state.users
        },
    }
}