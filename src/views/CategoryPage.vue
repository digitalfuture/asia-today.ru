<template>
  <v-container class="category-page  px-0">
    <v-row justify="center" class="my-12">
      <v-col cols="12" sm="11" class="px-0 px-sm-3">
        <section v-show="isSearch">
          <SearchForm />
        </section>

        <section v-show="!isSearch">
          <v-chip v-if="category" dark disabled class="my-12 mr-1"
            >Категория</v-chip
          >

          <v-chip v-if="category" dark class="my-12">{{
            category.name.toUpperCase()
          }}</v-chip>

          <div v-else class="d-flex">
            <v-skeleton-loader
              class="my-12 mr-1"
              type="chip"
            ></v-skeleton-loader>
            <v-skeleton-loader class="my-12" type="chip"></v-skeleton-loader>
          </div>

          <PostList :posts="postListPosts" :siteName="siteName" class="mb-12" />

          <loadMoreButton :loadMore="loadMore" class="mb-12" />
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostList from '../components/blocks/PostList'
import LoadMoreButton from '../components/LoadMoreButton'
import SearchForm from '../components/blocks/SearchForm'

export default {
  name: 'CategoryPage',
  components: {
    PostList,
    LoadMoreButton,
    SearchForm
  },
  metaInfo() {
    return {
      title: `${
        this.category
          ? 'Категория: ' + this.category.name.toUpperCase() + ' -'
          : ''
      } ${this.site.nameRu} cегодня`
    }
  },
  props: ['categoryId', 'siteName'],
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
    category: null
  }),
  computed: {
    ...mapState(['sites', 'isSearch']),
    site() {
      return this.sites.find(site => site.name === this.siteName)
    },
    postListPosts() {
      return this.posts
    }
  },
  methods: {
    ...mapActions(['fetchPostsByCategoryId', 'getCategoryInfo']),
    getPosts() {
      return this.fetchPostsByCategoryId({
        siteUrl: this.site.url,
        offset: this.currentOffset,
        perPage: this.perPage,
        categoryId: this.categoryId
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
  },
  mounted() {
    this.getCategoryInfo({
      siteUrl: this.site.url,
      categoryId: this.categoryId
    }).then(category => (this.category = category))
  }
}
</script>
