import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import MuseUI from 'muse-ui'
import Toast from 'muse-ui-toast'
import Loading from 'muse-ui-loading'

import './scss/index.scss'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.use(Toast)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
