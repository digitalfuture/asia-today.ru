<template>
  <section id="search">
    <v-text-field
      light
      solo
      clearable
      single-line
      color="grey"
      prepend-inner-icon="mdi-magnify"
      :suffix="suffixString"
      @click:clear="clearSearchResult"
      v-model="text"
      @keyup.enter="search"
      @input="clearSearchResult"
      :placeholder="
        $route.name === 'homePage'
          ? 'Искать по всем странам'
          : 'Искать по стране ' + siteNameRu
      "
    ></v-text-field>

    <!-- Search result -->
    <v-row v-if="searchString" dense>
      <v-col v-for="(post, i) in searchResults" :key="i" cols="12">
        <PostStripe :post="post" :siteName="post.siteName" />
      </v-col>
    </v-row>

    <!-- Search more button -->
    <v-row v-if="searchString && searchResults.length" justify="center">
      <v-btn @click="searchMore" fab text>
        <v-icon color="black" x-large>mdi-chevron-down</v-icon>
      </v-btn>
    </v-row>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import PostStripe from './blocks/PostStripe'

export default {
  components: {
    PostStripe
  },
  props: ['siteName'],
  data: () => ({
    offset: 0,
    perPage: 5
  }),
  computed: {
    ...mapState(['sites', 'searchResults', 'searchString']),
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url
    },
    suffixString() {
      return this.searchResults.length ? '' + this.searchResults.length : ''
    },
    siteNameRu() {
      return this.sites.find(site => site.name === this.siteName).nameRu
    },
    text: {
      get() {
        return this.searchString
      },
      set(value) {
        this.updateSearchString(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'updateSearchString',
      'updateSearchResult',
      'clearSearchResult'
    ]),
    ...mapActions(['searchPosts']),
    search() {
      if (this.siteName !== undefined) {
        this.searchPosts({
          siteUrl: this.siteUrl,
          searchString: this.searchString,
          perPage: this.perPage,
          offset: this.offset
        }).then(data => {
          data = data.map(post => ({
            id: post.id,
            slug: post.slug,
            siteName: this.siteName,
            title: post.title.rendered,
            date: post.date,
            link: post.link,
            excerpt: post.excerpt.rendered,
            thumb:
              post._embedded['wp:featuredmedia'][0].media_details.sizes.full
                .source_url
          }))

          this.updateSearchResult(data)
        })
      } else {
        this.sites.forEach(site => {
          this.searchPosts({
            siteUrl: site.url,
            searchString: this.searchString,
            offset: this.offset,
            perPage: this.perPage
          }).then(data => {
            data = data.map(post => ({
              id: post.id,
              slug: post.slug,
              siteName: site.name,
              title: post.title.rendered,
              date: post.date,
              link: post.link,
              excerpt: post.excerpt.rendered,
              thumb:
                post._embedded['wp:featuredmedia'][0].media_details.sizes.full
                  .source_url
            }))

            this.updateSearchResult(data)
          })
        })
      }
    },
    searchMore() {
      this.offset += this.perPage
      this.search()
    }
  }
}
</script>
<style lang="scss">
.v-text-field__suffix {
  font-style: italic;
  color: grey;
  margin-right: 5px;
}
</style>
