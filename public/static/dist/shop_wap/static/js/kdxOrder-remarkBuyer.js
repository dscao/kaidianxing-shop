(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{"102b":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.buy-message[data-v-73ca3efe]{padding:%?16?% %?24?%;height:100%;background-color:#f5f5f5}.buy-message .container[data-v-73ca3efe]{margin-bottom:%?32?%;position:relative}.buy-message .container uni-textarea[data-v-73ca3efe]{padding:%?32?% %?24?%;background-color:#fff;width:100%;box-sizing:border-box;font-size:%?24?%;line-height:%?34?%;color:#212121}.buy-message .container[data-v-73ca3efe] .text-placeholder{font-size:%?24?%;color:#969696}.buy-message .container .currentWordNumber[data-v-73ca3efe]{position:absolute;bottom:%?16?%;right:%?28?%;font-size:%?24?%;color:#969696}.buy-message .submit-btn[data-v-73ca3efe]{margin-top:%?32?%;background:-webkit-linear-gradient(left,#ff3c29,#ff6f29);background:linear-gradient(90deg,#ff3c29,#ff6f29)}',""]),e.exports=t},"31b1":function(e,t,o){"use strict";var n=o("9b0b"),i=o.n(n);i.a},"55ac":function(e,t,o){"use strict";o.r(t);var n=o("a557"),i=o("bf60");for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);o("31b1");var a,s=o("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"73ca3efe",null,!1,n["a"],a);t["default"]=c.exports},"9b0b":function(e,t,o){var n=o("102b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("07e01a7b",n,!0,{sourceMap:!1,shadowMode:!1})},a557:function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("theme-content",[o("v-uni-view",{staticClass:"buy-message"},[o("v-uni-view",{staticClass:"container"},[o("v-uni-textarea",{attrs:{placeholder:"请输入买家留言","placeholder-class":"text-placeholder",maxlength:50},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}}),o("v-uni-text",{staticClass:"currentWordNumber"},[e._v(e._s(e.remark.length)+"/50")])],1),o("btn",{attrs:{type:"do",size:"middle",classNames:"theme-primary-bgcolor"},on:{"btn-click":function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},r=[]},a64f:function(e,t,o){(function(e){var n=o("288e");o("8e6e"),o("ac6a"),o("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("28a5");var i=n(o("bd86")),r=o("2f62"),a=n(o("fead")),s=(n(o("b531")),o("3014"));function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(e){e||++this.loadingFlg}},mounted:function(){e.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:u(u({},(0,r.mapGetters)("loading",["isSkeleton"])),(0,r.mapState)("setting",{shareTitle:function(e){var t,o;return(null===(t=e.systemSetting)||void 0===t||null===(o=t.share)||void 0===o?void 0:o.title)||""},shareDesc:function(e){var t,o;return(null===(t=e.systemSetting)||void 0===t||null===(o=t.share)||void 0===o?void 0:o.description)||""},shareLogo:function(e){var t,o;return null===(t=e.systemSetting)||void 0===t||null===(o=t.share)||void 0===o?void 0:o.logo}})),methods:{handlerOptions:function(e){if(null!==e&&void 0!==e&&e.scene){for(var t=decodeURIComponent(decodeURIComponent(null===e||void 0===e?void 0:e.scene)).split("&"),o={},n=0;n<t.length;n++){var i=t[n].split("=");o[i[0]]=i[1]}null!==o&&void 0!==o&&o.inviter_id&&s.sessionStorage.setItem("inviter-id",o.inviter_id)}}},onPullDownRefresh:function(){var e=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){e.$closePageLoading()}),2e3)},onLoad:function(e){this.showTabbar=!0},onShow:function(){var e,t,o;uni.hideLoading(),a.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var n,i,r,c,u=this.$Route.query;(null!==u&&void 0!==u&&u.inviter_id&&s.sessionStorage.setItem("inviter-id",u.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:u}),null!==(e=this.pageInfo)&&void 0!==e&&e.gotop&&null!==(t=this.pageInfo.gotop.params)&&void 0!==t&&t.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(n=this.pageInfo.gotop)||void 0===n||null===(i=n.params)||void 0===i?void 0:i.scrollTop)>=(null===(r=this.pageInfo.gotop)||void 0===r||null===(c=r.params)||void 0===c?void 0:c.gotopheight)}},"pagemixin/onshow1"):null!==(o=this.pageInfo)&&void 0!==o&&o.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(e){this.$decorator.getModule("gotop").onPageScroll(e,this.$Route)}};t.default=l}).call(this,o("5a52")["default"])},bf60:function(e,t,o){"use strict";o.r(t);var n=o("cb46"),i=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},cb46:function(e,t,o){var n=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("a64f")),r={mixins:[i.default],name:"message",props:{},data:function(){return{remark:""}},computed:{},created:function(){},mounted:function(){this.remark=this.$store.state.orderCreate.buyer_remark},methods:{submit:function(){this.$store.commit("orderCreate/setOrderCreateInfo",{buyer_remark:this.remark}),this.$Router.back(1)}}};t.default=r}}]);