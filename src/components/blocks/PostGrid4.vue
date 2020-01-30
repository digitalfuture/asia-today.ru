<template>
  <section fluid class="post-grid-4 py-4">
    <v-row v-if="posts.length" class="post-grid" dense>
      <v-col v-for="(post, i) in posts" :key="i" cols="12" md="6">
        <PostCard :post="post" />
      </v-col>
    </v-row>

    <v-row v-else class="post-grid" dense>
      <v-col v-for="i in 4" :key="i" cols="12" md="6">
        <v-skeleton-loader tile type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import PostCard from './PostCard'

export default {
  components: {
    PostCard
  },
  props: ['posts']
}
</script>
