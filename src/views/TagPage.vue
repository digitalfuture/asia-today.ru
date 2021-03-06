<template>
  <v-container class="tag-page px-0">
    <v-row justify="center" class="my-12 mx-0">
      <v-col cols="12" sm="11" class="px-0 px-sm-3">
        <section v-show="isSearch">
          <SearchForm />
        </section>

        <section v-show="!isSearch">
          <v-chip v-if="tag" dark disabled class="my-12 mr-1">Тег</v-chip>
          <v-chip v-if="tag" dark class="my-12">{{
            tag.name.toUpperCase()
          }}</v-chip>
          <div v-else class="d-flex">
            <v-skeleton-loader
              class="my-12 mr-1"
              type="chip"
            ></v-skeleton-loader>
            <v-skeleton-loader class="my-12" type="chip"></v-skeleton-loader>
          </div>

          <PostList :posts="postListPosts" :siteName="siteName" class="my-8" />

          <loadMoreButton :loadMore="loadMore" class="my-8" />
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
  name: 'TagPage',
  components: {
    PostList,
    LoadMoreButton,
    SearchForm
  },
  metaInfo() {
    return {
      title: `${this.tag ? 'Тег: ' + this.tag.name.toUpperCase() + ' -' : ''} ${
        this.site.nameRu
      } Сегодня`
    }
  },
  props: ['tagId', 'siteName'],
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
    tag: null
  }),
  computed: {
    ...mapState(['sites', 'searchString', 'isSearch']),
    site() {
      return this.sites.find(site => site.name === this.siteName)
    },
    postListPosts() {
      return this.posts
    }
  },
  methods: {
    ...mapActions(['fetchPostsByTagId', 'getTagInfo']),
    getPosts() {
      return this.fetchPostsByTagId({
        siteUrl: this.site.url,
        offset: this.currentOffset,
        perPage: this.perPage,
        tagId: this.tagId
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
    this.getTagInfo({
      siteUrl: this.site.url,
      tagId: this.tagId
    }).then(tag => (this.tag = tag))
  }
}
</script>
