<template>
  <v-card
    :to="'/' + post.siteName + '/' + post.slug"
    raised
    ripple
    dark
    class="post-stripe transparent"
    max-height="150"
  >
    <div class="d-flex">
      <v-img
        :src="post.thumb"
        lazy-src="/img/placeholder.jpg"
        height="150"
        max-height="150"
        width="200"
        max-width="200"
        class="d-none d-sm-flex post-stripe__post-image"
      >
        <v-btn
          fab
          raised
          :style="'background-color: ' + getSiteColor(post.siteName)"
          width="16"
          height="16"
          class="mx-sm-3 mx-md-4 my-4 my-md-5"
        ></v-btn>
      </v-img>

      <v-btn
        fab
        raised
        :style="'background-color: ' + getSiteColor(post.siteName)"
        width="16"
        height="16"
        class="d-flex d-sm-none mx-2 my-3"
      ></v-btn>

      <div
        class="d-flex flex-column flex-grow-1 justify-space-between post-stripe__post-title px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-md-4"
      >
        <div v-html="post.title"></div>

        <div
          v-if="!compact"
          class="d-none d-md-none flex-grow-1 font-weight-light grey--text body-2 pt-2"
          v-html="excerpt.slice(0, 70) + '...'"
        ></div>

        <div
          v-if="!compact"
          class="d-none d-lg-flex flex-grow-1 font-weight-light grey--text body-2 pt-2"
          v-html="excerpt.slice(0, 120) + '...'"
        ></div>

        <div class="d-flex font-weight-light">
          <div
            class="flex-grow-1 font-weight-light blue-grey--text text--darken-1 post-stripe__post-date font-italic"
          >
            {{ getDate(post.date) }}
          </div>

          <div class="grey--text">
            {{ getSiteNameRu(post.siteName) }}
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { DateTime } from 'luxon'
import { mapState } from 'vuex'

export default {
  props: {
    post: Object,
    compact: { type: Boolean, default: false }
  },
  computed: {
    ...mapState(['sites']),
    excerpt() {
      return this.post.excerpt.split('<p>')[1].split('</p>')[0]
    }
  },
  methods: {
    getSiteNameRu(siteName) {
      return this.sites.find(site => site.name === siteName).nameRu
    },
    getSiteColor(siteName) {
      return this.sites.find(site => site.name === siteName).color
    },
    getDate(date) {
      if (!date) return ''
      return DateTime.fromISO(date, { locale: 'ru' }).toLocaleString(
        DateTime.DATE_FULL
      )
    }
  }
}
</script>

<style lang="scss">
.post-stripe {
  .post-stripe__post-image {
    border-radius: 4px 0 0 4px;
  }

  .post-stripe__post-title {
    font-weight: 300;
  }
  .post-stripe__post-date {
    font-family: 'Noto Serif', serif;
  }
}
</style>
