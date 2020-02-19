<template>
  <!-- Post list -->
  <div class="post-list">
    <v-row v-if="posts.length" dense>
      <v-col cols="12" v-for="post in posts" :key="post.name">
        <PostStripe :post="post" :siteName="post.siteName" :compact="compact" />
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col v-for="i in 4" :key="i" cols="12">
        <v-skeleton-loader type="image" max-height="150" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostStripe from '../PostStripe'

export default {
  name: 'post-list',
  components: {
    PostStripe
  },
  props: {
    posts: Array,
    compact: { type: Boolean, default: false }
  }
}
</script>
