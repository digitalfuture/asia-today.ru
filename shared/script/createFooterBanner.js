import countries from './countries'

export default function createFooterBanner() {
  fetch('./header.html')
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector('header').innerHTML = data

      for (let country of countries) {
        console.log(country)

        fetch(
          `https://asia-${country}.ru/wp-json/wp/v2/posts?&per_page=1&_embed`
        )
          .then(response => response.json())
          .then(data => ({
            title: data[0].title.rendered,
            image: data[0]._embedded['wp:featuredmedia'][0].link
          }))
          .then(({ title, image }) => {
            console.log(image)
            document.querySelector(
              `.site-container__${country} .site-container__info`
            ).textContent = title
            document.querySelector(
              `.site-container__${country} .site-container__image`
            ).style.background = `url(${image}) center`
          })
      }
    })
}
