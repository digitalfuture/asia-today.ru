<template>
  <v-card
    v-if="post"
    :to="'/' + post.siteName + '/' + post.slug"
    raised
    ripple
    dark
    class="post-card"
    grey
    height="100%"
    :class="{ compact: compact && $vuetify.breakpoint.mdAndUp }"
  >
    <v-img
      :src="post.thumb"
      lazy-src="/img/placeholder.jpg"
      gradient="to top, rgba(0,0,0,.8), transparent 100%"
      class="align-end"
      :aspect-ratio="$vuetify.breakpoint.smAndDown ? 12 / 6 : aspectRatio"
      height="100%"
    >
      <v-container :class="{ 'pb-0': $vuetify.breakpoint.lgAndUp }">
        <div class="post-card__color-point pa-4" width="16" height="16">
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
            :width="compact && $vuetify.breakpoint.mdAndUp ? 16 : 32"
            :height="compact && $vuetify.breakpoint.mdAndUp ? 16 : 32"
            class="hidden-xs-only"
            :style="'background-color: ' + getSiteColor(post.siteName)"
          ></v-btn>
        </div>

        <v-row class="px-4">
          <v-col>
            <v-row>
              <div class="pb-4 post-card__post-title" v-html="post.title"></div>
            </v-row>

            <v-row justify="space-between" class="font-weight-light">
              <span
                class="font-weight-light blue-grey--text text--lighten-1 post-card__post-date font-italic"
                >{{ getDate(post.date) }}</span
              >
              <span class="grey--text post-card__post-site ">
                {{ getSiteNameRu(post.siteName) }}
              </span>
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
  props: {
    post: { type: Object, default: null },
    aspectRatio: { type: Number },
    compact: { type: Boolean, default: false }
  },
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
    left: 0px;
    top: 0px;
  }

  .post-card__post-title {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4;
  }

  .post-card__post-date {
    font-family: 'Noto Serif', serif;
  }
}

.compact {
  .post-card__post-title {
    font-size: 16px;
  }

  .post-card__post-date,
  .post-card__post-site {
    font-size: 90%;
  }
}
</style>
