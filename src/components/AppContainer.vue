<template>
  <v-container align-content-center fluid pa-0 class="scroll-up app-container">
    <HeaderSection/>
    <router-view></router-view>
    <FooterSection/>
  </v-container>
</template>

<script>
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
</style>
