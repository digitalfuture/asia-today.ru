<template>
  <!-- Home page -->
  <div class="home-page d-flex justify-center py-12">
    <!-- Set title to page -->
    <vue-headful title="Азия сегодня" />

    <v-col cols="12" sm="11" md="9">
      <PostGrid4 :posts="postGrid4Posts" />

      <!-- Search form -->
      <v-row>
        <v-col cols="12">
          <SearchForm :perPage="1" />
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
    perPage: 1
  }),
  computed: {
    ...mapState(['sites', 'searchString']),
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
    getSiteUrl(siteName) {
      return this.sites.find(site => site.name === siteName).url
    },
    getPosts() {
      this.sites.forEach(site =>
        this.fetchLastPostsEmbed({
          siteUrl: site.url,
          offset: this.currentOffset,
          perPage: this.perPage
        }).then(data =>
          data.length
            ? this.savePostData({
                siteName: site.name,
                data: data[0]
              })
            : false
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
      this.currentOffset++
      this.getPosts()
    }
  },
  created() {
    this.getPosts()
    this.loadMore()
  }
}
</script>
