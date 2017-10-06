require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import database from './plugins/database'

Vue.use(Quasar)
Vue.use(database)

Quasar.start(() => {
  /* eslint-disable */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
