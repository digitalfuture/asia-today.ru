<template>
  <section>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="10">
        <SitePost :siteName="siteName" :postSlug="postSlug" class="mb-4" />

        <PostGrid4
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
import SitePost from '../components/SitePost'
import PostGrid4 from '../components/blocks/PostGrid4'
import PostList from '../components/blocks/PostList'

export default {
  components: {
    SitePost,
    PostGrid4,
    PostList
  },
  props: ['postSlug', 'siteName']
}
</script>
