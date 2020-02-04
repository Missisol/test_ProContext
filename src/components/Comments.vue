<template>
    <div 
    :visibility=!visible 
    :class="[id !== clickId ? defaultClass : '']">
        <template v-for="(comment, index) in comments">
            <b-card 
            :key="index"
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
                    <b-col md="9" >
                        <h4 class="comment-text-wrap">
                            {{ comment.name }} 
                            <span class="mini"> промурчал</span>
                        </h4>
                        <b-card-text>{{ comment.body }}</b-card-text>
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
        'visible',
        'clickId'
    ],
    data: () => ({
        visibility: false,
        defaultClass: 'hidden',
    }),
    computed: {
        comments() {
            const id = this.id
            return this.$store.getters.commentsById(id)
        }
    }
};
</script>

<style lang="scss" scoped>
h4 {
    font-size: 1.3em;
    margin-bottom: 0.5em;
}

.comment {
   width: 80%;
   margin-left: 10%;
   background: #ebfaff;
}

.comment-text-wrap {
    padding: 0;
}

.mini {
    font-size: 0.7em;
    color: #6a7581;
}

.hidden {
    display: none
}
</style>