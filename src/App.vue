<template>
  <v-app dark>
    <AppHeader />
    <router-view :key="$route.path"></router-view>
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
  metaInfo: {
    title: 'Азия cегодня - Новости Азии'
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
