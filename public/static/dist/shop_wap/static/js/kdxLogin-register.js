(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{2741:function(e,t,n){"use strict";n.r(t);var o=n("65cc"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},"37cf":function(e,t,n){"use strict";var o=n("94dc"),r=n.n(o);r.a},"56f1":function(e,t,n){var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("3d27")),i=o(n("c997")),a=o(n("a64f")),d={mixins:[a.default],components:{LoginBox:r.default,RegisterCode:i.default}};t.default=d},"65cc":function(e,t,n){var o=n("288e");n("8e6e"),n("ac6a"),n("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a481");var r=o(n("bd86")),i=o(n("1498")),a=o(n("e246")),d=o(n("6e88")),c=o(n("71c5")),u=n("2f62"),l=n("e822");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={components:{LongBtn:i.default,VcodeBtn:a.default,LoginInput:d.default,VcodeImgBtn:c.default},data:function(){return{model:{mobile:"",code:"",verify_code:""},rules:{mobile:[{validator:l.validMobile}],code:[{validator:l.validCode}],verify_code:[{validator:l.validVerify}]},errStatus:{}}},methods:s(s({},(0,u.mapMutations)("login",["setRegistData"])),{},{sendSms:function(){var e=this;(0,l.validate)(this.rules,this.model,(function(t){t&&(t.mobile||t.verify_code)?e.errStatus={mobile:t.mobile,verify_code:t.verify_code}:e.$api.loginApi.sendSms({mobile:e.model.mobile,verify_code:e.model.verify_code,type:"user_reg"}).then((function(t){0===t.error?(e.$refs.code.start(),uni.showToast({title:"发送成功",icon:"none"})):e.$refs.imgCode.refresh()}))}))},submitData:function(){var e=this;(0,l.validate)(this.rules,this.model,(function(t){t?e.errStatus=s({},t):e.validCode()}))},validCode:function(){var e=this;this.$api.loginApi.validateCode({mobile:this.model.mobile,code:this.model.code,type:"user_reg"}).then((function(t){if(0===t.error){e.setRegistData(e.model);var n=getCurrentPages(),o=n.length;n.length>1&&"/kdxLogin/index"!==n[o-1].route?e.$Router.replace("/kdxLogin/setPass"):e.$Router.auto("/kdxLogin/setPass")}else e.$refs.imgCode.refresh()}))},confirmHandler:function(){this.model.mobile&&this.model.code&&this.model.verify_code&&(this.submitData(),uni.hideKeyboard())}})};t.default=v},"81d0":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-a2238180] .grace-page-body{background-color:#fff}[data-v-a2238180] .register-code .my-long-button{margin:%?96?% auto 0;width:%?590?%}',""]),e.exports=t},"94dc":function(e,t,n){var o=n("81d0");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("cce86770",o,!0,{sourceMap:!1,shadowMode:!1})},a098:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("login-box",{attrs:{"is-login":!1}},[n("register-code")],1)},i=[]},a6d5:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"register-code"},[n("login-input",{attrs:{type:"number",maxlength:11,placeholder:"请输入手机号",clearable:!0,"error-text":e.errStatus.mobile},on:{"update:errorText":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.errStatus,"mobile",t)},"update:error-text":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.errStatus,"mobile",t)}},model:{value:e.model.mobile,callback:function(t){e.$set(e.model,"mobile",t)},expression:"model.mobile"}}),n("login-input",{attrs:{placeholder:"请输入图形验证码",required:!0,maxlength:4,"error-text":e.errStatus.verify_code},on:{"update:errorText":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.errStatus,"verify_code",t)},"update:error-text":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.errStatus,"verify_code",t)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("vcode-img-btn",{ref:"imgCode"})]},proxy:!0}]),model:{value:e.model.verify_code,callback:function(t){e.$set(e.model,"verify_code",t)},expression:"model.verify_code"}}),n("login-input",{attrs:{type:"number",maxlength:6,"error-text":e.errStatus.code,placeholder:"请输入短信验证码","confirm-type":"go"},on:{"update:errorText":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.errStatus,"code",t)},"update:error-text":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.errStatus,"code",t)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmHandler.apply(void 0,arguments)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("vcode-btn",{ref:"code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendSms.apply(void 0,arguments)}}})]},proxy:!0}]),model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}}),n("long-btn",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitData.apply(void 0,arguments)}}},[e._v("下一步")])],1)},i=[]},c997:function(e,t,n){"use strict";n.r(t);var o=n("a6d5"),r=n("2741");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var a,d=n("f0c5"),c=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},dfaa:function(e,t,n){"use strict";n.r(t);var o=n("56f1"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},ee7c:function(e,t,n){"use strict";n.r(t);var o=n("a098"),r=n("dfaa");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("37cf");var a,d=n("f0c5"),c=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"a2238180",null,!1,o["a"],a);t["default"]=c.exports}}]);