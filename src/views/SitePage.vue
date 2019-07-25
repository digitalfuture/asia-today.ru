<template>
  <!-- Site page -->
  <section>
    <!-- Set title to page -->
    <vue-headful :title="`${rusSiteName} Сегодня`" />

    <AppHeader :siteName="siteName" />

    <v-container pa-0 fluid>
      <v-layout>
        <SideBarLeft :siteName="siteName" />
        <PostGrid :siteName="siteName" :offset="0" :perPage="4" />
        <SideBarRight :siteName="siteName" />
      </v-layout>

      <v-layout>
        <v-flex xs0 md2></v-flex>
        <PostList :siteName="siteName" :offset="1" :perPage="10" />
        <v-flex xs0 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '../components/AppHeader'
import SideBarLeft from '../components/SideBarLeft'
import SideBarRight from '../components/SideBarRight'
import PostGrid from '../components/PostGrid'
import PostList from '../components/PostList'

export default {
  components: {
    AppHeader,
    PostGrid,
    PostList,
    SideBarLeft,
    SideBarRight
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
