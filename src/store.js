import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchString: "",
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
        name: "vietnam",
        rusName: "Вьетнам",
        url: "https://asia-vietnam.ru",
        logo: require("@/assets/logo-vietnam-transparent.png"),
        color: "#68D758"
      },
      {
        name: "nepal",
        rusName: "Непал",
        url: "https://asia-nepal.ru",
        logo: require("@/assets/logo-nepal-transparent.png"),
        color: "#4DB2EC"
      },
      {
        name: "thailand",
        rusName: "Таиланд",
        url: "https://asia-thailand.ru",
        logo: require("@/assets/logo-thailand-transparent.png"),
        color: "#BB86FC"
      },
      {
        name: "philippines",
        rusName: "Филиппины",
        url: "https://asia-philippines.ru",
        logo: require("@/assets/logo-philippines-transparent.png"),
        color: "#03DAC6"
      }
    ]
  },
  getters: {
    //
  },
  mutations: {
    startLoading(state) {
      // console.log("start loading");
      state.loadingCount++;
    },
    stopLoading(state) {
      // console.log("stop loading");
      state.loadingCount--;
    },
    updateSearchString(state, text) {
      state.searchString = text;
    },
    updateSearchResults(state, data) {
      // console.log("update data:", data);
      // console.log("before update:", state.searchResults);
      data.forEach(post => state.searchResults.push(post));

      // console.log("after update:", state.searchResults);
    },
    clearSearchString(state) {
      state.searchString = "";
    },
    clearSearchResults(state) {
      state.searchResults = [];
    }
  },
  actions: {
    scrollToTop() {
      Vue.prototype.$vuetify.goTo(".scroll-up");
    },
    getLastPosts(context, { siteUrl, page, count, offset }) {
      context.commit("startLoading");

      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?page=${page}&offset=${offset}&per_page=${count}`
        )
        .then(response => response.data)
        .then(data => {
          context.commit("stopLoading");
          // console.log(data)
          return data;
        });
    },
    getLastPostsEmbed(context, { siteUrl, count, offset }) {
      context.commit("startLoading");

      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?offset=${offset}&per_page=${count}&_embed`
        )
        .then(response => response.data)
        .then(data => {
          context.commit("stopLoading");
          // console.log(data)
          return data;
        });
    },
    getPostById(context, { siteUrl, postId }) {
      context.commit("startLoading");

      return axios
        .get(siteUrl + "/wp-json/wp/v2/posts/" + postId + "?_embed")
        .then(response => response.data)
        .then(data => {
          context.commit("stopLoading");
          // console.log(data)
          return data;
        });
    },
    getPostBySlug(context, { siteUrl, postSlug }) {
      context.commit("startLoading");

      return axios
        .get(siteUrl + "/wp-json/wp/v2/posts?slug=" + postSlug + "&_embed")
        .then(response => response.data[0])
        .then(data => {
          context.commit("stopLoading");
          // console.log('post:', data)
          return data;
        });
    },
    searchPosts(context, { siteUrl, searchString, count, page }) {
      context.commit("startLoading");
      context.commit("clearSearchResults");

      //asia-vietnam.ru/wp-json/wp/v2/posts?search="путин"
      return axios
        .get(
          `${siteUrl}/wp-json/wp/v2/posts?search=${searchString}&per_page=${count}&page=${page}`
        )
        .then(response => response.data)
        .then(data => {
          context.commit("stopLoading");
          // console.log("post:", data);
          return data;
        });
    }
  }
});
