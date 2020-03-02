<template>
  <div class="site-logo">
    <!-- Logo with text -->
    <v-row
      v-if="hasText"
      align="center"
      justify="start"
      class="site-logo_full pa-2"
    >
      <!-- logo icon -->

      <div class="pl-4 pr-3">
        <v-btn
          fab
          class="site-logo__logo-wrapper black"
          :to="siteName ? '/' + siteName : '/'"
        >
          <v-img
            :src="siteName ? siteLogo : '/img/icons/android-icon-192x192.png'"
            class="site-logo__logo-image"
            width="48"
            height="48"
            contain
          ></v-img>
        </v-btn>
      </div>

      <!-- Logo text -->
      <router-link
        replace
        :to="siteName ? '/' + siteName : '/'"
        class="site-logo_full__logo-text"
      >
        <div class="text-left pl-4" align="center">
          <div
            class="font-weight-regular text-uppercase"
            v-text="siteName ? siteNameRu : 'АЗИЯ'"
          ></div>
          <div class="font-weight-thin">СЕГОДНЯ</div>
        </div>
      </router-link>
    </v-row>

    <!-- Logo without text -->
    <v-row v-else align="center" justify="center">
      <!-- logo icon -->
      <v-hover v-slot:default="{ hover }">
        <div class="pl-4 pr-2">
          <v-tooltip
            top
            :disabled="!siteName"
            color="rgba(255, 255, 255, 0)"
            content-class="site-logo__tooltip"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                fab
                class="site-logo__logo-wrapper black"
                :class="{ dimmed: !hover && !siteName }"
                v-on="siteName ? on : false"
                :to="siteName ? '/' + siteName : '/'"
              >
                <v-img
                  :src="
                    siteName ? siteLogo : '/img/icons/android-icon-192x192.png'
                  "
                  class="site-logo__logo-image"
                  width="48"
                  height="48"
                  contain
                ></v-img>
              </v-btn>
            </template>

            <v-chip v-if="siteName" dark small>{{
              siteNameRu.toUpperCase()
            }}</v-chip>
          </v-tooltip>
        </div>
      </v-hover>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    siteName: { type: String, default: null },
    hasText: { type: Boolean, default: false },
    flat: { type: Boolean, default: false }
  },
  computed: {
    ...mapState(['sites']),
    siteLogo() {
      return `/shared/img/logo-${this.siteName}-icon.png`
    },
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName)
        ? this.sites.find(site => site.name === this.siteName).nameRu
        : ''
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

  .dimmed {
    filter: brightness(0.5);
  }

  .site-logo_full {
    width: 220px;

    &__logo-text {
      height: 48px;
      border-left: 2px solid #525252;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
