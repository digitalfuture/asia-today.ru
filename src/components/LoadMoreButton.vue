<template>
  <v-row justify="center">
    <v-btn @click="loadMore" fab>
      <v-icon x-large>mdi-chevron-down</v-icon>
    </v-btn>
  </v-row>
</template>
<script>
export default {
  name: 'load-more-button',
  props: ['loadMore']
}
</script>
