<template>
  <v-footer class="footer-section scroll-down pa-3" height="100vh" light>
    <!-- Footer -->
    <v-layout justify-space-between xs12 fill-height wrap>
      <v-flex xs12 md4 align-space-between justify-space-between column fill-height>
        <v-layout align-center justify-space-between column fill-height text-xs-center>
          <v-btn to="/" fab class="footer-logo" raised pa-2 color="black">
            <v-img
              :src="require('@/assets/logo-today-transparent.png')"
              width="200"
              height="200"
              contain
            ></v-img>
          </v-btn>

          <h1 xs12 class="display-1 footer-title">
            <span class="font-weight-medium">АЗИЯ</span>
            <br>
            <span class="font-weight-light">СЕГОДНЯ</span>
          </h1>

          <v-icon class="grey--text text--lighten-1">fiber_manual_record</v-icon>

          <h2 xs12 class="title grey--text text--darken-2">
            НОВОСТИ СТРАН
            <br>АЗИАТСКОГО РЕГИОНА
          </h2>
          <hr width="80%">

          <p xs12 class="body-2">
            Все самое интересное и важное в одном месте.
            <br>Бизнес. Туризм. Происшествия.
            <br>Полезная информация.
          </p>

          <address xs12 class="address grey--text text--darken-1">
            Email:
            <a
              href="mailto:info@asia-today.ru"
              class="grey--text text--darken-4"
            >info@asia-today.ru</a>
          </address>

          <div
            class="caption grey--text text--darken-1"
          >&copy; {{ new Date().getFullYear() }} ASIA TODAY</div>
        </v-layout>
      </v-flex>

      <v-flex xs0 md4></v-flex>

      <v-flex xs0 md4></v-flex>
    </v-layout>

    <ScrollButton color="grey"/>
  </v-footer>
</template>
<script>
import ScrollButton from "./ScrollButton";

export default {
  components: {
    ScrollButton
  }
};
</script>
<style lang="scss" scoped>
.footer-section {
  background-image: url("../assets/background-footer.png") !important;
  background-size: contain !important;
  background-position: right top !important;
  background-repeat: no-repeat !important;

  min-height: 600px;

  .footer-title {
    border-radius: 25px;
    background: rgba(245, 245, 245, 0.5);
    padding: 12px;
  }

  .footer-logo {
    width: 200px;
    height: 200px;
  }

  .address,
  .address a {
    text-decoration: none;
    font-family: "Noto Serif", serif;
  }

  .scroll-button {
    bottom: 16px !important;
  }
}
</style>
