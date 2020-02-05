<template>
    <div class="filters">
      <h3>Фильтры</h3>
        <b-form-group 
        id="input-group-1" 
        label="Имя/название" 
        label-for="input-2">
            <b-form-input 
            id="input-1" 
            v-model="author"
            required placeholder="фильтр по имени автора пост"
            ></b-form-input>
        </b-form-group>
        <b-form-group 
        id="input-group-2" 
        label="Контент" 
        label-for="input-2">
            <b-form-input 
            id="input-2" 
            v-model="text"
            required placeholder="фильтр по тексту поста"
            ></b-form-input>
        </b-form-group>
    </div>
</template>

<script>
export default {
    computed: {
        author: {
            get() {
                return this.$store.getters.author
            },
            set(value) {
                const author = value.toLowerCase().trim()
                this.$store.commit('searchAuthor', author)
            }
        }, 
        text: {
            get() {
                return this.$store.getters.text
            },
            set(value) {
                const text = value.toLowerCase().trim()
                this.$store.commit('searchText', text)
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.filters {
    text-align: left;
    margin-top: 1em;
}
</style>