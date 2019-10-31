import { countries } from './config.json'

// Add country-based class
export default function createCountryBasedClassName() {
  for (const country of countries) {
    if (window.location.href.indexOf(country.name) === -1) continue
    document.querySelector('body').classList.add(country.name)
  }
}
