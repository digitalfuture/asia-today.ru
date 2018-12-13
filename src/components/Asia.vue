<template>
  <v-container align-content-center fluid class="main-section" pa-0>
    <v-layout class="full-height hidden-sm-and-down" align-center justify-center fill-height>
      <v-layout>
        <v-flex xs7 md2 py-4>
          <v-img :src="require('@/assets/logo-today-transparent.png')"></v-img>
        </v-flex>

        <v-flex xs12 md8>
          <v-layout wrap>
            <v-flex v-for="(site, i) in sites" :key="i" class="pa-1" xs12 md6>
              <v-card dark :href="site.link" target="_blank" raised ripple>
                <v-img
                  :src="site.img"
                  :lazy-src="require('@/assets/placeholder-537-360.png')"
                  gradient="to top, rgba(0,0,0,.8), transparent 50%"
                ></v-img>

                <div class="site-info">
                  <v-card-title class="site-title">
                    <h3 class="subheading" v-html="site.title"></h3>
                  </v-card-title>

                  <v-card-text class="site-date font-weight-light font-italic">
                    <span class="grey--text">{{ getDate(site.date) }}</span>
                  </v-card-text>
                </div>

                <v-img v-if="site.img" :src="site.logo" class="site-logo"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-spacer></v-spacer>

        <v-btn
          absolute
          bottom
          right
          fab
          dark
          color="gray"
          @click="scroll(down)"
          class="scroll-button hidden-sm-and-down"
        >
          <v-icon dark>keyboard_arrow_down</v-icon>
        </v-btn>
      </v-layout>
    </v-layout>

    <v-layout class="hidden-md-and-up" justify-center wrap pb-1>
      <v-flex xs7 py-4>
        <v-img :src="require('@/assets/logo-today-transparent.png')" ma-5></v-img>
      </v-flex>

      <v-flex xs12>
        <v-layout wrap>
          <v-flex v-for="(site, i) in sites" :key="i" class="pa-1" xs12>
            <v-card dark :href="site.link" target="_blank" raised ripple>
              <v-img
                :src="site.img"
                :lazy-src="require('@/assets/placeholder-537-360.png')"
                gradient="to top, rgba(0,0,0,.8), transparent 50%"
              ></v-img>

              <div class="site-info">
                <v-card-title class="site-title">
                  <h3 class="subheading" v-html="site.title"></h3>
                </v-card-title>

                <v-card-text class="site-date font-weight-light font-italic">
                  <span class="grey--text">{{ getDate(site.date) }}</span>
                </v-card-text>
              </div>

              <v-img v-if="site.img" :src="site.logo" class="site-logo"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-spacer></v-spacer>

      <v-btn
        absolute
        bottom
        right
        fab
        dark
        color="gray"
        @click="scroll(down)"
        class="scroll-button hidden-sm-and-down"
      >
        <v-icon dark>keyboard_arrow_down</v-icon>
      </v-btn>
    </v-layout>

    <v-footer class="footer-section pa-3 full-height" height="100vh" absolute light>
      <v-layout justify-space-between xs12 fill-height wrap>
        <v-flex xs12 md4 align-space-between justify-space-between column fill-height>
          <v-layout align-center justify-space-between column fill-height text-xs-center>
            <v-btn fab class="footer-logo" raised>
              <v-img :src="require('@/assets/logo-today.png')" width="200" height="200"></v-img>
            </v-btn>

            <h1 xs12 class="display-1">
              <span class="font-weight-medium">АЗИЯ</span>
              <br>
              <span class="font-weight-light">СЕГОДНЯ</span>
            </h1>

            <v-icon>fiber_manual_record</v-icon>
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

            <div class="caption">&copy; {{ new Date().getFullYear() }} ASIA TODAY</div>
          </v-layout>
        </v-flex>

        <v-flex xs0 md4></v-flex>

        <v-flex xs0 md4></v-flex>
      </v-layout>
      <v-btn absolute bottom right fab dark color="grey" @click="scroll(up)" class="scroll-button">
        <v-icon dark>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DateTime } from "luxon";

export default {
  data: () => ({
    up: ".main-section",
    down: ".footer-section"
  }),
  computed: {
    ...mapState(["sites"])
  },
  methods: {
    ...mapActions(["getData"]),
    getDate(date) {
      if (!date) return "";
      return DateTime.fromISO(date, { locale: "ru" }).toLocaleString(
        DateTime.DATE_FULL
      );
    },
    scroll(target) {
      this.$vuetify.goTo(target);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif:400i&subset=cyrillic,vietnamese");

.site-logo {
  position: absolute;
  left: 16px;
  top: 16px;
  width: 100px;
}

.site-info {
  position: absolute;
  bottom: 0;
  width: 100%;

  .site-title {
    padding-bottom: 5px;
  }

  .site-date {
    font-family: "Noto Serif", serif;
    padding: 10px 16px;
  }
}

.footer-section {
  bottom: -100vh;

  .footer-logo {
    width: 200px;
    height: 200px;
  }

  .address,
  .address a {
    text-decoration: none;
    font-family: "Noto Serif", serif;
  }
}

.scroll-button {
  bottom: 2% !important;
}

.full-height {
  height: 100vh;
}
</style>
