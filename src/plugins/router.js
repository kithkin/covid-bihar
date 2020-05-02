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
      path: '/covid-bihar',
      component: lazyLoad('homepage', 'HomePage'),
      meta: {
        title: 'Covid19 | Bihar | Coronavirus trending data of Bihar',
        icon: './../../src/assets/favicon.png',
        metaTags: [
          {
            name: 'description',
            content: 'Find all the trending data of bihar district wise'
          },
          {
            property: 'og:description',
            content: 'Find all the trending data of bihar district wise'
          }
        ]
      }
    },
    {
      name: 'AboutPage',
      path: '/covid-bihar/about',
      component: lazyLoad('aboutpage', 'AboutPage'),
      meta: {
        title: 'About Page | Covid Bihar | Coronavirus trending data of Bihar',
        metaTags: [
          {
            name: 'description',
            content: 'Find all the trending data of bihar district wise'
          },
          {
            property: 'og:description',
            content: 'Find all the trending data of bihar district wise'
          }
        ]
      }
    },
    {
      path: '*',
      redirect: '/covid-bihar'
    },
  ],
})