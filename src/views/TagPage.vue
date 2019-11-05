<template>
  <!-- Site page -->
  <section class="tag-page">
    <div class="d-flex justify-center py-12">
      <!-- Set title to page -->
      <vue-headful
        :title="
          `${
            tag ? 'Тег: ' + tag.name.toUpperCase() + ' -' : ''
          } ${siteNameRu} Сегодня`
        "
      />

      <v-col cols="12" sm="11" md="9">
        <v-chip v-if="tag" dark disabled class="my-12 mr-1">Тег</v-chip>
        <v-chip v-if="tag" dark class="my-12">{{
          tag.name.toUpperCase()
        }}</v-chip>
        <div v-else class="d-flex">
          <v-skeleton-loader class="my-12 mr-1" type="chip"></v-skeleton-loader>
          <v-skeleton-loader class="my-12" type="chip"></v-skeleton-loader>
        </div>

        <PostList
          :siteName="siteName"
          :offset="0"
          :perPage="10"
          :tagId="tagId"
        />
      </v-col>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import PostList from '../components/blocks/PostList'

export default {
  name: 'TagPage',
  data() {
    return {
      tag: null
    }
  },
  components: {
    PostList
  },
  props: ['tagId', 'tagName', 'siteName'],
  computed: {
    ...mapState(['sites']),
    ...mapGetters(['getSiteUrl']),
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  },
  methods: {
    ...mapActions(['getTagInfo'])
  },
  mounted() {
    this.getTagInfo({
      siteUrl: this.getSiteUrl(this.siteName),
      tagId: this.tagId
    }).then(tag => (this.tag = tag))
  }
}
</script>
