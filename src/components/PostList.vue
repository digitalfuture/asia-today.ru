<template>
  <!-- Post list -->
  <v-flex xs12 md8 class="post-list" py-4>
    <!-- Middle screen and up -->
    <v-layout wrap>
      <v-flex v-for="(post, i) in sortedPosts" :key="i" xs12 py-1>
        <v-card class="site-card" :to="'/' + post.siteName + '/' + post.slug" raised ripple dark>
          <v-layout>
            <!-- Site color point -->
            <v-btn
              :to="'/' + siteName"
              fab
              raised
              class="color-point ma-3"
              :style="'background-color: ' + getSiteColor(post.siteName)"
            ></v-btn>

            <v-flex class="site-info">
              <v-card-title class="site-title">
                <h3 class="subheading" v-html="post.title"></h3>
              </v-card-title>

              <v-card-text class="post-details font-weight-light">
                <v-layout justify-space-between>
                  <span class="grey--text post-date font-italic">{{ getDate(post.date) }}</span>
                  <span class="body-1 grey--text">{{ getRusSiteName(post.siteName) }}</span>
                </v-layout>
              </v-card-text>
            </v-flex>
          </v-layout>
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
    page: 1,
    posts: [
      // {
      //   id,
      //   slug,
      //   siteName,
      //   title,
      //   date,
      //   link,
      //   content
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
    ...mapActions(["getLastPosts", "getMedia"]),
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
        content: data.content.rendered
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
        this.getLastPosts({
          siteUrl: site.url,
          page: 1,
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
      this.getLastPosts({
        siteUrl: this.getSiteUrl(this.siteName),
        page: this.page,
        count: 7,
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
      this.getLastPosts({
        siteUrl: this.getSiteUrl(this.siteName),
        page: this.page,
        count: 10,
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
.post-list {
  .site-card {
    .color-point {
      width: 32px;
      height: 32px;
    }

    .site-info {
      bottom: 0;
      left: 48px;
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
}
</style>
