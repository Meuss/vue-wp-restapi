<template>
  <div>
    <h1 class="page-title">{{homepage.title.rendered}}</h1>
    <div class="page-content" v-html="homepage.content.rendered"></div>
  </div>
</template>

<script>
import { api } from '@/axios-config';

export default {
  name: 'Home',
  data() {
    return {
      homepage: null,
    };
  },
  created() {
    api
      .get('pages?slug=home-page')
      .then(response => {
        console.log(response);
        this.homepage = response.data[0];
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
