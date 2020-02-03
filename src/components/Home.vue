<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <Posts />
      </b-col>
      <b-col cols="3" class="right">
       <Form />
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
    
  }</script>


<style scoped>
.right {
  background: #cecece;
}
</style>
