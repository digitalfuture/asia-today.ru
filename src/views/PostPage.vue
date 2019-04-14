<template>
  <!-- Post page -->
  <section>
    <AppHeader :siteName="siteName"/>

    <v-container fluid px-0>
      <v-layout>
        <LeftSideBar :siteName="siteName"/>
        <Post :siteName="siteName" :postSlug="postSlug"/>
        <RightSideBar :siteName="siteName"/>
      </v-layout>

      <v-layout>
        <LeftSideBar :siteName="siteName"/>
        <PostGrid :siteName="siteName" offset="0" :postSlug="postSlug"/>
        <RightSideBar :siteName="siteName"/>
      </v-layout>

      <v-layout>
        <v-flex xs0 md2></v-flex>
        <PostList :siteName="siteName" offset="4" :postSlug="postSlug"/>
        <v-flex xs0 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Post from "../components/Post";
import PostGrid from "../components/PostGrid";
import PostList from "../components/PostList";

export default {
  components: {
    AppHeader,
    LeftSideBar,
    RightSideBar,
    Post,
    PostGrid,
    PostList
  },
  props: ["postSlug", "siteName"]
};
</script>

<style lang="scss" scoped>
</style>
