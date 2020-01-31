import { sites } from './config.json'

export default function createFooterBanner() {
  fetch('./header.html')
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector('header').innerHTML = data

      for (let site of sites) {
        // console.log(site)

        fetch(`https://asia-${site}.ru/wp-json/wp/v2/posts?&per_page=1&_embed`)
          .then(response => response.json())
          .then(data => ({
            title: data[0].title.rendered,
            image: data[0]._embedded['wp:featuredmedia'][0].link
          }))
          .then(({ title, image }) => {
            console.log(image)
            document.querySelector(
              `.site-container__${site} .site-container__info`
            ).textContent = title
            document.querySelector(
              `.site-container__${site} .site-container__image`
            ).style.background = `url(${image}) center`
          })
      }
    })
}
