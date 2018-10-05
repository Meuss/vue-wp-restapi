import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productinTip = false;
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
