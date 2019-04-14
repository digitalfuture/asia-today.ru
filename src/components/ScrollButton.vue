<template>
  <v-btn
    transition="slide-y-reverse-transition"
    v-show="isScrolled"
    raised
    fixed
    right
    fab
    dark
    color="black"
    @click="scrollToTop"
    v-scroll="onScroll"
    class="scroll-button"
  >
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["color"],
  data: () => ({
    isScrolled: false
  }),
  methods: {
    ...mapActions(["scrollToTop"]),
    onScroll() {
      window.scrollY > 600
        ? (this.isScrolled = true)
        : (this.isScrolled = false);
    }
  }
};
</script>
