// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Moment from 'moment'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

Vue.filter('time_ago', function (timestamp) {
  const secondsAgo = Moment().diff(Moment(timestamp), 'seconds');
  if(secondsAgo < 60){
    if(secondsAgo === 0){
      return "just now";
    }
    return Math.round(secondsAgo) + " seconds ago";
  }
  
  if(secondsAgo > 59 && secondsAgo < 3600){
    return Math.round((secondsAgo / 60)) + " minutes ago";
  }

  return secondsAgo / 60 / 60 + " hours ago";
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
