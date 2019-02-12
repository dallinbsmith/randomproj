<template>
        <div class="columns">
          <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
            <app-post :link="post.link">
              <h3 slot="title">{{post.text}}</h3>
            </app-post>
          </div>
        </div>
</template>
<script>
  import Post from './Post.vue'
  import appService from '../app.service.js'
    export default {
      components: {
        'app-post': Post
      },
    data() {
      return {
        id: this.$route.params.id,
        posts: []
      }
    },
    methods: {
      loadPosts (){
        appService.getPosts().then(data => {
          this.posts = data
        })
      }
    },
      watch: {
        '$route'(to, from){
          this.id = to.params.id
          this.loadPosts()
        }
      },
      created () {
        this.loadPosts()
        console.log(this.$route.query.page)
      }
  }
</script>
