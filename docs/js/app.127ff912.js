(function(t){function a(a){for(var n,i,o=a[0],l=a[1],c=a[2],u=0,p=[];u<o.length;u++)i=o[u],s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,i=1;i<e.length;i++){var l=e[i];0!==s[l]&&(n=!1)}n&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d2181015"}[t]+".js"}function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise(function(a,n){e=s[t]=[a,n]});a.push(e[2]=n);var r,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),r=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=s[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,e[1](i)}s[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,l.appendChild(c)}return Promise.all(a)},o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/asia-vietnam.ru/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2c5d":function(t,a,e){t.exports=e.p+"img/placeholder-537-360.0a66037b.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var n=e("2b0e"),s=e("bb71");e("da64");n["a"].use(s["a"],{iconfont:"md"});var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{dark:""}},[e("v-content",[e("Asia")],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"main-section",attrs:{"align-content-center":"",fluid:"","pa-0":""}},[n("v-layout",{staticClass:"full-height hidden-sm-and-down",attrs:{"align-center":"","justify-center":"","fill-height":""}},[n("v-layout",[n("v-flex",{attrs:{xs7:"",md2:"","py-4":""}},[n("v-img",{attrs:{src:e("a0c8")}})],1),n("v-flex",{attrs:{xs12:"",md8:""}},[n("v-layout",{attrs:{wrap:""}},t._l(t.sites,function(a,s){return n("v-flex",{key:s,staticClass:"pa-1",attrs:{xs12:"",md6:""}},[n("v-card",{attrs:{dark:"",href:a.link,target:"_blank",raised:"",ripple:""}},[n("v-img",{attrs:{src:a.img,"lazy-src":e("2c5d"),gradient:"to top, rgba(0,0,0,.8), transparent 50%"}}),n("div",{staticClass:"site-info"},[n("v-card-title",{staticClass:"site-title"},[n("h3",{staticClass:"subheading",domProps:{innerHTML:t._s(a.title)}})]),n("v-card-text",{staticClass:"site-date font-weight-light font-italic"},[n("span",{staticClass:"grey--text"},[t._v(t._s(t.getDate(a.date)))])])],1),a.img?n("v-img",{staticClass:"site-logo",attrs:{src:a.logo}}):t._e()],1)],1)}),1)],1),n("v-spacer"),n("v-btn",{staticClass:"scroll-button hidden-sm-and-down",attrs:{absolute:"",bottom:"",right:"",fab:"",dark:"",color:"gray"},on:{click:function(a){t.scroll(t.down)}}},[n("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_down")])],1)],1)],1),n("v-layout",{staticClass:"hidden-md-and-up",attrs:{"justify-center":"",wrap:"","pb-1":""}},[n("v-flex",{attrs:{xs7:"","py-4":""}},[n("v-img",{attrs:{src:e("a0c8"),"ma-5":""}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{wrap:""}},t._l(t.sites,function(a,s){return n("v-flex",{key:s,staticClass:"pa-1",attrs:{xs12:""}},[n("v-card",{attrs:{dark:"",href:a.link,target:"_blank",raised:"",ripple:""}},[n("v-img",{attrs:{src:a.img,"lazy-src":e("2c5d"),gradient:"to top, rgba(0,0,0,.8), transparent 50%"}}),n("div",{staticClass:"site-info"},[n("v-card-title",{staticClass:"site-title"},[n("h3",{staticClass:"subheading",domProps:{innerHTML:t._s(a.title)}})]),n("v-card-text",{staticClass:"site-date font-weight-light font-italic"},[n("span",{staticClass:"grey--text"},[t._v(t._s(t.getDate(a.date)))])])],1),a.img?n("v-img",{staticClass:"site-logo",attrs:{src:a.logo}}):t._e()],1)],1)}),1)],1),n("v-spacer"),n("v-btn",{staticClass:"scroll-button hidden-sm-and-down",attrs:{absolute:"",bottom:"",right:"",fab:"",dark:"",color:"gray"},on:{click:function(a){t.scroll(t.down)}}},[n("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_down")])],1)],1),n("v-footer",{staticClass:"footer-section pa-3 full-height",attrs:{height:"100vh",absolute:"",light:""}},[n("v-layout",{attrs:{"justify-space-between":"",xs12:"","fill-height":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md4:"","align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-space-between":"",column:"","fill-height":"","text-xs-center":""}},[n("v-btn",{staticClass:"footer-logo",attrs:{fab:"",raised:""}},[n("v-img",{attrs:{src:e("9868"),width:"200",height:"200"}})],1),n("h1",{staticClass:"display-1",attrs:{xs12:""}},[n("span",{staticClass:"font-weight-medium"},[t._v("АЗИЯ")]),n("br"),n("span",{staticClass:"font-weight-light"},[t._v("СЕГОДНЯ")])]),n("v-icon",[t._v("fiber_manual_record")]),n("h2",{staticClass:"title",attrs:{xs12:""}},[t._v("Новости стран\n            "),n("br"),t._v("азиатского региона\n          ")]),n("hr",{attrs:{width:"80%"}}),n("p",{staticClass:"body-2",attrs:{xs12:""}},[t._v("Все самое интересное и важное в одном месте.\n            "),n("br"),t._v("Бизнес. Туризм. Происшествия.\n            "),n("br"),t._v("Полезная информация.\n          ")]),n("address",{staticClass:"address",attrs:{xs12:""}},[t._v("\n            Email:\n            "),n("a",{staticClass:"black--text",attrs:{href:"mailto:info@asia-today.ru"}},[t._v("asia-today.ru")])]),n("div",{staticClass:"caption"},[t._v("© "+t._s((new Date).getFullYear())+" ASIA TODAY")])],1)],1),n("v-flex",{attrs:{xs0:"",md4:""}}),n("v-flex",{attrs:{xs0:"",md4:""}})],1),n("v-btn",{staticClass:"scroll-button",attrs:{absolute:"",bottom:"",right:"",fab:"",dark:"",color:"grey"},on:{click:function(a){t.scroll(t.up)}}},[n("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_up")])],1)],1)],1)},l=[],c=e("be94"),u=e("2f62"),d=e("1315"),p={data:function(){return{up:".main-section",down:".footer-section"}},computed:Object(c["a"])({},Object(u["c"])(["sites"])),methods:Object(c["a"])({},Object(u["b"])(["getData"]),{getDate:function(t){return t?d["DateTime"].fromISO(t,{locale:"ru"}).toLocaleString(d["DateTime"].DATE_FULL):""},scroll:function(t){this.$vuetify.goTo(t)}}),mounted:function(){this.getData()}},f=p,v=(e("cbb5"),e("2877")),g=e("6544"),m=e.n(g),h=e("8336"),b=e("b0af"),_=e("99d9"),y=e("12b2"),w=e("a523"),x=e("0e8f"),C=e("553a"),k=e("132d"),j=e("adda"),O=e("a722"),T=e("9910"),V=Object(v["a"])(f,o,l,!1,null,null,null);V.options.__file="Asia.vue";var A=V.exports;m()(V,{VBtn:h["a"],VCard:b["a"],VCardText:_["a"],VCardTitle:y["a"],VContainer:w["a"],VFlex:x["a"],VFooter:C["a"],VIcon:k["a"],VImg:j["a"],VLayout:O["a"],VSpacer:T["a"]});var D={name:"App",components:{Asia:A},data:function(){return{}}},P=D,S=e("7496"),E=e("549c"),L=Object(v["a"])(P,r,i,!1,null,null,null);L.options.__file="App.vue";var M=L.exports;m()(L,{VApp:S["a"],VContent:E["a"]});var $=e("8c4f"),F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Asia")},I=[],z={components:{Asia:A}},H=z,B=Object(v["a"])(H,F,I,!1,null,null,null);B.options.__file="Home.vue";var J=B.exports;n["a"].use($["a"]);var N=new $["a"]({routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),Y=(e("ac6a"),e("b54a"),e("7514"),e("7f7f"),e("bc3a")),q=e.n(Y);n["a"].use(u["a"]);var U=new u["a"].Store({state:{sites:[{name:"Vietnam",title:"",url:"https://asia-vietnam.ru",date:"",img:"",logo:"https://asia-vietnam.ru/wp-content/uploads/2018/11/logo_vietnam-small.png",link:""},{name:"Nepal",title:"",url:"https://asia-nepal.ru",date:"",img:"",logo:"https://asia-nepal.ru/wp-content/uploads/2018/11/logo_nepal_small.png",link:""},{title:"",name:"Thailand",url:"https://asia-thailand.ru",date:"",img:"",logo:"https://asia-thailand.ru/wp-content/uploads/2018/11/logo-thailand-small.png",link:""},{name:"Philippines",title:"",url:"https://asia-philippines.ru",date:"",img:"",logo:"https://asia-philippines.ru/wp-content/uploads/2018/11/logo-philippines-small.png",link:""}]},mutations:{saveData:function(t,a){var e=a.name,n=a.data,s=t.sites.find(function(t){return t.name===e});s.title=n.title.rendered,s.date=n.date,s.img=n._embedded["wp:featuredmedia"][0].media_details.sizes.td_537x360.source_url,s.link=n.link}},actions:{getData:function(t){var a=t.commit,e=t.state;e.sites.forEach(function(t){return q.a.get(t.url+"/wp-json/wp/v2/posts?per_page=1&_embed").then(function(e){return a("saveData",{name:t.name,data:e.data[0]})})})}}});n["a"].config.productionTip=!1,new n["a"]({router:N,store:U,render:function(t){return t(M)}}).$mount("#app")},"83b0":function(t,a,e){},9868:function(t,a,e){t.exports=e.p+"img/logo-today.98aaa29f.png"},a0c8:function(t,a,e){t.exports=e.p+"img/logo-today-transparent.1c34f1c3.png"},cbb5:function(t,a,e){"use strict";var n=e("83b0"),s=e.n(n);s.a}});
//# sourceMappingURL=app.127ff912.js.map