<template>
  <section class="site-post" :class="siteName">
    <v-row>
      <v-col cols="12">
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
                      >{{ category.name.toUpperCase() }}</v-chip
                    >
                  </div>
                  <!-- Extra small screens only -->
                  <div class="d-flex justify-center">
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
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>

          <hr />

          <v-card-text class="px-4 px-md-8">
            <div class="d-flex justify-center">
              <div
                v-html="currentPost.content"
                class="site-post__content"
              ></div>
            </div>

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
                  >{{ tag.name.toUpperCase() }}</v-chip
                >
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
                  class="site-post__site-date font-italic font-weight-light blue-grey--text text--lighten-2 subheading"
                  >{{ currentPost.date }}</span
                >
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
        <v-skeleton-loader v-else type="image" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import YandexShare from '@cookieseater/vue-yandex-share'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    YandexShare
  },
  computed: {
    ...mapState(['sites', 'currentPost']),

    siteName() {
      return this.$route.params.siteName
    },
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url
    },
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  },
  methods: {
    ...mapActions(['getMedia'])
  }
}
</script>

<style lang="scss">
@import '../styles';

@each $country, $colors in $countries {
  .#{$country}.site-post {
    hr {
      background-color: map-get($colors, light-color);
    }

    .site-post__content {
      blockquote,
      blockquote * {
        color: map-get($colors, base-color);
      }

      a {
        background-image: linear-gradient(
          120deg,
          map-get($colors, light-color) 0%,
          map-get($colors, light-color) 100%
        );
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 88%;
        transition: background-size 0.25s ease-in;

        &:hover,
        &:visited {
          background-size: 100% 88%;
        }
      }
    }
  }
}

//
.site-post {
  h1 {
    width: 100%;
    max-width: 600px;
  }

  hr {
    height: 12px;
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
    max-width: 600px;
    line-height: initial;

    a {
      color: rgba(0, 0, 0, 0.54);
    }

    * {
      font-family: 'Roboto Slab', serif;
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
      font-family: 'Roboto Condensed', sans-serif;
      margin: 36px 0 24px;
      line-height: 1.2;
      font-weight: normal;
      color: black;
    }

    h2 {
      font-size: 30px;
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
      font-family: 'Noto Serif', serif;
      color: slategrey;
    }

    p > em:first-child,
    div > em:first-child {
      display: inline-block;
      margin-top: 32px;
    }

    blockquote,
    blockquote * {
      text-align: center;
      font-family: 'Noto Serif', serif;
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
      margin-bottom: 24px;
      margin-top: 24px;

      figcaption {
        font-family: 'Noto Serif', serif;
        font-style: italic;
      }
    }
  }

  .site-post__site-date {
    font: 16px 'Noto Serif', serif;
    margin-top: 16px;
  }

  .ya-share2__list.ya-share2__list_direction_horizontal {
    padding-left: 12px;
    padding-right: 12px;
    margin: 0;
  }
}
</style>
