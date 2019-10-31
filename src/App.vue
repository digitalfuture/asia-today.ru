<template>
  <v-app dark>
    <AppHeader />

    <v-container align-content-center fluid class="app-container pa-0" dark>
      <v-content>
        <router-view :key="$route.path"></router-view>
      </v-content>
    </v-container>

    <AppFooter />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    ...mapMutations(['clearSearchString', 'clearSearchResult'])
  },
  watch: {
    $route() {
      this.clearSearchString()
      this.clearSearchResult()
    }
  }
}
</script>
