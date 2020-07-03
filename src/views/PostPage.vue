<template>
  <v-container class="post-page px-0">
    <v-row justify="center" class="my-3 mx-0">
      <v-col cols="12" sm="11" class="px-0 px-sm-3">
        <section v-show="isSearch">
          <SearchForm class="my-12" />
        </section>

        <section v-show="!isSearch">
          <SitePost
            :siteName="siteName"
            :postSlug="postSlug"
            :currentPost="currentPost"
            class="mt-5 mt-sm-8 mt-md-9 mb-8"
          />

          <PostList :posts="filteredPosts" class="my-8" />

          <loadMoreButton :loadMore="loadMore" class="my-8" />
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { DateTime } from 'luxon'
import axios from 'axios'
import { sites } from '../config.json'

import { mapState, mapActions, mapMutations } from 'vuex'

import SitePost from '../components/SitePost'
import PostList from '../components/blocks/PostList'
import LoadMoreButton from '../components/LoadMoreButton'
import SearchForm from '../components/blocks/SearchForm'

export default {
  components: {
    SitePost,
    PostList,
    LoadMoreButton,
    SearchForm
  },
  metaInfo() {
    return {
      title: this.currentPost
        ? `${this.currentPost.title} - ${this.siteNameRu} сегодня: `
        : `${this.site.nameRu} cегодня`
    }
  },
  data: () => ({
    posts: [
      // {
      //   id,
      //   slug,
      //   siteName,
      //   title,
      //   date,
      //   link,
      //   content,
      //   thumb,
      //   tags,
      //   categories
      // }
    ],
    currentOffset: 0,
    perPage: 10,
    currentPost: null
  }),
  computed: {
    ...mapState(['sites', 'searchString', 'isSearch']),

    postSlug() {
      return this.$route.params.postSlug
    },
    siteName() {
      return this.$route.params.siteName
    },
    site() {
      return this.sites.find(site => site.name === this.siteName)
    },
    filteredPosts() {
      if (!this.currentPost) {
        return this.posts
      } else {
        return this.posts.filter(post => post.id !== this.currentPost.id)
      }
    }
  },
  methods: {
    ...mapMutations(['rememberPost', 'forgetPost']),
    ...mapActions(['fetchLastPostsEmbed', 'fetchPostBySlug']),

    getPosts() {
      return this.fetchLastPostsEmbed({
        siteUrl: this.site.url,
        offset: this.currentOffset,
        perPage: this.perPage
      }).then(data =>
        data.forEach(post =>
          this.savePostData({
            siteName: this.siteName,
            data: post
          })
        )
      )
    },
    savePostData({ siteName, data }) {
      this.posts.push({
        id: data.id,
        content: data.content.rendered,
        slug: data.slug,
        siteName: siteName,
        title: data.title.rendered,
        date: data.date,
        link: data.link,
        excerpt: data.excerpt.rendered,
        thumb:
          data._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url,
        categories: data._embedded['wp:term'][0],
        tags: data._embedded['wp:term'][1]
      })
    },
    saveCurrentPostData(data) {
      this.rememberPost({
        id: data.id,
        slug: data.slug,
        title: data.title.rendered,
        content: this.processContent(data.content.rendered),
        date: DateTime.fromISO(data.date, {
          locale: 'ru'
        }).toLocaleString(DateTime.DATE_FULL),
        thumb:
          data._embedded['wp:featuredmedia'][0].media_details.sizes.td_537x360
            .source_url,
        img:
          data._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url,
        categories: data._embedded['wp:term'][0],
        tags: data._embedded['wp:term'][1]
      })
    },
    processContent(data) {
      data = this.removeClasses(data)
      data = this.processLinks(data)
      data = this.processIframes(data)
      data = this.processImages(data)

      return data
    },
    removeClasses(data) {
      const template = document.createElement('div')
      template.innerHTML = data

      const elements = template.querySelectorAll('*')

      for (const element of elements) {
        element.classList = []
      }

      return template.innerHTML
    },
    processLinks(data) {
      const template = document.createElement('div')

      template.innerHTML = data
      const links = template.querySelectorAll('a')

      this.sites.forEach(site => {
        for (const link of links) {
          const domainName = site.url.split('//')[1]

          if (link.href.search(domainName) !== -1) {
            const linkFragments = link.href.split('/').reverse()
            const slug = linkFragments[0] ? linkFragments[0] : linkFragments[1]

            link.href = `/${site.name}/${slug}`
            link.target = ''
          }
        }
      })

      return template.innerHTML
    },
    processIframes(data) {
      const template = document.createElement('div')

      template.innerHTML = data
      const iframes = template.querySelectorAll('iframe')

      for (const iframe of iframes) {
        iframe.parentNode.classList.add('site-post__content__aspect-ratio')
      }

      return template.innerHTML
    },
    processImages(data) {
      const template = document.createElement('div')
      template.innerHTML = data

      const images = template.querySelectorAll('img')

      for (const image of images) {
        if (image.src.startsWith(window.location.origin)) {
          image.src = image.src.replace(window.location.origin, this.siteUrl)
        }
      }

      return template.innerHTML
    },
    loadMore() {
      this.currentOffset += this.perPage
      this.getPosts()
    }
  },
  beforeRouteEnter(to, from, next) {
    function fetchPostBySlug({ siteUrl, postSlug }) {
      return axios
        .get(`${siteUrl}/wp-json/wp/v2/posts?slug=${postSlug}&_embed`)
        .then(response => response.data[0])
    }

    const siteUrl = sites.find(site => site.name === to.params.siteName).url

    fetchPostBySlug({
      siteUrl,
      postSlug: to.params.postSlug
    }).then(data => next(vm => vm.saveCurrentPostData(data)))
  },
  beforeRouteUpdate(to, from, next) {
    const siteUrl = sites.find(site => site.name === to.params.siteName).url
    const postSlug = to.params.postSlug

    this.fetchPostBySlug({
      siteUrl,
      postSlug
    })
      .then(data => this.saveCurrentPostData(data))
      .then(() => next())
  },
  created() {
    this.getPosts()
  }
}
</script>
