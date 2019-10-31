<template>
  <!-- Post grid -->
  <v-row class="post-grid" dense>
    <v-col v-for="(post, i) in sortedPosts" :key="i" cols="12" md="6">
      <PostCard :post="post" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostCard from './PostCard'

export default {
  components: {
    PostCard
  },
  props: ['siteName', 'offset', 'perPage'],
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
      //   thumb
      // }
    ]
  }),
  computed: {
    ...mapState(['sites']),
    sortedPosts() {
      const posts = [...this.posts]
      const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

      return sorted
    }
  },
  methods: {
    ...mapActions(['fetchLastPostsEmbed']),
    getSiteUrl(siteName) {
      return this.sites.find(site => site.name === siteName).url
    },
    savePostData({ siteName, data }) {
      this.posts.push({
        id: data.id,
        slug: data.slug,
        siteName: siteName,
        title: data.title.rendered,
        date: data.date,
        link: data.link,
        content: data.content.rendered,
        thumb:
          data._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url
      })
    },
    getPosts() {
      if (this.$route.name === 'homePage') {
        this.sites.forEach(site =>
          this.fetchLastPostsEmbed({
            siteUrl: site.url,
            offset: this.offset,
            perPage: this.perPage
          }).then(data =>
            this.savePostData({
              siteName: site.name,
              data: data[0]
            })
          )
        )
      } else {
        this.fetchLastPostsEmbed({
          siteUrl: this.getSiteUrl(this.siteName),
          offset: this.offset,
          perPage: this.perPage
        }).then(data =>
          data.forEach(post =>
            this.savePostData({
              siteName: this.siteName,
              data: post
            })
          )
        )
      }
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
