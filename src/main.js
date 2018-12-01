// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
//import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import App from './App'
import router from './router'
import store from './store'
// Webpack CSS import


//Vue.use(VueOnsen);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//https://jsfiddle.net/ngangchill/eywraw8t/484667/