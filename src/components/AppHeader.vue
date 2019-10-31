<template>
  <!-- Header -->
  <v-app-bar hide-on-scroll app class="scroll-up" dark>
    <v-btn
      v-show="$route.path !== '/'"
      @click="$router.go(-1)"
      fab
      text
      width="48"
      height="48"
    >
      <v-icon color="black" x-large>mdi-arrow-left</v-icon>
    </v-btn>

    <SiteLogo
      hasText
      :sites="sites"
      :siteName="$route.name === 'homePage' ? null : $route.params.siteName"
    ></SiteLogo>

    <v-progress-linear
      :active="isLoading"
      indeterminate
      absolute
      bottom
      color="grey"
      class="progress-bar"
    ></v-progress-linear>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
import SiteLogo from './SiteLogo'

export default {
  components: { SiteLogo },
  computed: {
    ...mapState(['sites', 'loadingCount']),
    isLoading() {
      return this.loadingCount > 0
    }
  }
}
</script>
<style lang="scss">
.progress-bar {
  bottom: -4px !important;
}
</style>
