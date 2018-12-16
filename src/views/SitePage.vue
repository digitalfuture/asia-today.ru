<template>
  <!-- Site page -->
  <BigBlock4 :siteName="siteName"/>
</template>

<script>
import BigBlock4 from "../components/BigBlock4";

export default {
  props: ["siteName"],
  components: {
    BigBlock4
  }
};
</script>
