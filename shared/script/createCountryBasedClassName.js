const countries = ['vietnam', 'nepal', 'philippines', 'thailand']

// Add country-based class
export default function createCountryBasedClassName() {
  for (const country of countries) {
    if (window.location.href.indexOf(country) !== -1) continue
    document.querySelector('body').classList.add(country)
  }
}
