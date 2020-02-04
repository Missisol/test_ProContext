<template>
    <b-container>
        <b-row class="content">
            <b-col cols="12" lg="9"
            >
                <Posts
                 :author="author" 
                 :text="text" />
            </b-col>
            <b-col 
            cols="8" offset="2" 
            sm="6" offset-sm="3" 
            offset-lg="0" lg="3" 
            class="right"
            >
                <Form 
                @searchAuthor="author=$event" 
                @searchPostText="text=$event" 
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Posts from "./Posts.vue";
import Form from "./Form.vue";

export default {
    components: {
        Posts,
        Form
    },
    data() {
        return {
            author: "",
            text: ""
        }
    }
};
</script>


<style scoped>
.right {
    background: #cecece;
    margin-bottom: 2em;
}

@media (max-width: 991.98px) {
    .content {
        flex-direction: column-reverse;
    }
}
</style>
