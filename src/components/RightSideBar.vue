<template>
  <!-- Right side bar -->
  <v-flex md2 py-2 px-2 class="right-side-bar">
    <v-layout column align-center justify-center class="hidden-sm-and-down">
      <!-- Rounded site logo -->
      <v-flex md12 pb-5>
        <v-btn :to="'/' + siteName" fab raised class="site-logo">
          <v-img :src="siteLogo" class="logo-image"></v-img>
        </v-btn>
      </v-flex>

      <!-- Large screens and up-->
      <v-flex md12 class="hidden-md-and-down">
        <h1 class="display-1 text-md-center">
          <span class="font-weight-regular text-uppercase">{{ rusSiteName }}</span>
          <br>
          <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
        </h1>
      </v-flex>

      <!-- Middle screens and down -->
      <v-flex md12 class="hidden-lg-and-up">
        <h1 class="display-1 text-md-center text-responsive">
          <span class="font-weight-regular text-uppercase">{{ rusSiteName }}</span>
          <br>
          <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
        </h1>
      </v-flex>

      <!-- Rounded separator -->
      <v-flex md12 my-4>
        <v-icon class="grey--text text--darken-2">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Tag line -->
      <v-flex md12>
        <h2 class="title font-weight-regular grey--text text--darken-1 text-md-center">ПОСЛЕДНИЕ
          <br>НОВОСТИ
        </h2>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
  position: relative;

  .site-logo {
    width: 10vw;
    height: 10vw;
    max-width: 100%;

    .logo-image {
      width: 10vw;
      height: 10vw;
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
