import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sites: [
      {
        name: 'vietnam',
        rusName: 'Вьетнам',
        url: 'https://asia-vietnam.ru',
        logo: require('@/assets/logo-vietnam-transparent.png'),
        color: '#68D758'
      },
      {
        name: 'nepal',
        rusName: 'Непал',
        url: 'https://asia-nepal.ru',
        logo: require('@/assets/logo-nepal-transparent.png'),
        color: '#4DB2EC'
      },
      {
        name: 'thailand',
        rusName: 'Таиланд',
        url: 'https://asia-thailand.ru',
        logo: require('@/assets/logo-thailand-transparent.png'),
        color: '#BB86FC'
      },
      {
        name: 'philippines',
        rusName: 'Филиппины',
        url: 'https://asia-philippines.ru',
        logo: require('@/assets/logo-philippines-transparent.png'),
        color: '#03DAC6'
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
