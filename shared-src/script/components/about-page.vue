<template>
  <div class="site-container">
    <a
      v-for="article in articles"
      v-bind:key="article.country"
      :href="article.link"
      class="site-container__link"
      target="_blank"
    >
      <div class="site-container__block site-container__thailand">
        <div class="site-container__image" :style="article.image"></div>
        <div class="site-container__wrapper">
          <div class="site-container__logo-wrapper">
            <div
              class="site-container__logo site-container__logo"
              :style="article.logo"
            ></div>
          </div>
          <div class="site-container__logo-text">
            <span
              v-html="article.ruCountryName"
              class="site-container__logo-text_bold"
            ></span>
            <br />
            <span class="site-container__logo-text_thin">СЕГОДНЯ</span>
          </div>
        </div>
        <div v-html="article.title" class="site-container__info"></div>
      </div>
    </a>
  </div>
</template>
<script>
// Rebuild
export default {
  data: () => ({
    name: 'article-grid',
    sites: [
      {
        name: 'vietnam',
        nameRu: 'Вьетнам',
        zen: '//zen.yandex.ru/vietnam',
        ok: '//ok.ru/asiavietnam',
        telegram: '//t.me/AsiaVietnam'
      },
      {
        name: 'nepal',
        nameRu: 'Непал',
        zen: '//zen.yandex.ru/id/5cd74ea677f0d500b351417f',
        ok: '//ok.ru/group/54140198715589',
        telegram: '//t.me/AsiaNepal'
      },
      {
        name: 'philippines',
        nameRu: 'Филиппины',
        'zen:': '//zen.yandex.ru/id/5cd74bae5a6e0400b34f51c2',
        ok: '//ok.ru/group/54222226456773',
        telegram: '//t.me/AsiaPhilippines'
      },
      {
        name: 'thailand',
        nameRu: 'Таиланд',
        zen: '//zen.yandex.ru/id/5cd74a830ae27d00b35edee3',
        ok: '//ok.ru/group/54222220034245',
        telegram: '//t.me/AsiaThailand'
      },
      {
        name: 'japan',
        nameRu: 'Япония',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'china',
        nameRu: 'Китай',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'cambodia',
        nameRu: 'Камбоджа',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'sri-lanka',
        nameRu: 'Шри-Ланка',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'india',
        nameRu: 'Индия',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'singapore',
        nameRu: 'Сингапур',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'malaysia',
        nameRu: 'Малайзия',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'korea',
        nameRu: 'Корея',
        zen: '',
        ok: '',
        telegram: ''
      },
      {
        name: 'myanmar',
        nameRu: 'Мьянма',
        zen: '',
        ok: '',
        telegram: ''
      }
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

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
</style>
