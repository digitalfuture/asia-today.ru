<template>
  <!-- Home page -->
  <section>
    <!-- Set title to page -->
    <vue-headful title="Азия Сегодня" />

    <AppHeader />

    <v-container pa-0 fluid>
      <v-layout>
        <SideBarLeft />
        <PostGrid :offset="0" :perPage="1" />
        <SideBarRight />
      </v-layout>

      <v-layout>
        <v-flex xs0 md2></v-flex>
        <PostList :offset="1" :perPage="3" />
        <v-flex xs0 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import SideBarLeft from '../components/SideBarLeft'
import SideBarRight from '../components/SideBarRight'
import PostGrid from '../components/PostGrid'
import PostList from '../components/PostList'

export default {
  components: {
    AppHeader,
    SideBarLeft,
    SideBarRight,
    PostGrid,
    PostList
  }
}
</script>
