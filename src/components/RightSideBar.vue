<template>
  <!-- Right side bar -->
  <v-flex class="right-side-bar hidden-sm-and-down" md2 px-2 py-5>
    <!-- For home page only -->
    <v-layout
      v-if="$route.name === 'homePage'"
      fill-height
      align-center
      column
      justify-space-between
    >
      <!-- Rounded site logos -->
      <v-btn
        v-for="(site, i) in sites"
        :key="i"
        md12
        :to="'/' + site.name"
        fab
        class="site-logo-fixed"
        color="black"
      >
        <v-img :src="site.logo" class="logo-image" contain></v-img>
      </v-btn>
    </v-layout>

    <!-- For all pages except home page -->
    <v-layout
      v-if="$route.name !== 'homePage'"
      column
      align-center
      fill-height
      justify-space-between
    >
      <!-- Rounded site logo -->
      <v-btn :to="'/' + siteName" fab class="site-logo-fixed" color="black">
        <v-img :src="siteLogo" class="logo-image" contain></v-img>
      </v-btn>

      <!-- Large screens and up - fixed text size -->
      <h1 class="hidden-md-and-down headline text-md-center">
        <span class="font-weight-regular text-uppercase">{{ rusSiteName }}</span>
        <br>
        <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
      </h1>

      <!-- Middle screens only - responsive text size-->
      <h1 class="hidden-lg-and-up headline text-md-center text-responsive">
        <span class="font-weight-regular text-uppercase">{{ rusSiteName }}</span>
        <br>
        <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
      </h1>

      <!-- Rounded separator -->
      <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>

      <!-- Tag line -->
      <h2 class="title font-weight-light grey--text text--darken-1 text-md-center">
        ПОСЛЕДНИЕ
        <br>НОВОСТИ
      </h2>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["siteName"],
  computed: {
    ...mapState(["sites"]),
    siteLogo() {
      return this.sites.find(site => site.name === this.siteName).logo;
    },
    rusSiteName() {
      return this.sites.find(site => site.name === this.siteName).rusName;
    }
  }
};
</script>
<style lang="scss" scope>
.right-side-bar {
  height: calc(100vh - 32px);

  .site-logo-fixed {
    width: 100px;
    height: 100px;

    .logo-image {
      width: 100px;
      height: 100px;
    }
  }

  .text-responsive {
    line-height: 2rem !important;
    span {
      font-size: 2.2vw;
    }
  }

  .title {
    text-transform: lowercase;
  }
}
</style>
