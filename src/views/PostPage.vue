<template>
  <!-- Post page -->
  <section>
    <AppHeader :siteName="siteName" />

    <v-container fluid px-0>
      <v-layout>
        <SideBarLeft :siteName="siteName" />
        <Post :siteName="siteName" :postSlug="postSlug" />
        <SideBarRight :siteName="siteName" />
      </v-layout>

      <v-layout>
        <SideBarLeft :siteName="siteName" />
        <PostGrid
          :siteName="siteName"
          :offset="0"
          :perPage="4"
          :postSlug="postSlug"
        />
        <SideBarRight :siteName="siteName" />
      </v-layout>

      <v-layout>
        <v-flex xs0 md2></v-flex>
        <PostList
          :siteName="siteName"
          :offset="4"
          :perPage="10"
          :postSlug="postSlug"
        />
        <v-flex xs0 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import SideBarLeft from '../components/SideBarLeft'
import SideBarRight from '../components/SideBarRight'
import Post from '../components/Post'
import PostGrid from '../components/PostGrid'
import PostList from '../components/PostList'

export default {
  components: {
    AppHeader,
    SideBarLeft,
    SideBarRight,
    Post,
    PostGrid,
    PostList
  },
  props: ['postSlug', 'siteName']
}
</script>

<style lang="scss" scoped></style>
