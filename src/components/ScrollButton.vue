<template>
  <v-btn absolute right fab dark :color="color" @click="scrollToTop" class="scroll-button">
    <v-icon dark>keyboard_arrow_up</v-icon>
  </v-btn>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["color"],
  data: () => ({}),
  methods: {
    ...mapActions(["scrollToTop"])
  }
};
</script>
