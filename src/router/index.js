import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import kchat from '../components/kchat';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/kchat',
      name: 'kcaht',
      component: kchat
    },
    {
      path: '/helloWorld',
      component: HelloWorld
    },
    { path: '/hsq',
      component: { template: '<div>hsq' +
        '<router-link append to="age">age</router-link>' +
        '<router-link append to="sex">sex</router-link>' +
        '<router-view></router-view></div>' },
      children: [
        {
          path: 'age',
          component: { template: '<div>27</div>', mounted () { console.log(this.$router, this.$route) } }},
        {
          path: 'sex', component: {template: '<div>man</div>'}
        }
      ]
    }
  ]
})
