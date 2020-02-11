<template>
  <section>
    <!-- Footer -->
    <!-- All logos block - extra small screen only -->
    <v-col cols="12" class="hidden-sm-and-up py-5">
      <v-row justify="space-around" align="center">
        <SiteLogo
          v-for="(site, i) in sites"
          :key="i"
          hasText
          :siteName="site.name"
          class="ma-2 "
          backgroundColor="grey"
          dark
        />
      </v-row>
    </v-col>

    <v-footer class="app-footer pa-3" height="auto" light>
      <v-row justify="space-between">
        <!-- Asia Today block -->
        <v-col cols="12" sm="6" md="4" class="text-center">
          <v-btn to="/" fab class="app-footer__logo" raised color="black">
            <v-img
              src="/img/logo-today-transparent.png"
              width="200"
              height="200"
              contain
            ></v-img>
          </v-btn>

          <h2 xs12 class="app-footer__title display-1 py-8">
            <span class="font-weight-medium">АЗИЯ</span>
            <br />
            <span class="font-weight-light">СЕГОДНЯ</span>
          </h2>

          <v-icon class="grey--text text--lighten-1 py-3"
            >mdi-checkbox-blank-circle</v-icon
          >

          <h2 class="app-footer__subtitle title grey--text text--darken-2 py-3">
            НОВОСТИ СТРАН
            <br />АЗИАТСКОГО РЕГИОНА
          </h2>

          <v-row justify="center">
            <hr width="10%" class="app-footer__divider" />
          </v-row>

          <p cols="12" class="body-2 pb-5 pt-3">
            Все самое интересное и важное в одном месте. Бизнес. Туризм.
            Происшествия. Полезная информация.
          </p>

          <address class="mb-8 app-footer__address grey--text text--darken-1">
            email:
            <a
              href="mailto:info@asia-today.ru"
              class="grey--text text--darken-4"
              >info@asia-today.ru</a
            >
          </address>

          <div class="caption grey--text text--darken-1">
            &copy; {{ new Date().getFullYear() }} АЗИЯ СЕГОДНЯ
          </div>
        </v-col>

        <!-- All logos block - small screen amd up -->
        <v-col sm="6" md="8" class="hidden-xs-only py-5">
          <v-row align="center" class="fill-height">
            <v-row justify="center">
              <SiteLogo
                v-for="(site, i) in sites"
                :key="i"
                :siteName="site.name"
                class="ma-2"
              />
            </v-row>
          </v-row>
        </v-col>
      </v-row>
      <ScrollButton />
    </v-footer>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import ScrollButton from '../components/ScrollButton'
import SiteLogo from '../components/SiteLogo'

export default {
  components: {
    ScrollButton,
    SiteLogo
  },
  computed: {
    ...mapState(['sites'])
  }
}
</script>
<style lang="scss" scoped>
.app-footer {
  background-image: url('/img/background-footer.png') !important;
  background-size: contain !important;
  background-position: right top !important;
  background-repeat: no-repeat !important;

  min-height: 100vh;

  .app-footer__title {
    border-radius: 25px;
    padding: 12px;
  }

  .app-footer__subtitle {
    font-weight: 400;
  }

  .app-footer__logo {
    width: 200px;
    height: 200px;
  }

  .app-footer__divider {
    border: none;
    background: lightgray;
    height: 2px;
  }

  .app-footer__address,
  .app-footer__address a {
    text-decoration: none;
    font-family: 'Noto Serif', serif;
  }
}
</style>
