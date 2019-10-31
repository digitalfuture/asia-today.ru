<template>
  <v-row class="post">
    <v-col :class="siteName" cols="12">
      <!-- Set title to page -->
      <vue-headful :title="`${getTitle(title)} - ${siteNameRu} Сегодня`" />

      <v-card v-show="img" light class="pb-2 post__post-content">
        <!--  -->
        <v-img
          :src="img"
          lazy-src="/img/placeholder.jpg"
          class="post__post-content__post-img white--text align-end"
          gradient="to top, rgba(0,0,0,.8), transparent 100%"
          :aspect-ratio="16 / 9"
        >
          <v-container>
            <v-row>
              <v-col class="px-2 px-sm-4 px-md-8">
                <!-- Extra small screens only -->
                <h1
                  class="d-inline d-sm-none headline font-weight-light white--text"
                  v-html="title"
                ></h1>
                <!-- Small screens only -->
                <h1
                  class="d-none d-sm-inline d-md-none display-1 font-weight-light white--text"
                  v-html="title"
                ></h1>
                <!-- Middle screens and up -->
                <h1
                  class="d-none d-md-inline display-2 font-weight-light white--text"
                  v-html="title"
                ></h1>
              </v-col>
            </v-row>
          </v-container>
        </v-img>

        <hr />

        <v-card-text class="px-2 px-sm-4 px-md-8">
          <div v-html="content"></div>

          <v-row class="mt-8 mb-5">
            <v-col>
              <hr />
            </v-col>
          </v-row>

          <v-row justify="space-between">
            <v-col cols="12" sm="6" class="pb-4">
              <span
                class="post__post-content__site-date font-italic font-weight-light grey--text subheading"
                >{{ date }}</span
              >
            </v-col>

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
                  :description="title"
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
                  :description="title"
                />
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { DateTime } from 'luxon'
import YandexShare from '@cookieseater/vue-yandex-share'

export default {
  components: {
    YandexShare
  },
  props: ['postSlug', 'siteName'],
  data: () => ({
    id: '',
    slug: '',
    title: '',
    content: '',
    date: '',
    img: '',
    thumb: ''
  }),
  computed: {
    ...mapState(['sites']),
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url
    },
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  },
  methods: {
    ...mapActions(['fetchPostBySlug', 'getMedia']),
    getTitle(title) {
      const div = document.createElement('div')
      div.innerHTML = title
      return div.innerText
    },
    savePostData(data) {
      this.id = data.id
      this.slug = data.slug
      this.title = data.title.rendered
      this.content = this.processContent(data.content.rendered)
      this.date = DateTime.fromISO(data.date, {
        locale: 'ru'
      }).toLocaleString(DateTime.DATE_FULL)
      this.thumb =
        data._embedded[
          'wp:featuredmedia'
        ][0].media_details.sizes.td_537x360.source_url
      this.img =
        data._embedded[
          'wp:featuredmedia'
        ][0].media_details.sizes.full.source_url
    },
    processContent(data) {
      data = this.removeClasses(data)
      data = this.processLinks(data)
      data = this.processIframes(data)
      data = this.processImages(data)

      return data
    },
    removeClasses(data) {
      const template = document.createElement('div')
      template.innerHTML = data

      const elements = template.querySelectorAll('*')

      for (const element of elements) {
        element.classList = []
      }

      return template.innerHTML
    },
    processLinks(data) {
      const template = document.createElement('div')

      template.innerHTML = data
      const links = template.querySelectorAll('a')

      this.sites.forEach(site => {
        for (const link of links) {
          const domainName = site.name.split('//').reverse()[0]

          if (link.href.search(domainName) !== -1) {
            const linkFragments = link.href.split('/').reverse()

            const slug = linkFragments[0] ? linkFragments[0] : linkFragments[1]

            link.href = `/${site.name}/${slug}`
            link.target = ''
          }
        }
      })

      return template.innerHTML
    },
    processIframes(data) {
      const template = document.createElement('div')

      template.innerHTML = data
      const iframes = template.querySelectorAll('iframe')

      for (const iframe of iframes) {
        iframe.parentNode.classList.add('post__post-content__aspect-ratio')
      }

      return template.innerHTML
    },
    processImages(data) {
      const template = document.createElement('div')
      template.innerHTML = data

      const images = template.querySelectorAll('img')

      for (const image of images) {
        if (image.src.startsWith(window.location.origin)) {
          image.src = image.src.replace(window.location.origin, this.siteUrl)
        }
      }

      return template.innerHTML
    }
  },
  mounted() {
    this.fetchPostBySlug({
      siteUrl: this.siteUrl,
      postSlug: this.postSlug
    }).then(data => this.savePostData(data))
  }
}
</script>

<style lang="scss">
$countries: (
  vietnam: (
    base-color: rgba(104, 215, 88, 1),
    light-color: rgba(104, 215, 88, 0.3)
  ),
  nepal: (
    base-color: rgba(77, 178, 236, 1),
    light-color: rgba(77, 178, 236, 0.3)
  ),
  thailand: (
    base-color: rgba(187, 134, 252, 1),
    light-color: rgba(187, 134, 252, 0.3)
  ),
  philippines: (
    base-color: rgba(3, 218, 198, 1),
    light-color: rgba(3, 218, 198, 0.3)
  ),
  japan: (
    base-color: rgba(255, 204, 204, 1),
    light-color: rgba(255, 204, 204, 0.3)
  ),
  china: (
    base-color: rgba(255, 0, 0, 1),
    light-color: rgba(255, 0, 0, 0.3)
  ),
  cambodia: (
    base-color: rgba(255, 255, 0, 1),
    light-color: rgba(255, 255, 0, 0.3)
  ),
  sri-lanka: (
    base-color: rgba(255, 102, 51, 1),
    light-color: rgba(255, 102, 51, 0.3)
  ),
  india: (
    base-color: rgba(255, 153, 51, 1),
    light-color: rgba(255, 153, 51, 0.3)
  ),
  singapore: (
    base-color: rgba(255, 0, 102, 1),
    light-color: rgba(255, 0, 102, 0.3)
  ),
  malaysia: (
    base-color: rgba(0, 204, 255, 1),
    light-color: rgba(0, 204, 255, 0.3)
  ),
  korea: (
    base-color: rgba(255, 153, 255, 1),
    light-color: rgba(255, 153, 255, 0.3)
  )
);

@each $country, $colors in $countries {
  .#{$country} {
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

//
.post {
  hr {
    height: 12px;
    color: #f5f5f5;
    background-color: #f5f5f5;
    border: none;
  }

  a {
    text-decoration: none;
  }

  .post__post-content {
    min-height: 100vh;

    a {
      color: rgba(0, 0, 0, 0.54);
    }

    * {
      font-size: 16px;
      font-weight: 400;

      ul,
      ol {
        padding-left: 24px;
      }

      p,
      ul,
      ol {
        margin-bottom: 16px;
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
        color: #424242;
      }

      h2 {
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
        font-family: 'Noto Serif', serif;
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

      .post__post-content__aspect-ratio {
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

      .post__post-content__site-date {
        font-family: 'Noto Serif', serif;
        margin-top: 16px;
      }

      img,
      figure,
      .post__post-content__post-img {
        width: 100% !important;
        height: auto;
        border-radius: 2px;
      }

      figure {
        font-family: 'Noto Serif', serif;
        padding-bottom: 24px;
      }
    }
  }
  .ya-share2__list.ya-share2__list_direction_horizontal {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
