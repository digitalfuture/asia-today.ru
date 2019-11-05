import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import sites from './sites'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sites: sites.slice(0, 4),
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
      //   content,
      //   thumb
      // }
    ],
    currentPost: null
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
    },
    rememberPost(state, post) {
      state.currentPost = post
    },
    forgetPost(state) {
      state.currentPost = null
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
    fetchPostsByTagId(context, { siteUrl, tagId, offset }) {
      context.commit('startLoading')

      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?tags=${tagId}&offset=${offset}&_embed`
        )
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log('post:', data)
          return data
        })
    },
    fetchPostsByCategoryId(context, { siteUrl, categoryId, offset }) {
      context.commit('startLoading')

      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?categories=${categoryId}&offset=${offset}&_embed`
        )
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log('post:', data)
          return data
        })
    },
    fetchPostBySlug(context, { siteUrl, postSlug }) {
      context.commit('startLoading')

      return axios
        .get(`${siteUrl}/wp-json/wp/v2/posts?slug=${postSlug}&_embed`)
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
          `${siteUrl}/wp-json/wp/v2/posts?search=${searchString}&per_page=${perPage}&offset=${offset}&_embed`
        )
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log("post:", data);
          return data
        })
    },
    getTagInfo(context, { siteUrl, tagId }) {
      context.commit('startLoading')

      //asia-vietnam.ru/wp-json/wp/v2/posts?search="путин"
      return axios
        .get(`${siteUrl}/wp-json/wp/v2/tags/${tagId}`)
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log("post:", data);
          return data
        })
    },
    getCategoryInfo(context, { siteUrl, categoryId }) {
      context.commit('startLoading')

      //asia-vietnam.ru/wp-json/wp/v2/posts?search="путин"
      return axios
        .get(`${siteUrl}/wp-json/wp/v2/categories/${categoryId}`)
        .then(response => response.data)
        .then(data => {
          context.commit('stopLoading')
          // console.log("post:", data);
          return data
        })
    }
  },
  getters: {
    getSiteUrl: state => siteName => {
      return state.sites.find(site => site.name === siteName).url
    }
  }
})
