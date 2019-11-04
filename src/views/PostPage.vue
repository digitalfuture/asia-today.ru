<template>
  <div class="post-page d-flex justify-center py-12">
    <v-col cols="12" sm="11" md="9" class="pt-4">
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
export default {
  components: {
    SitePost: import('../components/SitePost'),
    PostList: import('../components/blocks/PostList')
  },
  props: ['postSlug', 'siteName']
}
</script>
