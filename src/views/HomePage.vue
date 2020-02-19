<template>
  <!-- Home page -->
  <v-container class="home-page px-0">
    <v-row justify="center" class="my-12 mx-0">
      <v-col cols="12" sm="11" class="px-0 px-sm-3">
        <section v-if="isSearch">
          <SearchForm />
        </section>

        <section v-else>
          <PostGrid5
            :posts="lastPosts.slice(0, 5)"
            title="Последние новости"
            class="mt-5 mt-sm-8 mt-md-9 mb-8"
          />

          <v-row align="start" class="mx-0">
            <v-col cols="12" lg="9">
              <PostList :posts="lastPosts.slice(5, 7)" class="mb-12" />

              <PostGrid4
                :posts="categoryTourism.slice(0, 4)"
                title="Туризм"
                class="my-12"
              />

              <PostGrid4Mix
                :posts="categoryBusiness.slice(0, 4)"
                title="Бизнес"
                class="my-12"
              />

              <PostGrid3
                :posts="categoryIncidents.slice(0, 3)"
                title="Происшествия"
                class="my-12"
              />

              <PostGrid4
                :posts="categoryFood.slice(0, 4)"
                title="Еда"
                class="my-12"
              />

              <PostList
                v-if="lastPosts.slice(7).length"
                :posts="lastPosts.slice(7)"
                class="mb-12"
              />

              <loadMoreButton :loadMore="loadMore" class="mb-12" />
            </v-col>

            <v-col cols="3" class="d-none d-lg-flex">
              <v-row dense>
                <v-col v-for="site of sites" :key="site.name" cols="12">
                  <WeatherCard :site="site" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { categories } from '../config'
import { mapState, mapActions } from 'vuex'

import PostGrid3 from '../components/blocks/PostGrid3'
import PostGrid4 from '../components/blocks/PostGrid4'
import PostGrid4Mix from '../components/blocks/PostGrid4Mix'
import PostGrid5 from '../components/blocks/PostGrid5'
import PostList from '../components/blocks/PostList'
import WeatherCard from '../components/WeatherCard'
import LoadMoreButton from '../components/LoadMoreButton'
import SearchForm from '../components/blocks/SearchForm'

export default {
  components: {
    PostGrid3,
    PostGrid4,
    PostGrid5,
    PostGrid4Mix,
    PostList,
    WeatherCard,
    LoadMoreButton,
    SearchForm
  },
  data: () => ({
    lastPosts: [
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
    categoryTourism: [],
    categoryIncidents: [],
    categoryBusiness: [],
    categoryFood: [],
    currentOffset: 0,
    perPage: 1
  }),
  computed: {
    ...mapState(['sites', 'searchString', 'isSearch'])
  },
  methods: {
    ...mapActions([
      'fetchPostsByCategoryId',
      'getCategoryInfo',
      'fetchLastPostsEmbed',
      'getCategories'
    ]),
    sortPosts(posts) {
      return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    getLastPosts() {
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
    savePostData({ siteName, data, target = this.lastPosts }) {
      const post = {
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
      }

      target.push(post)
    },
    loadMore() {
      this.currentOffset += this.perPage
      return this.getLastPosts()
    },
    getPostsByCategoryAllSites(categoryNameRu) {
      for (const site of this.sites) {
        this.getCategories({ siteUrl: site.url }).then(categoryList => {
          const categoryId = categoryList.find(
            category => category.name === categoryNameRu
          ).id

          this.fetchPostsByCategoryId({
            siteUrl: site.url,
            categoryId
          }).then(posts => {
            if (posts.length) {
              const categoryName = categories[categoryNameRu]

              this.savePostData({
                siteName: site.name,
                data: posts[0],
                target: this[`category${categoryName}`]
              })

              this.sortPosts(this[`category${categoryName}`])
            }
          })
        })
      }
    }
  },
  created() {
    for (const category in categories) {
      this.getPostsByCategoryAllSites(category)
    }
    this.getLastPosts()
  }
}
</script>
