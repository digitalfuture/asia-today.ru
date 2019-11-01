<template>
  <!-- Post list -->
  <v-container class="post-list">
    <!-- Search form -->
    <v-row>
      <v-col>
        <SearchForm
          :siteName="siteName"
          :offset="сurrentOffsetSearch"
          :perPage="perPage"
        />
      </v-col>
    </v-row>

    <!-- Search result -->
    <v-row v-if="searchString" dense>
      <v-col v-for="(post, i) in searchResults" :key="i" cols="12">
        <PostStripe :post="post" :siteName="post.siteName" />
      </v-col>
    </v-row>

    <!-- Search more button -->
    <v-row v-if="searchString && searchResults.length" justify="center">
      <v-btn @click="searchMore" fab text>
        <v-icon color="black" x-large>mdi-chevron-down</v-icon>
      </v-btn>
    </v-row>

    <!-- Post list -->
    <v-row v-if="!searchString && filteredPosts.length" dense>
      <v-col v-for="(post, i) in filteredPosts" :key="i" cols="12">
        <PostStripe :post="post" :siteName="post.siteName" />
      </v-col>
    </v-row>

    <!-- Skeleton list -->
    <v-row v-else dense>
      <v-col v-for="i in 4" :key="i" cols="12">
        <v-skeleton-loader
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <!-- Load more button -->
    <v-row v-if="!searchString" justify="center">
      <v-btn @click="loadMore" fab text>
        <v-icon color="black" x-large>mdi-chevron-down</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SearchForm from '../SearchForm'
import PostStripe from './PostStripe'

export default {
  components: {
    SearchForm,
    PostStripe
  },
  props: ['siteName', 'offset', 'perPage'],
  data() {
    return {
      currentOffset: this.offset,
      сurrentOffsetSearch: 0,
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
        //   excerpt
        // }
      ]
    }
  },
  watch: {
    currentOffset() {
      this.getPosts()
    }
  },
  computed: {
    ...mapState(['sites', 'searchString', 'searchResults']),
    sortedPosts() {
      const posts = [...this.posts]
      const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

      let prevPostId = null

      return sorted.filter(post => {
        if (post.id === prevPostId) {
          return false
        } else {
          prevPostId = post.id
          return true
        }
      })
    },
    filteredPosts() {
      let prevPostId = null

      return this.posts.filter(post => {
        if (post.id === prevPostId) {
          return false
        } else {
          prevPostId = post.id
          return true
        }
      })
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
        excerpt: data.excerpt.rendered,
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
            offset: this.currentOffset,
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
      }
    },
    loadMore() {
      this.currentOffset += this.perPage
    },
    searchMore() {
      this.сurrentOffsetSearch += this.perPage
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
