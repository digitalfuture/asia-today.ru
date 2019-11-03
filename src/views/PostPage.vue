<template>
  <div class="post-page d-flex justify-center py-12">
    <v-col cols="12" sm="11" md="9">
      <SitePost :siteName="siteName" :postSlug="postSlug" class="mb-4" />

      <PostList
        :siteName="siteName"
        :offset="4"
        :perPage="10"
        :postSlug="postSlug"
      />
    </v-col>
  </div>
</template>

<script>
import SitePost from '../components/SitePost'
import PostList from '../components/blocks/PostList'

export default {
  components: {
    SitePost,
    PostList
  },
  props: ['postSlug', 'siteName']
}
</script>
