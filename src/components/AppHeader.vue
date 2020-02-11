<template>
  <!-- Header -->
  <v-app-bar hide-on-scroll app id="header" dark>
    <v-btn
      v-if="$route.name === 'postPage'"
      :to="upperLevel"
      exact
      fab
      text
      width="48"
      height="48"
    >
      <v-icon color="grey">mdi-arrow-top-left</v-icon>
    </v-btn>

    <v-hover v-slot:default="{ hover }">
      <SiteLogo
        v-if="$route.name === 'sitePage'"
        :class="{ dimmed: !hover }"
        flat
      ></SiteLogo>
    </v-hover>

    <SiteLogo
      hasText
      :siteName="$route.name === 'homePage' ? null : $route.params.siteName"
      class="ml-sm-12"
      flat
    ></SiteLogo>

    <v-btn
      @click="$vuetify.goTo('#search')"
      exact
      fab
      text
      width="48"
      height="48"
      class="ml-auto hidden-xs-only"
    >
      <v-icon color="grey">search</v-icon>
    </v-btn>

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
    },
    upperLevel() {
      if (this.$route.name === 'postPage') {
        return `/${this.$route.params.siteName}`
      } else {
        return '/'
      }
    }
  }
}
</script>
<style lang="scss">
.progress-bar {
  bottom: -4px !important;
}

.dimmed {
  filter: brightness(0.5);
}
</style>
