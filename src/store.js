import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchString: '',
    loadingCount: 0,
    searchResults: [
      // {
      //   id,
      //   slug,
      //   siteName,
      //   title,
      //   date,
      //   link,
      //   content
      // }
    ],
    sites: [
      {
        name: 'vietnam',
        nameRu: 'Вьетнам',
        url: 'https://asia-vietnam.ru',
        color: '#68D758'
      },
      {
        name: 'nepal',
        nameRu: 'Непал',
        url: '//asia-nepal.ru',
        color: '#4DB2EC'
      },
      {
        name: 'thailand',
        nameRu: 'Таиланд',
        url: '//asia-thailand.ru',
        color: '#BB86FC'
      },
      {
        name: 'philippines',
        nameRu: 'Филиппины',
        url: '//asia-philippines.ru',
        color: '#03DAC6'
      }
      // {
      //   name: 'china',
      //   nameRu: 'Китай',
      //   url: '//asia-china.ru',
      //   color: '#FF0000'
      // },
      // {
      //   name: 'japan',
      //   nameRu: 'Япония',
      //   url: '//asia-japan.ru',
      //   color: '#FFCCCC'
      // },
      // {
      //   name: 'korea',
      //   nameRu: 'Корея',
      //   url: '//asia-korea.ru',
      //   color: '#FF99FF'
      // },
      // {
      //   name: 'sri-lanka',
      //   nameRu: 'Шри-Ланка',
      //   url: '//asia-sri-lanka.ru',
      //   color: '#FF6633'
      // },
      // {
      //   name: 'india',
      //   nameRu: 'Индия',
      //   url: '//asia-india.ru',
      //   color: '#FF9933'
      // },
      // {
      //   name: 'cambodia',
      //   nameRu: 'Камбоджа',
      //   url: '//asia-cambodia.ru',
      //   color: '#FFFF00'
      // },
      // {
      //   name: 'malaysia',
      //   nameRu: 'Малайзия',
      //   url: '//asia-malaysia.ru',
      //   color: '#00CCFF'
      // },
      // {
      //   name: 'singapore',
      //   nameRu: 'Сингапур',
      //   url: '//asia-singapore.ru',
      //   color: '#FF0066'
      // },
      // {
      //   name: 'myanmar',
      //   nameRu: 'Мьянма',
      //   url: '//asia-myanmar.ru',
      //   color: '#FFCC00'
      // }
    ]
  },
  mutations: {
    startLoading(state) {
      // console.log("start loading");
      state.loadingCount++
    },
    stopLoading(state) {
      // console.log("stop loading");
      state.loadingCount--
    },
    updateSearchString(state, text) {
      state.searchString = text
    },
    updateSearchResult(state, data) {
      // console.log("update data:", data);
      // console.log("before update:", state.searchResults);
      data.forEach(post => state.searchResults.push(post))

      // console.log("after update:", state.searchResults);
    },
    clearSearchString(state) {
      state.searchString = ''
    },
    clearSearchResult(state) {
      state.searchResults = []
    }
  },
  actions: {
    fetchLastPosts(context, { siteUrl, perPage, offset }) {
      context.commit('startLoading')

      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?offset=${offset}&per_page=${perPage}`
        )
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log(data)
          return data
        })
    },
    fetchLastPostsEmbed(context, { siteUrl, perPage, offset }) {
      context.commit('startLoading')

      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?offset=${offset}&per_page=${perPage}&_embed`
        )
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log(data)
          return data
        })
    },
    fetchPostById(context, { siteUrl, postId }) {
      context.commit('startLoading')

      return axios
        .get(siteUrl + '/wp-json/wp/v2/posts/' + postId + '?_embed')
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log(data)
          return data
        })
    },
    fetchPostBySlug(context, { siteUrl, postSlug }) {
      context.commit('startLoading')

      return axios
        .get(siteUrl + '/wp-json/wp/v2/posts?slug=' + postSlug + '&_embed')
        .then(response => response.data[0])
        .then(data => {
          context.commit('stopLoading')
          // console.log('post:', data)
          return data
        })
    },
    searchPosts(context, { siteUrl, searchString, offset, perPage }) {
      context.commit('startLoading')

      //asia-vietnam.ru/wp-json/wp/v2/posts?search="путин"
      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?search=${searchString}&per_page=${perPage}&offset=${offset}`
        )
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log("post:", data);
          return data
        })
    }
  }
})
