<template>
  <!-- Site page -->
  <section>
    <!-- Set title to page -->
    <vue-headful :title="`${rusSiteName} Сегодня`" />

    <v-container pa-0>
      <v-layout>
        <v-flex xs0 sm1 md2 py-4>
          <SiteLogo hasImage />
        </v-flex>

        <v-flex xs12 sm10 md8>
          <AppHeader :siteName="siteName" />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <PostGrid :siteName="siteName" :offset="0" :perPage="4" />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <PostList :siteName="siteName" :offset="1" :perPage="10" />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '../components/AppHeader'
import SiteLogo from '../components/SiteLogo'
import PostGrid from '../components/PostGrid'
import PostList from '../components/PostList'

export default {
  components: {
    AppHeader,
    SiteLogo,
    PostGrid,
    PostList
  },
  props: ['siteName'],
  computed: {
    ...mapState(['sites']),
    rusSiteName() {
      return this.sites.find(site => site.name === this.siteName).rusName
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll-button {
  bottom: 16px !important;
}
</style>
