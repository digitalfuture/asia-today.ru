<template>
  <!-- Post list -->
  <section class="post-list">
    <!-- Post list -->
    <v-row v-if="posts.length" dense>
      <v-col v-for="(post, i) in posts" :key="i" cols="12">
        <PostStripe :post="post" :siteName="post.siteName" />
      </v-col>
    </v-row>

    <!-- Skeleton list -->
    <v-row v-if="!posts.length" dense>
      <v-col v-for="i in 4" :key="i" cols="12">
        <v-skeleton-loader
          tile
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <!-- Load more button -->
    <v-row justify="center">
      <v-btn @click="loadMore" fab>
        <v-icon x-large>mdi-chevron-down</v-icon>
      </v-btn>
    </v-row>
  </section>
</template>

<script>
import PostStripe from './PostStripe'

export default {
  components: {
    PostStripe
  },
  props: ['posts', 'loadMore']
}
</script>
