import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import './plugins/chartist'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
