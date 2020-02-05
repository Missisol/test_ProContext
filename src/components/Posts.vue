<template>
    <div>
        <template 
        v-for="(post, index) in filteredPosts"
        >
            <b-card 
            :key="index" 
            no-body 
            class="overflow-hidden p-2 card-wrap"
            >
                <b-row 
                no-gutters 
                class="card-item"
                >
                    <b-col md="3">
                        <b-img
                            src="https://placekitten.com/200/150"
                            fluid
                            class="rounded-0"
                            alt="cat"
                        ></b-img>
                    </b-col>
                    <b-col md="9" class="text-wrap">
                        <b-card-text class="author">{{ post.name }}</b-card-text>
                        <b-card-body 
                        class="text"
                        :title="post.title">
                            <b-card-text>{{ post.body }}</b-card-text>
                        </b-card-body>

                        <b-button
                            variant="link"
                            :class="[post.id === clickId ? defaultClass : '']" 
                            @click="getComments(post.id)"
                        >
                            Открыть комментарии 
                        </b-button>

                    </b-col>
                </b-row>

                <Comments 
                :id="post.id" 
                :clickId="clickId" />

                <b-button 
                variant="link" 
                :class="[post.id !== clickId ? defaultClass : '', 'link']" 
                @click="toggle" 
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
    data: () => ({
        visible: true,
        clickId: '',
        defaultClass: 'hidden',
    }),
    computed: {
        author() {
            return this.$store.getters.author
        },
        text() {
            return this.$store.getters.text
        },
        filteredPosts() {
            const posts = this.$store.getters.postsWithName;
            return posts
                .filter(post => {
                    let authorName = post.name;
                    return authorName.toLowerCase().includes(this.author);
                })
                .filter(post => {
                    const postText = post.body;
                    return postText.toLowerCase().includes(this.text);
                });
        },
    },
    methods: {
        getComments(id) {
            this.clickId = id
            this.visible = !this.visible;
            if (this.$store.getters.commentsById(id).length !== 0) {
                return this.$store.getters.commentsById(id);
            } else {
                this.$store.dispatch("fetchCommentsById", id);
            }
        },
        toggle() {
            this.clickId = ''
            this.visible = true;
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

.card-wrap {
    border: none;
}

.card-item {
    background: #ebfaff;
    padding: 1em
}

.text-wrap {
    display: flex;
    flex-direction: column;
}

h4 {
    font-size: 1.3em;
    margin-bottom: 0.5em;
}

.text {
    padding-top: 0;
}

.author {
    padding-left: 1.25rem;
    margin-bottom: 0;
    color: #6a7581;
    font-size: 0.9em;
}

.link {
    text-align: end;
}

.hidden {
    display: none
}

.btn.btn-link {
    text-align: right;
    text-decoration: none;
}

.link {
    margin-right: 10%;
}
</style>