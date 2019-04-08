<template>
  <v-content>
    <!-- Post page -->
    <v-container class="post scroll-up" fluid px-0>
      <v-layout wrap justify-center>
        <LeftSideBar :siteName="siteName"/>
        <Post :siteName="siteName" :postSlug="postSlug"/>
        <RightSideBar :siteName="siteName"/>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Post from "../components/Post";

export default {
  components: {
    LeftSideBar,
    RightSideBar,
    Post
  },
  props: ["postSlug", "siteName"]
};
</script>

<style lang="scss">
</style>
