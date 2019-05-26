<template>
  <!-- Content block -->
  <v-flex class="post" :class="siteName" xs12 md8 mb-4>
    <!-- Set title to page -->
    <vue-headful :title="`${getTitle(title)} - ${rusSiteName} Сегодня`" />

    <v-layout v-show="img">
      <v-card light class="pt-3 pb-2 px-3 content">
        <!-- Middle screens and up -->
        <v-img
          :src="img"
          :lazy-src="require('@/assets/placeholder.jpg')"
          class="post-img white--text hidden-sm-and-down"
          gradient="to bottom, rgba(0,0,0,.8), transparent 50%"
          :aspect-ratio="16 / 9"
        >
          <v-flex mx-4>
            <v-card-title>
              <h1
                class="display-2 font-weight-light white--text"
                v-html="title"
              ></h1>
            </v-card-title>
          </v-flex>
        </v-img>

        <!-- Small screens and down -->
        <v-img
          :src="img"
          :lazy-src="require('@/assets/placeholder.jpg')"
          class="post-img white--text hidden-md-and-up"
          gradient="to bottom, rgba(0,0,0,.8), transparent 100%"
          :aspect-ratio="16 / 9"
        >
          <v-flex mx-4>
            <v-card-title>
              <h1
                class="display-1 font-weight-light white--text"
                v-html="title"
              ></h1>
            </v-card-title>
          </v-flex>
        </v-img>

        <v-flex mt-3>
          <hr />
        </v-flex>

        <v-card-text class="px-0">
          <div v-html="content"></div>

          <v-flex mt-4 mb-5>
            <hr />
          </v-flex>

          <div class="site-date font-italic font-weight-light">
            <v-layout justify-space-between wrap>
              <v-flex xs12 sm6 pb-4>
                <span class="grey--text subheading">{{ date }}</span>
              </v-flex>

              <v-flex xs12 sm6>
                <!-- Extra small screens - align left -->
                <v-layout justify-start class="hidden-sm-and-up">
                  <yandex-share
                    :services="[
                      'vkontakte',
                      'facebook',
                      'twitter',
                      'odnoklassniki',
                      'twitter',
                      'tumblr',
                      'viber',
                      'telegram'
                    ]"
                    counter
                    :description="title"
                  />
                </v-layout>

                <!-- Small screens and up - align right -->
                <v-layout justify-end class="hidden-xs-only">
                  <yandex-share
                    :services="[
                      'vkontakte',
                      'facebook',
                      'twitter',
                      'odnoklassniki',
                      'tumblr',
                      'viber',
                      'telegram'
                    ]"
                    counter
                    :description="title"
                  />
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DateTime } from "luxon";
import YandexShare from "@cookieseater/vue-yandex-share";

