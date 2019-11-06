<template>
  <section class="site-post" :class="siteName">
    <v-row>
      <v-col cols="12">
        <!-- Set title to page -->
        <vue-headful
          :title="
            currentPost
              ? `${getTitle(currentPost.title)} - ${siteNameRu} Сегодня`
              : `${siteNameRu} Сегодня`
          "
        />

        <v-card v-if="currentPost" light class="pb-2">
          <!--  -->
          <v-img
            :src="currentPost.img"
            lazy-src="/img/placeholder.jpg"
            class="site-post__thumb white--text align-end"
            gradient="to top, rgba(0,0,0,.8), transparent 100%"
            :aspect-ratio="16 / 9"
          >
            <v-container>
              <v-row>
                <v-col class="px-4 px-md-8">
                  <!-- Post categories -->
                  <div class="d-flex flex-wrap site-post__categories pa-4">
                    <v-chip
                      v-for="(category, i) in currentPost.categories"
                      :key="i"
                      :to="'/' + siteName + '/category/' + category.id"
                      dark
                      small
                      class="ml-1 mb-1"
                    >{{ category.name.toUpperCase() }}</v-chip>
                  </div>
                  <!-- Extra small screens only -->
                  <h1
                    class="d-inline d-sm-none headline font-weight-light white--text"
                    v-html="currentPost.title"
                  ></h1>
                  <!-- Small screens only -->
                  <h1
                    class="d-none d-sm-inline d-md-none display-1 font-weight-light white--text"
                    v-html="currentPost.title"
                  ></h1>
                  <!-- Middle screens and up -->
                  <h1
                    class="d-none d-md-inline display-2 font-weight-light white--text"
                    v-html="currentPost.title"
                  ></h1>
                </v-col>
              </v-row>
            </v-container>
          </v-img>

          <hr />

          <v-card-text class="px-4 px-md-8">
            <div v-html="currentPost.content" class="site-post__content"></div>

            <!-- Post tags -->
            <div class="site-post__tags d-flex mt-12">
              <div>
                <v-chip dark small class="mr-1 mb-1">Теги</v-chip>
              </div>
              <div class="d-flex flex-wrap">
                <v-chip
                  v-for="(tag, i) in currentPost.tags"
                  :key="i"
                  :to="'/' + siteName + '/tag/' + tag.id"
                  small
                  class="mr-1 mb-1"
                >{{ tag.name.toUpperCase() }}</v-chip>
              </div>
            </div>

            <!-- Divider -->
            <v-row class="mt-8 mb-5">
              <v-col>
                <hr />
              </v-col>
            </v-row>

            <!-- Post date -->
            <v-row justify="space-between">
              <v-col cols="12" sm="6" class="pb-4">
                <span
                  class="site-post__site-date font-italic font-weight-light grey--text subheading"
                >{{ currentPost.date }}</span>
              </v-col>

              <!-- Share buttons -->
              <v-col cols="12" sm="6">
                <v-row justify="start" class="d-block d-sm-none">
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
                    :description="currentPost.title"
                  />
                </v-row>

                <v-row justify="end" class="d-none d-sm-flex">
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
                    :description="currentPost.title"
                  />
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Post skeleton placeholder -->
        <v-skeleton-loader v-else tile type="image, article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import YandexShare from "@cookieseater/vue-yandex-share";

import { mapState, mapMutations, mapActions } from "vuex";
import { DateTime } from "luxon";

export default {
  components: {
    YandexShare
  },
  props: ["postSlug", "siteName"],
  computed: {
    ...mapState(["sites", "currentPost"]),
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url;
    },
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu;
    }
  },
  methods: {
    ...mapMutations(["rememberPost", "forgetPost"]),
    ...mapActions(["fetchPostBySlug", "getMedia"]),
    getTitle(title) {
      const div = document.createElement("div");
      div.innerHTML = title;
      return div.innerText;
    },
    savePostData(data) {
      this.rememberPost({
        id: data.id,
        slug: data.slug,
        title: data.title.rendered,
        content: this.processContent(data.content.rendered),
        date: DateTime.fromISO(data.date, {
          locale: "ru"
        }).toLocaleString(DateTime.DATE_FULL),
        thumb:
          data._embedded["wp:featuredmedia"][0].media_details.sizes.td_537x360
            .source_url,
        img:
          data._embedded["wp:featuredmedia"][0].media_details.sizes.full
            .source_url,
        categories: data._embedded["wp:term"][0],
        tags: data._embedded["wp:term"][1]
      });
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
        iframe.parentNode.classList.add("site-post__content__aspect-ratio");
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
    if (this.currentPost) {
      return;
    } else {
      this.fetchPostBySlug({
        siteUrl: this.siteUrl,
        postSlug: this.postSlug
      }).then(data => this.savePostData(data));
    }
  },
  beforeDestroy() {
    this.forgetPost();
  }
};
</script>

<style lang="scss">
@import "../styles";

@each $country, $colors in $countries {
  .#{$country}.site-post {
    .site-post__content {
      blockquote,
      blockquote * {
        color: map-get($colors, base-color);
      }

      a {
        border-bottom: 5px solid map-get($colors, light-color);
      }

      a:hover,
      a:visited {
        text-decoration: none;
        border-bottom: 5px solid map-get($colors, base-color);
      }
    }
  }
}

//
.site-post {
  hr {
    height: 12px;
    color: #f5f5f5;
    background-color: #f5f5f5;
    border: none;
  }

  a {
    text-decoration: none;
  }

  .site-post__categories {
    position: absolute;
    right: 0;
    top: 0;
  }

  .site-post__content {
    a {
      color: rgba(0, 0, 0, 0.54);
    }

    * {
      font-size: 16px;
      font-weight: 400;
    }

    ul,
    ol {
      padding-left: 24px;
    }

    p,
    ul,
    ol {
      margin-top: 16px;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Roboto Condensed", sans-serif;
      margin: 36px 0 24px;
      line-height: 1.2;
      font-weight: normal;
      color: black;
    }

    h2 {
      margin-top: 24px;
      font-size: 1.4em;
    }

    h3 {
      font-size: 1.3em;
    }

    h4 {
      font-size: 1.2em;
    }

    h5 {
      font-size: 1.15em;
    }

    h6 {
      font-size: 1.1em;
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
      margin: 48px 0;
      line-height: 1.2;
    }

    .site-post__content__aspect-ratio {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 51%;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 16px;

      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 2px;
      }
    }

    img,
    figure,
    .site_post__content__post-img {
      width: 100% !important;
      height: auto;
      border-radius: 2px;
    }

    figure {
      font-family: "Noto Serif", serif;
      padding-bottom: 24px;
    }
  }

  .site-post__site-date {
    font: 16px "Noto Serif", serif;
    margin-top: 16px;
  }

  .ya-share2__list.ya-share2__list_direction_horizontal {
    padding-left: 12px;
    padding-right: 12px;
    margin: 0;
  }
}
</style>
