export default function moveCountryList() {
  const countryList = document.querySelector('country-list')
  const container = document.querySelector(
    '.td-main-content-wrap .td-container'
  )

  container.appendChild(countryList)
}
