<template>
  <v-flex class="left-side-bar hidden-sm-and-down" md2 px-2 py-5>
    <!-- Left side bar -->
    <v-layout column align-center fill-height justify-space-between>
      <!-- Rounded site logo -->
      <v-btn :to="'/'" fab class="site-logo-fixed" color="black">
        <v-img :src="require('@/assets/logo-today-transparent.png')" class="logo-image" contain></v-img>
      </v-btn>

      <!-- Large screens and up - fixed text size -->
      <h1 class="hidden-md-and-down headline text-md-center">
        <span class="font-weight-regular text-uppercase">АЗИЯ</span>
        <br>
        <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
      </h1>

      <!-- Middle screens only - responsive text size-->
      <h1 class="hidden-lg-and-up headline text-md-center text-responsive">
        <span class="font-weight-regular text-uppercase">АЗИЯ</span>
        <br>
        <span class="font-weight-thin text-md-center">СЕГОДНЯ</span>
      </h1>

      <!-- Rounded separator -->
      <v-icon class="grey--text text--darken-3">fiber_manual_record</v-icon>

      <!-- Tag line -->
      <h2 class="subheading font-weight-light grey--text text--darken-1 text-md-center">
        НОВОСТИ
        <br>АЗИИ
      </h2>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scope>
.left-side-bar {
  height: calc(100vh - 32px);

  .site-logo-fixed {
    width: 100px;
    height: 100px;

    .logo-image {
      width: 100px;
      height: 100px;
    }
  }

  .text-responsive {
    line-height: 2rem !important;

    span {
      font-size: 2.2vw;
    }
  }

  .subheading {
    line-height: 1;
  }
}
</style>
