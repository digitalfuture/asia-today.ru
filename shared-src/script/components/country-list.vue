<template>
  <section class="country-list">
    <h3 class="country-list__title">НАШИ ПРОЕКТЫ</h3>
    <div class="country-list__container">
      <div
        v-for="(site, i) in sites"
        :key="i"
        class="country-list__country-container"
      >
        <div class="country-list__country-wrapper">
          <a :href="site.url" class="country-list__country-logo">
            <img :src="site.logo" height="50" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    name: 'country-list',
    sites: [
      {
        name: 'vietnam',
        nameRu: 'Вьетнам',
        url: '//asia-vietnam.ru',
        logo: '//asia-today.ru/shared/img/logo-vietnam.png',
        zen: '//zen.yandex.ru/vietnam',
        ok: '//ok.ru/asiavietnam',
        telegram: '//t.me/AsiaVietnam'
      },
      {
        name: 'nepal',
        nameRu: 'Непал',
        url: '//asia-nepal.ru',
        logo: '//asia-today.ru/shared/img/logo-nepal.png',
        zen: '//zen.yandex.ru/id/5cd74ea677f0d500b351417f',
        ok: '//ok.ru/group/54140198715589',
        telegram: '//t.me/AsiaNepal'
      },
      {
        name: 'philippines',
        nameRu: 'Филиппины',
        url: '//asia-philippines.ru',
        logo: '//asia-today.ru/shared/img/logo-philippines.png',
        'zen:': '//zen.yandex.ru/id/5cd74bae5a6e0400b34f51c2',
        ok: '//ok.ru/group/54222226456773',
        telegram: '//t.me/AsiaPhilippines'
      },
      {
        name: 'thailand',
        nameRu: 'Таиланд',
        url: '//asia-thailand.ru',
        logo: '//asia-today.ru/shared/img/logo-thailand.png',
        zen: '//zen.yandex.ru/id/5cd74a830ae27d00b35edee3',
        ok: '//ok.ru/group/54222220034245',
        telegram: '//t.me/AsiaThailand'
      }
      // {
      //   name: 'japan',
      //   nameRu: 'Япония',
      //   url: '//asia-japan.ru',
      //   logo: '//asia-today.ru/shared/img/logo-japan.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'china',
      //   nameRu: 'Китай',
      //   url: '//asia-china.ru',
      //   logo: '//asia-today.ru/shared/img/logo-china.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'cambodia',
      //   nameRu: 'Камбоджа',
      //   url: '//asia-cambodia.ru',
      //   logo: '//asia-today.ru/shared/img/logo-cambodia.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'sri-lanka',
      //   nameRu: 'Шри-Ланка',
      //   url: '//asia-sri-lanka.ru',
      //   logo: '//asia-today.ru/shared/img/logo-sri-lanka.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'india',
      //   nameRu: 'Индия',
      //   url: '//asia-india.ru',
      //   logo: '//asia-today.ru/shared/img/logo-india.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'singapore',
      //   nameRu: 'Сингапур',
      //   url: '//asia-singapore.ru',
      //   logo: '//asia-today.ru/shared/img/logo-singapore.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'malaysia',
      //   nameRu: 'Малайзия',
      //   url: '//asia-malaysia.ru',
      //   logo: '//asia-today.ru/shared/img/logo-malaysia.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'korea',
      //   nameRu: 'Корея',
      //   url: '//asia-korea.ru',
      //   logo: '//asia-today.ru/shared/img/logo-korea.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // },
      // {
      //   name: 'myanmar',
      //   nameRu: 'Мьянма',
      //   url: '//asia-myanmar.ru',
      //   logo: '//asia-today.ru/shared/img/logo-myanmar.png',
      //   zen: '',
      //   ok: '',
      //   telegram: ''
      // }
    ]
  }),
  computed: {},
  methods: {
    //
  },
  mounted() {
    //
  }
}
</script>

<style scoped>
@import url('//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');

.country-list {
  padding: 12px;
  font-family: Roboto;
  font-weight: bold;
  font-size: xx-large;
}

.country-list__title {
  text-align: center;
}

.country-list__container {
  display: flex;
  flex-wrap: wrap;
}

.country-list__country-container {
  padding: 8px;
  display: flex;
  justify-content: start;
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
