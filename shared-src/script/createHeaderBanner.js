import { sites } from './config.json'

export default function createHeaderBanner() {
  const headerBannerContainer = document.querySelector('.td-header-sp-rec')
  headerBannerContainer.innerHTML =
    '<div class="header-banner-container"></div>'
  const headerBanner = headerBannerContainer.querySelector(
    '.header-banner-container'
  )

  for (const site of sites) {
    if (window.location.href.indexOf(site) !== -1) continue

    headerBanner.innerHTML += `
          <div class="header-banner-item ${site}">
              <a href="https://asia-${site}.ru/" target="_blank">
                  <img src="https://asia-today.ru/shared/img/logo-${site}-round.png">
              </a>
          </div>
      `
  }
}
