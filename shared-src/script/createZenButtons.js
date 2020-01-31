import { sites } from './config.json'

export default function createZenButtons() {
  let zenLink = ''

  for (const site of sites) {
    if (window.location.href.indexOf(site.name) === -1) continue
    zenLink = site.zen
  }

  // header
  const zenButton1 = document.createElement('span')
  zenButton1.classList.add('td-social-icon-wrap')
  zenButton1.innerHTML = `<a href='${zenLink}' target='_blank' title='ZEN'><i></i></a>`
  document.querySelector('.td-header-sp-top-widget').appendChild(zenButton1)
  // footer
  const zenButton2 = document.createElement('span')
  zenButton2.classList.add('td-social-icon-wrap')
  zenButton2.classList.add('span-zen')
  zenButton2.innerHTML = `<a href='${zenLink}' target='_blank' title='ZEN'></a>`
  document.querySelector('.footer-social-wrap').appendChild(zenButton2)
  // mobile menu
  const zenButtonMobile = document.createElement('span')
  zenButtonMobile.classList.add('td-social-icon-wrap')
  zenButtonMobile.classList.add('span-zen-mobile')
  zenButtonMobile.innerHTML = `<a href='${zenLink}' target='_blank' title='ZEN'></a>`
  document
    .querySelector('.td-mobile-container .td-menu-socials')
    .appendChild(zenButtonMobile)
}
