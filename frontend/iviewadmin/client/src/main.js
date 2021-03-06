import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import './index.less'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)


new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
