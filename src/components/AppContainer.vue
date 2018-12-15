<template>
  <v-container align-content-center fluid pa-0 class="scroll-up app-container">
    <router-view></router-view>
    <FooterSection/>
  </v-container>
</template>

<script>
import FooterSection from "./FooterSection";

export default {
  components: {
    FooterSection
  },
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
.app-container {
  //
}
</style>
