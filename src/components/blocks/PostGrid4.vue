<template>
  <section fluid class="post-grid-4 py-4">
    <v-row v-if="posts.length" class="post-grid" dense>
      <v-col v-for="(post, i) in posts" :key="i" cols="12" md="6">
        <PostCard :post="post" />
      </v-col>
    </v-row>

    <v-row v-else class="post-grid" dense>
      <v-col v-for="i in 4" :key="i" cols="12" md="6">
        <v-skeleton-loader tile type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import PostCard from './PostCard'

export default {
  components: {
    PostCard
  },
  props: ['posts']
  // data: () => ({
  //   posts: [
  //     // {
  //     //   id,
  //     //   slug,
  //     //   siteName,
  //     //   title,
  //     //   date,
  //     //   link,
  //     //   content,
  //     //   thumb,
  //     //   tags,
  //     //   categories
  //     // }
  //   ]
  // }),
  // computed: {
  //   ...mapState(['sites']),
  //   sortedPosts() {
  //     const posts = [...this.posts]
  //     const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  //     return sorted.slice(0, 4)
  //   }
  // },
  // methods: {
  //   ...mapActions(['fetchLastPostsEmbed']),
  //   getSiteUrl(siteName) {
  //     return this.sites.find(site => site.name === siteName).url
  //   },
  //   savePostData({ siteName, data }) {
  //     this.posts.push({
  //       id: data.id,
  //       slug: data.slug,
  //       siteName: siteName,
  //       title: data.title.rendered,
  //       date: data.date,
  //       link: data.link,
  //       content: data.content.rendered,
  //       thumb:
  //         data._embedded['wp:featuredmedia'][0].media_details.sizes.full
  //           .source_url,
  //       categories: data._embedded['wp:term'][0],
  //       tags: data._embedded['wp:term'][1]
  //     })
  //   },
  //   getPosts() {
  //     if (this.$route.name === 'homePage') {
  //       this.sites.forEach(site =>
  //         this.fetchLastPostsEmbed({
  //           siteUrl: site.url,
  //           offset: this.offset,
  //           perPage: 1
  //         }).then(data =>
  //           this.savePostData({
  //             siteName: site.name,
  //             data: data[0]
  //           })
  //         )
  //       )
  //     } else {
  //       this.fetchLastPostsEmbed({
  //         siteUrl: this.getSiteUrl(this.siteName),
  //         offset: this.offset,
  //         perPage: 4
  //       }).then(data =>
  //         data.forEach(post =>
  //           this.savePostData({
  //             siteName: this.siteName,
  //             data: post
  //           })
  //         )
  //       )
  //     }
  //   }
  // },
  // created() {
  //   this.getPosts()
  // }
}
</script>
