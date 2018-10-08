<template>
  <div>
    <h1>Example of listing regular posts</h1>
    <div v-for="(post, index) in posts" :key="index" class="post">
      <h3>{{post.title.rendered}}</h3>
      <div>{{post.date}}</div>
      <div v-html="post.excerpt.rendered"></div>
    </div>
  </div>
</template>

<script>
import { api } from '@/axios-config';

export default {
  name: 'Posts',
  data() {
    return {
      posts: null,
    };
  },
  created() {
    api
      .get('posts?per_page=3')
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
