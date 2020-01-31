<template>
  <section class="site-list">
    <div class="site-list__title">НАШИ ПРОЕКТЫ</div>
    <div class="site-list__container">
      <div
        v-for="(site, i) in sites"
        :key="i"
        class="site-list__site-container"
      >
        <div class="site-list__site-wrapper">
          <a :href="site.url" class="site-list__site-logo">
            <img
              :src="`//asia-today.ru/shared/img/logo-${site.name}.png`"
              height="50"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { sites } from '../config.json'

export default {
  data: () => ({
    name: 'site-list'
  }),
  computed: {
    sites() {
      return sites
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=cyrillic');

.site-list {
  padding-top: 48px;
  padding-bottom: 48px;
}

.site-list__title {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 48px;
  padding-bottom: 48px;
  text-align: center;
}

.site-list__container {
  display: flex;
  flex-wrap: wrap;
}

.site-list__site-container {
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.site-list__site-wrapper {
  width: 250px;
  max-width: 250px;
}

.site-list__site-logo {
  display: block;
}
</style>
