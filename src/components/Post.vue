<template>
  <v-content>
    <!-- Post page -->
    <v-container v-show="img" class="post-container scroll-up" fluid px-0>
      <v-layout wrap justify-center>
        <!-- Logo block -->
        <v-flex xs12 md2 py-4>
          <!-- Middle screen and up -->
          <v-layout justify-center align-center column class="hidden-sm-and-down">
            <!-- Asia Today logo -->
            <v-flex md12>
              <v-layout justify-center>
                <a href="/" class="logo-link">
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
                <a :href="'/' + siteName" class="logo-link">
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
                <a href="/" class="logo-link">
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
                <a :href="'/' + siteName" class="logo-link">
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
    up: ".scroll-up",
    id: "",
    slug: "",
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
    ...mapActions(["getPostBySlug", "getMedia"]),
    savePostData(data) {
      this.id = data.id;
      this.slug = data.slug;
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
      data = this.processIframes(data);

      return data;
    },
    processLinks(data) {
      const template = document.createElement("div");

      template.innerHTML = data;
      const links = template.querySelectorAll("a");

      this.sites.forEach(site => {
        for (const link of links) {
          console.log("inks:", links);
          const domainName = site.name.split("//").reverse()[0];

          if (link.href.search(domainName) !== -1) {
            const linkFragments = link.href.split("/").reverse();
            console.log("linkFragments:", linkFragments);

            const slug = linkFragments[0] ? linkFragments[0] : linkFragments[1];

            link.href = `/${site.name}/${slug}`;
            link.target = "";
          }
        }
      });

      return template.innerHTML;
    },
    processIframes(data) {
      const template = document.createElement("div");

      template.innerHTML = data;
      const iframes = template.querySelectorAll("iframe");

      for (const iframe of iframes) {
        iframe.parentNode.classList.add("aspect-ratio");
      }

      return template.innerHTML;
    },
    scroll(target) {
      this.$vuetify.goTo(target);
    }
  },
  mounted() {
    this.scroll(this.up);

    this.getPostBySlug({
      siteUrl: this.siteUrl,
      postSlug: this.$route.params.postSlug
    }).then(data => this.savePostData(data));
  }
};
</script>

<style lang="scss">
.post-container {
  .hidden-md-and-up .logo-link {
    width: 100%;

    .site-logo-2 {
      margin: auto;
      width: 100%;
      max-height: 100px;
    }
  }

  .hidden-sm-and-down .logo-link {
    max-width: 100%;

    .site-logo-2 {
      max-width: 100%;
      margin: auto;
      width: 200px;
      max-height: 100px;
    }
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

    img,
    figure {
      width: 100% !important;
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
      margin: 48px 0;
      line-height: 1.2;
    }

    .aspect-ratio {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 51%;

      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
