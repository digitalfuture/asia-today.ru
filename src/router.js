import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import SitePage from './views/SitePage'
import PostPage from './views/PostPage'

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
      name: 'postPage',
      component: PostPage,
      props: true
    },
    {
      path: '/:siteName',
      name: 'sitePage',
      component: SitePage,
      props: true
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
