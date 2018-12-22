<template>
  <!-- Site page -->
  <section>
    <vue-headful :title="`${ rusSiteName } Сегодня`"/>
    <PostGrid :siteName="siteName"/>
  </section>
</template>

<script>
import { mapState } from "vuex";

import PostGrid from "../components/PostGrid";

export default {
  props: ["siteName"],
  components: {
    PostGrid
  },
  computed: {
    ...mapState(["sites"]),
    rusSiteName() {
      return this.sites.find(site => site.name === this.siteName).rusName;
    }
  }
};
</script>
