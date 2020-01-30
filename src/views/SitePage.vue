<template>
  <!-- Site page -->
  <div class="site-page d-flex justify-center py-12">
    <!-- Set title to page -->
    <vue-headful :title="`${site.nameRu} Сегодня`" />

    <v-col cols="12" sm="11" md="9">
      <PostGrid4 :posts="postGrid4Posts" />

      <!-- Search form -->
      <v-row>
        <v-col cols="12">
          <SearchForm :siteName="siteName" />
        </v-col>
      </v-row>

      <PostList
        v-if="!searchString"
        :posts="postListPosts"
        :loadMore="loadMore"
      />
    </v-col>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostGrid4 from '../components/blocks/PostGrid4'
import PostList from '../components/blocks/PostList'
import SearchForm from '../components/SearchForm'

export default {
  components: {
    PostGrid4,
    PostList,
    SearchForm
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
    postGrid4Posts() {
      return [...this.posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4)
    },
    postListPosts() {
      return this.posts.slice(4)
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
