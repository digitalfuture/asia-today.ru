<template>
  <v-container class="site-page  px-0">
    <v-row justify="center" class="my-12 mx-0">
      <v-col cols="12" sm="11" class="px-0 px-sm-3">
        <section v-if="isSearch">
          <SearchForm />
        </section>

        <section v-else>
          <PostGrid5
            :posts="sortedPosts.slice(0, 5)"
            title="Последние новости"
            class="mt-5 mt-sm-8 mt-md-9 mb-8"
          />

          <PostList :posts="sortedPosts.slice(5)" class="my-8" />

          <loadMoreButton :loadMore="loadMore" class="my-8" />
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostGrid5 from '../components/blocks/PostGrid5'
import LoadMoreButton from '../components/LoadMoreButton'
import PostList from '../components/blocks/PostList'
import SearchForm from '../components/blocks/SearchForm'

export default {
  components: {
    PostGrid5,
    PostList,
    LoadMoreButton,
    SearchForm
  },
  metaInfo() {
    return { title: `${this.site.nameRu} cегодня` }
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
    ...mapState(['sites', 'isSearch']),
    site() {
      return this.sites.find(site => site.name === this.siteName)
    },
    sortedPosts() {
      return [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date))
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
