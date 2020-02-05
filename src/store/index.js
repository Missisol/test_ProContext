import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts'
import comments from './comments'
import filters from './filters'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        posts,
        comments,
        filters
    },
})