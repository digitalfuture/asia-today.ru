<template>
  <v-footer class="footer-section scroll-down pa-3" height="100vh" light>
    <!-- Footer -->
    <v-layout justify-space-between xs12 fill-height wrap>
      <v-flex xs12 md4 align-space-between justify-space-between column fill-height>
        <v-layout align-center justify-space-between column fill-height text-xs-center>
          <v-btn to="/" fab class="footer-logo" raised>
            <v-img :src="require('@/assets/logo-today.png')" width="200" height="200"></v-img>
          </v-btn>

          <h1 xs12 class="display-1 footer-title">
            <span class="font-weight-medium">АЗИЯ</span>
            <br>
            <span class="font-weight-light">СЕГОДНЯ</span>
          </h1>

          <v-icon class="grey--text text--lighten-1">fiber_manual_record</v-icon>

          <h2 xs12 class="title grey--text text--darken-2">Новости стран
            <br>азиатского региона
          </h2>
          <hr width="80%">

          <p xs12 class="body-2">Все самое интересное и важное в одном месте.
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
    <v-btn absolute bottom right fab dark color="grey" @click="scroll(up)" class="scroll-button">
      <v-icon dark>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    up: ".scroll-up"
  }),
  methods: {
    scroll(target) {
      this.$vuetify.goTo(target);
    }
  }
};
</script>

<style lang="scss">
.footer-section {
  background-image: url("../assets/background-footer.png") !important;
  background-size: contain !important;
  background-position: right top !important;
  background-repeat: no-repeat !important;

  bottom: -100vh;
  min-height: 600px;

  .footer-title {
    border-radius: 25px;
    background: rgba(245, 245, 245, 0.5);
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
