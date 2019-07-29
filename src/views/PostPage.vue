<template>
  <!-- Post page -->
  <section>
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
          <Post :siteName="siteName" :postSlug="postSlug" />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <PostGrid
            :siteName="siteName"
            :offset="0"
            :perPage="4"
            :postSlug="postSlug"
          />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <PostList
            :siteName="siteName"
            :offset="4"
            :perPage="10"
            :postSlug="postSlug"
          />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import SiteLogo from '../components/SiteLogo'
import Post from '../components/Post'
import PostGrid from '../components/PostGrid'
import PostList from '../components/PostList'

export default {
  components: {
    AppHeader,
    SiteLogo,
    Post,
    PostGrid,
    PostList
  },
  props: ['postSlug', 'siteName']
}
</script>

<style lang="scss" scoped></style>
