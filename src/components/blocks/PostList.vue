<template>
  <!-- Post list -->
  <div class="post-list">
    <v-row v-if="posts.length" dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6  px-4 px-sm-0"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col cols="12" v-for="post in posts" :key="post.name">
        <PostStripe :post="post" :siteName="post.siteName" :compact="compact" />
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col
        v-if="title"
        cols="12 display-1 text--darken-1 font-weight-thin pb-6 px-4 px-sm-0"
        >{{ title }}

        <v-divider class="pb-2"></v-divider>
      </v-col>

      <v-col cols="12" v-for="i in 4" :key="i">
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
    compact: { type: Boolean, default: false },
    title: String
  }
}
</script>
