<template>
  <div class="d-flex site-logo align-center justify-center">
    <!-- Logo with image -->
    <v-row align="center" justify="center">
      <!-- Site logo -->
      <div class="pl-4 pr-3">
        <v-btn
          :to="siteName ? '/' + siteName : '/'"
          fab
          class="site-logo__logo-wrapper"
          color="black"
        >
          <v-img
            :src="siteName ? siteLogo : '/shared/img/logo-asia-icon.png'"
            class="site-logo__logo-image"
            width="48"
            height="48"
            contain
          ></v-img>
        </v-btn>
      </div>

      <!-- Site title -->
      <div
        v-if="hasText"
        class="site-logo__logo-text text-left pl-4"
        align="center"
      >
        <div
          class="font-weight-regular text-uppercase"
          v-text="siteName ? siteNameRu : 'АЗИЯ'"
        ></div>
        <div class="font-weight-thin">СЕГОДНЯ</div>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    siteName: { type: String, default: null },
    hasText: { type: Boolean, default: false }
  },
  computed: {
    ...mapState(['sites']),
    siteLogo() {
      return `/shared/img/logo-${this.siteName}-icon.png`
    },
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  }
}
</script>

<style lang="scss" scoped>
.site-logo {
  .site-logo__logo-wrapper {
    width: 48px;
    height: 48px;
  }

  .site-logo__logo-text {
    height: 48px;
    border-left: 2px solid #525252;
    padding-left: 16px;
  }
}
</style>
