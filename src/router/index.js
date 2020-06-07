import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainView from '../mainView'
import devTools from '../subView/devTools/devTools'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainView',
      component: mainView,
      name: 'mainView',
      children: [
        {
          path: 'devTools',
          component: devTools,
          name: 'devTools'
        }
      ]
    }
  ]
})
