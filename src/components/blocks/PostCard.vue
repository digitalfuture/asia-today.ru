<template>
  <v-card
    :to="'/' + post.siteName + '/' + post.slug"
    raised
    ripple
    dark
    class="post-card grey"
  >
    <v-img
      :src="post.thumb"
      lazy-src="/img/placeholder.jpg"
      gradient="to top, rgba(0,0,0,.8), transparent 100%"
      :aspect-ratio="16 / 9"
      class="align-end"
    >
      <v-container>
        <v-btn
          fab
          raised
          class="post-card__color-point ma-0"
          :style="'background-color: ' + getSiteColor(post.siteName)"
        ></v-btn>

        <v-row class="px-4">
          <v-col>
            <v-row>
              <div class="pb-4" v-html="post.title"></div>
            </v-row>

            <v-row justify="space-between" class="font-weight-light">
              <span
                class="font-weight-light grey--text post-card__post-date font-italic"
                >{{ getDate(post.date) }}</span
              >
              <span class="body-1 grey--text">{{
                getSiteNameRu(post.siteName)
              }}</span>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
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
    getSiteLogo(siteName) {
      return this.sites.find(site => site.name === siteName).logo
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
.post-card {
  .post-card__color-point {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
  }

  .post-card__post-date {
    font-family: 'Noto Serif', serif;
  }
}
</style>
