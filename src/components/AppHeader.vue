<template>
  <!-- Header -->
  <section class="header-section scroll-up">
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
      class="progress-bar ma-0"
      fixed
    ></v-progress-linear>

    <!-- Small screen and down -->
    <!-- For home page only -->
    <v-layout
      v-if="$route.name === 'homePage'"
      justify-center
      align-center
      py-4
      class="hidden-md-and-up"
    >
      <!-- Site logo -->
      <!-- Small screen -->
      <v-flex>
        <v-layout justify-center>
          <v-btn to="/" fab class="site-logo-fixed" color="black">
            <v-img
              :src="require('@/assets/logo-today-transparent.png')"
              class="logo-image"
              contain
            ></v-img>
          </v-btn>
        </v-layout>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Site title -->
      <!-- Small screen - align center-->
      <v-flex class="hidden-xs-only">
        <h1 class="headline text-xs-center">
          <span class="font-weight-regular text-uppercase text-responsive"
            >АЗИЯ</span
          >
          <br />
          <span class="font-weight-thin text-xs-center text-responsive"
            >СЕГОДНЯ</span
          >
        </h1>
      </v-flex>

      <!-- Extra small screen - align left-->
      <v-flex class="hidden-sm-and-up border-left">
        <h1 class="headline text-xs-left">
          <span class="font-weight-regular text-uppercase text-responsive"
            >АЗИЯ</span
          >
          <br />
          <span class="font-weight-thin text-xs-center text-responsive"
            >СЕГОДНЯ</span
          >
        </h1>
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
          class="subheading font-weight-light grey--text text--darken-1 text-xs-center"
        >
          НОВОСТИ
          <br />АЗИИ
        </h2>
      </v-flex>
    </v-layout>

    <!--  -->
    <!-- For all pages except Home page -->
    <v-layout
      v-if="$route.name !== 'homePage'"
      justify-center
      align-center
      py-4
      class="hidden-md-and-up"
    >
      <!-- Site logo -->
      <!-- Small screen -->
      <v-flex>
        <v-layout justify-center>
          <v-btn :to="'/' + siteName" fab class="site-logo-fixed" color="black">
            <v-img :src="siteLogo" class="logo-image" contain></v-img>
          </v-btn>
        </v-layout>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Site title -->
      <!-- Small screen - align center-->
      <v-flex class="hidden-xs-only">
        <h1 class="headline text-xs-center">
          <span class="font-weight-regular text-uppercase text-responsive">
            {{ rusSiteName }}
          </span>
          <br />
          <span class="font-weight-thin text-xs-center text-responsive"
            >СЕГОДНЯ</span
          >
        </h1>
      </v-flex>

      <!-- Extra small screen - align left-->
      <v-flex class="hidden-sm-and-up border-left">
        <h1 class="headline text-xs-left">
          <span class="font-weight-regular text-uppercase text-responsive">
            {{ rusSiteName }}
          </span>
          <br />
          <span class="font-weight-thin text-xs-center text-responsive"
            >СЕГОДНЯ</span
          >
        </h1>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Tag line -->
      <v-flex class="hidden-xs-only">
        <h2
          class="subheading font-weight-light grey--text text--darken-1 text-xs-center"
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

export default {
  props: ['siteName'],

  computed: {
    ...mapState(['sites', 'loadingCount']),
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
.header-section {
  .progress-bar {
    position: fixed;
    z-index: 999;
  }

  .site-logo-fixed {
    width: 100px;
    height: 100px;

    .logo-image {
      width: 100px;
      height: 100px;
    }
  }

  .border-left {
    border-left: 4px solid #424242;
    padding-left: 16px;
  }

  .subheading {
    line-height: 1;
  }
}
</style>
