<template>
    <div :visibility=!visible v-if="!visible">
        <template v-for="(comment, index) in comments">
            <b-card :key="index"
              no-body 
              class="overflow-hidden p-2 comment">
                <b-row no-gutters>
                    <b-col md="3">
                        <b-img
                            src="https://placekitten.com/100/100"
                            fluid
                            class="rounded-0"
                            alt="cat"
                        ></b-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body :title="comment.name">
                            <b-card-text> промурчал</b-card-text>

                            <b-card-text>{{ comment.body }}</b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </template>
    </div>

</template>

<script>
export default {
    props: [
        'id',
        'visible'
    ],
    data: () => ({
        visibility: false
    }),
    computed: {
        comments() {
            const id = this.id
            return this.$store.getters.commentsById(id)
        }
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.comment {
   width: 80%;
   margin-left: 10%;
}
</style>