<template>
  <v-flex xs12 md2 py-4 px-2 class="left-side-bar">
    <!-- Left side bar -->
    <!-- Middle screen and up -->
    <v-layout justify-center align-center column class="hidden-sm-and-down">
      <v-flex md2 py-4 px-2>
        <v-layout justify-center align-center column>
          <!-- Main logo -->
          <v-flex md12>
            <v-layout justify-center>
              <router-link to="/" class="site-logo-2-link">
                <v-img :src="require('@/assets/logo-today-transparent.png')" class="site-logo-2"></v-img>
              </router-link>
            </v-layout>
          </v-flex>

          <!-- Logo separator -->
          <v-flex md12>
            <v-layout justify-center>
              <v-icon class="grey--text text--darken-1 my-5">fiber_manual_record</v-icon>
            </v-layout>
          </v-flex>

          <!-- Logo separator 2 -->
          <v-flex md12>
            <v-layout justify-center>
              <v-icon class="grey--text text--darken-2 my-5">fiber_manual_record</v-icon>
            </v-layout>
          </v-flex>

          <!-- Logo separator 3 -->
          <v-flex md12>
            <v-layout justify-center>
              <v-icon class="grey--text text--darken-3 my-5">fiber_manual_record</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- Small screen and down -->
    <v-layout
      v-if="$route.name !== 'homePage'"
      justify-center
      align-center
      class="hidden-md-and-up"
    >
      <!-- Site logo -->
      <!-- Small screen -->
      <v-flex>
        <v-layout justify-center>
          <v-btn :to="'/' + siteName" fab raised class="site-logo">
            <v-img :src="siteLogo" class="logo-image"></v-img>
          </v-btn>
        </v-layout>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="grey--text text--darken-2">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Site title -->
      <!-- Small screen - align center-->
      <v-flex class="hidden-xs-only">
        <h1 class="display-1 text-xs-center">
          <span class="font-weight-regular text-uppercase text-responsive">{{ rusSiteName}}</span>
          <br>
          <span class="font-weight-thin text-xs-center text-responsive">СЕГОДНЯ</span>
        </h1>
      </v-flex>

      <!-- Extra small screen - align left-->
      <v-flex class="hidden-sm-and-up border-left">
        <h1 class="display-1 text-xs-left">
          <span class="font-weight-regular text-uppercase text-responsive">{{ rusSiteName}}</span>
          <br>
          <span class="font-weight-thin text-xs-center text-responsive">СЕГОДНЯ</span>
        </h1>
      </v-flex>

      <!-- Round separator -->
      <v-flex class="hidden-xs-only text-xs-center">
        <v-icon class="grey--text text--darken-2">fiber_manual_record</v-icon>
      </v-flex>

      <!-- Tag line -->
      <v-flex class="hidden-xs-only">
        <h2 class="title font-weight-regular grey--text text--darken-1 text-xs-center">ПОСЛЕДНИЕ
          <br>НОВОСТИ
        </h2>
      </v-flex>
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
.left-side-bar {
  .hidden-md-and-up {
    .border-left {
      border-left: 4px solid #424242;
      padding-left: 16px;
      padding-top: 4px;
    }

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
      width: 100%;

      .site-logo-2 {
        margin: auto;
        width: 100%;
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
