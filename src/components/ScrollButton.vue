<template>
  <v-btn
    absolute
    right
    fab
    dark
    :color="color"
    :scrollDirection="scrollDirection"
    @click="scroll()"
    class="scroll-button"
    :class="scrollDirection"
  >
    <v-icon v-if="scrollDirection === 'up'" dark>keyboard_arrow_up</v-icon>
    <v-icon v-if="scrollDirection === 'down'" dark>keyboard_arrow_down</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ["scrollDirection", "color"],
  data: () => ({}),
  methods: {
    scroll() {
      if (this.scrollDirection === "up") {
        this.$vuetify.goTo(".scroll-up");
      }
      if (this.scrollDirection === "down") {
        this.$vuetify.goTo(".scroll-down");
      }
    }
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style lang="scss" scoped>
</style>
