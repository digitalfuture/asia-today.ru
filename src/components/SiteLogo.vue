<template>
  <v-layout align-center justify-center class="site-logo">
    <!-- Logo with image -->
    <v-layout v-if="hasImage" align-center justify-center>
      <!-- Site logo -->
      <div class="pr-2">
        <v-btn
          :to="siteName ? '/' + siteName : '/'"
          fab
          class="site-logo__logo-wrapper"
          color="black"
        >
          <v-img
            :src="
              siteName
                ? siteLogo
                : require('@/assets/logo-today-transparent.png')
            "
            class="site-logo__logo-image"
            contain
          ></v-img>
        </v-btn>
      </div>

      <!-- Site title -->
      <div v-if="hasText">
        <v-layout
          text-xs-left
          align-center
          py-2
          class="site-logo__logo-text site-logo__logo-text--border-left"
        >
          <h1 class="headline">
            <span
              class="font-weight-regular text-uppercase text-responsive"
              v-text="siteName ? rusSiteName : 'АЗИЯ'"
            ></span>
            <br />
            <span class="font-weight-thin text-xs-center text-responsive"
              >СЕГОДНЯ</span
            >
          </h1>
        </v-layout>
      </div>
    </v-layout>

    <!-- Logo without image -->
    <v-layout v-else class="site-logo__logo-text">
      <!-- Site title -->
      <v-layout align-center justify-center>
        <h1 class="headline text-xs-center">
          <span
            class="font-weight-regular text-uppercase text-responsive"
            v-text="siteName ? rusSiteName : 'АЗИЯ'"
          ></span>
          <br />
          <span class="font-weight-thin text-xs-center text-responsive"
            >СЕГОДНЯ</span
          >
        </h1>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    siteName: { type: String, default: null },
    hasImage: { type: Boolean, default: false },
    hasText: { type: Boolean, default: false }
  },
  computed: {
    ...mapState(['sites']),
    siteLogo() {
      return this.sites.find(site => site.name === this.siteName).logo
    },
    rusSiteName() {
      return this.sites.find(site => site.name === this.siteName).rusName
    }
  }
}
</script>

<style lang="scss" scoped>
.site-logo {
  .site-logo__logo-wrapper {
    width: 64px;
    height: 64px;
  }

  .site-logo__logo-text {
    height: 64px;
  }

  .site-logo__logo-text--border-left {
    border-left: 4px solid #424242;
    padding-left: 16px;
  }
}
</style>