export default {
  components: {
    YandexShare
  },
  props: ["postSlug", "siteName"],
  data: () => ({
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
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url;
    },
    rusSiteName() {
      return this.sites.find(site => site.name === this.siteName).rusName;
    }
  },
  methods: {
    ...mapActions(["getPostBySlug", "getMedia"]),
    getTitle(title) {
      const div = document.createElement("div");
      div.innerHTML = title;
      return div.innerText;
    },
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
      data = this.removeClasses(data);
      data = this.processLinks(data);
      data = this.processIframes(data);
      data = this.processImages(data);

      return data;
    },
    removeClasses(data) {
      const template = document.createElement("div");
      template.innerHTML = data;

      const elements = template.querySelectorAll("*");

      for (const element of elements) {
        element.classList = [];
      }

      return template.innerHTML;
    },
    processLinks(data) {
      const template = document.createElement("div");

      template.innerHTML = data;
      const links = template.querySelectorAll("a");

      this.sites.forEach(site => {
        for (const link of links) {
          const domainName = site.name.split("//").reverse()[0];

          if (link.href.search(domainName) !== -1) {
            const linkFragments = link.href.split("/").reverse();

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
    processImages(data) {
      const template = document.createElement("div");
      template.innerHTML = data;

      const images = template.querySelectorAll("img");

      for (const image of images) {
        if (image.src.startsWith(window.location.origin)) {
          image.src = image.src.replace(window.location.origin, this.siteUrl);
        }
      }

      return template.innerHTML;
    }
  },
  mounted() {
    this.getPostBySlug({
      siteUrl: this.siteUrl,
      postSlug: this.postSlug
    }).then(data => this.savePostData(data));
  }
};
</script>

<style lang="scss">
$vietnam-color: rgba(104, 215, 88, 1);
$vietnam-color-light: rgba(104, 215, 88, 0.3);

$thailand-color: rgba(187, 134, 252, 1);
$thailand-color-light: rgba(187, 134, 252, 0.3);

$nepal-color: rgba(77, 178, 236, 1);
$nepal-color-light: rgba(77, 178, 236, 0.3);

$philippines-color: rgba(3, 218, 198, 1);
$philippines-color-light: rgba(3, 218, 198, 0.3);

a {
  text-decoration: none;
}

// siteName based styles
.vietnam {
  blockquote,
  blockquote * {
    color: $vietnam-color;
  }

  a {
    border-bottom: 5px solid $vietnam-color-light;
  }

  a:hover,
  a:visited {
    text-decoration: none;
    border-bottom: 5px solid $vietnam-color;
  }
}

.thailand {
  blockquote {
    color: $thailand-color;
  }

  a {
    border-bottom: 5px solid $thailand-color-light;
  }

  a:hover,
  a:visited {
    text-decoration: none;
    border-bottom: 5px solid $thailand-color;
  }
}

.philippines {
  blockquote {
    color: $philippines-color;
  }
  a {
    border-bottom: 5px solid $philippines-color-light;
  }

  a:hover,
  a:visited {
    text-decoration: none;
    border-bottom: 5px solid $philippines-color;
  }
}

.nepal {
  blockquote {
    color: $nepal-color;
  }
  a {
    border-bottom: 5px solid $nepal-color-light;
  }

  a:hover,
  a:visited {
    text-decoration: none;
    border-bottom: 5px solid $nepal-color;
  }
}

//

.post {
  hr {
    height: 12px;
    color: #f5f5f5;
    background-color: #f5f5f5;
    border: none;
  }

  .content {
    min-height: 100vh;
    a {
      color: #424242;
    }
    * {
      font-size: 18px;
      font-weight: 400;

      padding-left: 0;
      padding-right: 0;

      ul {
        padding-left: 24px;
      }

      p,
      ul {
        margin-bottom: 16px;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Roboto Condensed", sans-serif;
        margin: 24px 0;
        line-height: 1.2;
        font-weight: normal;
        color: #424242;
      }

      h2 {
        font-size: 2em;
      }

      h3 {
        font-size: 1.7em;
      }

      h4 {
        font-size: 1.4em;
      }

      h5 {
        font-size: 1.2em;
      }

      h6 {
        font-size: 1em;
      }

      em {
        font-family: "Noto Serif", serif;
      }

      p > em:first-child,
      div > em:first-child {
        display: inline-block;
        margin-top: 32px;
      }

      blockquote,
      blockquote * {
        text-align: center;
        font-family: "Noto Serif", serif;
        font-size: 1.3em;
        // font-weight: bold;
        margin: 48px 0;
        line-height: 1.2;
      }

      .aspect-ratio {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 51%;
        border-radius: 2px;
        overflow: hidden;

        iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 2px;
        }
      }

      .site-date {
        font-family: "Noto Serif", serif;
        margin-top: 16px;
      }

      img,
      figure,
      .post-img {
        width: 100% !important;
        height: auto;
        border-radius: 2px;
      }

      figure {
        font-family: "Noto Serif", serif;
        padding-bottom: 24px;
      }
    }
  }
}
</style>
