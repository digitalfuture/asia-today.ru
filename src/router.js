import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import SitePage from './views/SitePage'
import Post from './components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:siteName/:postSlug',
      name: 'postPage',
      component: Post,
      props: true
    },
    {
      path: '/:siteName',
      name: 'sitePage',
      component: SitePage,
      props: true
    }
  ]
})
