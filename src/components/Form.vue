<template>
    <div class="filters">
      <h3>Фильтры</h3>
        <b-form-group id="input-group-1" label="Имя/название" label-for="input-2">
            <b-form-input id="input-1" v-model="author" @input="searchAuthor"
            required placeholder="фильтр по имени автора пост"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Контент" label-for="input-2">
            <b-form-input id="input-2" v-model="text" @input="searchPostText" required placeholder="фильтр по тексту поста"></b-form-input>
        </b-form-group>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            author: '',
            text: ''
        };
    },
    methods: {
        searchAuthor() {
            let author = this.author.toLowerCase()
            this.$emit('searchAuthor', author)
        },
        searchPostText() {
            let text = this.text.toLowerCase()
            this.$emit('searchPostText', text)
        }
    }
};
</script>

<style lang="scss" scoped>
.filters {
    text-align: left;
    margin-top: 1em;
}
</style>