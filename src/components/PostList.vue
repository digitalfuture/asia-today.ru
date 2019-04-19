<template>
  <!-- Post list -->
  <v-flex xs12 md8 class="post-list" py-4>
    <SearchForm
      :siteName="siteName"
      :offset="searchCurrentOffset"
      :perPage="perPage"
    />

    <v-layout wrap>
      <v-flex v-if="searchString" xs12>
        <v-layout wrap>
          <v-flex v-for="(post, i) in searchResults" :key="i" py-1 xs12>
            <PostStripe :post="post" :siteName="post.siteName" />
          </v-flex>
        </v-layout>

        <v-layout v-if="searchResults.length" xs12 justify-center>
          <v-btn @click="searchMore" fab flat>
            <v-icon color="black" x-large>expand_more</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>

      <v-flex v-else xs12>
        <v-layout xs12>
          <v-layout xs12 wrap>
            <v-flex v-for="(post, i) in filteredPosts" :key="i" py-1 xs12>
              <PostStripe :post="post" :siteName="post.siteName" />
            </v-flex>
          </v-layout>
        </v-layout>

        <v-layout xs12 justify-center>
          <v-btn @click="loadMore" fab flat>
            <v-icon color="black" x-large>expand_more</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from "vuex";

import SearchForm from "./SearchForm";
import PostStripe from "./PostStripe";

export default {
  components: {
    SearchForm,
    PostStripe
  },
  props: ["siteName", "offset", "perPage"],
  data() {
    return {
      currentOffset: this.offset,
      searchCurrentOffset: 0,
      posts: [
        // {
        //   id,
        //   slug,
        //   siteName,
        //   title,
        //   date,
        //   link,
        //   content
        // }
      ]
    };
  },
  watch: {
    currentOffset() {
      this.getPosts();
    }
  },
  computed: {
    ...mapState(["sites", "searchString", "searchResults"]),
    sortedPosts() {
      const posts = [...this.posts];
      const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      let prevPostId = null;

      return sorted.filter(post => {
        if (post.id === prevPostId) {
          return false;
        } else {
          prevPostId = post.id;
          return true;
        }
      });
    },
    filteredPosts() {
      let prevPostId = null;

      return this.posts.filter(post => {
        if (post.id === prevPostId) {
          return false;
        } else {
          prevPostId = post.id;
          return true;
        }
      });
    }
  },
  methods: {
    ...mapActions(["getLastPosts"]),
    getSiteUrl(siteName) {
      return this.sites.find(site => site.name === siteName).url;
    },
    getPosts() {
      if (this.$route.name === "homePage") {
        this.sites.forEach(site =>
          this.getLastPosts({
            siteUrl: site.url,
            page: this.page,
            perPage: this.perPage,
            offset: this.currentOffset
          }).then(posts =>
            posts.ForEach(post =>
              this.savePostData({
                siteName: site.name,
                data: post
              })
            )
          )
        );
      } else {
        this.getLastPosts({
          siteUrl: this.getSiteUrl(this.siteName),
          perPage: this.perPage,
          offset: this.currentOffset
        }).then(posts =>
          posts.forEach(post =>
            this.savePostData({
              siteName: this.siteName,
              data: post
            })
          )
        );
      }
    },
    savePostData({ siteName, data }) {
      this.posts.push({
        id: data.id,
        slug: data.slug,
        siteName: siteName,
        title: data.title.rendered,
        date: data.date,
        link: data.link,
        content: data.content.rendered
      });
    },
    loadMore() {
      this.currentOffset = this.currentOffset + this.perPage;
    },
    searchMore() {
      this.searchCurrentOffset = this.searchCurrentOffset + this.perPage;
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style lang="scss" scoped>
// .post-list {

// }
</style>
