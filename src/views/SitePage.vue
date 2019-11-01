<template>
  <!-- Site page -->
  <section>
    <!-- Set title to page -->
    <vue-headful :title="`${siteNameRu} Сегодня`" />

    <v-container class="pa-0">
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10">
          <PostGrid4 :siteName="siteName" :offset="0" :perPage="4" />
          <PostList :siteName="siteName" :offset="4" :perPage="10" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PostGrid4 from '../components/blocks/PostGrid4'
import PostList from '../components/blocks/PostList'

export default {
  name: 'SitePage',
  components: {
    PostGrid4,
    PostList
  },
  props: ['siteName'],
  computed: {
    ...mapState(['sites']),
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    }
  }
}
</script>
