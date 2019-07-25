<template>
  <v-card
    class="site-card"
    :to="'/' + post.siteName + '/' + post.slug"
    raised
    ripple
    dark
  >
    <v-layout>
      <!-- Site color point -->
      <v-btn
        :to="'/' + post.siteName"
        fab
        raised
        class="color-point ma-3"
        :style="'background-color: ' + getSiteColor(post.siteName)"
      ></v-btn>

      <v-flex class="site-info">
        <v-card-title class="site-title">
          <h3 class="subheading" v-html="post.title"></h3>
        </v-card-title>

        <v-card-text class="post-details font-weight-light">
          <v-layout justify-space-between>
            <span class="grey--text post-date font-italic">{{
              getDate(post.date)
            }}</span>
            <span class="body-1 grey--text">{{
              getRusSiteName(post.siteName)
            }}</span>
          </v-layout>
        </v-card-text>
      </v-flex>
    </v-layout>
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
    getRusSiteName(siteName) {
      return this.sites.find(site => site.name === siteName).rusName
    },
    getSiteColor(siteName) {
      return this.sites.find(site => site.name === siteName).color
    },
    getSiteLogo(siteName) {
      return this.sites.find(site => site.name === siteName).logo
    },
    getSiteLogo2(siteName) {
      return this.sites.find(site => site.name === siteName).logo2
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
.site-card {
  .color-point {
    width: 32px;
    height: 32px;
  }

  .site-info {
    bottom: 0;
    left: 48px;
    width: 100%;

    .site-title {
      padding-bottom: 5px;
    }

    .post-details {
      padding: 10px 16px;

      .post-date {
        font-family: 'Noto Serif', serif;
      }
    }
  }
}
</style>
