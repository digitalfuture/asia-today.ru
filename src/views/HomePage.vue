<template>
  <!-- Home page -->
  <v-container class="home-page">
    <v-row justify="center" class="my-6">
      <v-col cols="12" sm="11">
        <PostGrid5 :posts="posts.slice(0, 5)" class="my-8" />

        <SearchForm :perPage="1" />

        <v-row v-if="!searchString" align="start" dense>
          <v-col cols="12" lg="9">
            <PostList :posts="posts.slice(5, 8)" class="mb-8" />

            <PostGrid3 :posts="posts.slice(8, 11)" class="my-8" />

            <PostGrid4Mix :posts="posts.slice(0, 4)" class="my-8" />

            <PostList :posts="posts.slice(11, 14)" class="my-8" />

            <PostGrid4 :posts="posts.slice(14, 18)" class="my-8" />

            <PostList :posts="posts.slice(18)" class="my-8" />

            <loadMoreButton :loadMore="loadMore" />
          </v-col>

          <v-col cols="3" class="d-none d-lg-flex">
            <v-row dense>
              <v-col v-for="site of sites" :key="site.name">
                <WeatherCard :site="site" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import PostGrid3 from '../components/blocks/PostGrid3'
import PostGrid4 from '../components/blocks/PostGrid4'
import PostGrid4Mix from '../components/blocks/PostGrid4Mix'
import PostGrid5 from '../components/blocks/PostGrid5'
import PostList from '../components/blocks/PostList'
import LoadMoreButton from '../components/LoadMoreButton'
import WeatherCard from '../components/blocks/WeatherCard'
import SearchForm from '../components/SearchForm'

export default {
  components: {
    PostGrid3,
    PostGrid4,
    PostGrid5,
    PostGrid4Mix,
    PostList,
    LoadMoreButton,
    WeatherCard,
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
