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
            <div class="site-container__logo site-container__logo" :style="article.logo"></div>
          </div>
          <div class="site-container__logo-text">
            <span class="site-container__logo-text--bold">{{article.ruCountryName}}</span>
            <br />
            <span class="site-container__logo-text--thin">СЕГОДНЯ</span>
          </div>
        </div>
        <div class="site-container__info">{{article.title}}</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "article-grid",
    countries: [
      {
        name: "vietnam",
        ruName: "Вьетнам"
      },
      {
        name: "thailand",
        ruName: "Таиланд"
      },
      {
        name: "philippines",
        ruName: "Филиппины"
      },
      {
        name: "nepal",
        ruName: "Непал"
      }
    ],
    articles: [
      // {
      // country: 'vietnam',
      // ruName: 'Вьетнам',
      // title: '',
      // image: ''
      // link: ''
      // logo: ''
      // }
    ]
  }),
  computed: {},
  methods: {
    updateArticles() {
      for (let country of this.countries) {
        fetch(
          `https://asia-${country.name}.ru/wp-json/wp/v2/posts?&per_page=1&_embed`
        )
          .then(response => response.json())
          .then(data => ({
            title: data[0].title.rendered,
            imageUrl: data[0]._embedded["wp:featuredmedia"][0].link
          }))
          .then(({ title, imageUrl }) => {
            const logo = `background-image: url(https://asia-today.ru/shared/img/logo-${country.name}-icon.png)`;
            const link = `https://asia-${country.name}.ru`;
            const image = `background: url(${imageUrl}) center center`;

            this.articles.push({
              country: country.name,
              ruCountryName: country.ruName,
              title,
              image,
              logo,
              link
            });
          });
      }
    }
  },
  mounted() {
    this.updateArticles();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");

.site-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.site-container__link {
  display: block;
  width: 486px;
  max-width: 100%;
}
.site-container__block {
  text-decoration: none;
  text-align: left;
  color: #fff;
  font-family: Roboto, sans-serif;
  line-height: 1.5;
  font-size: 14px;
  height: 200px;
  margin: 6px;
  position: relative;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}
.site-container__wrapper {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.site-container__info {
  position: absolute;
  bottom: 12px;
  left: 12px;
  text-transform: uppercase;
}
.site-container__image {
  position: absolute;
  height: 100%;
  width: 100%;
  filter: brightness(0.45);
}
.site-container__logo-wrapper {
  margin: 6px 0 0 12px;
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
  padding-left: 16px;
  border-left: 4px solid #424242;
  text-transform: uppercase;
}

.site-container__logo-text--bold {
  font-weight: 400;
}
.site-container__logo-text--thin {
  font-weight: 100;
}
</style>
