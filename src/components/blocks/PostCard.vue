<template>
  <v-card
    :to="'/' + post.siteName + '/' + post.slug"
    @click.native="rememberCurrentPost"
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
        <div
          class="post-card__color-point px-2 px-sm-4 py-0 py-sm-4"
          width="16"
          height="16"
        >
          <v-btn
            fab
            raised
            width="16"
            height="16"
            class="hidden-sm-and-up"
            :style="'background-color: ' + getSiteColor(post.siteName)"
          ></v-btn>
          <v-btn
            fab
            raised
            width="32"
            height="32"
            class="hidden-xs-only"
            :style="'background-color: ' + getSiteColor(post.siteName)"
          ></v-btn>
        </div>

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

import { mapState, mapMutations } from 'vuex'

export default {
  props: ['post'],
  computed: {
    ...mapState(['sites'])
  },
  methods: {
    ...mapMutations(['rememberPost']),
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
    },
    rememberCurrentPost() {
      this.rememberPost(this.post)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  .post-card__color-point {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .post-card__post-date {
    font-family: 'Noto Serif', serif;
  }
}
</style>
