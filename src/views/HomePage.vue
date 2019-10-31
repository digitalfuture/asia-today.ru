<template>
  <!-- Home page -->
  <section>
    <!-- Set title to page -->
    <vue-headful title="Азия Сегодня" />

    <v-container class="px-0">
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10">
          <PostGrid4 :offset="0" :perPage="1" />
          <PostList :offset="1" :perPage="3" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PostGrid4 from '../components/blocks/PostGrid4'
import PostList from '../components/blocks/PostList'

export default {
  components: {
    PostGrid4,
    PostList
  }
}
</script>
