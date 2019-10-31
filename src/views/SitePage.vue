<template>
  <!-- Site page -->
  <section>
    <!-- Set title to page -->
    <vue-headful :title="`${siteNameRu} Сегодня`" />

    <v-container class="pa-0">
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10">
          <PostGrid5 :siteName="siteName" :offset="0" :perPage="4" />
          <PostList :siteName="siteName" :offset="4" :perPage="10" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PostGrid5 from '../components/blocks/PostGrid5'
import PostList from '../components/blocks/PostList'

export default {
  components: {
    PostGrid5,
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
