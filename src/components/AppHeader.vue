<template>
  <!-- Header -->
  <v-app-bar hide-on-scroll app id="header" class="app-header" dark>
    <v-btn
      v-if="$route.name !== 'sitePage'"
      :to="upperLevel"
      exact
      fab
      text
      width="48"
      height="48"
      :disabled="$route.name === 'homePage'"
      active-class="disabled"
    >
      <v-icon v-if="$route.name !== 'homePage'" color="grey"
        >mdi-arrow-top-left</v-icon
      >
    </v-btn>

    <SiteLogo v-if="$route.name === 'sitePage'" flat />

    <SiteLogo
      hasText
      :siteName="$route.name === 'homePage' ? null : $route.params.siteName"
      class="ml-sm-12"
      flat
    />

    <SocialLinks class="d-none d-md-flex" bottom />

    <v-btn
      @click="handleSearchClick"
      fab
      text
      width="48"
      height="48"
      class="ml-auto"
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
import { mapState, mapMutations } from 'vuex'
import SiteLogo from './SiteLogo'
import SocialLinks from './SocialLinks'

export default {
  components: { SiteLogo, SocialLinks },
  computed: {
    ...mapState(['sites', 'loadingCount', 'isSearch']),
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
  },
  methods: {
    ...mapMutations(['switchSearch']),
    handleSearchClick() {
      this.switchSearch()
      this.$nextTick(() => this.$vuetify.goTo('.app-header'))
    }
  }
}
</script>
<style lang="scss">
.app-header {
  .progress-bar {
    bottom: -4px !important;
  }

  .disabled {
    opacity: 0;
  }
}
</style>
