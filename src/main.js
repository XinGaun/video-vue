// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $Api from './axios/http'
import {BASE_URL} from "./axios/http"
import $ from 'jquery'
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$Api = $Api;
Vue.prototype.BASE_URL = BASE_URL;

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  if( to.hasOwnProperty('meta') && to.meta.hasOwnProperty('title') ){
    document.title = to.meta.title;
  } else {
    document.title = '语道文心';
  }
  next();
});

Vue.use(VueLazyload, {
  error: 'static/img/fm.png',
  loading: 'static/img/zwt.gif',
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
