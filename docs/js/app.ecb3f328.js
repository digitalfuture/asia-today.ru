(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0cac":function(t,e,r){},"0f40":function(t,e,r){},"363b":function(t){t.exports=JSON.parse('[{"name":"vietnam","nameRu":"Вьетнам","url":"//asia-vietnam.ru","color":"#68D758"},{"name":"nepal","nameRu":"Непал","url":"//asia-nepal.ru","color":"#4DB2EC"},{"name":"thailand","nameRu":"Таиланд","url":"//asia-thailand.ru","color":"#BB86FC"},{"name":"philippines","nameRu":"Филиппины","url":"//asia-philippines.ru","color":"#03DAC6"},{"name":"china","nameRu":"Китай","url":"//asia-china.ru","color":"#FF0000"},{"name":"japan","nameRu":"Япония","url":"//asia-japan.ru","color":"#FFCCCC"},{"name":"korea","nameRu":"Корея","url":"//asia-korea.ru","color":"#FF99FF"},{"name":"sri-lanka","nameRu":"Шри-Ланка","url":"//asia-sri-lanka.ru","color":"#FF6633"},{"name":"india","nameRu":"Индия","url":"//asia-india.ru","color":"#FF9933"},{"name":"cambodia","nameRu":"Камбоджа","url":"//asia-cambodia.ru","color":"#FFFF00"},{"name":"malaysia","nameRu":"Малайзия","url":"//asia-malaysia.ru","color":"#00CCFF"},{"name":"singapore","nameRu":"Сингапур","url":"//asia-singapore.ru","color":"#FF0066"},{"name":"myanmar","nameRu":"Мьянма","url":"//asia-myanmar.ru","color":"#FFCC00"},{"name":"laos","nameRu":"Лаос","url":"//asia-laos.ru","color":"#99CCCC"}]')},"3a5e":function(t,e,r){"use strict";var s=r("865f"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=r("f309");s["a"].use(n["a"]);var a=new n["a"]({icons:{iconfont:"mdi"},theme:{dark:!0}}),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("AppHeader"),r("router-view",{key:t.$route.path}),r("AppFooter")],1)},i=[],c=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),l=r("2f62"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{"hide-on-scroll":"",app:"",id:"header",dark:""}},["/"!==t.$route.path?r("v-btn",{attrs:{to:t.upperLevel,exact:"",fab:"",text:"",width:"48",height:"48"}},[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-arrow-left")])],1):r("v-btn",{attrs:{exact:"",disabled:"",fab:"",text:"",width:"48",height:"48"}}),r("SiteLogo",{staticClass:"ml-12",attrs:{hasText:"",sites:t.sites,siteName:"homePage"===t.$route.name?null:t.$route.params.siteName}}),r("v-btn",{staticClass:"ml-auto",attrs:{exact:"",fab:"",text:"",width:"48",height:"48"},on:{click:function(e){return t.$vuetify.goTo("#search")}}},[r("v-icon",{attrs:{color:"grey"}},[t._v("search")])],1),r("v-progress-linear",{staticClass:"progress-bar",attrs:{active:t.isLoading,indeterminate:"",absolute:"",bottom:"",color:"grey"}})],1)},f=[],p=(r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex site-logo align-center justify-center"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"pl-4 pr-3"},[r("v-btn",{staticClass:"site-logo__logo-wrapper",attrs:{to:t.siteName?"/"+t.siteName:"/",fab:"",color:"black"}},[r("v-img",{staticClass:"site-logo__logo-image",attrs:{src:t.siteName?t.siteLogo:"/img/logo-asia-icon.png",width:"48",height:"48",contain:""}})],1)],1),t.hasText?r("div",{staticClass:"site-logo__logo-text text-left pl-4",attrs:{align:"center"}},[r("div",{staticClass:"font-weight-regular text-uppercase",domProps:{textContent:t._s(t.siteName?t.siteNameRu:"АЗИЯ")}}),r("div",{staticClass:"font-weight-thin"},[t._v("СЕГОДНЯ")])]):t._e()])],1)}),d=[];r("7db0");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={props:{siteName:{type:String,default:null},hasText:{type:Boolean,default:!1}},computed:h({},Object(l["d"])(["sites"]),{siteLogo:function(){return"/shared/img/logo-".concat(this.siteName,"-icon.png")},siteNameRu:function(){var t=this;return this.sites.find((function(e){return e.name===t.siteName})).nameRu}})},b=g,v=(r("5b90"),r("2877")),y=r("6544"),O=r.n(y),P=r("8336"),w=r("adda"),j=r("0fd9"),_=Object(v["a"])(b,p,d,!1,null,"5392b68a",null),S=_.exports;function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}O()(_,{VBtn:P["a"],VImg:w["a"],VRow:j["a"]});var k={components:{SiteLogo:S},computed:C({},Object(l["d"])(["sites","loadingCount"]),{isLoading:function(){return this.loadingCount>0},upperLevel:function(){return"postPage"===this.$route.name?"/".concat(this.$route.params.siteName):"/"}})},N=k,D=(r("7b0e"),r("40dc")),L=r("132d"),E=r("8e36"),R=Object(v["a"])(N,u,f,!1,null,null,null),V=R.exports;O()(R,{VAppBar:D["a"],VBtn:P["a"],VIcon:L["a"],VProgressLinear:E["a"]});var T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{staticClass:"app-footer pa-3",attrs:{height:"auto",light:""}},[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{staticClass:"hidden-sm-and-up py-5",attrs:{cols:"12"}},[r("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.sites,(function(t,e){return r("SiteLogo",{key:e,staticClass:"ma-2",attrs:{siteName:t.name}})})),1)],1),r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-btn",{staticClass:"app-footer__logo",attrs:{to:"/",fab:"",raised:"",color:"black"}},[r("v-img",{attrs:{src:"/img/logo-today-transparent.png",width:"200",height:"200",contain:""}})],1),r("h2",{staticClass:"app-footer__title display-1 py-8",attrs:{xs12:""}},[r("span",{staticClass:"font-weight-medium"},[t._v("АЗИЯ")]),r("br"),r("span",{staticClass:"font-weight-light"},[t._v("СЕГОДНЯ")])]),r("v-icon",{staticClass:"grey--text text--lighten-1 py-3"},[t._v("mdi-checkbox-blank-circle")]),r("h2",{staticClass:"app-footer__subtitle title grey--text text--darken-2 py-3"},[t._v(" НОВОСТИ СТРАН "),r("br"),t._v("АЗИАТСКОГО РЕГИОНА ")]),r("v-row",{attrs:{justify:"center"}},[r("hr",{staticClass:"app-footer__divider",attrs:{width:"10%"}})]),r("p",{staticClass:"body-2 pb-5 pt-3",attrs:{cols:"12"}},[t._v(" Все самое интересное и важное в одном месте. Бизнес. Туризм. Происшествия. Полезная информация. ")]),r("address",{staticClass:"mb-8 app-footer__address grey--text text--darken-1"},[t._v(" email: "),r("a",{staticClass:"grey--text text--darken-4",attrs:{href:"mailto:info@asia-today.ru"}},[t._v("info@asia-today.ru")])]),r("div",{staticClass:"caption grey--text text--darken-1"},[t._v(" © "+t._s((new Date).getFullYear())+" АЗИЯ СЕГОДНЯ ")])],1),r("v-col",{staticClass:"hidden-xs-only py-5",attrs:{sm:"6",md:"8"}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center"}},[r("v-row",{attrs:{justify:"center"}},t._l(t.sites,(function(t,e){return r("SiteLogo",{key:e,staticClass:"ma-2",attrs:{siteName:t.name}})})),1)],1)],1)],1),r("ScrollButton")],1)},F=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-slide-y-reverse-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isScrolled,expression:"isScrolled"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{raised:"",fixed:"",fab:"",right:"",bottom:"",dark:"",color:"black"},on:{click:t.scrollToTop}},[r("v-icon",[t._v("mdi-chevron-up")])],1)],1)},M=[],U={data:function(){return{isScrolled:!1}},methods:{scrollToTop:function(){this.$vuetify.goTo("#header")},onScroll:function(){window.scrollY>600?this.isScrolled=!0:this.isScrolled=!1}}},B=U,A=r("0789"),H=r("269a"),I=r.n(H),z=r("f977"),q=Object(v["a"])(B,$,M,!1,null,null,null),G=q.exports;function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}O()(q,{VBtn:P["a"],VIcon:L["a"],VSlideYReverseTransition:A["c"]}),I()(q,{Scroll:z["b"]});var W={components:{ScrollButton:G,SiteLogo:S},computed:J({},Object(l["d"])(["sites"]))},K=W,Q=(r("79a0"),r("62ad")),X=r("553a"),Z=Object(v["a"])(K,T,F,!1,null,"48968a32",null),tt=Z.exports;function et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function rt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?et(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):et(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}O()(Z,{VBtn:P["a"],VCol:Q["a"],VFooter:X["a"],VIcon:L["a"],VImg:w["a"],VRow:j["a"]});var st={name:"App",components:{AppHeader:V,AppFooter:tt},methods:rt({},Object(l["c"])(["clearSearchString","clearSearchResult"])),watch:{$route:function(){this.clearSearchString(),this.clearSearchResult()}}},nt=st,at=r("7496"),ot=Object(v["a"])(nt,o,i,!1,null,null,null),it=ot.exports;O()(ot,{VApp:at["a"]});var ct=r("8c4f"),lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page d-flex justify-center py-12"},[r("vue-headful",{attrs:{title:"Азия Сегодня"}}),r("v-col",{attrs:{cols:"12",sm:"11",md:"9"}},[r("PostGrid4",{attrs:{offset:0,perPage:1}}),r("PostList",{attrs:{offset:1,perPage:3}})],1)],1)},ut=[],ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"post-grid-4 py-4",attrs:{fluid:""}},[t.sortedPosts.length?r("v-row",{staticClass:"post-grid",attrs:{dense:""}},t._l(t.sortedPosts,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",md:"6"}},[r("PostCard",{attrs:{post:t}})],1)})),1):r("v-row",{staticClass:"post-grid",attrs:{dense:""}},t._l(4,(function(t){return r("v-col",{key:t,attrs:{cols:"12",md:"6"}},[r("v-skeleton-loader",{attrs:{type:"card"}})],1)})),1)],1)},pt=[],dt=(r("4e82"),r("0d03"),r("9911"),r("284c")),mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"post-card grey",attrs:{to:"/"+t.post.siteName+"/"+t.post.slug,raised:"",ripple:"",dark:""},nativeOn:{click:function(e){return t.rememberCurrentPost(e)}}},[r("v-img",{staticClass:"align-end",attrs:{src:t.post.thumb,"lazy-src":"/img/placeholder.jpg",gradient:"to top, rgba(0,0,0,.8), transparent 100%","aspect-ratio":16/9}},[r("v-container",[r("v-btn",{staticClass:"post-card__color-point ma-0",style:"background-color: "+t.getSiteColor(t.post.siteName),attrs:{fab:"",raised:""}}),r("v-row",{staticClass:"px-4"},[r("v-col",[r("v-row",[r("div",{staticClass:"pb-4",domProps:{innerHTML:t._s(t.post.title)}})]),r("v-row",{staticClass:"font-weight-light",attrs:{justify:"space-between"}},[r("span",{staticClass:"font-weight-light grey--text post-card__post-date font-italic"},[t._v(t._s(t.getDate(t.post.date)))]),r("span",{staticClass:"body-1 grey--text"},[t._v(" "+t._s(t.getSiteNameRu(t.post.siteName))+" ")])])],1)],1)],1)],1)],1)},ht=[],gt=r("1315");function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bt(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var yt={props:["post"],computed:vt({},Object(l["d"])(["sites"])),methods:vt({},Object(l["c"])(["rememberPost"]),{getSiteNameRu:function(t){return this.sites.find((function(e){return e.name===t})).nameRu},getSiteColor:function(t){return this.sites.find((function(e){return e.name===t})).color},getSiteLogo:function(t){return this.sites.find((function(e){return e.name===t})).logo},getDate:function(t){return t?gt["DateTime"].fromISO(t,{locale:"ru"}).toLocaleString(gt["DateTime"].DATE_FULL):""},rememberCurrentPost:function(){this.rememberPost(this.post)}})},Ot=yt,Pt=(r("6981"),r("b0af")),wt=r("a523"),jt=Object(v["a"])(Ot,mt,ht,!1,null,"0d6b31b8",null),_t=jt.exports;function St(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function xt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?St(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):St(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}O()(jt,{VBtn:P["a"],VCard:Pt["a"],VCol:Q["a"],VContainer:wt["a"],VImg:w["a"],VRow:j["a"]});var Ct={components:{PostCard:_t},props:["siteName","offset","perPage"],data:function(){return{posts:[]}},computed:xt({},Object(l["d"])(["sites"]),{sortedPosts:function(){var t=Object(dt["a"])(this.posts),e=t.sort((function(t,e){return new Date(e.date)-new Date(t.date)}));return e}}),methods:xt({},Object(l["b"])(["fetchLastPostsEmbed"]),{getSiteUrl:function(t){return this.sites.find((function(e){return e.name===t})).url},savePostData:function(t){var e=t.siteName,r=t.data;this.posts.push({id:r.id,slug:r.slug,siteName:e,title:r.title.rendered,date:r.date,link:r.link,content:r.content.rendered,thumb:r._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})},getPosts:function(){var t=this;"homePage"===this.$route.name?this.sites.forEach((function(e){return t.fetchLastPostsEmbed({siteUrl:e.url,offset:t.offset,perPage:t.perPage}).then((function(r){return t.savePostData({siteName:e.name,data:r[0]})}))})):this.fetchLastPostsEmbed({siteUrl:this.getSiteUrl(this.siteName),offset:this.offset,perPage:this.perPage}).then((function(e){return e.forEach((function(e){return t.savePostData({siteName:t.siteName,data:e})}))}))}}),created:function(){this.getPosts()}},kt=Ct,Nt=r("3129"),Dt=Object(v["a"])(kt,ft,pt,!1,null,null,null),Lt=Dt.exports;O()(Dt,{VCol:Q["a"],VRow:j["a"],VSkeletonLoader:Nt["a"]});var Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"post-list"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("SearchForm",{attrs:{siteName:t.siteName,offset:t.сurrentOffsetSearch,perPage:t.perPage}})],1)],1),t.searchString?r("v-row",{attrs:{dense:""}},t._l(t.searchResults,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12"}},[r("PostStripe",{attrs:{post:t,siteName:t.siteName}})],1)})),1):t._e(),t.searchString&&t.searchResults.length?r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{fab:"",text:""},on:{click:t.searchMore}},[r("v-icon",{attrs:{color:"black","x-large":""}},[t._v("mdi-chevron-down")])],1)],1):t._e(),!t.searchString&&t.filteredPosts.length?r("v-row",{attrs:{dense:""}},t._l(t.filteredPosts,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12"}},[r("PostStripe",{attrs:{post:t,siteName:t.siteName}})],1)})),1):t._e(),t.searchString||t.posts.length?t._e():r("v-row",{attrs:{dense:""}},t._l(4,(function(t){return r("v-col",{key:t,attrs:{cols:"12"}},[r("v-skeleton-loader",{attrs:{type:"list-item-avatar-three-line"}})],1)})),1),t.searchString?t._e():r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{fab:"",text:""},on:{click:t.loadMore}},[r("v-icon",{attrs:{color:"black","x-large":""}},[t._v("mdi-chevron-down")])],1)],1)],1)},Rt=[],Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-text-field",{staticClass:"text--normal",attrs:{id:"search",light:"",solo:"",clearable:"","single-line":"",color:"grey","prepend-inner-icon":"mdi-magnify",suffix:t.suffixString,placeholder:"homePage"===t.$route.name?" ИСКАТЬ ПО ВСЕМ СТРАНАМ":" ИСКАТЬ ТОЛЬКО ПО СТРАНИЦЕ "+t.siteNameRu.toUpperCase()+" СЕГОДНЯ"},on:{"click:clear":t.clearSearchResult,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:t.clearSearchResult},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})},Tt=[];r("d81d"),r("ac1f"),r("841c");function Ft(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function $t(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Ft(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ft(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Mt={props:["siteName","offset","perPage"],data:function(){return{searchString:""}},computed:$t({},Object(l["d"])(["sites","searchResults"]),{siteUrl:function(){var t=this;return this.sites.find((function(e){return e.name===t.siteName})).url},suffixString:function(){return this.searchResults.length?""+this.searchResults.length:""},siteNameRu:function(){var t=this;return this.sites.find((function(e){return e.name===t.siteName})).nameRu}}),watch:{searchString:function(){this.updateSearchString(this.searchString)},offset:function(){this.search()}},methods:$t({},Object(l["c"])(["updateSearchString","updateSearchResult","clearSearchResult"]),{},Object(l["b"])(["searchPosts"]),{search:function(){var t=this;void 0!==this.siteName?this.searchPosts({siteUrl:this.siteUrl,searchString:this.searchString,perPage:this.perPage,offset:this.offset}).then((function(e){e=e.map((function(e){return{id:e.id,slug:e.slug,siteName:t.siteName,title:e.title.rendered,date:e.date,link:e.link,excerpt:e.excerpt.rendered,thumb:e._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}})),t.updateSearchResult(e)})):this.sites.forEach((function(e){t.searchPosts({siteUrl:e.url,searchString:t.searchString,offset:t.offset,perPage:t.perPage}).then((function(r){r=r.map((function(t){return{id:t.id,slug:t.slug,siteName:e.name,title:t.title.rendered,date:t.date,link:t.link,excerpt:t.excerpt.rendered,thumb:t._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}})),t.updateSearchResult(r)}))}))}})},Ut=Mt,Bt=(r("efb7"),r("8654")),At=Object(v["a"])(Ut,Vt,Tt,!1,null,null,null),Ht=At.exports;O()(At,{VTextField:Bt["a"]});var It=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"post-stripe",attrs:{to:"/"+t.post.siteName+"/"+t.post.slug,raised:"",ripple:"",dark:"","max-height":"150"},nativeOn:{click:function(e){return t.rememberCurrentPost(e)}}},[r("div",{staticClass:"d-flex"},[r("v-img",{staticClass:"d-none d-sm-flex post-stripe__post-image",attrs:{src:t.post.thumb,"lazy-src":"/img/placeholder.jpg",height:"150","max-height":"150",width:"200","max-width":"200"}},[r("v-btn",{staticClass:"mx-sm-3 mx-md-4 my-4 my-md-5",style:"background-color: "+t.getSiteColor(t.post.siteName),attrs:{fab:"",raised:"",width:"16",height:"16"}})],1),r("v-btn",{staticClass:"d-flex d-sm-none mx-2 my-3",style:"background-color: "+t.getSiteColor(t.post.siteName),attrs:{fab:"",raised:"",width:"16",height:"16"}}),r("div",{staticClass:"d-flex flex-column flex-grow-1 justify-space-between px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-md-4"},[r("div",{domProps:{innerHTML:t._s(t.post.title)}}),r("div",{staticClass:"d-none d-md-flex d-lg-none flex-grow-1 font-weight-light grey--text body-2 pt-2",domProps:{innerHTML:t._s(t.excerpt.slice(0,100)+"...")}}),r("div",{staticClass:"d-none d-lg-flex flex-grow-1 font-weight-light grey--text body-2 pt-2",domProps:{innerHTML:t._s(t.excerpt.slice(0,150)+"...")}}),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"flex-grow-1 font-weight-light grey--text post-stripe__post-date font-italic"},[t._v(" "+t._s(t.getDate(t.post.date))+" ")]),r("div",{staticClass:"body-1 grey--text"},[t._v(" "+t._s(t.getSiteNameRu(t.post.siteName))+" ")])])])],1)])},zt=[];r("1276");function qt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function Gt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?qt(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):qt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Yt={props:["post"],computed:Gt({},Object(l["d"])(["sites"]),{excerpt:function(){return this.post.excerpt.split("<p>")[1].split("</p>")[0]}}),methods:Gt({},Object(l["c"])(["rememberPost"]),{getSiteNameRu:function(t){return this.sites.find((function(e){return e.name===t})).nameRu},getSiteColor:function(t){return this.sites.find((function(e){return e.name===t})).color},getDate:function(t){return t?gt["DateTime"].fromISO(t,{locale:"ru"}).toLocaleString(gt["DateTime"].DATE_FULL):""},rememberCurrentPost:function(){this.rememberPost(this.post)}})},Jt=Yt,Wt=(r("a3eb"),Object(v["a"])(Jt,It,zt,!1,null,"feeddbb8",null)),Kt=Wt.exports;function Qt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function Xt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Qt(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Qt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}O()(Wt,{VBtn:P["a"],VCard:Pt["a"],VImg:w["a"]});var Zt={components:{SearchForm:Ht,PostStripe:Kt},props:["siteName","offset","perPage"],data:function(){return{currentOffset:this.offset,"сurrentOffsetSearch":0,posts:[]}},watch:{currentOffset:function(){this.getPosts()}},computed:Xt({},Object(l["d"])(["sites","searchString","searchResults"]),{sortedPosts:function(){var t=Object(dt["a"])(this.posts),e=t.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),r=null;return e.filter((function(t){return t.id!==r&&(r=t.id,!0)}))},filteredPosts:function(){var t=this,e=null;return this.posts.filter((function(r){return r.id!==e&&(("postPage"!==t.$route.name||r.slug!==t.slug)&&(e=r.id,!0))}))}}),methods:Xt({},Object(l["b"])(["fetchLastPostsEmbed"]),{getSiteUrl:function(t){return this.sites.find((function(e){return e.name===t})).url},savePostData:function(t){var e=t.siteName,r=t.data;this.posts.push({id:r.id,slug:r.slug,siteName:e,title:r.title.rendered,date:r.date,link:r.link,excerpt:r.excerpt.rendered,thumb:r._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})},getPosts:function(){var t=this;"homePage"===this.$route.name?this.sites.forEach((function(e){return t.fetchLastPostsEmbed({siteUrl:e.url,offset:t.currentOffset,perPage:t.perPage}).then((function(r){return t.savePostData({siteName:e.name,data:r[0]})}))})):this.fetchLastPostsEmbed({siteUrl:this.getSiteUrl(this.siteName),offset:this.currentOffset,perPage:this.perPage}).then((function(e){return e.forEach((function(e){return t.savePostData({siteName:t.siteName,data:e})}))}))},loadMore:function(){this.currentOffset+=this.perPage},searchMore:function(){this.сurrentOffsetSearch+=this.perPage}}),created:function(){this.getPosts()}},te=Zt,ee=Object(v["a"])(te,Et,Rt,!1,null,null,null),re=ee.exports;O()(ee,{VBtn:P["a"],VCol:Q["a"],VIcon:L["a"],VRow:j["a"],VSkeletonLoader:Nt["a"]});var se={components:{PostGrid4:Lt,PostList:re}},ne=se,ae=Object(v["a"])(ne,lt,ut,!1,null,null,null),oe=ae.exports;O()(ae,{VCol:Q["a"]});var ie=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"site-page d-flex justify-center py-12"},[r("vue-headful",{attrs:{title:t.siteNameRu+" Сегодня"}}),r("v-col",{staticClass:"px-0",attrs:{cols:"12",sm:"11",md:"9"}},[r("PostGrid4",{attrs:{siteName:t.siteName,offset:0,perPage:4}}),r("PostList",{attrs:{siteName:t.siteName,offset:4,perPage:10}})],1)],1)},ce=[];function le(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function ue(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?le(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):le(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var fe={name:"SitePage",components:{PostGrid4:Lt,PostList:re},props:["siteName"],computed:ue({},Object(l["d"])(["sites"]),{siteNameRu:function(){var t=this;return this.sites.find((function(e){return e.name===t.siteName})).nameRu}})},pe=fe,de=Object(v["a"])(pe,ie,ce,!1,null,null,null),me=de.exports;O()(de,{VCol:Q["a"]});var he=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-page d-flex justify-center py-12"},[r("v-col",{staticClass:"px-0 pt-4",attrs:{cols:"12",sm:"11",md:"9"}},[r("SitePost",{staticClass:"mb-4",attrs:{siteName:t.siteName,postSlug:t.postSlug}}),r("PostList",{attrs:{siteName:t.siteName,offset:4,perPage:10,postSlug:t.postSlug}})],1)],1)},ge=[],be=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sitePost"},[r("v-row",[r("v-col",{class:t.siteName,attrs:{cols:"12"}},[r("vue-headful",{attrs:{title:t.getTitle(t.title)+" - "+t.siteNameRu+" Сегодня"}}),r("v-card",{directives:[{name:"show",rawName:"v-show",value:t.img,expression:"img"}],staticClass:"pb-2 post__post-content",attrs:{light:""}},[r("v-img",{staticClass:"post__post-content__post-img white--text align-end",attrs:{src:t.img,"lazy-src":"/img/placeholder.jpg",gradient:"to top, rgba(0,0,0,.8), transparent 100%","aspect-ratio":16/9}},[r("v-container",[r("v-row",[r("v-col",{staticClass:"px-4 px-md-8"},[r("h1",{staticClass:"d-inline d-sm-none headline font-weight-light white--text",domProps:{innerHTML:t._s(t.title)}}),r("h1",{staticClass:"d-none d-sm-inline d-md-none display-1 font-weight-light white--text",domProps:{innerHTML:t._s(t.title)}}),r("h1",{staticClass:"d-none d-md-inline display-2 font-weight-light white--text",domProps:{innerHTML:t._s(t.title)}})])],1)],1)],1),r("hr"),r("v-card-text",{staticClass:"px-4 px-md-8"},[r("div",{domProps:{innerHTML:t._s(t.content)}}),r("v-row",{staticClass:"mt-8 mb-5"},[r("v-col",[r("hr")])],1),r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{staticClass:"pb-4",attrs:{cols:"12",sm:"6"}},[r("span",{staticClass:"post__post-content__site-date font-italic font-weight-light grey--text subheading"},[t._v(t._s(t.date))])]),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-row",{staticClass:"d-block d-sm-none",attrs:{justify:"start"}},[r("yandex-share",{attrs:{services:["vkontakte","facebook","twitter","odnoklassniki","tumblr","viber","telegram"],counter:"",description:t.title}})],1),r("v-row",{staticClass:"d-none d-sm-flex",attrs:{justify:"end"}},[r("yandex-share",{attrs:{services:["vkontakte","facebook","twitter","odnoklassniki","tumblr","viber","telegram"],counter:"",description:t.title}})],1)],1)],1)],1)],1),t.img?t._e():r("v-skeleton-loader",{attrs:{type:"image, article"}})],1)],1)],1)},ve=[],ye=(r("e01a"),r("d28b"),r("99af"),r("26e9"),r("d3b7"),r("3ca3"),r("5319"),r("2ca0"),r("ddb0"),r("0098"));function Oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function Pe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Oe(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Oe(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var we={components:{YandexShare:ye["a"]},props:["postSlug","siteName"],data:function(){return{id:"",slug:"",title:"",content:"",date:"",img:"",thumb:""}},computed:Pe({},Object(l["d"])(["sites","currentPost"]),{siteUrl:function(){var t=this;return this.sites.find((function(e){return e.name===t.siteName})).url},siteNameRu:function(){var t=this;return this.sites.find((function(e){return e.name===t.siteName})).nameRu}}),methods:Pe({},Object(l["c"])(["forgetPost"]),{},Object(l["b"])(["fetchPostBySlug","getMedia"]),{getTitle:function(t){var e=document.createElement("div");return e.innerHTML=t,e.innerText},savePostData:function(t){this.id=t.id,this.slug=t.slug,this.title=t.title.rendered,this.content=this.processContent(t.content.rendered),this.date=gt["DateTime"].fromISO(t.date,{locale:"ru"}).toLocaleString(gt["DateTime"].DATE_FULL),this.thumb=t._embedded["wp:featuredmedia"][0].media_details.sizes.td_537x360.source_url,this.img=t._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url},processContent:function(t){return t=this.removeClasses(t),t=this.processLinks(t),t=this.processIframes(t),t=this.processImages(t),t},removeClasses:function(t){var e=document.createElement("div");e.innerHTML=t;var r=e.querySelectorAll("*"),s=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(s=(o=i.next()).done);s=!0){var c=o.value;c.classList=[]}}catch(l){n=!0,a=l}finally{try{s||null==i.return||i.return()}finally{if(n)throw a}}return e.innerHTML},processLinks:function(t){var e=document.createElement("div");e.innerHTML=t;var r=e.querySelectorAll("a");return this.sites.forEach((function(t){var e=!0,s=!1,n=void 0;try{for(var a,o=r[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,c=t.name.split("//").reverse()[0];if(-1!==i.href.search(c)){var l=i.href.split("/").reverse(),u=l[0]?l[0]:l[1];i.href="/".concat(t.name,"/").concat(u),i.target=""}}}catch(f){s=!0,n=f}finally{try{e||null==o.return||o.return()}finally{if(s)throw n}}})),e.innerHTML},processIframes:function(t){var e=document.createElement("div");e.innerHTML=t;var r=e.querySelectorAll("iframe"),s=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(s=(o=i.next()).done);s=!0){var c=o.value;c.parentNode.classList.add("post__post-content__aspect-ratio")}}catch(l){n=!0,a=l}finally{try{s||null==i.return||i.return()}finally{if(n)throw a}}return e.innerHTML},processImages:function(t){var e=document.createElement("div");e.innerHTML=t;var r=e.querySelectorAll("img"),s=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(s=(o=i.next()).done);s=!0){var c=o.value;c.src.startsWith(window.location.origin)&&(c.src=c.src.replace(window.location.origin,this.siteUrl))}}catch(l){n=!0,a=l}finally{try{s||null==i.return||i.return()}finally{if(n)throw a}}return e.innerHTML}}),mounted:function(){var t=this;this.currentPost?this.post=this.currentPost:this.fetchPostBySlug({siteUrl:this.siteUrl,postSlug:this.postSlug}).then((function(e){return t.savePostData(e)}))},beforeDestroy:function(){this.forgetPost()}},je=we,_e=(r("3a5e"),r("99d9")),Se=Object(v["a"])(je,be,ve,!1,null,null,null),xe=Se.exports;O()(Se,{VCard:Pt["a"],VCardText:_e["a"],VCol:Q["a"],VContainer:wt["a"],VImg:w["a"],VRow:j["a"],VSkeletonLoader:Nt["a"]});var Ce={components:{SitePost:xe,PostList:re},props:["postSlug","siteName"]},ke=Ce,Ne=Object(v["a"])(ke,he,ge,!1,null,null,null),De=Ne.exports;O()(Ne,{VCol:Q["a"]}),s["a"].use(ct["a"]);var Le=new ct["a"]({mode:"history",routes:[{path:"/",name:"homePage",component:oe},{path:"/:siteName/:postSlug",name:"postPage",component:De,props:!0},{path:"/:siteName",name:"sitePage",component:me,props:!0}],scrollBehavior:function(){return{x:0,y:0}}}),Ee=(r("fb6a"),r("bc3a")),Re=r.n(Ee),Ve=r("363b");s["a"].use(l["a"]);var Te=new l["a"].Store({state:{sites:Ve.slice(0,4),searchString:"",loadingCount:0,searchResults:[],currentPost:null},mutations:{startLoading:function(t){t.loadingCount++},stopLoading:function(t){t.loadingCount--},updateSearchString:function(t,e){t.searchString=e},updateSearchResult:function(t,e){e.forEach((function(e){return t.searchResults.push(e)}))},clearSearchString:function(t){t.searchString=""},clearSearchResult:function(t){t.searchResults=[]},rememberPost:function(t,e){t.currentPost=e},forgetPost:function(t){t.currentPost=null}},actions:{fetchLastPosts:function(t,e){var r=e.siteUrl,s=e.perPage,n=e.offset;return t.commit("startLoading"),Re.a.get("".concat(r,"/wp-json/wp/v2/posts?offset=").concat(n,"&per_page=").concat(s)).then((function(t){return t.data})).then((function(e){return t.commit("stopLoading"),e}))},fetchLastPostsEmbed:function(t,e){var r=e.siteUrl,s=e.perPage,n=e.offset;return t.commit("startLoading"),Re.a.get("".concat(r,"/wp-json/wp/v2/posts?offset=").concat(n,"&per_page=").concat(s,"&_embed")).then((function(t){return t.data})).then((function(e){return t.commit("stopLoading"),e}))},fetchPostById:function(t,e){var r=e.siteUrl,s=e.postId;return t.commit("startLoading"),Re.a.get(r+"/wp-json/wp/v2/posts/"+s+"?_embed").then((function(t){return t.data})).then((function(e){return t.commit("stopLoading"),e}))},fetchPostBySlug:function(t,e){var r=e.siteUrl,s=e.postSlug;return t.commit("startLoading"),Re.a.get(r+"/wp-json/wp/v2/posts?slug="+s+"&_embed").then((function(t){return t.data[0]})).then((function(e){return t.commit("stopLoading"),e}))},searchPosts:function(t,e){var r=e.siteUrl,s=e.searchString,n=e.offset,a=e.perPage;return t.commit("startLoading"),Re.a.get("".concat(r,"/wp-json/wp/v2/posts?search=").concat(s,"&per_page=").concat(a,"&offset=").concat(n,"&_embed")).then((function(t){return t.data})).then((function(e){return t.commit("stopLoading"),e}))}}}),Fe=r("0284"),$e=r.n(Fe),Me=r("ec02"),Ue=r.n(Me),Be=r("9483");Object(Be["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].use($e.a,{id:"UA-131048533-1",router:Le,debug:{}}),s["a"].component("yandex-share",ye["a"]),s["a"].component("vue-headful",Ue.a),s["a"].config.productionTip=!1,new s["a"]({router:Le,store:Te,vuetify:a,render:function(t){return t(it)}}).$mount("#app")},"5b90":function(t,e,r){"use strict";var s=r("0f40"),n=r.n(s);n.a},"609d":function(t,e,r){},6981:function(t,e,r){"use strict";var s=r("71e8"),n=r.n(s);n.a},"71e8":function(t,e,r){},"79a0":function(t,e,r){"use strict";var s=r("d5a8"),n=r.n(s);n.a},"7b0e":function(t,e,r){"use strict";var s=r("b9ec"),n=r.n(s);n.a},"865f":function(t,e,r){},a3eb:function(t,e,r){"use strict";var s=r("0cac"),n=r.n(s);n.a},b9ec:function(t,e,r){},d5a8:function(t,e,r){},efb7:function(t,e,r){"use strict";var s=r("609d"),n=r.n(s);n.a}});
//# sourceMappingURL=app.ecb3f328.js.map