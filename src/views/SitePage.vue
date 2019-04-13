<template>
  <!-- Site page -->
  <section>
    <!-- Set title to page -->
    <vue-headful :title="`${ rusSiteName } Сегодня`"/>

    <AppHeader :siteName="siteName"/>

    <v-container pa-0 fluid>
      <v-layout>
        <LeftSideBar :siteName="siteName"/>
        <PostGrid :siteName="siteName" offset="0"/>
        <RightSideBar :siteName="siteName"/>
      </v-layout>

      <v-layout>
        <LeftSideBar :siteName="siteName"/>
        <PostList :siteName="siteName" offset="4"/>
        <RightSideBar :siteName="siteName"/>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "../components/AppHeader";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import PostGrid from "../components/PostGrid";
import PostList from "../components/PostList";

export default {
  components: {
    AppHeader,
    PostGrid,
    PostList,
    LeftSideBar,
    RightSideBar
  },
  props: ["siteName"],
  computed: {
    ...mapState(["sites"]),
    rusSiteName() {
      return this.sites.find(site => site.name === this.siteName).rusName;
    }
  }
};
</script>
<style lang="scss" scoped>
.scroll-button {
  bottom: 16px !important;
}
</style>
