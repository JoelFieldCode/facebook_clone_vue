<template>
  <div class="posts">

    <div class = "add-post-container">
      <md-button @click="addPost" :disabled="!validPost" class="md-raised md-primary">Add Post</md-button>
      <md-field>
        <label>What's on your mind?</label>
        <md-textarea v-model="newPost.message"></md-textarea>
      </md-field>
      <h3> Latests Posts </h3>
    </div>

    <div>
      <md-list class="md-triple-line">
        <post-component v-for="postModel in posts" v-on:delete-post="deletePost":post-model="postModel"/></post>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </div>

    <div v-if="posts.length === 0">
      No Posts
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

  computed: {
    validPost() {
      return this.newPost.message !== "";
    }
  },

  methods: {
    deletePost (id) {
      PostService.delete(id)
        .then(() => {
          this.getPosts();
        });
    },
    addPost () {
      PostService.add(this.newPost)
        .then(() => {
          this.newPost.message = "";
          this.getPosts();
        });
    },

    getPosts () {
      this.posts = PostService.posts().then(resp => {
          this.posts = resp.data;
      });
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

  .add-post-container{
    margin-left: auto;
    margin-right: auto;
    width: 10%;
  }

</style>
