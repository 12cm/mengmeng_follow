import Vue from 'vue'

import app from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Loading from './components/loading'

import filters from './filters'

// Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))


Vue.use(Loading);


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
// axios.interceptors.request.use(function (config) {  //配置发送请求的信息
//   store.dispatch('showLoading')  
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//   store.dispatch('hideLoading')
//   return response;
// }, function (error) {

//   return Promise.reject(error);
// });

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了



new Vue({
  el: '#app',//挂载点
  router,
  store,
  render: h => h(app) //app组件 import app from './App.vue'

  // 等同于
  // render:function(h){
  //   return h(app)
  // }

})
