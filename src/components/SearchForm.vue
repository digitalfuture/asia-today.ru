<template>
  <v-text-field
    id="search"
    light
    solo
    clearable
    single-line
    color="grey"
    prepend-inner-icon="mdi-magnify"
    :suffix="suffixString"
    @click:clear="clearSearchResult"
    v-model="searchString"
    @keyup.enter="search"
    @input="clearSearchResult"
  ></v-text-field>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  props: ['siteName', 'offset', 'perPage'],
  data: () => ({
    searchString: ''
  }),
  computed: {
    ...mapState(['sites', 'searchResults']),
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url
    },
    suffixString() {
      return this.searchResults.length ? '' + this.searchResults.length : ''
    }
  },
  watch: {
    searchString() {
      this.updateSearchString(this.searchString)
    },
    offset() {
      this.search()
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
