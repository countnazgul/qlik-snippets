import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
