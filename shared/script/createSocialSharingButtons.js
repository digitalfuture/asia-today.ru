export default function createSocialSharingButtons() {
  const socialSharingButtonsContainer = document.createElement('div')
  socialSharingButtonsContainer.id = 'socialSharingButtons'
  socialSharingButtonsContainer.classList.add('td-pb-padding-side')
  socialSharingButtonsContainer.style.marginBottom = '10px'

  const socialButtonsScript1 = document.createElement('script')
  socialButtonsScript1.src = '//yastatic.net/es5-shims/0.0.2/es5-shims.min.js'

  const socialButtonsScript2 = document.createElement('script')
  socialButtonsScript2.src = '//yastatic.net/share2/share.js'

  const socialButtonsSharingElement = document.createElement('div')
  socialButtonsSharingElement.classList.add('ya-share2')
  socialButtonsSharingElement.dataset.services =
    'collections,vkontakte,facebook,odnoklassniki,gplus'
  socialButtonsSharingElement.dataset.counter = ''

  socialSharingButtonsContainer.innerHTML = '<b>Поделиться </b>'
  socialSharingButtonsContainer.appendChild(socialButtonsScript1)
  socialSharingButtonsContainer.appendChild(socialButtonsScript2)
  socialSharingButtonsContainer.appendChild(socialButtonsSharingElement)

  if (document.querySelector('article footer')) {
    document
      .querySelector('article footer')
      .insertBefore(
        socialSharingButtonsContainer,
        document.querySelector('.td-post-next-prev')
      )
  }
}
