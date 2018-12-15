<template>
  <v-content>
    <!-- Post page -->
    <v-container v-show="img" class="post-container" fluid px-0>
      <v-layout wrap justify-center>
        <!-- Logo block -->
        <v-flex xs12 md2 py-4>
          <!-- Middle screen and up -->
          <v-layout justify-center align-center column class="hidden-sm-and-down">
            <!-- Asia Today logo -->
            <v-flex md12>
              <v-layout justify-center>
                <a href="/">
                  <v-img
                    :src="require('@/assets/logo-today-transparent-greyscale.png')"
                    class="site-logo-2"
                  ></v-img>
                </a>
              </v-layout>
            </v-flex>

            <!-- Logo separator -->
            <v-flex md12>
              <v-layout justify-center>
                <v-icon class="grey--text text--lighten-1 my-5">fiber_manual_record</v-icon>
              </v-layout>
            </v-flex>

            <!-- Site logo -->
            <v-flex md12>
              <v-layout justify-center>
                <a :href="'/' + siteName">
                  <v-img :src="siteLogo2" class="site-logo-2"></v-img>
                </a>
              </v-layout>
            </v-flex>
          </v-layout>

          <!-- Small screen and down -->
          <v-layout justify-center align-center class="hidden-md-and-up">
            <!-- Main logo -->
            <v-flex xs5>
              <v-layout justify-center>
                <a href="/">
                  <v-img
                    :src="require('@/assets/logo-today-transparent-greyscale.png')"
                    class="site-logo-2"
                  ></v-img>
                </a>
              </v-layout>
            </v-flex>

            <!-- Logo separator -->
            <v-flex xs2>
              <v-layout justify-center>
                <v-icon class="grey--text text--lighten-1 mx-5">fiber_manual_record</v-icon>
              </v-layout>
            </v-flex>

            <!-- Site logo -->
            <v-flex xs5>
              <v-layout justify-center>
                <a :href="'/' + siteName">
                  <v-img :src="siteLogo2" class="site-logo-2"></v-img>
                </a>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 md8>
          <v-card light class="pa-4 content">
            <v-card-title>
              <h1 class="post-title">{{ title }}</h1>
            </v-card-title>

            <hr>

            <v-img :src="img" :lazy-src="require('@/assets/placeholder.jpg')"></v-img>
            <br>

            <v-card-text class="body-1">
              <div v-html="content"></div>

              <div class="site-date font-italic font-weight-light">
                <hr>
                <span class="grey--text">{{ date }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-spacer></v-spacer>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DateTime } from "luxon";

export default {
  // props: ["postId"],
  data: () => ({
    title: "",
    content: "",
    date: "",
    img: "",
    thumb: ""
  }),
  computed: {
    ...mapState(["sites"]),
    siteName() {
      return this.$route.params.siteName;
    },
    siteLogo2() {
      return this.sites.find(site => site.name === this.siteName).logo2;
    },
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url;
    }
  },
  methods: {
    ...mapActions(["getPostById", "getPostBySlug", "getMedia"]),
    savePostData(data) {
      this.title = data.title.rendered;
      this.content = this.processContent(data.content.rendered);
      this.date = DateTime.fromISO(data.date, {
        locale: "ru"
      }).toLocaleString(DateTime.DATE_FULL);
      this.thumb =
        data._embedded[
          "wp:featuredmedia"
        ][0].media_details.sizes.td_537x360.source_url;
      this.img =
        data._embedded[
          "wp:featuredmedia"
        ][0].media_details.sizes.full.source_url;
    },
    processContent(data) {
      data = this.processLinks(data);
      return data;
    },
    processLinks(data) {
      const link = /href=(["'])(.*?)\1/g;
      // const reLink = new RegExp(link, "g");
      // const links = data.match(reLink);
      const links = data.match(link);

      // console.log("links:", links);

      this.sites.forEach(site => {
        const newFragment = `href="/${site.name}`;
        const reNewFragment = new RegExp(newFragment, "g");

        const fragment = `href="${site.url}`;
        const reFragment = new RegExp(fragment, "g");

        const fragments = data.match(reFragment);

        // console.log(`${site.name} fragments:`, fragments);

        // data = data.replace(reFragment, reNewFragment);
      });

      // console.log(data);

      return data;
    }
  },
  mounted() {
    this.getPostById({
      siteUrl: this.siteUrl,
      postId: this.$route.params.postId
    }).then(data => this.savePostData(data));
  }
};
</script>

<style lang="scss">
.post-container {
  .site-logo-2 {
    margin: auto;
    width: 200px;
    max-height: 200px;
  }

  .round-separator {
    text-align: center;
  }

  .content {
    * {
      padding-left: 0;
      padding-right: 0;
    }

    .post-title {
      width: 100%;
    }

    .site-date {
      font-family: "Noto Serif", serif;
      margin-top: 16px;

      hr {
        margin: 48px 0 16px;
      }
    }

    img {
      width: 100%;
      height: auto;
    }

    hr {
      margin: 16px 0 32px 0;
      height: 1px;
      color: #e0e0e0;
      background-color: #e0e0e0;
      border: none;
    }

    h1 {
      font-family: "Noto Serif", serif;
      font-style: italic;
      font-size: 3em;
      color: #757575;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Roboto Condensed", sans-serif;
      margin: 24px 0;
      color: #757575;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.8em;
    }

    h4 {
      font-size: 1.8em;
      font-weight: normal;
    }

    h5 {
      font-size: 1.5em;
      font-weight: bold;
    }

    h6 {
      font-size: 1.5em;
      font-weight: normal;
    }

    a {
      color: #616161;
    }

    p {
      font-family: "Noto Sans", sans-serif;
      color: #424242;
      font-size: 1.2em;
    }

    em {
      font-family: "Noto Serif", serif;
    }

    p > em:first-child {
      display: inline-block;
      margin-top: 32px;
    }

    blockquote,
    blockquote * {
      text-align: center;
      font-family: "Noto Serif", serif;
      font-size: 1.6em;
      font-weight: bold;
      color: #bdbdbd;
      margin: 48px;
    }

    iframe {
      width: 100%;
    }
  }
}
</style>
