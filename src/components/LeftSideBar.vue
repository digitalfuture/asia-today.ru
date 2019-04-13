<template>
  <v-flex class="left-side-bar hidden-sm-and-down" md2 px-2>
    <!-- Left side bar -->
    <!-- Middle screen and up -->
    <v-layout column fill-height justify-space-around>
      <!-- Main logo -->
      <router-link to="/" class="site-logo-2-link">
        <v-img :src="require('@/assets/logo-today-transparent.png')" class="site-logo-2"></v-img>
      </router-link>

      <!-- Logo separator -->
      <v-icon class="grey--text text--darken-1">fiber_manual_record</v-icon>

      <!-- Logo separator 2 -->
      <v-icon class="grey--text text--darken-2">fiber_manual_record</v-icon>

      <!-- Logo separator 3 -->
      <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>
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
.left-side-bar {
  height: calc(100vh - 32px);

  .hidden-md-and-up {
    .site-logo {
      width: 100px;
      height: 100px;
      max-width: 100%;

      .logo-image {
        width: 100px;
        height: 100px;
      }
    }

    .site-logo-2-link {
      .site-logo-2 {
        margin: auto;
        max-height: 100px;
      }
    }
  }

  .hidden-sm-and-down {
    .site-logo-2-link {
      width: 100%;

      .site-logo-2 {
        margin: auto;
        width: 200px;
        max-width: 100%;
        max-height: 100px;
      }
    }
  }
}
</style>
