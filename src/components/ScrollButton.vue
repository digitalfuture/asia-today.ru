<template>
  <v-slide-y-reverse-transition>
    <v-btn
      v-show="isScrolled"
      raised
      fixed
      fab
      right
      bottom
      dark
      color="black"
      @click="scrollToTop"
      v-scroll="onScroll"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-slide-y-reverse-transition>
</template>
<script>
export default {
  data: () => ({
    isScrolled: false
  }),
  methods: {
    scrollToTop() {
      this.$vuetify.goTo('.scroll-up')
    },
    onScroll() {
      window.scrollY > 600
        ? (this.isScrolled = true)
        : (this.isScrolled = false)
    }
  }
}
</script>
