<template>
  <!-- Home page -->
  <section>
    <!-- Set title to page -->
    <vue-headful title="Азия Сегодня"/>

    <AppHeader/>

    <v-container pa-0 fluid>
      <v-layout>
        <LeftSideBar/>
        <PostGrid :offset="0" :perPage="1"/>
        <RightSideBar/>
      </v-layout>

      <v-layout>
        <v-flex xs0 md2></v-flex>
        <PostList :offset="1" :perPage="1"/>
        <v-flex xs0 md2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import PostGrid from "../components/PostGrid";
import PostList from "../components/PostList";

export default {
  components: {
    AppHeader,
    LeftSideBar,
    RightSideBar,
    PostGrid,
    PostList
  }
};
</script>
