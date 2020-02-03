<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <Posts 
        :author="author" 
        :text="text" />
      </b-col>
      <b-col cols="3" class="right">
       <Form 
       @searchAuthor="author=$event" 
       @searchPostText="text=$event"
       />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Posts from './Posts.vue'
import Form from './Form.vue'

export default {
  components: {
    Posts,
    Form
  },
    data () {
      return {
      author: '',
      text: ''
      }
    }
  }</script>


<style scoped>
.right {
  background: #cecece;
}
</style>
