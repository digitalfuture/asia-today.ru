<template>
  <div class="post-grid-4-mix">
    <v-row v-if="posts.length" dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col cols="12" lg="4" class="py-0 py-lg-2">
        <PostCard
          :post="posts[0]"
          :aspectRatio="$vuetify.breakpoint.md ? 16 / 9 : null"
        />
      </v-col>

      <v-col cols="12" lg="8">
        <PostList :posts="posts.slice(1, 4)" compact />
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col cols="12" lg="4" class="py-0 py-lg-2">
        <v-skeleton-loader type="image" class="full-height" />
      </v-col>

      <v-col cols="12" lg="8">
        <v-row dense>
          <v-col v-for="i in 3" :key="i" cols="12">
            <v-skeleton-loader type="image" max-height="150" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostList from './PostList'
import PostCard from '../PostCard'

export default {
  name: 'post-grid-4-mix',
  components: {
    PostList,
    PostCard
  },
  props: ['posts', 'title']
}
</script>
<style lang="scss">
.post-grid-4-mix {
  .full-height {
    height: 100%;

    .v-skeleton-loader__bone {
      height: 100%;
    }
  }
}
</style>
