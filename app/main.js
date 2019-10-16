import Vue from 'nativescript-vue'
import App from './components/App'
import FriendlyMenu from './components/FriendlyMenu'

import VueDevtools from 'nativescript-vue-devtools'
import store from './store'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

Vue.use(FriendlyMenu)
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
