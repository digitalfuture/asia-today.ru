<template>
  <v-container align-content-center fluid pa-0 class="scroll-up big-block-4">
    <!-- Post grid -->
    <!-- Middle screen and up -->
    <v-layout class="full-height hidden-sm-and-down" align-center justify-center fill-height>
      <v-layout>
        <leftSideBar :siteName="siteName"/>

        <v-flex md8>
          <v-layout align-center fill-height>
            <v-layout wrap>
              <v-flex v-for="(post, i) in posts" :key="i" class="pa-1" md6>
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
                  <!-- For all pages except site page -->
                  <!-- Middle screens and up - color point only -->
                  <v-btn
                    :to="'/' + post.siteName"
                    v-if="$route.name !== 'sitePage'"
                    fab
                    raised
                    class="hidden-sm-and-down color-point ma-0"
                    :style="'background-color: ' + getSiteColor(post.siteName)"
                  ></v-btn>

                  <!-- All screens sizes except middle - round logo -->
                  <!-- For site page only -->
                  <v-btn
                    :to="'/' + siteName"
                    v-if="$route.name === 'sitePage'"
                    fab
                    raised
                    class="color-point ma-0"
                    :style="'background-color: ' + getSiteColor(post.siteName)"
                  ></v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-flex>

        <v-spacer v-if="$route.name !== 'sitePage'"></v-spacer>
        <RightSideBar :siteName="siteName"/>
      </v-layout>
    </v-layout>

    <!-- Small screen and down -->
    <v-layout class="hidden-md-and-up" wrap py-1>
      <leftSideBar xs12 :siteName="siteName"/>

      <!-- Post grid -->
      <v-flex xs12>
        <v-layout wrap>
          <v-flex v-for="(post, i) in posts" :key="i" class="pb-2" xs12>
            <v-card
              :to="'/' + post.siteName + '/' + post.slug"
              raised
              ripple
              dark
              class="site-card"
            >
              <v-img
                :src="post.thumb"
                :lazy-src="require('@/assets/placeholder.jpg')"
                gradient="to top, rgba(0,0,0,.8), transparent 50%"
              ></v-img>

              <div class="site-info">
                <v-card-title class="site-title">
                  <h3 class="subheading" v-html="post.title"></h3>
                </v-card-title>

                <v-card-text class="post-details font-weight-light font-italic">
                  <span class="grey--text">{{ getDate(post.date) }}</span>
                </v-card-text>
              </div>

              <!-- For all pages except site page -->
              <v-btn
                :to="'/' + post.siteName"
                v-if="$route.name !== 'sitePage'"
                fab
                raised
                class="site-logo ma-0"
              >
                <v-img :src="getSiteLogo(post.siteName)" width="100" height="100"></v-img>
              </v-btn>

              <!-- For site page only -->
              <v-btn
                :to="'/' + siteName"
                v-if="$route.name === 'sitePage'"
                fab
                raised
                class="color-point ma-0"
                :style="'background-color: ' + getSiteColor(post.siteName)"
              ></v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-btn
      absolute
      bottom
      right
      fab
      dark
      color="gray"
      @click="scroll(down)"
      class="scroll-button hidden-sm-and-down"
    >
      <v-icon dark>keyboard_arrow_down</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DateTime } from "luxon";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

export default {
  components: {
    LeftSideBar,
    RightSideBar
  },
  props: ["siteName"],
  data: () => ({
    up: ".scroll-up",
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
    ],
    down: ".scroll-down"
  }),
  computed: {
    ...mapState(["sites"])
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
    },
    scroll(target) {
      this.$vuetify.goTo(target);
    }
  },
  mounted() {
    this.scroll(this.up);

    if (this.$route.name === "sitePage") {
      this.getLastPosts({
        siteUrl: this.getSiteUrl(this.siteName),
        count: 4
      }).then(data =>
        data.forEach(post =>
          this.savePostData({
            siteName: this.siteName,
            data: post
          })
        )
      );
    } else {
      this.sites.forEach(site =>
        this.getLastPosts({ siteUrl: site.url, count: 1 }).then(data =>
          this.savePostData({
            siteName: site.name,
            data: data[0]
          })
        )
      );
    }
  }
};
</script>

<style lang="scss">
.big-block-4 {
  position: relative;
  background-size: cover;
  background-position: top;
  background-repeat: repeat-y;

  .site-card {
    .color-point {
      position: absolute;
      left: 16px;
      top: 16px;
      width: 32px;
      height: 32px;
    }

    .site-logo {
      position: absolute;
      left: 16px;
      top: 16px;
      width: 100px;
      height: 100px;
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

  .scroll-button {
    bottom: 16px !important;
  }

  .full-height {
    height: 100vh;
    min-height: 600px;
  }
}
</style>
