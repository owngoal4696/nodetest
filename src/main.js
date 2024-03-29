import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// VueRouterを使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/',
      component: () => import('./components/MainPage.vue')
    },
    {
      path: '/study/binding',
      component: () => import('./components/study/BindingPage.vue')
    },
    {
      path: '/study/directive',
      component: () => import('./components/study/DirectivePage.vue')
    },
    {
      path: '/study/event',
      component: () => import('./components/study/EventPage.vue')
    },
    {
      path: '/study/todolist',
      component: () => import('./components/study/Todolist.vue')
    },
    {
      path: '/*',
      redirect: '/',
    }
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')