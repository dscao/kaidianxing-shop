(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0601":function(t,o,e){var i=e("288e");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=i(e("c984")),n={mixins:[a.default],name:"distributor",data:function(){return{}},computed:{},methods:{checkLevel:function(){this.$emit("custom-event",{target:"distributor/checkLevel"})},goWithDraw:function(){this.$emit("custom-event",{target:"distributor/goWithDraw"})},checkCommission:function(){this.$emit("custom-event",{target:"distributor/checkCommission"})}}};o.default=n},"0fb9":function(t,o,e){"use strict";e.r(o);var i=e("2657"),a=e("3ef1");for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(o,t,(function(){return a[t]}))}(n);e("caed");var r,c=e("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4a71919c",null,!1,i["a"],r);o["default"]=d.exports},2657:function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return n})),e.d(o,"a",(function(){return i}));var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.componentData&&"distributor"==t.componentData.id?e("div",{staticClass:"distributor decorate"},[e("div",{staticClass:"top-info",style:{background:t.componentData.style.background}},[e("div",{staticClass:"left-img"},[e("div",{staticClass:"img-box"},[e("img",{staticClass:"avart",attrs:{"lazy-load":!0,mode:"widthFix",src:t.$utils.mediaUrl(t.componentData.params.avatar)||t.$utils.staticMediaUrl("login/avatar_default.png"),alt:""}})])]),e("div",{staticClass:"right-info",class:{center:1==t.componentData.params.show_commission_level}},[e("p",{staticClass:"title",style:{color:t.componentData.style.nicknamecolor}},[t._v(t._s(t.componentData.params.nickname))]),1==t.componentData.params.show_commission_level?e("p",{staticClass:"level",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.checkLevel.apply(void 0,arguments)}}},[e("img",{staticClass:"level-icon",attrs:{src:t.$utils.staticMediaUrl("commission/commission-level.png"),alt:""}}),t._v(t._s(t.componentData.params.levelname))]):t._e(),e("p",{staticClass:"recommender",style:{color:t.componentData.style.recommendercolor}},[t._v("推荐人："+t._s(t.componentData.params.recommender))])])]),e("div",{staticClass:"bottom-info"},[e("div",{staticClass:"left-info"},[e("p",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.canwithdrawtext||"可"+(t.componentData.params.withdrawtext||"提现")+(t.componentData.params.moneytext||""))+"（元）")]),e("p",{staticClass:"money havemoney",style:{color:t.componentData.style.hightlightcolor}},[t._v(t._s(t.componentData.params.havemoney))]),e("p",{staticClass:"withdraw btn",style:{background:t.componentData.style.hightlightcolor},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.goWithDraw.apply(void 0,arguments)}}},[t._v(t._s(t.componentData.params.withdrawtext||"提现"))])]),e("div",{staticClass:"right-info"},[e("p",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.waitrecordtext||"待入账"+(t.componentData.params.moneytext||""))+" (元)"),e("span",{staticClass:"check",style:{color:t.componentData.style.hightlightcolor},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.checkCommission.apply(void 0,arguments)}}},[t._v("查看")])]),e("p",{staticClass:"money pending",style:{color:t.componentData.style.moneycolor}},[t._v(t._s(t.componentData.params.pending))]),e("p",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v("成功"+t._s(t.componentData.params.withdrawtext||"")+t._s(t.componentData.params.moneytext||"")+" (元)")]),e("p",{staticClass:"money withdraw",style:{color:t.componentData.style.moneycolor}},[t._v(t._s(t.componentData.params.withdraw||""))])])])]):t._e()},n=[]},"3ef1":function(t,o,e){"use strict";e.r(o);var i=e("0601"),a=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(o,t,(function(){return i[t]}))}(n);o["default"]=a.a},"44df":function(t,o,e){var i=e("f06b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("73e89c1a",i,!0,{sourceMap:!1,shadowMode:!1})},c984:function(t,o,e){var i=e("288e");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=i(e("bd86")),n=e("2f62"),r=e("dc11");function c(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,i)}return e}function d(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?c(Object(e),!0).forEach((function(o){(0,a.default)(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var s={computed:d({},(0,n.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:r.px2rpx}};o.default=s},caed:function(t,o,e){"use strict";var i=e("44df"),a=e.n(i);a.a},f06b:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */.isbottom[data-v-4a71919c], .istop[data-v-4a71919c]{z-index:999990}._i[data-v-4a71919c]{display:inline}uni-view[data-v-4a71919c]{box-sizing:border-box}.def-pad[data-v-4a71919c]{padding:%?8?% %?16?%}*[data-v-4a71919c]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-4a71919c]{list-style:none}ul[data-v-4a71919c]{padding:0}uni-image[data-v-4a71919c]{height:auto}.distributor.decorate[data-v-4a71919c]{width:%?750?%;overflow:hidden;position:relative;padding-bottom:%?144?%}.distributor.decorate .img-box[data-v-4a71919c]{overflow:hidden;border-radius:50%}.distributor.decorate .top-info[data-v-4a71919c]{width:100%;padding:%?48?% %?52?% %?178?%;background:#ff6f29;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.distributor.decorate .top-info .left-img[data-v-4a71919c]{width:%?120?%;height:%?120?%;-webkit-flex-shrink:0;flex-shrink:0;border:%?1?% solid #e6e7eb;box-sizing:border-box;border-radius:50%;margin:auto %?24?% auto 0;overflow:hidden}.distributor.decorate .top-info .left-img .avart[data-v-4a71919c], .distributor.decorate .top-info .left-img .img-box[data-v-4a71919c]{width:100%;height:100%}.distributor.decorate .top-info .right-info[data-v-4a71919c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;min-height:%?120?%}.distributor.decorate .top-info .right-info.center[data-v-4a71919c]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.distributor.decorate .top-info .right-info .title[data-v-4a71919c]{font-family:PingFang SC;font-style:normal;font-size:%?32?%;line-height:%?44?%;color:#fff;font-weight:700}.distributor.decorate .top-info .right-info .level[data-v-4a71919c]{width:-webkit-fit-content;width:fit-content;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;position:relative;font-size:%?16?%;font-weight:700;line-height:%?0?%;padding:%?14?% %?6?% %?12?% %?26?%;border-radius:%?4?%;vertical-align:middle;background:#565656;color:#ffe382;margin:%?10?% %?14?%}.distributor.decorate .top-info .right-info .level .level-icon[data-v-4a71919c]{position:absolute;top:50%;left:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?30?%;height:%?30?%;margin:auto 0}.distributor.decorate .top-info .right-info .recommender[data-v-4a71919c]{font-size:%?20?%;line-height:%?28?%;color:#fff}.distributor.decorate .bottom-info[data-v-4a71919c]{width:%?700?%;height:%?294?%;background:#fff;border-radius:%?12?%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;box-sizing:border-box;padding:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.distributor.decorate .bottom-info .left-info[data-v-4a71919c],\n.distributor.decorate .bottom-info .right-info[data-v-4a71919c]{width:50%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.distributor.decorate .bottom-info .left-info .title[data-v-4a71919c],\n.distributor.decorate .bottom-info .right-info .title[data-v-4a71919c]{font-size:%?24?%;color:#969696;line-height:%?34?%}.distributor.decorate .bottom-info .left-info .money[data-v-4a71919c],\n.distributor.decorate .bottom-info .right-info .money[data-v-4a71919c]{font-size:%?32?%;font-weight:500;line-height:%?44?%;color:#000}.distributor.decorate .bottom-info .left-info .havemoney[data-v-4a71919c],\n.distributor.decorate .bottom-info .right-info .havemoney[data-v-4a71919c]{font-size:%?48?%;line-height:%?68?%;color:#ff6f29}.distributor.decorate .bottom-info .left-info .withdraw.btn[data-v-4a71919c],\n.distributor.decorate .bottom-info .right-info .withdraw.btn[data-v-4a71919c]{width:%?124?%;height:%?50?%;border-radius:%?80?%;background:#ff6f29;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:%?24?%;color:#fff;margin-top:%?20?%}.distributor.decorate .bottom-info .left-info[data-v-4a71919c]{border-right:%?1?% solid #e6e7eb}.distributor.decorate .bottom-info .right-info[data-v-4a71919c]{padding-left:%?48?%}.distributor.decorate .bottom-info .right-info .pending[data-v-4a71919c]{margin-bottom:%?16?%}.distributor.decorate .bottom-info .right-info .check[data-v-4a71919c]{color:#ff6f29;margin-left:%?16?%}',""]),t.exports=o}}]);