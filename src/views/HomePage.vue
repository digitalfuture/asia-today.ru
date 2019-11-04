<template>
  <!-- Home page -->
  <div class="home-page d-flex justify-center py-12">
    <!-- Set title to page -->
    <vue-headful title="Азия сегодня" />

    <v-col cols="12" sm="11" md="9">
      <PostGrid4 :offset="0" :perPage="1" />
      <PostList :offset="1" :perPage="3" />
    </v-col>
  </div>
</template>

<script>
export default {
  components: {
    PostGrid4: import('../components/blocks/PostGrid4'),
    PostList: import('../components/blocks/PostList')
  }
}
</script>
