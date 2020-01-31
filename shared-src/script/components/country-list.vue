<template>
  <section class="country-list">
    <div class="country-list__title">НАШИ ПРОЕКТЫ</div>
    <div class="country-list__container">
      <div
        v-for="(country, i) in countries"
        :key="i"
        class="country-list__country-container"
      >
        <div class="country-list__country-wrapper">
          <a :href="country.url" class="country-list__country-logo">
            <img
              :src="`//asia-today.ru/shared/img/logo-${country.name}.png`"
              height="50"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { countries } from '../config.json'

export default {
  data: () => ({
    name: 'country-list'
  }),
  computed: {
    countries() {
      return countries.slice(0, 5)
    }
  },
  methods: {
    //
  },
  mounted() {
    //
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=cyrillic');

.country-list {
  padding-top: 48px;
  padding-bottom: 48px;
}

.country-list__title {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 48px;
  padding-bottom: 48px;
  text-align: center;
}

.country-list__container {
  display: flex;
  flex-wrap: wrap;
}

.country-list__country-container {
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.country-list__country-wrapper {
  width: 250px;
  max-width: 250px;
}

.country-list__country-logo {
  display: block;
}
</style>
