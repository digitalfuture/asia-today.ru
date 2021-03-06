import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import YandexShare from '@cookieseater/vue-yandex-share'
import VueAnalytics from 'vue-analytics'
import VueYandexMetrika from 'vue-yandex-metrika'
import VueMeta from 'vue-meta'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.use(VueAnalytics, {
  id: 'UA-131048533-1',
  router,
  debug: {
    // sendHitTask: false
  }
})

Vue.use(VueYandexMetrika, {
  id: 51568292,
  router: router,
  env: process.env.NODE_ENV
  // other options
})

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.component('yandex-share', YandexShare)

Vue.config.productionTip = false
// Vue.config.errorHandler = function(err, vm, info) {
// handle error
// `info` is a Vue-specific error info, e.g. which lifecycle hook
// the error was found in. Only available in 2.2.0+
// if ((err.message = 'Network Error')) location.reload()
// };

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
