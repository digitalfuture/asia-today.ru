import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sites: [
      {
        name: 'Vietnam',
        title: '',
        url: 'https://asia-vietnam.ru',
        date: '',
        img: '',
        logo:
          'https://asia-vietnam.ru/wp-content/uploads/2018/11/logo_vietnam-small.png',
        link: ''
      },
      {
        name: 'Nepal',
        title: '',
        url: 'https://asia-nepal.ru',
        date: '',
        img: '',
        logo:
          'https://asia-nepal.ru/wp-content/uploads/2018/11/logo_nepal_small.png',
        link: ''
      },
      {
        title: '',
        name: 'Thailand',
        url: 'https://asia-thailand.ru',
        date: '',
        img: '',
        logo:
          'https://asia-thailand.ru/wp-content/uploads/2018/11/logo-thailand-small.png',
        link: ''
      },
      {
        name: 'Philippines',
        title: '',
        url: 'https://asia-philippines.ru',
        date: '',
        img: '',
        logo:
          'https://asia-philippines.ru/wp-content/uploads/2018/11/logo-philippines-small.png',
        link: ''
      }
    ]
  },
  mutations: {
    saveData(state, { name, data }) {
      // console.log('payload', { name, data })
      const site = state.sites.find(site => site.name === name)

      site.title = data.title.rendered
      site.date = data.date
      site.img =
        data._embedded[
          'wp:featuredmedia'
        ][0].media_details.sizes.td_537x360.source_url
      site.link = data.link
    }
  },
  actions: {
    getData({ commit, state }) {
      state.sites.forEach(site =>
        axios
          .get(site.url + '/wp-json/wp/v2/posts?per_page=1&_embed')
          .then(data =>
            commit('saveData', { name: site.name, data: data.data[0] })
          )
      )
    }
  }
})
