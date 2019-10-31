<template>
  <section>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="10">
        <Post :siteName="siteName" :postSlug="postSlug" class="mb-4" />

        <PostGrid5
          :siteName="siteName"
          :offset="0"
          :perPage="4"
          :postSlug="postSlug"
        />

        <PostList
          :siteName="siteName"
          :offset="4"
          :perPage="10"
          :postSlug="postSlug"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Post from '../components/Post'
import PostGrid5 from '../components/blocks/PostGrid5'
import PostList from '../components/blocks/PostList'

export default {
  components: {
    Post,
    PostGrid5,
    PostList
  },
  props: ['postSlug', 'siteName']
}
</script>
