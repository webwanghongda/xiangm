// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(res=>{
  console.log(res);
})

// require('./assets/css/base.css')
