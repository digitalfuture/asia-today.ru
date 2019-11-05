import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import SitePage from './views/SitePage'
import PostPage from './views/PostPage'
import TagPage from './views/TagPage'
import CategoryPage from './views/CategoryPage'

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
    },
    {
      path: '/:siteName/tag/:tagId',
      name: 'tagPage',
      component: TagPage,
      props: true
    },
    {
      path: '/:siteName/category/:categoryId',
      name: 'categoryPage',
      component: CategoryPage,
      props: true
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
