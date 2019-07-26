<template>
  <!-- Header -->
  <section class="app-header scroll-up">
    <v-toolbar
      v-show="loadingCount === 0"
      class="toolbar"
      scroll-target
      absolute
      height="4"
      color="grey"
    />

    <v-progress-linear
      :indeterminate="true"
      :active="loadingCount > 0"
      height="4px"
      color="grey"
      class="app-header__progress-bar ma-0"
      fixed
    ></v-progress-linear>

    <!-- Small screen and down -->
    <v-layout justify-center align-center py-4 class="hidden-md-and-up">
      <!-- Site logo -->
      <!-- Small screen-->
      <v-flex class="hidden-xs-only">
        <SiteLogo
          hasImage
          :sites="sites"
          :siteName="$route.name === 'homePage' ? null : siteName"
        ></SiteLogo>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Site title -->
      <!-- Small screen -->
      <v-flex class="hidden-xs-only">
        <SiteLogo
          hasText
          :sites="sites"
          :siteName="$route.name === 'homePage' ? null : siteName"
        ></SiteLogo>
      </v-flex>

      <!-- Extra small screen only-->
      <v-flex class="hidden-sm-and-up">
        <SiteLogo
          hasImage
          hasText
          :sites="sites"
          :siteName="$route.name === 'homePage' ? null : siteName"
        ></SiteLogo>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="text-xs-center grey--text text--darken-3"
          >fiber_manual_record</v-icon
        >
      </v-flex>

      <!-- Tag line -->
      <v-flex class="hidden-xs-only">
        <h2
          v-if="$route.name === 'homePage'"
          class="app-header__tag-line font-weight-light grey--text text--darken-1 text-xs-center subheading"
        >
          НОВОСТИ
          <br />АЗИИ
        </h2>
        <h2
          v-else
          class="app-header__tag-line font-weight-light grey--text text--darken-1 text-xs-center subheading"
        >
          ПОСЛЕДНИЕ
          <br />НОВОСТИ
        </h2>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SiteLogo from './SiteLogo'

export default {
  props: ['siteName'],
  components: { SiteLogo },
  computed: {
    ...mapState(['sites', 'loadingCount'])
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  .app-header__progress-bar {
    position: fixed;
    z-index: 999;
  }

  .app-header__tag-line {
    line-height: 1;
  }
}
</style>
