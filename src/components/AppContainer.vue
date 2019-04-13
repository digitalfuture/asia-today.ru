<template>
  <v-container align-content-center fluid pa-0 class="app-container">
    <v-content>
      <router-view></router-view>
    </v-content>
    <AppFooter/>
  </v-container>
</template>

<script>
import AppFooter from "./AppFooter";

export default {
  components: {
    AppFooter
  }
};
</script>
