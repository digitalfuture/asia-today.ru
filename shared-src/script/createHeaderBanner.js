import { countries } from './config.json'

export default function createHeaderBanner() {
  const headerBannerContainer = document.querySelector('.td-header-sp-rec')
  headerBannerContainer.innerHTML =
    '<div class="header-banner-container"></div>'
  const headerBanner = headerBannerContainer.querySelector(
    '.header-banner-container'
  )

  for (const country of countries) {
    if (window.location.href.indexOf(country) !== -1) continue

    headerBanner.innerHTML += `
          <div class="header-banner-item ${country}">
              <a href="https://asia-${country}.ru/" target="_blank">
                  <img src="https://asia-today.ru/shared/img/logo-${country}-round.png">
              </a>
          </div>
      `
  }
}
