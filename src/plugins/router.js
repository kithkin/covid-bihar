import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function lazyLoad(view, comp) {
  return () => import('./../components/' + view + '/' + comp + '.vue')
}

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({y: 0}),
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'HomePage',
      path: '/',
      component: lazyLoad('homepage', 'HomePage'),
    },
  ],
})
