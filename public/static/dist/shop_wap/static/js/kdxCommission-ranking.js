(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"1f1e":function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.ranking-list-list[data-v-e1c1fdfe]{padding-left:%?24?%}.ranking-list-list .list-item[data-v-e1c1fdfe]{padding-top:%?16?%;padding-bottom:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #e6e7eb;font-weight:700;font-size:%?28?%;line-height:%?40?%;color:#212121}.ranking-list-list .list-item .left[data-v-e1c1fdfe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ranking-list-list .list-item .left .avatar[data-v-e1c1fdfe]{width:%?96?%;height:%?96?%;border-radius:50%;background-color:#f5f5f5;margin-left:%?24?%;margin-right:%?24?%;background-size:contain}.ranking-list-list .list-item .left .avatar uni-image[data-v-e1c1fdfe]{width:%?96?%;height:%?96?%;border-radius:50%}.ranking-list-list .list-item .right[data-v-e1c1fdfe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?24?%}.ranking-list-list .list-item .right .count[data-v-e1c1fdfe]{margin-right:%?12?%}.ranking-list-list .list-item[data-v-e1c1fdfe]:last-child{border-bottom:none}',""]),t.exports=i},"236c":function(t,i,n){var a=n("a9b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("4c708e7c",a,!0,{sourceMap:!1,shadowMode:!1})},"242e":function(t,i,n){"use strict";n.r(i);var a=n("55be"),e=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},"2ffe":function(t,i,n){"use strict";n.r(i);var a=n("9ef7"),e=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},"37b7":function(t,i,n){"use strict";var a=n("236c"),e=n.n(a);e.a},"38bf":function(t,i,n){"use strict";n.r(i);var a=n("ecbb"),e=n("2ffe");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("52f5");var r,s=n("f0c5"),l=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"e1c1fdfe",null,!1,a["a"],r);i["default"]=l.exports},"52f5":function(t,i,n){"use strict";var a=n("dd19"),e=n.n(a);e.a},"55be":function(t,i,n){var a=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("38bf")),o=a(n("a64f")),r={mixins:[o.default],name:"rank",components:{rankingList:e.default},props:{},data:function(){return{myData:{commission_pay:0,commission_total:0,show_total:10,top:1},top:{top1:{},top2:{},top3:{}},list:[],open:1,loading:!1}},computed:{params:function(){return this.$store.state.commissionSet.commissionSetting}},mounted:function(){var t;uni.setNavigationBarTitle({title:null===(t=this.params)||void 0===t?void 0:t.commission_rank}),this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.$api.commissionApi.getRank({}).then((function(i){if(0!==i.open){if(i.list.length>3)t.top={top1:i.list[0],top2:i.list[1],top3:i.list[2]},t.list=i.list.slice(3);else{t.top={top1:i.list[0]||{},top2:i.list[1]||{},top3:i.list[2]||{}};for(var n=4;n<11;n++)t.list.push({nickname:"虚位以待",avatar:"",commission_pay:"",top:n})}t.myData=i.my}else t.open=0})).finally((function(i){t.loading=!1,uni.hideLoading()}))}}};i.default=r},9638:function(t,i,n){"use strict";n.r(i);var a=n("ac6ea"),e=n("242e");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("37b7");var r,s=n("f0c5"),l=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"1c810204",null,!1,a["a"],r);i["default"]=l.exports},"9ef7":function(t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"RankingList",components:{},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}};i.default=n},a64f:function(t,i,n){(function(t){var a=n("4ea4");n("8e6e"),n("ac6a"),n("456d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("28a5");var e=a(n("ade3")),o=n("2f62"),r=a(n("fead")),s=(a(n("b531")),n("3014"));function l(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){(0,e.default)(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}var d={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(t){t||++this.loadingFlg}},mounted:function(){t.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:c(c({},(0,o.mapGetters)("loading",["isSkeleton"])),(0,o.mapState)("setting",{shareTitle:function(t){var i,n;return(null===(i=t.systemSetting)||void 0===i||null===(n=i.share)||void 0===n?void 0:n.title)||""},shareDesc:function(t){var i,n;return(null===(i=t.systemSetting)||void 0===i||null===(n=i.share)||void 0===n?void 0:n.description)||""},shareLogo:function(t){var i,n;return null===(i=t.systemSetting)||void 0===i||null===(n=i.share)||void 0===n?void 0:n.logo}})),methods:{handlerOptions:function(t){if(null!==t&&void 0!==t&&t.scene){for(var i=decodeURIComponent(decodeURIComponent(null===t||void 0===t?void 0:t.scene)).split("&"),n={},a=0;a<i.length;a++){var e=i[a].split("=");n[e[0]]=e[1]}null!==n&&void 0!==n&&n.inviter_id&&s.sessionStorage.setItem("inviter-id",n.inviter_id)}}},onPullDownRefresh:function(){var t=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){t.$closePageLoading()}),2e3)},onLoad:function(t){this.showTabbar=!0},onShow:function(){var t,i,n;uni.hideLoading(),r.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var a,e,o,l,c=this.$Route.query;(null!==c&&void 0!==c&&c.inviter_id&&s.sessionStorage.setItem("inviter-id",c.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:c}),null!==(t=this.pageInfo)&&void 0!==t&&t.gotop&&null!==(i=this.pageInfo.gotop.params)&&void 0!==i&&i.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(a=this.pageInfo.gotop)||void 0===a||null===(e=a.params)||void 0===e?void 0:e.scrollTop)>=(null===(o=this.pageInfo.gotop)||void 0===o||null===(l=o.params)||void 0===l?void 0:l.gotopheight)}},"pagemixin/onshow1"):null!==(n=this.pageInfo)&&void 0!==n&&n.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(t){this.$decorator.getModule("gotop").onPageScroll(t,this.$Route)}};i.default=d}).call(this,n("5a52")["default"])},a9b0:function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.rank .content[data-v-1c810204]{height:100vh;position:relative}.rank .content img.bg-bg[data-v-1c810204]{position:absolute;width:100%;height:100%}.rank .content .scroll-view[data-v-1c810204]{height:100%;position:relative}.rank .content .scroll-view .info[data-v-1c810204]{position:relative;padding-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.rank .content .scroll-view .info .info-avatar[data-v-1c810204]{width:%?96?%;height:%?96?%;margin-right:%?20?%;border-radius:50%;background-color:#f5f5f5;background-repeat:no-repeat;background-size:contain}.rank .content .scroll-view .info .info-avatar uni-image[data-v-1c810204]{width:%?96?%;height:%?96?%;border-radius:50%}.rank .content .scroll-view .info .info-info[data-v-1c810204]{color:#fff}.rank .content .scroll-view .info .info-info div[data-v-1c810204]:nth-child(1){font-weight:700;font-size:%?28?%;line-height:%?40?%}.rank .content .scroll-view .info .info-info div[data-v-1c810204]:nth-child(2){font-size:%?24?%;line-height:%?34?%}.rank .content .scroll-view .info .info-info span[data-v-1c810204]{color:#efbf16}.rank .content .scroll-view .top3[data-v-1c810204]{margin-top:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.rank .content .scroll-view .top3 .top3-inner[data-v-1c810204]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rank .content .scroll-view .top3 .top3-inner .avatar[data-v-1c810204]{position:relative;border:%?4?% solid #fff;box-sizing:border-box;background-color:#666;border-radius:50%;z-index:1;background-repeat:no-repeat;background-size:contain}.rank .content .scroll-view .top3 .top3-inner .avatar .bg-crown[data-v-1c810204]{position:absolute;z-index:2}.rank .content .scroll-view .top3 .top3-inner .avatar .bg-shadow[data-v-1c810204]{position:absolute;bottom:%?-32?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:2}.rank .content .scroll-view .top3 .top3-inner .avatar img.bg-avatar[data-v-1c810204]{width:100%;height:100%;border-radius:50%}.rank .content .scroll-view .top3 .top3-inner .top3-inner-info[data-v-1c810204]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.rank .content .scroll-view .top3 .top3-inner .top3-inner-info .c[data-v-1c810204]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin-top:%?16?%;text-align:center}.rank .content .scroll-view .top3 .top3-inner .top3-inner-info .c .name[data-v-1c810204]{font-weight:700;font-size:%?28?%;line-height:%?40?%;color:#565656}.rank .content .scroll-view .top3 .top3-inner .top3-inner-info .c .num[data-v-1c810204]{color:#ff3c29}.rank .content .scroll-view .top3 .top3-inner .top3-inner-info img[data-v-1c810204]{width:100%}.rank .content .scroll-view .top3 .top3-inner.first[data-v-1c810204]{width:%?222?%}.rank .content .scroll-view .top3 .top3-inner.first .avatar[data-v-1c810204]{margin-bottom:%?-12?%;width:%?168?%;height:%?168?%}.rank .content .scroll-view .top3 .top3-inner.first .avatar img.bg-crown[data-v-1c810204]{width:%?122?%;height:%?126?%;right:%?-24?%;top:%?-32?%}.rank .content .scroll-view .top3 .top3-inner.first .avatar img.bg-shadow[data-v-1c810204]{width:%?106?%;height:%?12?%}.rank .content .scroll-view .top3 .top3-inner.first .top3-inner-info .c .name[data-v-1c810204]{margin-bottom:%?8?%}.rank .content .scroll-view .top3 .top3-inner.first .top3-inner-info img[data-v-1c810204]{width:100%}.rank .content .scroll-view .top3 .top3-inner.second[data-v-1c810204]{width:%?200?%}.rank .content .scroll-view .top3 .top3-inner.second .avatar[data-v-1c810204]{margin-bottom:%?8?%;margin-right:%?-20?%;width:%?132?%;height:%?132?%}.rank .content .scroll-view .top3 .top3-inner.second .avatar img.bg-crown[data-v-1c810204]{width:%?92?%;height:%?94?%;right:%?-18?%;top:%?-24?%}.rank .content .scroll-view .top3 .top3-inner.second .avatar img.bg-shadow[data-v-1c810204]{width:%?82?%;height:%?12?%}.rank .content .scroll-view .top3 .top3-inner.third[data-v-1c810204]{width:%?200?%}.rank .content .scroll-view .top3 .top3-inner.third .avatar[data-v-1c810204]{margin-bottom:%?8?%;margin-left:%?-20?%;width:%?132?%;height:%?132?%}.rank .content .scroll-view .top3 .top3-inner.third .avatar img.bg-crown[data-v-1c810204]{width:%?92?%;height:%?94?%;right:%?-18?%;top:%?-24?%}.rank .content .scroll-view .top3 .top3-inner.third .avatar img.bg-shadow[data-v-1c810204]{width:%?82?%;height:%?12?%}.rank .content .scroll-view .ranking-list[data-v-1c810204]{position:relative;padding-bottom:%?32?%}.rank .content .scroll-view .ranking-list .other[data-v-1c810204]{background-color:#fff;border-radius:%?12?%;margin:0 %?24?%}',""]),t.exports=i},ac6ea:function(t,i,n){"use strict";var a;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return a}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("page-box",[n("v-uni-view",{staticClass:"rank"},[!t.loading&&t.open?n("v-uni-view",{staticClass:"content"},[n("img",{staticClass:"bg-bg",attrs:{src:t.$utils.staticMediaUrl("commission/bg.png"),alt:"",mode:"aspectFill"}}),n("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[n("div",{staticClass:"info"},[n("div",{staticClass:"info-avatar",style:{"background-image":"url("+t.$utils.staticMediaUrl("decorate/avatar_mobile.png")+")"}},[n("v-uni-image",{attrs:{src:t.$utils.mediaUrl(t.myData.avatar)}})],1),n("div",{staticClass:"info-info"},[-1!=t.myData.top?n("div",[t._v("我的排名第"),n("span",[t._v(t._s(t.myData.top))]),t._v("名")]):t._e(),-1==t.myData.top?n("div",[t._v("我的排名 未上榜")]):t._e(),n("div",[t._v(t._s(t.params.count_commission)),n("span",[t._v("￥"+t._s(t.myData.commission_total))])])])]),n("div",{staticClass:"ranking-list"},[n("div",{staticClass:"top3"},[n("div",{staticClass:"top3-inner second"},[n("div",{staticClass:"avatar",style:{"background-image":"url("+t.$utils.staticMediaUrl("decorate/avatar_mobile.png")+")"}},[n("img",{staticClass:"bg-crown",attrs:{src:t.$utils.staticMediaUrl("member/bg-2-crown.png"),alt:"",mode:"widthFix"}}),n("img",{staticClass:"bg-shadow",attrs:{src:t.$utils.staticMediaUrl("member/bg-shadow2.png"),alt:"",mode:"widthFix"}}),n("img",{staticClass:"bg-avatar",attrs:{src:t.$utils.mediaUrl(t.top.top2.avatar),alt:""}})]),n("div",{staticClass:"top3-inner-info"},[n("img",{attrs:{src:t.$utils.staticMediaUrl("member/bg-2.png"),alt:"",mode:"widthFix"}}),n("div",{staticClass:"c"},[t.top.top2.nickname||t.top.top2.commission_total?[n("div",{staticClass:"name"},[t._v(t._s(t.top.top2.nickname))]),n("div",{staticClass:"num"},[t._v("￥"+t._s(t.top.top2.commission_total))])]:[n("div",{staticClass:"name"},[t._v("-")])]],2)])]),n("div",{staticClass:"top3-inner first"},[n("div",{staticClass:"avatar",style:{"background-image":"url("+t.$utils.staticMediaUrl("decorate/avatar_mobile.png")+")"}},[n("img",{staticClass:"bg-crown",attrs:{src:t.$utils.staticMediaUrl("member/bg-1-crown.png"),alt:"",mode:"widthFix"}}),n("img",{staticClass:"bg-shadow",attrs:{src:t.$utils.staticMediaUrl("member/bg-shadow1.png"),alt:"",mode:"widthFix"}}),n("img",{staticClass:"bg-avatar",attrs:{src:t.$utils.mediaUrl(t.top.top1.avatar),alt:""}})]),n("div",{staticClass:"top3-inner-info"},[n("img",{attrs:{src:t.$utils.staticMediaUrl("member/bg-1.png"),alt:"",mode:"widthFix"}}),n("div",{staticClass:"c"},[t.top.top1.nickname||t.top.top1.commission_total?[n("div",{staticClass:"name"},[t._v(t._s(t.top.top1.nickname))]),n("div",{staticClass:"num"},[t._v("￥"+t._s(t.top.top1.commission_total))])]:[n("div",{staticClass:"name"},[t._v("-")])]],2)])]),n("div",{staticClass:"top3-inner third"},[n("div",{staticClass:"avatar",style:{"background-image":"url("+t.$utils.staticMediaUrl("decorate/avatar_mobile.png")+")"}},[n("img",{staticClass:"bg-crown",attrs:{src:t.$utils.staticMediaUrl("member/bg-3-crown.png"),alt:"",mode:"widthFix"}}),n("img",{staticClass:"bg-shadow",attrs:{src:t.$utils.staticMediaUrl("member/bg-shadow2.png"),alt:"",mode:"widthFix"}}),n("img",{staticClass:"bg-avatar",attrs:{src:t.$utils.mediaUrl(t.top.top3.avatar),alt:""}})]),n("div",{staticClass:"top3-inner-info"},[n("img",{attrs:{src:t.$utils.staticMediaUrl("member/bg-3.png"),alt:"",mode:"widthFix"}}),n("div",{staticClass:"c"},[t.top.top3.nickname||t.top.top3.commission_total?[n("div",{staticClass:"name"},[t._v(t._s(t.top.top3.nickname))]),n("div",{staticClass:"num"},[t._v("￥"+t._s(t.top.top3.commission_total))])]:[n("div",{staticClass:"name"},[t._v("-")])]],2)])])]),n("div",{staticClass:"other"},[n("ranking-list",{attrs:{list:t.list}})],1)])])],1):t._e(),t.loading||t.open?t._e():[n("v-uni-view",{staticClass:"default-page flex-column"},[n("v-uni-view",{staticClass:"bg"},[n("v-uni-image",{attrs:{src:t.$utils.staticMediaUrl("default/rank.png")}})],1),n("v-uni-view",{staticClass:"default-text"},[t._v("商家暂未开启")])],1)]],2)],1)},o=[]},dd19:function(t,i,n){var a=n("1f1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("1295defe",a,!0,{sourceMap:!1,shadowMode:!1})},ecbb:function(t,i,n){"use strict";var a;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return a}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"ranking-list-list"},t._l(t.list,(function(i,a){return n("v-uni-view",{key:a,staticClass:"list-item"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"ranking"},[t._v(t._s(i.top))]),n("v-uni-view",{staticClass:"avatar",style:{"background-image":"url("+t.$utils.staticMediaUrl("decorate/avatar_mobile.png")+")"}},[n("v-uni-image",{attrs:{src:t.$utils.mediaUrl(i.avatar)}})],1),n("v-uni-view",{staticClass:"name"},[t._v(t._s(i.nickname))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"count"},[t._v("￥"+t._s(i.commission_total||""))])],1)],1)})),1)},o=[]}}]);