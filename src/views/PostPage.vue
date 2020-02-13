<template>
  <div class="post-page d-flex justify-center py-12">
    <v-col cols="12" sm="11" md="9" class="pt-4">
      <SitePost :siteName="siteName" :postSlug="postSlug" class="mb-4" />

      <SearchForm :siteName="siteName" class="my-8" />

      <PostList v-if="!searchString" :posts="filteredPosts" class="my-8" />

      <load-more-button :loadMore="loadMore" class="my-8" />
    </v-col>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SitePost from '../components/SitePost'
import PostList from '../components/blocks/PostList'
import LoadMoreButton from '../components/LoadMoreButton'
import SearchForm from '../components/SearchForm'

export default {
  components: {
    SitePost,
    PostList,
    LoadMoreButton,
    SearchForm
  },
  metaInfo() {
    return { title: `${this.site.nameRu} cегодня` }
  },
  props: ['postSlug'],
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
    ...mapState(['sites', 'searchString', 'currentPost']),
    siteName() {
      return this.$route.params.siteName
    },
    site() {
      return this.sites.find(site => site.name === this.siteName)
    },
    filteredPosts() {
      return this.posts.filter(post => post.id !== this.currentPost.id)
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
