import { countries } from './config.json'

export default function createOdnoklassnikiButtons() {
  let okLink = ''

  for (const country of countries) {
    if (window.location.href.indexOf(country.name) === -1) continue
    okLink = country.ok
  }

  // header
  const okButton1 = document.createElement('span')
  okButton1.classList.add('td-social-icon-wrap')
  okButton1.innerHTML = `<a href='${okLink}' target='_blank' title='OK'><i></i></a>`
  document.querySelector('.td-header-sp-top-widget').appendChild(okButton1)
  // footer
  const okButton2 = document.createElement('span')
  okButton2.classList.add('td-social-icon-wrap')
  okButton2.classList.add('span-ok')
  okButton2.innerHTML = `<a href='${okLink}' target='_blank' title='OK'></a>`
  document.querySelector('.footer-social-wrap').appendChild(okButton2)
  // mobile menu
  const okButtonMobile = document.createElement('span')
  okButtonMobile.classList.add('td-social-icon-wrap')
  okButtonMobile.classList.add('span-ok-mobile')
  okButtonMobile.innerHTML = `<a href='${okLink}' target='_blank' title='OK'></a>`
  document
    .querySelector('.td-mobile-container .td-menu-socials')
    .appendChild(okButtonMobile)
}
