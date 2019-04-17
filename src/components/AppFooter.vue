<template>
  <v-footer class="footer-section scroll-down pa-3" height="auto" light>
    <!-- Footer -->
    <v-layout justify-space-between xs12 fill-height wrap>
      <v-flex xs12 sm6 md4 align-space-between justify-space-between column fill-height>
        <!-- All logos block -->
        <v-layout xs12 wrap py-5 class="hidden-sm-and-up">
          <v-flex v-for="(site, i) in sites" :key="i">
            <v-layout justify-center>
              <v-btn :to="'/' + site.name" fab class="site-logo-fixed" color="black">
                <v-img :src="site.logo" class="logo-image" contain></v-img>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>

        <!-- Asia Today block -->
        <v-layout align-center justify-space-between column fill-height text-xs-center xs12>
          <v-flex py-3>
            <v-btn to="/" fab class="footer-logo" raised pa-2 color="black">
              <v-img
                :src="require('@/assets/logo-today-transparent.png')"
                width="200"
                height="200"
                contain
              ></v-img>
            </v-btn>
          </v-flex>

          <v-flex py-3>
            <h1 xs12 class="display-1 footer-title">
              <span class="font-weight-medium">АЗИЯ</span>
              <br>
              <span class="font-weight-light">СЕГОДНЯ</span>
            </h1>
          </v-flex>

          <v-flex py-3>
            <v-icon class="grey--text text--lighten-1">fiber_manual_record</v-icon>
          </v-flex>

          <v-flex py-3>
            <h2 xs12 class="title grey--text text--darken-2">
              НОВОСТИ СТРАН
              <br>АЗИАТСКОГО РЕГИОНА
            </h2>
          </v-flex>

          <hr width="80%">

          <v-flex pb-5 pt-3>
            <p xs12 class="body-2">
              Все самое интересное и важное в одном месте.
              <br>Бизнес. Туризм. Происшествия.
              <br>Полезная информация.
            </p>
          </v-flex>

          <v-flex>
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
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- All logos block -->
      <v-flex xs0 sm6 md4>
        <v-layout wrap class="all-sites-logos hidden-xs-only" align-center fill-height>
          <!-- Rounded site logos -->
          <v-layout wrap>
            <v-flex v-for="(site, i) in sites" :key="i">
              <v-layout justify-center>
                <v-btn :to="'/' + site.name" fab class="site-logo-fixed" color="black">
                  <v-img :src="site.logo" class="logo-image" contain></v-img>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>

      <v-flex xs0 md4></v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sites"])
  }
};
</script>
<style lang="scss" scoped>
.footer-section {
  background-image: url("../assets/background-footer.png") !important;
  background-size: contain !important;
  background-position: right top !important;
  background-repeat: no-repeat !important;

  min-height: 100vh;

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

  .site-logo-fixed {
    width: 100px;
    height: 100px;

    .logo-image {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
