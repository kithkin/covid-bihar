import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import './plugins/chartist'
import router from './plugins/router'
import SocialSharing from 'vue-social-sharing'
 
Vue.use(SocialSharing);

Vue.config.productionTip = false

new Vue({
  SocialSharing,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
