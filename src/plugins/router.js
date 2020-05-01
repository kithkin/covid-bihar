import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
function lazyLoad(view, comp) {
    return () => import('./../components/' + view + '/' + comp + '.vue')
}

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ 
            y: 0
        }),
        routes: [
            {
                path: '/',
                name: 'homepage',
                component: lazyLoad('homepage', 'HomePage'),
                meta: {
                    title: 'Bihar Trending',
                    metaTags: [
                        {
                            name: 'description',
                            content: ''
                        },
                        {
                            property: 'og:description',
                            content: ''
                        }
                    ]
                }
            },
            {
                path: '/hindi',
                name: 'homepage-hindi',
                component: lazyLoad('homepage', 'Homepage'),
                meta: {
                    title: '',
                    metaTags: [
                        {
                            name: 'description',
                            content: ''
                        },
                        {
                            property: 'og:description',
                            content: ''
                        }
                    ]
                }
            },
        ]
    })
}
