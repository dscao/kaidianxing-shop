(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0537":function(t,n,e){"use strict";var i=e("3db0"),a=e.n(i);a.a},"3db0":function(t,n,e){var i=e("806b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("489ec22b",i,!0,{sourceMap:!1,shadowMode:!1})},5042:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{imgStyle:{type:String,default:""},componentData:{type:Object,default:function(){return{imgName:"shop_app_expire.png",tip:"该功能已下架，暂不能访问"}}}},methods:{toIndex:function(){this.$emit("custom-event",{target:"noticeModules/toIndex",data:this.componentData})}}};n.default=e},"7e54":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"notice-page"},[e("v-uni-view",{staticClass:"img-box"},[e("img",{staticClass:"close-img",style:t.imgStyle,attrs:{src:t.$utils.staticMediaUrl(t.componentData.imgName)}}),e("v-uni-view",{staticClass:"close-text"},[t._v(t._s(t.componentData.tip))])],1),e("div",{staticClass:"wrap"},[!1!==t.componentData.showBtn?e("btn",{attrs:{classNames:["w100"],ghost:!0,type:"do",size:"middle"},on:{"btn-click":function(n){arguments[0]=n=t.$handleEvent(n),t.toIndex.apply(void 0,arguments)}}},[t._v(t._s(t.componentData.content||"去首页"))]):t._e()],1)],1)},o=[]},"806b":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.notice-page[data-v-48166588]{width:100%;height:100%;position:relative}.notice-page .img-box[data-v-48166588]{padding-top:%?180?%}.notice-page .img-box .close-img[data-v-48166588]{display:block;margin:0 auto;width:%?290?%;height:%?320?%}.notice-page .img-box .close-text[data-v-48166588]{margin-top:%?32?%;font-size:%?24?%;text-align:center;line-height:%?40?%;color:#969696}.notice-page .btn[data-v-48166588]{margin:%?60?% auto;border-radius:%?128?%;width:%?200?%;height:%?64?%;font-size:%?28?%;line-height:%?60?%;font-weight:%?1200?%;text-align:center;color:#ff3c29;\n  /*background: #ffffff;*/border:%?1?% solid #ff3c29}.wrap[data-v-48166588]{padding-top:%?48?%;text-align:center}',""]),t.exports=n},9438:function(t,n,e){"use strict";e.r(n);var i=e("5042"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},f5a1:function(t,n,e){"use strict";e.r(n);var i=e("7e54"),a=e("9438");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("0537");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"48166588",null,!1,i["a"],r);n["default"]=s.exports}}]);