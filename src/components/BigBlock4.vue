<template>
  <v-container align-content-center fluid pa-0 class="scroll-up big-block-4">
    <!-- Middle screen and up -->
    <v-layout class="full-height hidden-sm-and-down" align-center justify-center fill-height>
      <v-layout>
        <!-- Logo block -->
        <v-flex md2 py-4 px-2>
          <v-layout justify-center align-center column>
            <!-- Site logo -->
            <v-flex v-if="$route.name === 'sitePage'" md12>
              <v-layout justify-center>
                <router-link :to="'/' + siteName" class="logo-link">
                  <v-img :src="getSiteLogo2(siteName)" class="site-logo-2"></v-img>
                </router-link>
              </v-layout>
            </v-flex>

            <!-- Logo separator -->
            <v-flex md12>
              <v-layout justify-center>
                <v-icon class="grey--text text--darken-1 my-5">fiber_manual_record</v-icon>
              </v-layout>
            </v-flex>

            <!-- Main logo -->
            <v-flex md12>
              <v-layout justify-center>
                <router-link to="/" class="logo-link">
                  <v-img
                    :src="require('@/assets/logo-today-transparent-greyscale.png')"
                    class="site-logo-2"
                  ></v-img>
                </router-link>
              </v-layout>
            </v-flex>

            <!-- Logo separator 2 -->
            <v-flex md12>
              <v-layout justify-center>
                <v-icon class="grey--text text--darken-2 my-5">fiber_manual_record</v-icon>
              </v-layout>
            </v-flex>

            <!-- Logo separator 3 -->
            <v-flex md12>
              <v-layout justify-center>
                <v-icon class="grey--text text--darken-3 my-5">fiber_manual_record</v-icon>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex md8>
          <v-layout wrap>
            <v-flex v-for="(post, i) in posts" :key="i" class="pa-1" md6>
              <v-card :to="'/' + post.siteName + '/' + post.slug" raised ripple dark>
                <v-img
                  :src="post.thumb"
                  :lazy-src="require('@/assets/placeholder.jpg')"
                  gradient="to top, rgba(0,0,0,.8), transparent 50%"
                ></v-img>

                <div class="site-info">
                  <v-card-title class="site-title">
                    <h3 class="subheading" v-html="post.title"></h3>
                  </v-card-title>

                  <v-card-text class="site-date font-weight-light font-italic">
                    <span class="grey--text">{{ getDate(post.date) }}</span>
                  </v-card-text>
                </div>

                <v-btn v-if="$route.name !== 'sitePage'" fab raised class="site-logo">
                  <v-img :src="getSiteLogo(post.siteName)" width="100" height="100"></v-img>
                </v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-spacer></v-spacer>

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
      </v-layout>
    </v-layout>

    <!-- Small screen and down -->
    <v-layout class="hidden-md-and-up main-section" wrap py-1>
      <!-- Logo block -->
      <v-flex xs12 py-4 px-2>
        <v-layout justify-center align-center>
          <!-- Site logo -->
          <v-flex v-if="$route.name === 'sitePage'" xs5>
            <v-layout justify-center>
              <router-link :to="'/' + siteName" class="logo-link">
                <v-img :src="getSiteLogo2(siteName)" class="site-logo-2"></v-img>
              </router-link>
            </v-layout>
          </v-flex>

          <!-- Logo separator -->
          <v-flex v-if="$route.name === 'sitePage'" xs1>
            <v-layout justify-center>
              <v-icon class="grey--text text--darken-4 mx-5">fiber_manual_record</v-icon>
            </v-layout>
          </v-flex>

          <!-- Main logo -->
          <v-flex xs5>
            <v-layout justify-center>
              <router-link to="/" class="logo-link">
                <v-img
                  :src="require('@/assets/logo-today-transparent-greyscale.png')"
                  class="site-logo-2"
                ></v-img>
              </router-link>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-layout wrap>
          <v-flex v-for="(post, i) in posts" :key="i" class="pb-2" xs12>
            <v-card :to="'/' + post.siteName + '/' + post.slug" raised ripple dark>
              <v-img
                :src="post.thumb"
                :lazy-src="require('@/assets/placeholder.jpg')"
                gradient="to top, rgba(0,0,0,.8), transparent 50%"
              ></v-img>

              <div class="site-info">
                <v-card-title class="site-title">
                  <h3 class="subheading" v-html="post.title"></h3>
                </v-card-title>

                <v-card-text class="site-date font-weight-light font-italic">
                  <span class="grey--text">{{ getDate(post.date) }}</span>
                </v-card-text>
              </div>
              <v-btn
                :to="'/' + post.siteName"
                v-if="$route.name !== 'sitePage'"
                fab
                raised
                class="site-logo"
              >
                <v-img :src="getSiteLogo(post.siteName)" width="100" height="100"></v-img>
              </v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-spacer></v-spacer>

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
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DateTime } from "luxon";

export default {
  props: ["siteName"],
  data: () => ({
    up: ".scroll-up",
    posts: [],
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
          data._embedded["wp:featuredmedia"][0].media_details.sizes.td_537x360
            .source_url,
        img:
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
  // background-image: url("../assets/background-main.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: repeat-y;

  .site-logo {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 100px;
    height: 100px;
  }

  .hidden-md-and-up .logo-link {
    width: 100%;

    .site-logo-2 {
      margin: auto;
      width: 100%;
      max-height: 100px;
    }
  }

  .hidden-sm-and-down .logo-link {
    .site-logo-2 {
      margin: auto;
      width: 200px;
      max-height: 100px;
    }
  }

  .site-info {
    position: absolute;
    bottom: 0;
    width: 100%;

    .site-title {
      padding-bottom: 5px;
    }

    .site-date {
      font-family: "Noto Serif", serif;
      padding: 10px 16px;
    }
  }

  .scroll-button {
    bottom: 16px !important;
  }

  .full-height {
    height: 100vh;
  }
}
</style>
