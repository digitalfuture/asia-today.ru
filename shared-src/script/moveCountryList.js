export default function moveCountryList() {
  const countryList = document.querySelector('country-list')
  const container = document.querySelector('.td-container .tdc-content-wrap')

  container.appendChild(countryList)
}
