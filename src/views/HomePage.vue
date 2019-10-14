<template>
  <!-- Home page -->
  <section>
    <!-- Set title to page -->
    <vue-headful title="Азия Сегодня" />

    <v-container pa-0>
      <v-layout class="justify-center">
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <AppHeader xs12 />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <PostGrid5 :offset="0" :perPage="1" />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs0 sm1 md2></v-flex>
        <v-flex xs12 sm10 md8>
          <PostList :offset="1" :perPage="3" />
        </v-flex>
        <v-flex xs0 sm1 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import PostGrid5 from '../components/blocks/PostGrid5'
import PostList from '../components/blocks/PostList'

export default {
  components: {
    AppHeader,
    PostGrid5,
    PostList
  }
}
</script>
