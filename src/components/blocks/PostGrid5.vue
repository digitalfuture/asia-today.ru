<template>
  <div class="post-grid-5">
    <v-row v-if="posts.length" dense>
      <v-col cols="12" lg="6" class="py-0 py-lg-2">
        <PostCard :post="posts[0]" />
      </v-col>

      <v-col cols="12" lg="6">
        <v-row dense>
          <v-col v-for="(post, i) in posts.slice(1)" :key="i" cols="12" lg="6">
            <PostCard :post="post" :aspectRatio="4 / 3" compact />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col cols="12" lg="6" class="py-0 py-lg-2">
        <v-skeleton-loader class="full-height" type="image" height="100%" />
      </v-col>

      <v-col cols="12" lg="6">
        <v-row dense>
          <v-col v-for="i in 4" :key="i" cols="12" lg="6">
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from './PostCard'

export default {
  name: 'post-grid-5',
  components: {
    PostCard
  },
  props: ['posts']
}
</script>
<style lang="scss">
.post-grid-5 {
  .full-height {
    height: 100%;

    .v-skeleton-loader__bone {
      height: 100%;
    }
  }
}
</style>
