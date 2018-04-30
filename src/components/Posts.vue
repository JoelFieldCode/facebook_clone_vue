<template>
  <div class="posts">

    <div>
      <button @click="addPost"> Add new Post </button>
      <input type = "text" v-model="newPost.message">
      <h3> Latests Posts </h3>
    </div>

    <div>
      <md-list class="md-triple-line">
        <post-component v-for="postModel in posts" :post-model="postModel"/></post>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </div>
    
</div>
</template>

<script>
import PostService from '../services/PostService';
import PostComponent from '../components/Post';

export default {
  name: 'posts',

  components : {
    'post-component': PostComponent
  },
  data () {
    return {
      posts: [],
      newPost: {
        message: "",
      },
    }
  },

  methods: {
    addPost () {
      PostService.add(this.newPost)
        .then(() => {
          this.newPost = {};
          this.getPosts();
        });
    },

    getPosts () {
      this.posts = PostService.posts();
    },
  },

  created () {
    this.getPosts();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

</style>
