<template>
  <section>
    <!-- All logos block - extra small screen only -->
    <v-col cols="12" class="hidden-sm-and-up my-8">
      <v-row justify="space-around" align="center">
        <SiteLogo
          v-for="(site, i) in sites"
          :key="i"
          hasText
          :siteName="site.name"
          class="ma-2 "
          dark
        />
      </v-row>
    </v-col>

    <v-footer class="pa-3 app-footer" height="auto" light>
      <!-- Social links block - small screen and down -->
      <v-row justify="space-between">
        <!-- Asia Today block -->
        <v-col cols="12" sm="6" md="4" class="text-center">
          <v-btn to="/" fab class="app-footer__logo black my-8" raised>
            <v-img
              src="/img/logo-today-transparent.png"
              width="200"
              height="200"
              contain
            ></v-img>
          </v-btn>

          <h2 xs12 class="app-footer__title display-1 my-8 pa-0">
            <span class="font-weight-medium">АЗИЯ</span>
            <br />
            <span class="font-weight-light">СЕГОДНЯ</span>
          </h2>

          <div class="my-8">
            <v-icon class="grey--text text--lighten-1"
              >mdi-checkbox-blank-circle</v-icon
            >
          </div>

          <h2
            class="app-footer__subtitle title grey--text text--darken-2 mt-8 mb-4"
          >
            НОВОСТИ АЗИИ
            <br />
          </h2>

          <v-row justify="center">
            <hr width="10%" class="app-footer__divider my-3" />
          </v-row>

          <p cols="12" class="body-2 pb-5 pt-3">
            Все самое интересное и важное в одном месте. Бизнес. Туризм.
            Происшествия. Полезная информация.
          </p>

          <SocialLinks class="my-8" top />

          <address
            class="mb-8 app-footer__address font-weight-light blue-grey--text text--darken-1"
          >
            email:
            <a
              href="mailto:info@asia-today.ru"
              class="font-weight-light blue-grey--text text--darken-4"
              >info@asia-today.ru</a
            >
          </address>

          <div class="caption grey--text text--darken-1">
            &copy; 2015 - {{ new Date().getFullYear() }} АЗИЯ СЕГОДНЯ
          </div>
        </v-col>

        <!-- All logos block - small screen amd up -->
        <v-col sm="6" md="8" class="hidden-xs-only my-8 px-6">
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
import ScrollButton from './ScrollButton'
import SiteLogo from './SiteLogo'
import SocialLinks from './SocialLinks'

export default {
  components: {
    ScrollButton,
    SiteLogo,
    SocialLinks
  },
  computed: {
    ...mapState(['sites'])
  }
}
</script>
<style lang="scss">
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
