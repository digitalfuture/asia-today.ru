<template>
  <div class="post-grid-3 py-4">
    <v-row v-if="posts.length" dense>
      <v-col v-for="(post, i) in posts" :key="i" cols="12" md="4">
        <PostCard :post="post" :aspectRatio="aspectRatio" />
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col v-for="i in 3" :key="i" cols="12" md="4">
        <v-skeleton-loader type="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from './PostCard'

export default {
  name: 'post-grid-3',
  components: {
    PostCard
  },
  props: ['posts'],
  computed: {
    aspectRatio() {
      return this.$vuetify.breakpoint.mdAndDown ? 4 / 3 : 10 / 12
    }
  }
}
</script>
<style lang="scss">
.post-grid-5 {
  .post-grid-5__full-height {
    height: 100%;

    .v-skeleton-loader__bone {
      height: 100%;
    }
  }
}
</style>
