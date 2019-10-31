<template>
  <v-card
    :to="'/' + post.siteName + '/' + post.slug"
    raised
    ripple
    dark
    class="post-stripe"
  >
    <div class="d-flex">
      <v-avatar
        tile
        width="200"
        height="150"
        left
        class="d-none d-sm-flex flex-shrink-0"
      >
        <v-img
          :src="post.thumb"
          lazy-src="/img/placeholder.jpg"
          gradient="to top, rgba(0,0,0,.8), transparent 100%"
          height="150"
        >
          <v-btn
            fab
            raised
            :style="'background-color: ' + getSiteColor(post.siteName)"
            width="16"
            height="16"
            class="mx-3 mx-md-4 my-4 my-md-5"
          ></v-btn>
        </v-img>
      </v-avatar>

      <v-btn
        fab
        raised
        :style="'background-color: ' + getSiteColor(post.siteName)"
        width="16"
        height="16"
        class="d-flex d-sm-none mx-2 my-3"
      ></v-btn>

      <div
        class="d-flex flex-column flex-grow-1 justify-space-between pa-2 pa-sm-3 pa-md-4"
      >
        <div class="subtitle-1" v-html="post.title"></div>

        <div class="d-flex">
          <div
            class="flex-grow-1 font-weight-light grey--text post-stripe__post-date font-italic"
          >
            {{ getDate(post.date) }}
          </div>

          <div class="body-1 grey--text">
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
  props: ['post'],
  computed: {
    ...mapState(['sites'])
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

<style lang="scss" scoped>
.post-stripe {
  .post-stripe__post-date {
    font-family: 'Noto Serif', serif;
  }
}
</style>
