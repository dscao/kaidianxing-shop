(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[142,36,38,39,40,41,42,174,176,177,178,179,180,181,182],{"0731":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.componentData&&"search"==t.componentData.id?i("div",{staticClass:"search",style:{background:t.getBg,padding:t.px2rpx(t.componentData.style.paddingtop)+" "+t.px2rpx(t.componentData.style.paddingleft)+" "+t.px2rpx(t.componentData.style.paddingbottom)}},[t.showPos&&t.chooseAddress&&0!=t.componentData.params.showstyle?i("div",{staticClass:"position",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPicker.apply(void 0,arguments)}}},[1==t.componentData.params.locationicon?i("i",{staticClass:"iconfont-remix icon-remix-dingwei2",style:{color:t.componentData.style.locationiconcolor}}):t._e(),i("span",{staticClass:"locationtext overflow-h",style:{color:t.componentData.style.locationcolor}},[t._v(t._s(t.chooseAddress))]),i("i",{staticClass:"iconfont-def icon-def-jiantou-xia1",style:{color:t.componentData.style.locationcolor}})]):t._e(),"sort"==t.componentData.params.searchtype?i("div",{staticClass:"custom-input"},[i("div",{staticClass:"input-box",class:{focus:t.focusInput}},[i("i",{staticClass:"search-icon iconfont-m- icon-m-shangpinxiangqing-search"}),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)}}})],1),i("div",{staticClass:"search-col"},[i("div",{staticClass:"input-col col1",class:{active:1==t.activeCol,up:this.increase,down:!this.increase},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickCol(1)}}},[i("span",{staticClass:"text"},[t._v("销量")]),t._m(0)]),i("div",{staticClass:"input-col col2",class:{active:2==t.activeCol,up:this.increase,down:!this.increase},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickCol(2)}}},[i("span",{staticClass:"text"},[t._v("价格")]),t._m(1)]),i("div",{staticClass:"input-col col3",class:{active:3==t.activeCol,up:this.increase,down:!this.increase},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickCol(3)}}},[i("span",{staticClass:"text"},[t._v("最新")]),t._m(2)])]),i("div",{staticClass:"input-col col4",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRedraw.apply(void 0,arguments)}}},[i("i",{staticClass:"iconfont-m- redraw",class:t.currentStatus?"icon-m-fenlei-liebiaoliu":"icon-m-fenlei-pubuliu"})])]):i("div",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickInput.apply(void 0,arguments)}}},[i("span",{staticClass:"placeholder word",style:{color:t.componentData.style.color,textAlign:t.componentData.style.textalign,background:t.componentData.style.inputbackground,borderRadius:t.px2rpx(t.componentData.style.borderradius)}},[i("i",{staticClass:"search-icon iconfont-m- icon-m-shangpinxiangqing-search",style:{color:t.componentData.style.iconcolor}}),t._v(t._s(t.value?"":t.componentData.params.placeholder))])]),i("address-picker",{ref:"areaPicker",attrs:{curTab:t.curTab,addressList:t.addressList,showTab:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onValuesChange.apply(void 0,arguments)}}})],1):t._e()},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"arrow"},[i("i",{staticClass:"iconfont-m- icon-m-arrow-up"}),i("i",{staticClass:"iconfont-m- icon-m-arrow-down"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"arrow"},[i("i",{staticClass:"iconfont-m- icon-m-arrow-up"}),i("i",{staticClass:"iconfont-m- icon-m-arrow-down"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"arrow"},[i("i",{staticClass:"iconfont-m- icon-m-arrow-up"}),i("i",{staticClass:"iconfont-m- icon-m-arrow-down"})])}]},"3dcd":function(t,e,i){var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var n=o(i("c984")),a=o(i("179d")),r=o(i("a64f")),s=o(i("5ea3")),c={mixins:[n.default,r.default],name:"search",components:{addressPicker:a.default},computed:{getBg:function(){return"color"==this.componentData.params.bgstyle?this.componentData.style.bgcolor:""},showPos:function(){return this.$utils.is_weixin()}},data:function(){return{value:"",focusInput:!1,activeCol:1,currentStatus:0,increase:!1,showAddress:!1,showPicker:!1,addressList:[],curTab:0,chooseAddress:"",showCity:[]}},watch:{"$store.state.setting.showCity":{immediate:!0,deep:!0,handler:function(){var t,e,i,o=null===(t=this.$store.state.setting)||void 0===t?void 0:t.showCity;o&&this.getData(o),null===(e=s.default.getModule("search"))||void 0===e||null===(i=e.notify)||void 0===i||i.call(e)}}},methods:{clickRedraw:function(){this.currentStatus=this.currentStatus?0:1,this.$emit("custom-event",{target:"search/clickRedraw",data:{status:this.currentStatus}})},clickCol:function(t){this.activeCol!=t?(this.activeCol=t,this.increase=!1):this.increase=!this.increase,this.$emit("custom-event",{target:"search/clickCol",data:{idx:t,increase:this.increase}})},onFocus:function(){this.focusInput=!0},onBlur:function(){this.focusInput=!1},onConfirm:function(t){this.focusInput=!1,this.$emit("custom-event",{target:"search/onChange",data:{value:t.detail.value}})},clickInput:function(t){this.value=t.target.value,this.$emit("custom-event",{target:"search/clickInput"})},onValuesChange:function(t){var e=t.map((function(t){return t.code=t.code_id,t}));this.showCity=e,this.chooseAddress=1==this.componentData.params.showstyle?this.showCity[2].name:this.showCity[1].name,this.$refs.areaPicker.togglePicker();var i=t[2].location.split(","),o={};i[0]>i[1]?(o.lng=i[1],o.lat=i[0]):(o.lng=i[0],o.lat=i[1]);var n=[{name:t[0].name},{name:t[1].name},{code:t[2].code,name:t[2].name}];this.$store.commit("setting/setLocationPosition",o),this.$store.commit("setting/setShowCity",n)},openPicker:function(){this.$refs.areaPicker.togglePicker()},getData:function(t){this.chooseAddress=1==this.componentData.params.showstyle?t[2].name:t[1].name,this.addressList=t}}};e.default=c},4450:function(t,e,i){var o=i("58d3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("1f599d30",o,!0,{sourceMap:!1,shadowMode:!1})},"58d3":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-17b4a844], .istop[data-v-17b4a844]{z-index:999990}._i[data-v-17b4a844]{display:inline}uni-view[data-v-17b4a844]{box-sizing:border-box}.def-pad[data-v-17b4a844]{padding:%?8?% %?16?%}*[data-v-17b4a844]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-17b4a844]{list-style:none}ul[data-v-17b4a844]{padding:0}uni-image[data-v-17b4a844]{height:auto}.search[data-v-17b4a844]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;padding:0;margin:auto}.search .box[data-v-17b4a844]{width:100%;margin:auto;position:relative;overflow:hidden}.search .box.marginkLft[data-v-17b4a844]{margin-left:%?24?%}.search .box .round[data-v-17b4a844]{border-radius:%?60?%}.search .box .search-icon[data-v-17b4a844]{width:%?30?%;height:%?30?%;font-size:%?32?%;overflow:hidden;color:#b4b4b4;line-height:%?32?%;text-align:center;vertical-align:%?-2?%}.search .box .placeholder[data-v-17b4a844]{display:block;box-sizing:border-box;padding:%?14?% %?28?%;font-size:%?24?%;line-height:%?32?%}.search .custom-input[data-v-17b4a844]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.search .custom-input .input-box[data-v-17b4a844]{-webkit-transition:width .5s;transition:width .5s;background:#ececec;width:%?204?%;height:%?60?%;border-radius:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.search .custom-input .input-box uni-input[data-v-17b4a844]{width:100%;background:transparent;font-size:%?24?%;padding-right:%?12?%;margin:auto 0}.search .custom-input .input-box .search-icon[data-v-17b4a844]{width:%?32?%;height:%?32?%;color:#969696;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:auto %?12?% auto %?24?%}.search .custom-input .input-box.focus[data-v-17b4a844]{width:%?360?%}.search .custom-input .search-col[data-v-17b4a844]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;box-sizing:border-box}.search .custom-input .input-col[data-v-17b4a844]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap;padding:0 %?34?%;height:%?40?%;margin:auto 0}.search .custom-input .input-col .text[data-v-17b4a844]{margin:auto 0;font-size:%?28?%;font-weight:600;line-height:%?28?%;height:%?28?%;color:#969696}.search .custom-input .input-col.active .text[data-v-17b4a844]{color:#ff3c29}.search .custom-input .input-col.active.up .icon-m-arrow-up[data-v-17b4a844]{color:#ff3c29}.search .custom-input .input-col.active.down .icon-m-arrow-down[data-v-17b4a844]{color:#ff3c29}.search .custom-input .input-col .arrow[data-v-17b4a844]{margin:auto 0;height:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.search .custom-input .input-col .arrow .iconfont-m-[data-v-17b4a844]{margin:auto;width:100%;height:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;-webkit-transform:scale(.6);transform:scale(.6);text-align:center;color:#c4c4c4}.search .custom-input .input-col .redraw[data-v-17b4a844]{width:%?40?%;height:%?40?%;font-size:%?40?%;color:#969696;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center}.search .custom-input .col4[data-v-17b4a844]{padding:0 0 0 %?26?%;border-left:%?1?% solid #e6e7eb}.search .custom-input .col3[data-v-17b4a844]{padding-right:%?24?%}.search .position[data-v-17b4a844]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;max-width:%?192?%}.search .position i[data-v-17b4a844]{font-size:%?24?%;line-height:%?32?%}.search .position i.iconfont-def[data-v-17b4a844]{color:#fff}.search .position .locationtext[data-v-17b4a844]{font-size:%?24?%;line-height:%?32?%;margin-left:%?4?%}.search .position .locationtext.overflow-h[data-v-17b4a844]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},a64f:function(t,e,i){(function(t){var o=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var n=o(i("ade3")),a=i("2f62"),r=o(i("fead")),s=(o(i("b531")),i("3014"));function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(t){t||++this.loadingFlg}},mounted:function(){t.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:l(l({},(0,a.mapGetters)("loading",["isSkeleton"])),(0,a.mapState)("setting",{shareTitle:function(t){var e,i;return(null===(e=t.systemSetting)||void 0===e||null===(i=e.share)||void 0===i?void 0:i.title)||""},shareDesc:function(t){var e,i;return(null===(e=t.systemSetting)||void 0===e||null===(i=e.share)||void 0===i?void 0:i.description)||""},shareLogo:function(t){var e,i;return null===(e=t.systemSetting)||void 0===e||null===(i=e.share)||void 0===i?void 0:i.logo}})),methods:{handlerOptions:function(t){if(null!==t&&void 0!==t&&t.scene){for(var e=decodeURIComponent(decodeURIComponent(null===t||void 0===t?void 0:t.scene)).split("&"),i={},o=0;o<e.length;o++){var n=e[o].split("=");i[n[0]]=n[1]}null!==i&&void 0!==i&&i.inviter_id&&s.sessionStorage.setItem("inviter-id",i.inviter_id)}}},onPullDownRefresh:function(){var t=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){t.$closePageLoading()}),2e3)},onLoad:function(t){this.showTabbar=!0},onShow:function(){var t,e,i;uni.hideLoading(),r.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var o,n,a,c,l=this.$Route.query;(null!==l&&void 0!==l&&l.inviter_id&&s.sessionStorage.setItem("inviter-id",l.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:l}),null!==(t=this.pageInfo)&&void 0!==t&&t.gotop&&null!==(e=this.pageInfo.gotop.params)&&void 0!==e&&e.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(o=this.pageInfo.gotop)||void 0===o||null===(n=o.params)||void 0===n?void 0:n.scrollTop)>=(null===(a=this.pageInfo.gotop)||void 0===a||null===(c=a.params)||void 0===c?void 0:c.gotopheight)}},"pagemixin/onshow1"):null!==(i=this.pageInfo)&&void 0!==i&&i.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(t){this.$decorator.getModule("gotop").onPageScroll(t,this.$Route)}};e.default=d}).call(this,i("5a52")["default"])},c984:function(t,e,i){var o=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("ade3")),a=i("2f62"),r=i("dc11");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={computed:c({},(0,a.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:r.px2rpx}};e.default=l},dc11:function(t,e,i){function o(){new Promise((function(t,e){uni?uni.getSystemInfo({success:function(e){t(e)}}):t({pixelRatio:window.devicePixelRatio})}))}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return void 0===t&&(t=i),t||(t=0),t*e+"rpx"}Object.defineProperty(e,"__esModule",{value:!0}),e.getSystemInfo=o,e.px2rpx=n,i("4917")},e9ee:function(t,e,i){"use strict";i.r(e);var o=i("0731"),n=i("fb86");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("ed14b");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"17b4a844",null,!1,o["a"],r);e["default"]=c.exports},ed14b:function(t,e,i){"use strict";var o=i("4450"),n=i.n(o);n.a},fb86:function(t,e,i){"use strict";i.r(e);var o=i("3dcd"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a}}]);