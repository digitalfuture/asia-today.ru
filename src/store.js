import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sites: [
      {
        name: 'vietnam',
        url: 'https://asia-vietnam.ru',
        logo:
          'https://asia-vietnam.ru/wp-content/uploads/2018/11/logo_vietnam-small.png',
        logo2: 'https://asia-vietnam.ru/wp-content/uploads/2018/08/logo2.png'
      },
      {
        name: 'nepal',
        url: 'https://asia-nepal.ru',
        logo:
          'https://asia-nepal.ru/wp-content/uploads/2018/11/logo_nepal_small.png',
        logo2: 'https://asia-nepal.ru/wp-content/uploads/2018/08/logo4.png'
      },
      {
        name: 'thailand',
        url: 'https://asia-thailand.ru',
        logo:
          'https://asia-thailand.ru/wp-content/uploads/2018/11/logo-thailand-small.png',
        logo2:
          'https://asia-thailand.ru/wp-content/uploads/2018/10/logo-thailand-transparent-300x116.png'
      },
      {
        name: 'philippines',
        url: 'https://asia-philippines.ru',
        logo:
          'https://asia-philippines.ru/wp-content/uploads/2018/11/logo-philippines-small.png',
        logo2:
          'https://asia-philippines.ru/wp-content/uploads/2018/10/logo-philippines-transparent-300x116.png'
      }
    ]
  },
  getters: {
    //
  },
  mutations: {
    //
  },
  actions: {
    getLastPosts(context, { siteUrl, count }) {
      return axios
        .get(`${siteUrl}/wp-json/wp/v2/posts?per_page=${count}&_embed`)
        .then(response => response.data)
        .then(data => {
          // console.log(data)
          return data
        })
    },
    getPostById(context, { siteUrl, postId }) {
      return axios
        .get(siteUrl + '/wp-json/wp/v2/posts/' + postId + '?_embed')
        .then(response => response.data)
      // .then(data => {
      //   console.log(data)
      //   return data
      // })
    },
    getPostBySlug(context, { siteUrl, postSlug }) {
      return axios
        .get(siteUrl + '/wp-json/wp/v2/posts?slug=' + postSlug + '&_embed')
        .then(response => response.data[0])
        .then(data => {
          // console.log('post:', data)
          return data
        })
    }
  }
})
