<template>
  <v-container align-content-center fluid pa-0 class="scroll-up app-container">
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
  </v-container>
</template>

<script>
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data: () => ({
    //
  })
};
</script>