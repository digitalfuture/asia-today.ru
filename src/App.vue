<template>
  <v-app dark>
    <v-container align-content-center fluid pa-0 class="app-container">
      <v-content>
        <router-view :key="$route.path"></router-view>
      </v-content>
      <AppFooter/>
    </v-container>

    <ScrollButton/>
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter";
import ScrollButton from "./components/ScrollButton";

export default {
  name: "App",
  components: {
    AppFooter,
    ScrollButton
  }
};
</script>

<style lang="scss" scoped>
.scroll-button {
  bottom: 16px !important;
}
</style>
