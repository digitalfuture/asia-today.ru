<template>
  <!-- Right side bar -->
  <v-flex md2 px-2 class="right-side-bar">
    <!-- For all pages except home page -->
    <v-layout
      v-if="$route.name !== 'homePage'"
      column
      align-center
      justify-center
      fill-height
      justify-space-between
      class="hidden-sm-and-down"
    >
      <!-- Rounded site logo -->
      <v-flex md12>
        <v-layout align-center fill-height>
          <v-btn :to="'/' + siteName" fab class="site-logo-fixed" color="black">
            <v-img :src="siteLogo" class="logo-image" contain></v-img>
          </v-btn>
        </v-layout>
      </v-flex>

      <!-- Large screens and up - fixed text size -->
      <v-flex md12 class="hidden-md-and-down">
        <v-layout align-center fill-height>
          <h1 class="headline text-md-center">
            <span class="font-weight-regular text-uppercase">{{ rusSiteName }}</span>
            <br>
            <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
          </h1>
        </v-layout>
      </v-flex>

      <!-- Middle screens only - responsive text size-->
      <v-flex md12 class="hidden-lg-and-up">
        <v-layout align-center fill-height>
          <h1 class="headline text-md-center text-responsive">
            <span class="font-weight-regular text-uppercase">{{ rusSiteName }}</span>
            <br>
            <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
          </h1>
        </v-layout>
      </v-flex>

      <!-- Rounded separator -->
      <v-flex md12>
        <v-layout align-center fill-height>
          <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>
        </v-layout>
      </v-flex>

      <!-- Tag line -->
      <v-flex md12>
        <v-layout align-center fill-height>
          <h2 class="title font-weight-light grey--text text--darken-1 text-md-center">последние
            <br>новости
          </h2>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- For home page only site page -->
    <v-layout v-if="$route.name === 'homePage'" fill-height align-center>
      <v-layout column align-center justify-center fill-height justify-space-between>
        <!-- Rounded site logos -->
        <v-flex v-for="(site, i) in sites" :key="i" md12>
          <v-layout align-center fill-height>
            <v-btn :to="'/' + site.name" fab class="site-logo-fixed" color="black">
              <v-img :src="site.logo" class="logo-image" contain></v-img>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["siteName"],
  data: () => ({
    //
  }),
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
<style lang="scss">
.right-side-bar {
  max-height: 100vh;
  position: relative;

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
}
</style>
