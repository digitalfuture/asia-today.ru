parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kD6V":[function(require,module,exports) {
"use strict";function e(){var e=document.getElementById("article-footer-banners");document.querySelector("article footer")&&document.querySelector("article footer").insertBefore(e,document.querySelector(".td-post-next-prev"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"k2xj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=["vietnam","nepal","philippines","thailand"];function t(){for(var t=0,a=e;t<a.length;t++){var i=a[t];-1===window.location.href.indexOf(i)&&document.querySelector("body").classList.add("vietnam")}}
},{}],"BrLT":[function(require,module,exports) {
module.exports={countries:["vietnam","nepal","philippines","thailand"]};
},{}],"cFkk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("./config.json"));function t(e){return e&&e.__esModule?e:{default:e}}var a=e.default.countries;function r(){var e={vietnam:"https://ok.ru/asiavietnam",nepal:"https://ok.ru/group/54140198715589",thailand:"https://ok.ru/group/54222220034245",philippines:"https://ok.ru/group/54222226456773"},t="",r=!0,n=!1,o=void 0;try{for(var i,l=a[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var c=i.value;-1!==window.location.href.indexOf(c)&&(t=e[c])}}catch(p){n=!0,o=p}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}var d=document.createElement("span");d.classList.add("td-social-icon-wrap"),d.innerHTML="<a href='".concat(t,"' target='_blank' title='OK'><i></i></a>"),document.querySelector(".td-header-sp-top-widget").appendChild(d);var s=document.createElement("span");s.classList.add("td-social-icon-wrap"),s.classList.add("span-ok"),s.innerHTML="<a href='".concat(t,"' target='_blank' title='OK'></a>"),document.querySelector(".footer-social-wrap").appendChild(s);var u=document.createElement("span");u.classList.add("td-social-icon-wrap"),u.classList.add("span-ok-mobile"),u.innerHTML="<a href='".concat(t,"' target='_blank' title='OK'></a>"),document.querySelector(".td-mobile-container .td-menu-socials").appendChild(u)}
},{"./config.json":"BrLT"}],"iBe8":[function(require,module,exports) {
"use strict";function e(){var e=document.createElement("div");e.id="socialSharingButtons",e.classList.add("td-pb-padding-side"),e.style.marginBottom="10px";var t=document.createElement("script");t.src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js";var s=document.createElement("script");s.src="//yastatic.net/share2/share.js";var a=document.createElement("div");a.classList.add("ya-share2"),a.dataset.services="collections,vkontakte,facebook,odnoklassniki,gplus",a.dataset.counter="",e.innerHTML="<b>Поделиться </b>",e.appendChild(t),e.appendChild(s),e.appendChild(a),document.querySelector("article footer")&&document.querySelector("article footer").insertBefore(e,document.querySelector(".td-post-next-prev"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("./createArticleFooterBanners")),r=u(require("./createCountryBasedClassName")),t=u(require("./createOdnoklassnikiButtons")),a=u(require("./createSocialSharingButtons"));function u(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,a.default)(),(0,t.default)(),(0,e.default)();
},{"./createArticleFooterBanners":"kD6V","./createCountryBasedClassName":"k2xj","./createOdnoklassnikiButtons":"cFkk","./createSocialSharingButtons":"iBe8"}]},{},["Focm"], null)
//# sourceMappingURL=/script.js.map