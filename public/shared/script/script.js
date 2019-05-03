const countries = ["vietnam", "nepal", "philippines", "thailand"];

// Add country-based class name
for (const country of countries) {
  if (window.location.href.indexOf(country) !== -1) continue;
  document.querySelector("body").classList.add("vietnam");
}

// Header banner
const headerBannerContainer = document.querySelector(".td-header-sp-rec");
headerBannerContainer.innerHTML = '<div class="header-banner-container"></div>';
const headerBanner = headerBannerContainer.querySelector(
  ".header-banner-container"
);

for (const country of countries) {
  if (window.location.href.indexOf(country) !== -1) continue;

  headerBanner.innerHTML += `
        <div class="header-banner-item ${country}">
            <a href="https://asia-${country}.ru/" target="_blank">
                <img src="https://asia-today.ru/shared/img/logo-${country}-round.png">
            </a>
        </div>
    `;
}

// Add social sharing buttons
const socialSharingButtonsContainer = document.createElement("div");
socialSharingButtonsContainer.id = "socialSharingButtons";
socialSharingButtonsContainer.classList.add("td-pb-padding-side");
socialSharingButtonsContainer.style.marginBottom = "10px";

const socialButtonsScript1 = document.createElement("script");
socialButtonsScript1.src = "//yastatic.net/es5-shims/0.0.2/es5-shims.min.js";

const socialButtonsScript2 = document.createElement("script");
socialButtonsScript2.src = "//yastatic.net/share2/share.js";

const socialButtonsSharingElement = document.createElement("div");
socialButtonsSharingElement.classList.add("ya-share2");
socialButtonsSharingElement.dataset.services =
  "collections,vkontakte,facebook,odnoklassniki,gplus";
socialButtonsSharingElement.dataset.counter = "";

socialSharingButtonsContainer.innerHTML = "<b>Поделиться </b>";
socialSharingButtonsContainer.appendChild(socialButtonsScript1);
socialSharingButtonsContainer.appendChild(socialButtonsScript2);
socialSharingButtonsContainer.appendChild(socialButtonsSharingElement);

if (document.querySelector("article footer")) {
  document
    .querySelector("article footer")
    .insertBefore(
      socialSharingButtonsContainer,
      document.querySelector(".td-post-next-prev")
    );
}

// Add Odnoklassniki icon buttons
const odnoklassnikiLinks = {
  vietnam: "https://ok.ru/asiavietnam",
  nepal: "https://ok.ru/group/54140198715589",
  thailand: "https://ok.ru/group/54222220034245",
  philippines: "https://ok.ru/group/54222226456773"
};

let odnoklassnikiLink = "";

for (const country of countries) {
  if (window.location.href.indexOf(country) === -1) continue;
  odnoklassnikiLink = odnoklassnikiLinks[country];
}

// header
const okButton1 = document.createElement("span");
okButton1.classList.add("td-social-icon-wrap");
okButton1.innerHTML = `<a href='${odnoklassnikiLink}' target='_blank' title='OK'><i></i></a>`;
document.querySelector(".td-header-sp-top-widget").appendChild(okButton1);
// footer
const okButton2 = document.createElement("span");
okButton2.classList.add("td-social-icon-wrap");
okButton2.classList.add("span-ok");
okButton2.innerHTML = `<a href='${odnoklassnikiLink}' target='_blank' title='OK'></a>`;
document.querySelector(".footer-social-wrap").appendChild(okButton2);
// mobile menu
const okButtonMobile = document.createElement("span");
okButtonMobile.classList.add("td-social-icon-wrap");
okButtonMobile.classList.add("span-ok-mobile");
okButtonMobile.innerHTML = `<a href='${odnoklassnikiLink}' target='_blank' title='OK'></a>`;
document
  .querySelector(".td-mobile-container .td-menu-socials")
  .appendChild(okButtonMobile);

// Telegram channel button
const telegramLinks = {
  vietnam: "//t.me/AsiaVietnam",
  nepal: "//t.me/AsiaNepal",
  thailand: "https://t.me/AsiaThailand",
  philippines: "//t.me/AsiaPhilippines"
};

let telegramLink = "";

for (const country of countries) {
  if (window.location.href.indexOf(country) === -1) continue;
  telegramLink = telegramLinks[country];
}

const telegramButton = document.createElement("a");
telegramButton.outerHTML = `
    <a href="${telegramLink}" target="_blank">
        <style>
            .telegram-button {
                line-height: 16px;
                text-align: left;
                position: fixed;
                display: flex;
                align-items: center;
                width: 120px;
                height: 50px;
                left: 0;
                bottom: 23px;
                background-color: #fff;
                color: grey;
                border-radius: 0 25px 25px 0;
            }

            .telegram-icon {
                width: 36px;
                margin-right: 4px;
            }
        </style>
        <button class="telegram-button">
                telegram канал
            <img src="https://asia-today.ru/shared/img/social/telegram.png" class="telegram-icon"/>
        </button>
    </a>
`;

document.body.appendChild(telegramButton);
