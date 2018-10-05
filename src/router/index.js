import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Posts from '@/components/Posts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
        metaTags: [
          {
            name: 'description',
            content: 'Home',
          },
          {
            property: 'og:description',
            content: 'home',
          },
        ],
      },
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
      meta: {
        title: 'Posts',
        metaTags: [
          {
            name: 'description',
            content: 'Posts',
          },
          {
            property: 'og:description',
            content: 'posts',
          },
        ],
      },
    },
  ],
  mode: 'history',
});
