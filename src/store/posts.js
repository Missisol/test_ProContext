export default {
    state: {
        posts: [],
        users: [],
        postsWithName: []
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setPostsWithName(state) {
            state.postsWithName = state.posts.map(post => {
                const usr = state.users.filter(user => user.id === post.userId);
                const { name } = usr[0];
                return { name: name, ...post };
            });
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
                commit('setPostsWithName')

            } catch (error) {
                throw error
            }
        },
    },
    getters: {
        posts(state) {
            return state.posts
        },
        users(state) {
            return state.users
        },
        postsWithName(state) {
            return state.postsWithName
        }
    }
}