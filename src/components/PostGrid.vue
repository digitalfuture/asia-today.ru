<template>
  <v-flex md8 class="post-grid">
    <!-- Post grid -->
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
        <v-card
          :to="'/' + post.siteName + '/' + post.slug"
          raised
          ripple
          dark
          class="site-card grey"
        >
          <v-img
            :src="post.thumb"
            :lazy-src="require('@/assets/placeholder.jpg')"
            gradient="to top, rgba(0,0,0,.8), transparent 100%"
            :aspect-ratio="16/9"
          ></v-img>

          <div class="site-info">
            <v-card-title class="site-title">
              <h3 class="subheading" v-html="post.title"></h3>
            </v-card-title>

            <v-card-text class="post-details font-weight-light">
              <v-layout justify-space-between>
                <span class="grey--text post-date font-italic">{{ getDate(post.date) }}</span>
                <span
                  v-if="$route.name === 'homePage'"
                  class="body-1 grey--text"
                >{{ getRusSiteName(post.siteName) }}</span>
              </v-layout>
            </v-card-text>
          </div>

          <!-- Site logo -->
          <v-btn
            :to="'/' + siteName"
            fab
            raised
            class="color-point ma-0"
            :style="'background-color: ' + getSiteColor(post.siteName)"
          ></v-btn>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Post grid -->
    <!-- Small screen and down -->
    <v-layout class="hidden-md-and-up" xs12 wrap>
      <v-flex v-for="(post, i) in posts" :key="i" class="pb-2" xs12>
        <v-card :to="'/' + post.siteName + '/' + post.slug" raised ripple dark class="site-card">
          <v-img
            :src="post.thumb"
            :lazy-src="require('@/assets/placeholder.jpg')"
            gradient="to top, rgba(0,0,0,.8), transparent 100%"
            :aspect-ratio="16/9"
          ></v-img>

          <div class="site-info">
            <v-card-title class="site-title">
              <h3 class="subheading" v-html="post.title"></h3>
            </v-card-title>

            <v-card-text class="post-details font-weight-light">
              <v-layout justify-space-between>
                <span class="grey--text post-date font-italic">{{ getDate(post.date) }}</span>
                <span
                  v-if="$route.name === 'homePage'"
                  class="body-1 grey--text"
                >{{ getRusSiteName(post.siteName) }}</span>
              </v-layout>
            </v-card-text>
          </div>

          <!-- For site page only -->
          <v-btn
            :to="'/' + siteName"
            fab
            class="color-point ma-0"
            :style="'background-color: ' + getSiteColor(post.siteName)"
          ></v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DateTime } from "luxon";

export default {
  props: ["siteName", "offset"],
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
    getRusSiteName(siteName) {
      return this.sites.find(site => site.name === siteName).rusName;
    },
    getSiteColor(siteName) {
      return this.sites.find(site => site.name === siteName).color;
    },
    getSiteLogo(siteName) {
      return this.sites.find(site => site.name === siteName).logo;
    },
    getSiteLogo2(siteName) {
      return this.sites.find(site => site.name === siteName).logo2;
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
    },
    getDate(date) {
      if (!date) return "";
      return DateTime.fromISO(date, { locale: "ru" }).toLocaleString(
        DateTime.DATE_FULL
      );
    }
  },
  mounted() {
    if (this.$route.name === "homePage") {
      this.sites.forEach(site =>
        this.getLastPostsEmbed({
          siteUrl: site.url,
          count: 1,
          offset: this.offset
        }).then(data =>
          this.savePostData({
            siteName: site.name,
            data: data[0]
          })
        )
      );
    } else if (this.$route.name === "sitePage") {
      this.getLastPostsEmbed({
        siteUrl: this.getSiteUrl(this.siteName),
        count: 4,
        offset: this.offset
      }).then(data =>
        data.forEach(post =>
          this.savePostData({
            siteName: this.siteName,
            data: post
          })
        )
      );
    } else if (this.$route.name === "postPage") {
      this.getLastPostsEmbed({
        siteUrl: this.getSiteUrl(this.siteName),
        count: 4,
        offset: this.offset
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
  .site-card {
    .color-point {
      position: absolute;
      left: 16px;
      top: 16px;
      width: 32px;
      height: 32px;
    }

    .site-info {
      position: absolute;
      bottom: 0;
      width: 100%;

      .site-title {
        padding-bottom: 5px;
      }

      .post-details {
        padding: 10px 16px;

        .post-date {
          font-family: "Noto Serif", serif;
        }
      }
    }
  }

  .full-height {
    height: 100vh;
    min-height: 600px;
  }
}
</style>
