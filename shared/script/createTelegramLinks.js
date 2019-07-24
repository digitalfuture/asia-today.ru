import { countries } from './config.json'

export default function createTelegramLinks() {
  const telegramLinks = {
    vietnam: '//t.me/AsiaVietnam',
    nepal: '//t.me/AsiaNepal',
    thailand: 'https://t.me/AsiaThailand',
    philippines: '//t.me/AsiaPhilippines'
  }

  let telegramLink = ''

  for (const country of countries) {
    if (window.location.href.indexOf(country) === -1) continue
    telegramLink = telegramLinks[country]
  }

  const telegramButton = document.createElement('a')
  telegramButton.href = telegramLink
  telegramButton.target = '_blank'
  telegramButton.innerHTML = `
      <button class="telegram-button">
              telegram канал
          <img src="https://asia-today.ru/shared/img/social/telegram.png" class="telegram-icon"/>
      </button>
  `

  document.body.appendChild(telegramButton)
}
