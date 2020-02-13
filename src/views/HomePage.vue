<template>
  <!-- Home page -->
  <div class="home-page d-flex justify-center py-12">
    <v-col cols="12" sm="11" md="9">
      <PostGrid5 :posts="posts.slice(0, 5)" />

      <!-- Search form -->
      <SearchForm :perPage="1" class="my-8" />

      <PostList
        class="my-8"
        v-if="!searchString"
        :posts="posts.slice(5, 8)"
        :loadMore="loadMore"
      />

      <PostGrid3
        v-if="!searchString"
        :posts="posts.slice(8, 11)"
        class="my-8"
      />

      <PostList
        v-if="!searchString"
        :posts="posts.slice(11, 14)"
        class="my-8"
      />

      <PostGrid4
        v-if="!searchString"
        :posts="posts.slice(14, 18)"
        class="my-8"
      />

      <PostList v-if="!searchString" :posts="posts.slice(18)" class="my-8" />

      <load-more-button :loadMore="loadMore" />

      <!-- 
      <WeatherCard
        v-for="site of sites.slice(0, 1)"
        :key="site.name"
        :site="site"
      /> -->
    </v-col>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import PostGrid3 from '../components/blocks/PostGrid3'
import PostGrid4 from '../components/blocks/PostGrid4'
import PostGrid5 from '../components/blocks/PostGrid5'
import PostList from '../components/blocks/PostList'
import LoadMoreButton from '../components/LoadMoreButton'
// import WeatherCard from '../components/blocks/WeatherCard'
import SearchForm from '../components/SearchForm'

export default {
  components: {
    PostGrid3,
    PostGrid4,
    PostGrid5,
    PostList,
    LoadMoreButton,
    // WeatherCard,
    SearchForm
  },
  metaInfo: {
    title: 'Азия сегодня'
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
    ...mapState(['sites', 'searchString'])
  },
  methods: {
    ...mapActions(['fetchLastPostsEmbed']),
    getPosts() {
      const promises = []

      this.sites.forEach(site =>
        promises.push(
          new Promise(resolve => {
            this.fetchLastPostsEmbed({
              siteUrl: site.url,
              offset: this.currentOffset,
              perPage: this.perPage
            }).then(data => {
              data.length
                ? this.savePostData({
                    siteName: site.name,
                    data: data[0]
                  })
                : false

              resolve()
            })
          })
        )
      )

      return Promise.all(promises)
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
      return this.getPosts()
    }
  },
  async created() {
    await this.getPosts()
    await this.loadMore()
    await this.loadMore()
  }
}
</script>
