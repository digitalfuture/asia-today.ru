<template>
  <!-- Site page -->
  <div class="site-page d-flex justify-center py-12">
    <v-col cols="12" sm="11" md="9">
      <PostGrid5 :posts="sortedPosts.slice(0, 5)" />

      <SearchForm :siteName="siteName" class="my-8" />

      <PostList
        v-if="!searchString"
        :posts="sortedPosts.slice(5)"
        class="my-8"
      />

      <load-more-button
        v-if="!searchString && sortedPosts.slice(5).length"
        :loadMore="loadMore"
        class="my-8"
      />
    </v-col>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostGrid5 from '../components/blocks/PostGrid5'
import LoadMoreButton from '../components/LoadMoreButton'
import PostList from '../components/blocks/PostList'
import SearchForm from '../components/SearchForm'

export default {
  components: {
    PostGrid5,
    PostList,
    LoadMoreButton,
    SearchForm
  },
  metaInfo() {
    return { title: `${this.site.nameRu} cегодня` }
  },
  props: ['siteName'],
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
    perPage: 10
  }),
  computed: {
    ...mapState(['sites', 'searchString']),
    site() {
      return this.sites.find(site => site.name === this.siteName)
    },
    sortedPosts() {
      return [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },
  methods: {
    ...mapActions(['fetchLastPostsEmbed']),
    getPosts() {
      this.fetchLastPostsEmbed({
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
    loadMore() {
      this.currentOffset += this.perPage
      this.getPosts()
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
