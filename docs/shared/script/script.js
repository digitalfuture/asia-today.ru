parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kD6V":[function(require,module,exports) {
"use strict";function e(){var e=document.getElementById("article-footer-banners");document.querySelector("article footer")&&document.querySelector("article footer").insertBefore(e,document.querySelector(".td-post-next-prev"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"BrLT":[function(require,module,exports) {
module.exports={sites:[{name:"vietnam",nameRu:"Вьетнам",url:"//asia-vietnam.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"nepal",nameRu:"Непал",url:"//asia-nepal.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"philippines",nameRu:"Филиппины",url:"//asia-philippines.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"thailand",nameRu:"Таиланд",url:"//asia-thailand.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"sri-lanka",nameRu:"Шри-Ланка",url:"//asia-sri-lanka.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"cambodia",nameRu:"Камбоджа",url:"//asia-cambodia.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"china",nameRu:"Китай",url:"//asia-china.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"singapore",nameRu:"Сингапур",url:"//asia-singapore.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"korea",nameRu:"Корея",url:"//asia-korea.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"japan",nameRu:"Япония",url:"//asia-japan.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"india",nameRu:"Таиланд",url:"//asia-india.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"malaysia",nameRu:"Малайзия",url:"//asia-malaysia.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"myanmar",nameRu:"Мьянма",url:"//asia-myanmar.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"},{name:"laos",nameRu:"Лаос",url:"//asia-laos.ru",zen:"//zen.yandex.ru/id/5e2efa291a860800af3bdf46",ok:"//ok.ru/asiatodayru",telegram:"//t.me/AsiaTodayRu"}]};
},{}],"k2xj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=require("./config.json");function r(){var r=!0,t=!1,o=void 0;try{for(var n,a=e.sites[Symbol.iterator]();!(r=(n=a.next()).done);r=!0){var i=n.value;-1!==window.location.href.indexOf(i.url)&&document.querySelector("body").classList.add(i.name)}}catch(l){t=!0,o=l}finally{try{r||null==a.return||a.return()}finally{if(t)throw o}}}
},{"./config.json":"BrLT"}],"cFkk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./config.json");function t(){var t="",a=!0,r=!1,n=void 0;try{for(var o,i=e.sites[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;-1!==window.location.href.indexOf(l.url)&&(t=l.ok)}}catch(u){r=!0,n=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}var c=document.createElement("span");c.classList.add("td-social-icon-wrap"),c.innerHTML="<a href='".concat(t,"' target='_blank' title='OK'><i></i></a>"),document.querySelector(".td-header-sp-top-widget").appendChild(c);var d=document.createElement("span");d.classList.add("td-social-icon-wrap"),d.classList.add("span-ok"),d.innerHTML="<a href='".concat(t,"' target='_blank' title='OK'></a>"),document.querySelector(".footer-social-wrap").appendChild(d);var s=document.createElement("span");s.classList.add("td-social-icon-wrap"),s.classList.add("span-ok-mobile"),s.innerHTML="<a href='".concat(t,"' target='_blank' title='OK'></a>"),document.querySelector(".td-mobile-container .td-menu-socials").appendChild(s)}
},{"./config.json":"BrLT"}],"iBe8":[function(require,module,exports) {
"use strict";function e(){var e=document.createElement("div");e.id="socialSharingButtons",e.classList.add("td-pb-padding-side"),e.style.marginBottom="10px";var t=document.createElement("script");t.src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js";var s=document.createElement("script");s.src="//yastatic.net/share2/share.js";var a=document.createElement("div");a.classList.add("ya-share2"),a.dataset.services="collections,vkontakte,facebook,odnoklassniki,gplus",a.dataset.counter="",e.innerHTML="<b>Поделиться </b>",e.appendChild(t),e.appendChild(s),e.appendChild(a),document.querySelector("article footer")&&document.querySelector("article footer").insertBefore(e,document.querySelector(".td-post-next-prev"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"GNi8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./config.json");function t(){var t="",a=!0,n=!1,r=void 0;try{for(var o,l=e.sites[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;-1!==window.location.href.indexOf(i.url)&&(t=i.zen)}}catch(p){n=!0,r=p}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}var c=document.createElement("span");c.classList.add("td-social-icon-wrap"),c.innerHTML="<a href='".concat(t,"' target='_blank' title='ZEN' rel='noopener'><i></i></a>"),document.querySelector(".td-header-sp-top-widget").appendChild(c);var d=document.createElement("span");d.classList.add("td-social-icon-wrap"),d.classList.add("span-zen"),d.innerHTML="<a href='".concat(t,"' target='_blank' title='ZEN' rel='noopener'></a>"),document.querySelector(".footer-social-wrap").appendChild(d);var s=document.createElement("span");s.classList.add("td-social-icon-wrap"),s.classList.add("span-zen-mobile"),s.innerHTML="<a href='".concat(t,"' target='_blank' title='ZEN' rel='noopener'></a>"),document.querySelector(".td-mobile-container .td-menu-socials").appendChild(s)}
},{"./config.json":"BrLT"}],"f14p":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector("country-list"),t=document.querySelector(".td-footer-container.td-container");t.parentNode.insertBefore(e,t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("./createArticleFooterBanners")),r=n(require("./createCountryBasedClassName")),t=n(require("./createOdnoklassnikiButtons")),u=n(require("./createSocialSharingButtons")),a=n(require("./createZenButtons")),i=n(require("./moveCountryList"));function n(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,u.default)(),(0,t.default)(),(0,e.default)(),(0,a.default)(),(0,i.default)();
},{"./createArticleFooterBanners":"kD6V","./createCountryBasedClassName":"k2xj","./createOdnoklassnikiButtons":"cFkk","./createSocialSharingButtons":"iBe8","./createZenButtons":"GNi8","./moveCountryList":"f14p"}]},{},["Focm"], null)
//# sourceMappingURL=/script.js.map