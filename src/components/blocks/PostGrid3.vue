<template>
  <div class="post-grid-3 py-4">
    <v-row v-if="posts.length" dense>
      <v-col
        v-if="title"
        cols="12"
        class="display-1 text--darken-1 font-weight-thin pb-6 px-4 px-sm-0"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col v-for="(post, i) in posts" :key="i" cols="12" md="4">
        <PostCard :post="post" :aspectRatio="10 / 12" compact />
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6 px-4 px-sm-0"
        >{{ title }}

        <v-divider></v-divider>
      </v-col>

      <v-col v-for="i in 3" :key="i" cols="12" md="4">
        <v-skeleton-loader type="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from '../PostCard'

export default {
  name: 'post-grid-3',
  components: {
    PostCard
  },
  props: ['posts', 'title']
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
