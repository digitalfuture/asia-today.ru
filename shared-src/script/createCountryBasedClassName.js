import { sites } from './config.json'

// Add country-based class
export default function createCountryBasedClassName() {
  for (const site of sites) {
    if (window.location.href.indexOf(site.url) === -1) continue
    document.querySelector('body').classList.add(site.name)
  }
}
