<template>
  <!-- Site page -->
  <div class="site-page d-flex justify-center py-12">
    <!-- Set title to page -->
    <vue-headful :title="`${siteNameRu} Сегодня`" />

    <v-col cols="12" sm="11" md="9">
      <PostGrid4 :posts="postGrid4PostsSorted" />
      <PostList :siteName="siteName" :offset="4" :perPage="10" />
    </v-col>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PostGrid4 from '../components/blocks/PostGrid4'
import PostList from '../components/blocks/PostList'

export default {
  name: 'SitePage',
  components: {
    PostGrid4,
    PostList
  },
  props: ['siteName'],
  data: () => ({
    postGrid4Posts: [
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
    ]
    // postListPosts: [
    //   // {
    //   //   id,
    //   //   slug,
    //   //   siteName,
    //   //   title,
    //   //   date,
    //   //   link,
    //   //   content,
    //   //   thumb,
    //   //   tags,
    //   //   categories
    //   // }
    // ]
  }),
  computed: {
    ...mapState(['sites']),
    postGrid4PostsSorted() {
      return [...this.postGrid4Posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4)
    },
    // postListPostsSorted() {
    //   return [...this.postListPosts]
    //     .sort((a, b) => new Date(b.date) - new Date(a.date))
    //     .slice(0, 4)
    // }
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  },
  methods: {
    ...mapActions(['fetchLastPostsEmbed']),
    getSiteUrl(siteName) {
      return this.sites.find(site => site.name === siteName).url
    },
    savePostGrid4Data({ siteName, data }) {
      this.postGrid4Posts.push({
        id: data.id,
        slug: data.slug,
        siteName: siteName,
        title: data.title.rendered,
        date: data.date,
        link: data.link,
        content: data.content.rendered,
        thumb:
          data._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url,
        categories: data._embedded['wp:term'][0],
        tags: data._embedded['wp:term'][1]
      })
    },
    savePostListData({ siteName, data }) {
      this.postListPosts.push({
        id: data.id,
        slug: data.slug,
        siteName: siteName,
        title: data.title.rendered,
        date: data.date,
        link: data.link,
        content: data.content.rendered,
        thumb:
          data._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url,
        categories: data._embedded['wp:term'][0],
        tags: data._embedded['wp:term'][1]
      })
    },
    getPostGrid4Posts() {
      this.fetchLastPostsEmbed({
        siteUrl: this.getSiteUrl(this.siteName),
        offset: 0,
        perPage: 4
      }).then(data =>
        data.forEach(post =>
          this.savePostGrid4Data({
            siteName: this.siteName,
            data: post
          })
        )
      )
    }
    // getPostListPosts() {
    //   this.sites.forEach(site =>
    //     this.fetchLastPostsEmbed({
    //       siteUrl: site.url,
    //       offset: 1,
    //       perPage: 1
    //     }).then(data => {
    //       return data.length
    //         ? this.savePostListData({
    //             siteName: site.name,
    //             data: data[0]
    //           })
    //         : false
    //     })
    //   )
    // }
  },
  created() {
    this.getPostGrid4Posts()
    // this.getPostListPosts()
  }
}
</script>
