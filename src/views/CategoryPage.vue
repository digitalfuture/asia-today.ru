<template>
  <!-- Site page -->
  <section class="category-page">
    <div class="d-flex justify-center py-12">
      <!-- Set title to page -->
      <vue-headful
        :title="
          `${
            category ? 'Категория: ' + category.name.toUpperCase() + ' -' : ''
          } ${siteNameRu} Сегодня`
        "
      />

      <v-col cols="12" sm="11" md="9">
        <v-chip v-if="category" dark disabled class="my-12 mr-1"
          >Категория</v-chip
        >
        <v-chip v-if="category" dark class="my-12">{{
          category.name.toUpperCase()
        }}</v-chip>
        <div v-else class="d-flex">
          <v-skeleton-loader class="my-12 mr-1" type="chip"></v-skeleton-loader>
          <v-skeleton-loader class="my-12" type="chip"></v-skeleton-loader>
        </div>

        <PostList
          :siteName="siteName"
          :offset="0"
          :perPage="10"
          :categoryId="categoryId"
        />
      </v-col>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import PostList from '../components/blocks/PostList'

export default {
  name: 'CategoryPage',
  data() {
    return {
      category: null
    }
  },
  components: {
    PostList
  },
  props: ['categoryId', 'categoryName', 'siteName'],
  computed: {
    ...mapState(['sites']),
    ...mapGetters(['getSiteUrl']),
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  },
  methods: {
    ...mapActions(['getCategoryInfo'])
  },
  mounted() {
    this.getCategoryInfo({
      siteUrl: this.getSiteUrl(this.siteName),
      categoryId: this.categoryId
    }).then(category => (this.category = category))
  }
}
</script>
