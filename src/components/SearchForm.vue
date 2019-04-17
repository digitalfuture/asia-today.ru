<template>
  <v-flex xs12>
    <v-text-field
      light
      solo
      clearable
      single-line
      color="grey"
      prepend-inner-icon="search"
      :suffix="suffixString"
      @click:clear="clearSearchResults"
      v-model="searchString"
      @keyup.enter="search"
    ></v-text-field>
  </v-flex>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: ["siteName"],
  data: () => ({
    page: 1,
    searchString: ""
  }),
  computed: {
    ...mapState(["sites", "searchResults"]),
    siteUrl() {
      return this.sites.find(site => site.name === this.siteName).url;
    },
    suffixString() {
      return this.searchResults.length ? "" + this.searchResults.length : "";
    }
  },
  watch: {
    searchString() {
      searchString: this.updateSearchString(this.searchString);
    }
  },
  methods: {
    ...mapMutations([
      "updateSearchString",
      "updateSearchResults",
      "clearSearchResults"
    ]),
    ...mapActions(["searchPosts"]),
    search() {
      if (this.siteName !== undefined) {
        this.searchPosts({
          siteUrl: this.siteUrl,
          searchString: this.searchString,
          count: 10,
          page: this.page
        }).then(data => {
          data = data.map(post => ({
            id: post.id,
            slug: post.slug,
            siteName: this.siteName,
            title: post.title.rendered,
            date: post.date,
            link: post.link,
            content: post.content.rendered
          }));

          this.updateSearchResults(data);
        });
      } else {
        this.sites.forEach(site => {
          this.searchPosts({
            siteUrl: site.url,
            searchString: this.searchString,
            count: 10,
            page: this.page
          }).then(data => {
            data = data.map(post => ({
              id: post.id,
              slug: post.slug,
              siteName: site.name,
              title: post.title.rendered,
              date: post.date,
              link: post.link,
              content: post.content.rendered
            }));

            this.updateSearchResults(data);
          });
        });
      }
    }
  }
};
</script>
<style lang="scss">
.v-text-field__suffix {
  font-style: italic;
  color: grey;
  margin-right: 5px;
}
</style>
