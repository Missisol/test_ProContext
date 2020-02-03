<template>
    <div>
        <template v-for="(post, index) in fiteredPosts">
            <b-card :key="index" no-body class="overflow-hidden mb-4 p-2 card-item">
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
                        <b-card-text class="author">{{ post.name }}</b-card-text>
                        <b-card-body 
                        class="card-wrap"
                        :title="post.title">
                            <b-card-text>{{ post.body }}</b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
                <b-button
                    variant="link"
                    class="link"
                    @click="getComments(post.id)"
                    v-if="visible"
                >
                Открыть комментарии
                </b-button>

                <Comments :id="post.id" :visible="visible" />

                <b-button 
                variant="link" 
                class="link" 
                @click="toggle" 
                v-if="!visible"
                >
                Скрыть комментарии
                </b-button>
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
    props: ["author", "text"],
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
        fiteredPosts() {
            const posts = this.posts;
            return posts
                .filter(post => {
                    let authorName = post.name;
                    return authorName.toLowerCase().includes(this.author);
                })
                .filter(post => {
                    let postText = post.body;
                    return postText.toLowerCase().includes(this.text);
                });
        },
        comments() {
            return this.$store.getters.comments;
        }
    },
    methods: {
        getComments(id) {
            this.visible = !this.visible;
            if (this.$store.getters.commentsById(id).length !== 0) {
                return this.$store.getters.commentsById(id);
            } else {
                this.$store.dispatch("fetchCommentsById", id);
            }
        },
        toggle() {
            this.visible = true;
            console.log("toggle", this.visible);
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
.card {
    text-align: left;
}

.card-item {
    background: #ebfaff;
}

.card-wrap {
    padding-top: 0;
}

.author {
    padding-left: 1.25rem;
    margin-bottom: 0;
    color: #3f4852;
}

.link {
    text-align: end;
}
</style>