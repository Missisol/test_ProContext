<template>
    <div>
        <template v-for="(post, index) in posts">
            <b-card :key="index" no-body class="overflow-hidden mb-4 p-2">
                <b-row no-gutters>
                    <b-col md="3">
                        <b-img
                            src="https://placekitten.com/200/150"
                            fluid
                            class="rounded-0"
                            alt="cat"
                        ></b-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-text>{{ post.name }}</b-card-text>
                        <b-card-body :title="post.title">
                            <b-card-text>{{ post.body }}</b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
                <b-button
                    variant="link"
                    class="link"
                    @click="getComments(post.id)"
                    v-if="visible"
                >Open</b-button>

                <Comments :id="post.id" :visible="visible" />

                <b-button variant="link" class="link" @click="toggle" v-if="!visible">Close</b-button>
            </b-card>
        </template>
    </div>
</template>

<script>
import Comments from "./Comments.vue";

export default {
    components: {
        Comments
    },
    data: () => ({
        visible: true
    }),
    computed: {
        posts() {
            const posts = this.$store.getters.posts;
            const users = this.$store.getters.users;
            let newPosts = [];

            if (posts.length !== 0 && users.length !== 0) {
                return (newPosts = posts.map(post => {
                    const usr = users.filter(user => {
                        return user.id === post.userId;
                    });

                    const { name } = usr[0];
                    return { name: name, ...post };
                }));
            }
            return newPosts;
        },
        comments() {
            return this.$store.getters.comments;
        }
    },
    methods: {
        getComments(id) {
            this.visible = !this.visible;
            console.log("Posts visible", this.visible);
            // console.log(id, this.$store.getters.commentsById(id));
            if (this.$store.getters.commentsById(id).length !== 0) {
                return this.$store.getters.commentsById(id);
            } else {
                this.$store.dispatch("fetchCommentsById", id);
            }
        },
        toggle() {
            //   visibility = this.visibility
            this.visible = true;
                        console.log('toggle', this.visible)

        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.$store.dispatch("fetchPosts");
            this.$store.dispatch("fetchUsers");
        });
    }
};
</script>

<style lang="scss" scoped>
.link {
    text-align: end;
}
</style>