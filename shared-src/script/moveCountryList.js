export default function moveCountryList() {
  const countryList = document.querySelector('country-list')

  if (document.querySelector('.td-main-content-wrap .td-container')) {
    const container = document.querySelector(
      '.td-main-content-wrap .td-container'
    )

    container.appendChild(countryList)
  } else {
    const container = document.querySelector(
      '.td-container.td-post-template-default'
    )

    container.appendChild(countryList)
  }
}
