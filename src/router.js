import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import SitePage from './views/SitePage'
import Post from './components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/:siteName/:postSlug',
      name: 'post',
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
