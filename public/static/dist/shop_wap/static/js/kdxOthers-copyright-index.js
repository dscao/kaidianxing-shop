(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{"019b":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-box",t._l(t.getList,(function(e){return n("cell",{key:e.id,attrs:{tith:e.name,mainAbstract:e.content,classRightIconName:" "}},[n("div",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copy(e.content)}}},[t._v("复制")])])})),1)},o=[]},5828:function(t,e,n){"use strict";n.r(e);var r=n("019b"),c=n("ca3c");for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var i,u=n("f0c5"),a=Object(u["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=a.exports},ca3c:function(t,e,n){"use strict";n.r(e);var r=n("dfe7"),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=c.a},dfe7:function(t,e,n){(function(t){var r=n("288e");n("8e6e"),n("ac6a"),n("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=r(n("bd86")),o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,c.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a={computed:u(u({},(0,o.mapState)("setting",{copyright:function(t){var e,n;return null===(e=t.systemSetting)||void 0===e||null===(n=e.core_settings)||void 0===n?void 0:n.copyright}})),{},{getList:function(){var e=[];return e=this.copyright.h5.url_default,t.log(e,"?????"),e.filter((function(t){return 1==t.open}))}}),methods:{copy:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制成功",duration:2e3,icon:"none"})}})}}};e.default=a}).call(this,n("5a52")["default"])}}]);