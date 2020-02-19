<template>
  <div class="post-grid-4 py-4">
    <v-row v-if="posts.length" class="post-grid" dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col v-for="(post, i) in posts" :key="i" cols="12" md="6">
        <PostCard :post="post" :aspectRatio="16 / 9" compact />
      </v-col>
    </v-row>

    <v-row v-else class="post-grid-4" dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col v-for="i in 4" :key="i" cols="12" md="6">
        <v-skeleton-loader type="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from '../PostCard'

export default {
  name: 'post-grid-4',
  components: {
    PostCard
  },
  props: ['posts', 'title']
}
</script>
