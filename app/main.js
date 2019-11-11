import Vue from 'nativescript-vue'
import App from './components/App'
import FriendlyMenu from './components/FriendlyMenu'

//import VueDevtools from 'nativescript-vue-devtools'
import store from './store'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);
// done

if(TNS_ENV !== 'production') {
  //Vue.use(VueDevtools)
}

Vue.registerElement(
  'CardView', () => require('@nstudio/nativescript-cardview').CardView
);

Vue.use(FriendlyMenu)
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
