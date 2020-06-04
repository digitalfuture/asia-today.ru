<template>
  <div class="site-container">
    <a
      v-for="site in sites"
      v-bind:key="site.name"
      :href="`//${site.url}`"
      class="site-container__link"
      target="_blank"
      rel="noopener"
    >
      <div class="site-container__block">
        <div class="site-container__wrapper">
          <div class="site-container__logo-wrapper">
            <div
              class="site-container__logo site-container__logo"
              :style="
                `background-image: url(https://asia-today.ru/shared/img/logo-${site.name}-icon.png)`
              "
            ></div>
          </div>
          <div class="site-container__logo-text">
            <span
              v-html="site.nameRu"
              class="site-container__logo-text_bold"
            ></span>
            <br />
            <span class="site-container__logo-text_thin">СЕГОДНЯ</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { sites } from '../config.json'

export default {
  data: () => ({
    name: 'country-list'
  }),
  computed: {
    sites() {
      return sites
        .slice(0, 9)
        .filter(site => window.location.href.indexOf(site.url) === -1)
    }
  }
}
</script>

<style scoped>
.site-container {
  background-color: #222;
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.site-container__link {
  display: block;
  width: 250px;
}
.site-container__block {
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  height: 80px;
  position: relative;
}
.site-container__wrapper {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
  width: 250px;
  padding: 16px;
}
.site-container__logo-wrapper {
  display: flex;
  justify-content: flex-end;
}
.site-container__logo {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  background-color: #000;
  border-color: #000;
  margin: 6px 15px 6px 0px;
  justify-content: center;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
}

.site-container__logo-text {
  text-align: left;
  padding: 4px 16px;
  border-left: 2px solid #424242;
  text-transform: uppercase;
}

.site-container__logo-text_bold {
  font-weight: 400;
}
.site-container__logo-text_thin {
  font-weight: 100;
}
</style>
