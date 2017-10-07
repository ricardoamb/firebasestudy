require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import firebase from './plugins/firebase'

Vue.use(Quasar)
Vue.use(firebase, { router })

Quasar.start(() => {
  /* eslint-disable */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
