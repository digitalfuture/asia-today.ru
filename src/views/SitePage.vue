<template>
  <!-- Site page -->
  <PostGrid :siteName="siteName"/>
</template>

<script>
import PostGrid from "../components/PostGrid";

export default {
  props: ["siteName"],
  components: {
    PostGrid
  }
};
</script>
