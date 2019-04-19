<template>
  <!-- Post grid -->
  <v-flex md8 class="post-grid">
    <!-- Middle screen and up -->
    <v-layout
      class="full-height hidden-sm-and-down"
      align-content-center
      align-center
      justify-center
      fill-height
      md12
      wrap
    >
      <v-flex v-for="(post, i) in sortedPosts" :key="i" class="pa-1" md6>
        <PostCard :post="post" />
      </v-flex>
    </v-layout>

    <!-- Small screen and down -->
    <v-layout class="hidden-md-and-up" xs12 wrap>
      <v-flex v-for="(post, i) in posts" :key="i" class="pb-2" xs12>
        <PostCard :post="post" />
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PostCard from "./PostCard";

export default {
  components: {
    PostCard
  },
  props: ["siteName", "offset", "perPage"],
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
      //   thumb
      // }
    ]
  }),
  computed: {
    ...mapState(["sites"]),
    sortedPosts() {
      const posts = [...this.posts];
      const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      return sorted;
    }
  },
  methods: {
    ...mapActions(["getLastPostsEmbed", "getMedia"]),
    getSiteUrl(siteName) {
      return this.sites.find(site => site.name === siteName).url;
    },
    savePostData({ siteName, data }) {
      this.posts.push({
        id: data.id,
        slug: data.slug,
        siteName: siteName,
        title: data.title.rendered,
        date: data.date,
        link: data.link,
        content: data.content.rendered,
        thumb:
          data._embedded["wp:featuredmedia"][0].media_details.sizes.full
            .source_url
      });
    }
  },
  mounted() {
    if (this.$route.name === "homePage") {
      this.sites.forEach(site =>
        this.getLastPostsEmbed({
          siteUrl: site.url,
          offset: this.offset,
          perPage: this.perPage
        }).then(data =>
          this.savePostData({
            siteName: site.name,
            data: data[0]
          })
        )
      );
    } else {
      this.getLastPostsEmbed({
        siteUrl: this.getSiteUrl(this.siteName),
        offset: this.offset,
        perPage: this.perPage
      }).then(data =>
        data.forEach(post =>
          this.savePostData({
            siteName: this.siteName,
            data: post
          })
        )
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.post-grid {
  .full-height {
    height: 100vh;
    min-height: 600px;
  }
}
</style>
