export default function moveCountryList() {
  const countryList = document.querySelector('country-list')
  const footer = document.querySelector('.td-footer-container')

  footer.parentNode.insertBefore(countryList, footer)
}
