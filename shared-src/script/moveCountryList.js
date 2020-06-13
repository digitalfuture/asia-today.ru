export default function moveCountryList() {
  const countryList = document.querySelector('country-list')
  const footerCOntainer = document.querySelector(
    '.td-footer-container.td-container'
  )
  const parentNode = footerCOntainer.parentNode

  parentNode.insertBefore(countryList, footerCOntainer)
}
