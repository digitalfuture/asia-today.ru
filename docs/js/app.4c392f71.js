(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e07":function(t,e,a){},2155:function(t,e,a){},3629:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=a("bb71");a("da64");s["a"].use(r["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("AppContainer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"scroll-up app-container",attrs:{"align-content-center":"",fluid:"","pa-0":""}},[a("AppHeader"),a("router-view"),a("AppFooter")],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"header-section scroll-up",attrs:{height:"4px",color:"grey"}})},u=[],d={data:function(){return{}},methods:{}},p=d,f=(a("7b0e"),a("2877")),v=a("6544"),m=a.n(v),h=a("71d9"),g=Object(f["a"])(p,c,u,!1,null,null,null);g.options.__file="AppHeader.vue";var x=g.exports;m()(g,{VToolbar:h["a"]});var b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{staticClass:"footer-section scroll-down pa-3",attrs:{height:"100vh",light:""}},[s("v-layout",{attrs:{"justify-space-between":"",xs12:"","fill-height":"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md4:"","align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-space-between":"",column:"","fill-height":"","text-xs-center":""}},[s("v-btn",{staticClass:"footer-logo",attrs:{to:"/",fab:"",raised:""}},[s("v-img",{attrs:{src:a("9868"),width:"200",height:"200"}})],1),s("h1",{staticClass:"display-1 footer-title",attrs:{xs12:""}},[s("span",{staticClass:"font-weight-medium"},[t._v("АЗИЯ")]),s("br"),s("span",{staticClass:"font-weight-light"},[t._v("СЕГОДНЯ")])]),s("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("fiber_manual_record")]),s("h2",{staticClass:"title grey--text text--darken-2",attrs:{xs12:""}},[t._v("Новости стран\n          "),s("br"),t._v("азиатского региона\n        ")]),s("hr",{attrs:{width:"80%"}}),s("p",{staticClass:"body-2",attrs:{xs12:""}},[t._v("Все самое интересное и важное в одном месте.\n          "),s("br"),t._v("Бизнес. Туризм. Происшествия.\n          "),s("br"),t._v("Полезная информация.\n        ")]),s("address",{staticClass:"address grey--text text--darken-1",attrs:{xs12:""}},[t._v("\n          Email:\n          "),s("a",{staticClass:"grey--text text--darken-4",attrs:{href:"mailto:info@asia-today.ru"}},[t._v("info@asia-today.ru")])]),s("div",{staticClass:"caption grey--text text--darken-1"},[t._v("© "+t._s((new Date).getFullYear())+" ASIA TODAY")])],1)],1),s("v-flex",{attrs:{xs0:"",md4:""}}),s("v-flex",{attrs:{xs0:"",md4:""}})],1),s("v-btn",{staticClass:"scroll-button",attrs:{absolute:"",bottom:"",right:"",fab:"",dark:"",color:"grey"},on:{click:function(e){t.scroll(t.up)}}},[s("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_up")])],1)],1)},_=[],y={data:function(){return{up:".scroll-up"}},methods:{scroll:function(t){this.$vuetify.goTo(t)}}},C=y,w=(a("7d7f"),a("8336")),N=a("0e8f"),S=a("553a"),j=a("132d"),k=a("adda"),L=a("a722"),P=Object(f["a"])(C,b,_,!1,null,null,null);P.options.__file="AppFooter.vue";var V=P.exports;m()(P,{VBtn:w["a"],VFlex:N["a"],VFooter:S["a"],VIcon:j["a"],VImg:k["a"],VLayout:L["a"]});var O={components:{AppHeader:x,AppFooter:V},data:function(){return{}}},T=O,A=a("a523"),$=Object(f["a"])(T,o,l,!1,null,null,null);$.options.__file="AppContainer.vue";var E=$.exports;m()($,{VContainer:A["a"]});var B={name:"App",components:{AppContainer:E},data:function(){return{}}},I=B,M=a("7496"),D=Object(f["a"])(I,n,i,!1,null,null,null);D.options.__file="App.vue";var H=D.exports;m()(D,{VApp:M["a"]});var U=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PostGrid")},z=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"scroll-up big-block-4",attrs:{"align-content-center":"",fluid:"","pa-0":""}},[s("v-layout",{staticClass:"full-height hidden-sm-and-down",attrs:{"align-center":"","justify-center":"","fill-height":""}},[s("v-layout",[s("leftSideBar",{attrs:{siteName:t.siteName}}),s("v-flex",{attrs:{md8:""}},[s("v-layout",{attrs:{wrap:""}},t._l(t.posts,function(e,r){return s("v-flex",{key:r,staticClass:"pa-1",attrs:{md6:""}},[s("v-card",{staticClass:"site-card",attrs:{to:"/"+e.siteName+"/"+e.slug,raised:"",ripple:"",dark:""}},[s("v-img",{attrs:{src:e.thumb,"lazy-src":a("90ab"),gradient:"to top, rgba(0,0,0,.8), transparent 50%","aspect-ratio":16/9}}),s("div",{staticClass:"site-info"},[s("v-card-title",{staticClass:"site-title"},[s("h3",{staticClass:"subheading",domProps:{innerHTML:t._s(e.title)}})]),s("v-card-text",{staticClass:"site-date font-weight-light font-italic"},[s("span",{staticClass:"grey--text"},[t._v(t._s(t.getDate(e.date)))])])],1),"sitePage"!==t.$route.name?s("v-btn",{staticClass:"site-logo",attrs:{to:"/"+e.siteName,fab:"",raised:""}},[s("v-img",{attrs:{src:t.getSiteLogo(e.siteName),width:"100",height:"100"}})],1):t._e()],1)],1)}),1)],1),"sitePage"!==t.$route.name?s("v-spacer"):t._e(),"sitePage"===t.$route.name?s("RightSideBar",{attrs:{siteName:t.siteName}}):t._e()],1)],1),s("v-layout",{staticClass:"hidden-md-and-up",attrs:{wrap:"","py-1":""}},[s("leftSideBar",{attrs:{xs12:"",siteName:t.siteName}}),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{wrap:""}},t._l(t.posts,function(e,r){return s("v-flex",{key:r,staticClass:"pb-2",attrs:{xs12:""}},[s("v-card",{staticClass:"site-card",attrs:{to:"/"+e.siteName+"/"+e.slug,raised:"",ripple:"",dark:""}},[s("v-img",{attrs:{src:e.thumb,"lazy-src":a("90ab"),gradient:"to top, rgba(0,0,0,.8), transparent 50%"}}),s("div",{staticClass:"site-info"},[s("v-card-title",{staticClass:"site-title"},[s("h3",{staticClass:"subheading",domProps:{innerHTML:t._s(e.title)}})]),s("v-card-text",{staticClass:"site-date font-weight-light font-italic"},[s("span",{staticClass:"grey--text"},[t._v(t._s(t.getDate(e.date)))])])],1),"sitePage"!==t.$route.name?s("v-btn",{staticClass:"site-logo",attrs:{to:"/"+e.siteName,fab:"",raised:""}},[s("v-img",{attrs:{src:t.getSiteLogo(e.siteName),width:"100",height:"100"}})],1):t._e()],1)],1)}),1)],1)],1),s("v-btn",{staticClass:"scroll-button hidden-sm-and-down",attrs:{absolute:"",bottom:"",right:"",fab:"",dark:"",color:"gray"},on:{click:function(e){t.scroll(t.down)}}},[s("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_down")])],1)],1)},G=[],q=(a("ac6a"),a("b54a"),a("7f7f"),a("7514"),a("be94")),Y=a("2f62"),J=a("1315"),W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",{staticClass:"left-side-bar",attrs:{xs12:"",md2:"","py-4":"","px-2":""}},[s("v-layout",{staticClass:"hidden-sm-and-down",attrs:{"justify-center":"","align-center":"",column:""}},[s("v-flex",{attrs:{md2:"","py-4":"","px-2":""}},[s("v-layout",{attrs:{"justify-center":"","align-center":"",column:""}},[s("v-flex",{attrs:{md12:""}},[s("v-layout",{attrs:{"justify-center":""}},[s("router-link",{staticClass:"site-logo-2-link",attrs:{to:"/"}},[s("v-img",{staticClass:"site-logo-2",attrs:{src:a("a0c8")}})],1)],1)],1),s("v-flex",{attrs:{md12:""}},[s("v-layout",{attrs:{"justify-center":""}},[s("v-icon",{staticClass:"grey--text text--darken-1 my-5"},[t._v("fiber_manual_record")])],1)],1),s("v-flex",{attrs:{md12:""}},[s("v-layout",{attrs:{"justify-center":""}},[s("v-icon",{staticClass:"grey--text text--darken-2 my-5"},[t._v("fiber_manual_record")])],1)],1),s("v-flex",{attrs:{md12:""}},[s("v-layout",{attrs:{"justify-center":""}},[s("v-icon",{staticClass:"grey--text text--darken-3 my-5"},[t._v("fiber_manual_record")])],1)],1)],1)],1)],1),"homePage"===t.$route.name?s("v-layout",{staticClass:"hidden-md-and-up",attrs:{"justify-center":"","align-center":""}},[s("v-flex",[s("v-layout",{attrs:{"justify-center":""}},[s("v-btn",{staticClass:"site-logo",attrs:{to:"/"+t.siteName,fab:"",raised:""}},[s("v-img",{staticClass:"logo-image",attrs:{src:a("9868")}})],1)],1)],1),s("v-flex",{staticClass:"hidden-xs-only text-xs-center"},[s("v-icon",{staticClass:"grey--text text--darken-2"},[t._v("fiber_manual_record")])],1),s("v-flex",{staticClass:"hidden-xs-only"},[s("h1",{staticClass:"headline text-xs-center"},[s("span",{staticClass:"font-weight-regular text-uppercase text-responsive"},[t._v("АЗИЯ")]),s("br"),s("span",{staticClass:"font-weight-thin text-xs-center text-responsive"},[t._v("СЕГОДНЯ")])])]),s("v-flex",{staticClass:"hidden-sm-and-up border-left"},[s("h1",{staticClass:"headline text-xs-left"},[s("span",{staticClass:"font-weight-regular text-uppercase text-responsive"},[t._v("АЗИЯ")]),s("br"),s("span",{staticClass:"font-weight-thin text-xs-center text-responsive"},[t._v("СЕГОДНЯ")])])]),s("v-flex",{staticClass:"hidden-xs-only text-xs-center"},[s("v-icon",{staticClass:"grey--text text--darken-2"},[t._v("fiber_manual_record")])],1),s("v-flex",{staticClass:"hidden-xs-only"},[s("h2",{staticClass:"title font-weight-regular grey--text text--darken-1 text-xs-center"},[t._v("последние\n        "),s("br"),t._v("новости\n      ")])])],1):t._e(),"homePage"!==t.$route.name?s("v-layout",{staticClass:"hidden-md-and-up",attrs:{"justify-center":"","align-center":""}},[s("v-flex",[s("v-layout",{attrs:{"justify-center":""}},[s("v-btn",{staticClass:"site-logo",attrs:{to:"/"+t.siteName,fab:"",raised:""}},[s("v-img",{staticClass:"logo-image",attrs:{src:t.siteLogo}})],1)],1)],1),s("v-flex",{staticClass:"hidden-xs-only text-xs-center"},[s("v-icon",{staticClass:"grey--text text--darken-2"},[t._v("fiber_manual_record")])],1),s("v-flex",{staticClass:"hidden-xs-only"},[s("h1",{staticClass:"headline text-xs-center"},[s("span",{staticClass:"font-weight-regular text-uppercase text-responsive"},[t._v(t._s(t.rusSiteName))]),s("br"),s("span",{staticClass:"font-weight-thin text-xs-center text-responsive"},[t._v("СЕГОДНЯ")])])]),s("v-flex",{staticClass:"hidden-sm-and-up border-left"},[s("h1",{staticClass:"headline text-xs-left"},[s("span",{staticClass:"font-weight-regular text-uppercase text-responsive"},[t._v(t._s(t.rusSiteName))]),s("br"),s("span",{staticClass:"font-weight-thin text-xs-center text-responsive"},[t._v("СЕГОДНЯ")])])]),s("v-flex",{staticClass:"hidden-xs-only text-xs-center"},[s("v-icon",{staticClass:"grey--text text--darken-2"},[t._v("fiber_manual_record")])],1),s("v-flex",{staticClass:"hidden-xs-only"},[s("h2",{staticClass:"title font-weight-regular grey--text text--darken-1 text-xs-center"},[t._v("последние\n        "),s("br"),t._v("новости\n      ")])])],1):t._e()],1)},K=[],Q={props:["siteName"],data:function(){return{}},computed:Object(q["a"])({},Object(Y["c"])(["sites"]),{siteLogo:function(){var t=this;return this.sites.find(function(e){return e.name===t.siteName}).logo},rusSiteName:function(){var t=this;return this.sites.find(function(e){return e.name===t.siteName}).rusName}})},X=Q,Z=(a("f56d"),Object(f["a"])(X,W,K,!1,null,null,null));Z.options.__file="LeftSideBar.vue";var tt=Z.exports;m()(Z,{VBtn:w["a"],VFlex:N["a"],VIcon:j["a"],VImg:k["a"],VLayout:L["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"right-side-bar",attrs:{md2:"","py-2":"","px-2":""}},[a("v-layout",{staticClass:"hidden-sm-and-down",attrs:{column:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{md12:"","pb-5":""}},[a("v-btn",{staticClass:"site-logo",attrs:{to:"/"+t.siteName,fab:"",raised:""}},[a("v-img",{staticClass:"logo-image",attrs:{src:t.siteLogo}})],1)],1),a("v-flex",{staticClass:"hidden-md-and-down",attrs:{md12:""}},[a("h1",{staticClass:"headline text-md-center"},[a("span",{staticClass:"font-weight-regular text-uppercase"},[t._v(t._s(t.rusSiteName))]),a("br"),a("span",{staticClass:"font-weight-thin text-md-center"},[t._v("СЕГОДНЯ")])])]),a("v-flex",{staticClass:"hidden-lg-and-up",attrs:{md12:""}},[a("h1",{staticClass:"headline text-md-center text-responsive"},[a("span",{staticClass:"font-weight-regular text-uppercase"},[t._v(t._s(t.rusSiteName))]),a("br"),a("span",{staticClass:"font-weight-thin text-md-center"},[t._v("СЕГОДНЯ")])])]),a("v-flex",{attrs:{md12:"","my-4":""}},[a("v-icon",{staticClass:"grey--text text--darken-2"},[t._v("fiber_manual_record")])],1),a("v-flex",{attrs:{md12:""}},[a("h2",{staticClass:"title font-weight-regular grey--text text--darken-1 text-md-center"},[t._v("последние\n        "),a("br"),t._v("новости\n      ")])])],1)],1)},at=[],st={props:["siteName"],data:function(){return{}},computed:Object(q["a"])({},Object(Y["c"])(["sites"]),{siteLogo:function(){var t=this;return this.sites.find(function(e){return e.name===t.siteName}).logo},rusSiteName:function(){var t=this;return this.sites.find(function(e){return e.name===t.siteName}).rusName}})},rt=st,nt=(a("ad44"),Object(f["a"])(rt,et,at,!1,null,null,null));nt.options.__file="RightSideBar.vue";var it=nt.exports;m()(nt,{VBtn:w["a"],VFlex:N["a"],VIcon:j["a"],VImg:k["a"],VLayout:L["a"]});var ot={components:{LeftSideBar:tt,RightSideBar:it},props:["siteName"],data:function(){return{up:".scroll-up",posts:[],down:".scroll-down"}},computed:Object(q["a"])({},Object(Y["c"])(["sites"])),methods:Object(q["a"])({},Object(Y["b"])(["getLastPosts","getMedia"]),{getSiteUrl:function(t){return this.sites.find(function(e){return e.name===t}).url},getRusSiteName:function(t){return this.sites.find(function(e){return e.name===t}).rusName},getSiteLogo:function(t){return this.sites.find(function(e){return e.name===t}).logo},getSiteLogo2:function(t){return this.sites.find(function(e){return e.name===t}).logo2},savePostData:function(t){var e=t.siteName,a=t.data;this.posts.push({id:a.id,slug:a.slug,siteName:e,title:a.title.rendered,date:a.date,link:a.link,content:a.content.rendered,thumb:a._embedded["wp:featuredmedia"][0].media_details.sizes.td_537x360.source_url,img:a._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})},getDate:function(t){return t?J["DateTime"].fromISO(t,{locale:"ru"}).toLocaleString(J["DateTime"].DATE_FULL):""},scroll:function(t){this.$vuetify.goTo(t)}}),mounted:function(){var t=this;this.scroll(this.up),"sitePage"===this.$route.name?this.getLastPosts({siteUrl:this.getSiteUrl(this.siteName),count:4}).then(function(e){return e.forEach(function(e){return t.savePostData({siteName:t.siteName,data:e})})}):this.sites.forEach(function(e){return t.getLastPosts({siteUrl:e.url,count:1}).then(function(a){return t.savePostData({siteName:e.name,data:a[0]})})})}},lt=ot,ct=(a("9885"),a("b0af")),ut=a("99d9"),dt=a("12b2"),pt=a("9910"),ft=Object(f["a"])(lt,R,G,!1,null,null,null);ft.options.__file="PostGrid.vue";var vt=ft.exports;m()(ft,{VBtn:w["a"],VCard:ct["a"],VCardText:ut["a"],VCardTitle:dt["a"],VContainer:A["a"],VFlex:N["a"],VIcon:j["a"],VImg:k["a"],VLayout:L["a"],VSpacer:pt["a"]});var mt={components:{PostGrid:vt}},ht=mt,gt=Object(f["a"])(ht,F,z,!1,null,null,null);gt.options.__file="HomePage.vue";var xt=gt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PostGrid",{attrs:{siteName:t.siteName}})},_t=[],yt={props:["siteName"],components:{PostGrid:vt}},Ct=yt,wt=Object(f["a"])(Ct,bt,_t,!1,null,null,null);wt.options.__file="SitePage.vue";var Nt=wt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",[s("v-container",{directives:[{name:"show",rawName:"v-show",value:t.img,expression:"img"}],staticClass:"post scroll-up",attrs:{fluid:"","px-0":""}},[s("v-layout",{attrs:{wrap:"","justify-center":""}},[s("LeftSideBar",{attrs:{siteName:t.siteName}}),s("v-flex",{attrs:{xs12:"",md8:""}},[s("v-card",{staticClass:"pt-3 pb-2 px-3 content body-1",attrs:{light:""}},[s("v-img",{staticClass:"post-img white--text hidden-sm-and-down",attrs:{src:t.img,"lazy-src":a("90ab"),gradient:"to bottom, rgba(0,0,0,.8), transparent 50%","aspect-ratio":16/9}},[s("v-flex",{attrs:{"mx-4":""}},[s("v-card-title",[s("h1",{staticClass:"display-2 font-weight-light"},[t._v(t._s(t.title))])])],1)],1),s("v-img",{staticClass:"post-img white--text hidden-md-and-up",attrs:{src:t.img,"lazy-src":a("90ab"),gradient:"to bottom, rgba(0,0,0,.8), transparent 100%","aspect-ratio":16/9}},[s("v-flex",{attrs:{"mx-4":""}},[s("v-card-title",[s("h1",{staticClass:"display-1 font-weight-light"},[t._v(t._s(t.title))])])],1)],1),s("v-flex",{attrs:{"mt-3":""}},[s("hr")]),s("v-card-text",[s("div",{domProps:{innerHTML:t._s(t.content)}}),s("v-flex",{attrs:{"mt-4":"","mb-5":""}},[s("hr")]),s("div",{staticClass:"site-date font-italic font-weight-light"},[s("v-layout",{attrs:{"justify-space-between":"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","pb-4":""}},[s("span",{staticClass:"grey--text subheading"},[t._v(t._s(t.date))])]),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-layout",{staticClass:"hidden-sm-and-up",attrs:{"justify-start":""}},[s("yandex-share",{attrs:{services:["vkontakte","facebook","twitter","odnoklassniki","twitter","tumblr","viber","telegram"],counter:"",description:t.title}})],1),s("v-layout",{staticClass:"hidden-xs-only",attrs:{"justify-end":""}},[s("yandex-share",{attrs:{services:["vkontakte","facebook","twitter","odnoklassniki","twitter","tumblr","viber","telegram"],counter:"",description:t.title}})],1)],1)],1)],1)],1)],1)],1),s("RightSideBar",{attrs:{siteName:t.siteName}})],1)],1)],1)},jt=[],kt=(a("a481"),a("f559"),a("386d"),a("28a5"),a("ac4d"),a("8a81"),a("0098")),Lt={components:{YandexShare:kt["a"],LeftSideBar:tt,RightSideBar:it},props:["postSlug","siteName"],data:function(){return{up:".scroll-up",id:"",slug:"",title:"",content:"",date:"",img:"",thumb:""}},computed:Object(q["a"])({},Object(Y["c"])(["sites"]),{siteUrl:function(){var t=this;return this.sites.find(function(e){return e.name===t.siteName}).url}}),methods:Object(q["a"])({},Object(Y["b"])(["getPostBySlug","getMedia"]),{savePostData:function(t){this.id=t.id,this.slug=t.slug,this.title=t.title.rendered,this.content=this.processContent(t.content.rendered),this.date=J["DateTime"].fromISO(t.date,{locale:"ru"}).toLocaleString(J["DateTime"].DATE_FULL),this.thumb=t._embedded["wp:featuredmedia"][0].media_details.sizes.td_537x360.source_url,this.img=t._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url},processContent:function(t){return t=this.removeClasses(t),t=this.processLinks(t),t=this.processIframes(t),t=this.processImages(t),t},removeClasses:function(t){var e=document.createElement("div");e.innerHTML=t;var a=e.querySelectorAll("*"),s=!0,r=!1,n=void 0;try{for(var i,o=a[Symbol.iterator]();!(s=(i=o.next()).done);s=!0){var l=i.value;l.classList=[]}}catch(c){r=!0,n=c}finally{try{s||null==o.return||o.return()}finally{if(r)throw n}}return e.innerHTML},processLinks:function(t){var e=document.createElement("div");e.innerHTML=t;var a=e.querySelectorAll("a");return this.sites.forEach(function(t){var e=!0,s=!1,r=void 0;try{for(var n,i=a[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var o=n.value,l=t.name.split("//").reverse()[0];if(-1!==o.href.search(l)){var c=o.href.split("/").reverse(),u=c[0]?c[0]:c[1];o.href="/".concat(t.name,"/").concat(u),o.target=""}}}catch(d){s=!0,r=d}finally{try{e||null==i.return||i.return()}finally{if(s)throw r}}}),e.innerHTML},processIframes:function(t){var e=document.createElement("div");e.innerHTML=t;var a=e.querySelectorAll("iframe"),s=!0,r=!1,n=void 0;try{for(var i,o=a[Symbol.iterator]();!(s=(i=o.next()).done);s=!0){var l=i.value;l.parentNode.classList.add("aspect-ratio")}}catch(c){r=!0,n=c}finally{try{s||null==o.return||o.return()}finally{if(r)throw n}}return e.innerHTML},processImages:function(t){var e=document.createElement("div");e.innerHTML=t;var a=e.querySelectorAll("img"),s=!0,r=!1,n=void 0;try{for(var i,o=a[Symbol.iterator]();!(s=(i=o.next()).done);s=!0){var l=i.value;l.src.startsWith(window.location.origin)&&(l.src=l.src.replace(window.location.origin,this.siteUrl))}}catch(c){r=!0,n=c}finally{try{s||null==o.return||o.return()}finally{if(r)throw n}}return e.innerHTML},scroll:function(t){this.$vuetify.goTo(t)}}),mounted:function(){var t=this;this.scroll(this.up),this.getPostBySlug({siteUrl:this.siteUrl,postSlug:this.postSlug}).then(function(e){return t.savePostData(e)})}},Pt=Lt,Vt=(a("bef4"),a("549c")),Ot=Object(f["a"])(Pt,St,jt,!1,null,null,null);Ot.options.__file="Post.vue";var Tt=Ot.exports;m()(Ot,{VCard:ct["a"],VCardText:ut["a"],VCardTitle:dt["a"],VContainer:A["a"],VContent:Vt["a"],VFlex:N["a"],VImg:k["a"],VLayout:L["a"]}),s["a"].use(U["a"]);var At=new U["a"]({mode:"history",routes:[{path:"/",name:"homePage",component:xt},{path:"/:siteName/:postSlug",name:"post",component:Tt,props:!0},{path:"/:siteName",name:"sitePage",component:Nt,props:!0}]}),$t=a("bc3a"),Et=a.n($t);s["a"].use(Y["a"]);var Bt=new Y["a"].Store({state:{sites:[{name:"vietnam",rusName:"Вьетнам",url:"https://asia-vietnam.ru",logo:"https://asia-vietnam.ru/wp-content/uploads/2018/11/logo_vietnam-small.png",logo2:"https://asia-vietnam.ru/wp-content/uploads/2018/08/logo2.png"},{name:"nepal",rusName:"Непал",url:"https://asia-nepal.ru",logo:"https://asia-nepal.ru/wp-content/uploads/2018/11/logo_nepal_small.png",logo2:"https://asia-nepal.ru/wp-content/uploads/2018/08/logo4.png"},{name:"thailand",rusName:"Таиланд",url:"https://asia-thailand.ru",logo:"https://asia-thailand.ru/wp-content/uploads/2018/11/logo-thailand-small.png",logo2:"https://asia-thailand.ru/wp-content/uploads/2018/10/logo-thailand-transparent-300x116.png"},{name:"philippines",rusName:"Филиппины",url:"https://asia-philippines.ru",logo:"https://asia-philippines.ru/wp-content/uploads/2018/11/logo-philippines-small.png",logo2:"https://asia-philippines.ru/wp-content/uploads/2018/10/logo-philippines-transparent-300x116.png"}]},getters:{},mutations:{},actions:{getLastPosts:function(t,e){var a=e.siteUrl,s=e.count;return Et.a.get("".concat(a,"/wp-json/wp/v2/posts?per_page=").concat(s,"&_embed")).then(function(t){return t.data}).then(function(t){return t})},getPostById:function(t,e){var a=e.siteUrl,s=e.postId;return Et.a.get(a+"/wp-json/wp/v2/posts/"+s+"?_embed").then(function(t){return t.data})},getPostBySlug:function(t,e){var a=e.siteUrl,s=e.postSlug;return Et.a.get(a+"/wp-json/wp/v2/posts?slug="+s+"&_embed").then(function(t){return t.data[0]}).then(function(t){return t})}}}),It=a("0284"),Mt=a.n(It);s["a"].use(Mt.a,{id:"UA-131048533-1",router:At,debug:{sendHitTask:!1}}),s["a"].component("yandex-share",kt["a"]),s["a"].config.productionTip=!1,new s["a"]({router:At,store:Bt,render:function(t){return t(H)}}).$mount("#app")},6548:function(t,e,a){},"70a3":function(t,e,a){},"7b0e":function(t,e,a){"use strict";var s=a("2155"),r=a.n(s);r.a},"7d7f":function(t,e,a){"use strict";var s=a("70a3"),r=a.n(s);r.a},"90ab":function(t,e,a){t.exports=a.p+"img/placeholder.5fa2abf6.jpg"},9868:function(t,e,a){t.exports=a.p+"img/logo-today.98aaa29f.png"},9885:function(t,e,a){"use strict";var s=a("6548"),r=a.n(s);r.a},a0c8:function(t,e,a){t.exports=a.p+"img/logo-today-transparent.1c34f1c3.png"},ad44:function(t,e,a){"use strict";var s=a("e773"),r=a.n(s);r.a},bef4:function(t,e,a){"use strict";var s=a("0e07"),r=a.n(s);r.a},e773:function(t,e,a){},f56d:function(t,e,a){"use strict";var s=a("3629"),r=a.n(s);r.a}});
//# sourceMappingURL=app.4c392f71.js.map