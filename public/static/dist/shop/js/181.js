(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[181],{7456:function(t,e,n){},8319:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"market-other-setting"},[n("kdx-content-bar",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"btn",fn:function(){return[n("Button",{staticClass:"primary-long",attrs:{disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[n("div",{staticClass:"label-content"},[n("kdx-form-title",[t._v("优惠券统一说明")]),n("Form",{ref:"form",attrs:{model:t.model,"label-width":130}},[n("FormItem",{attrs:{label:"优惠券使用说明："}},[n("editor",{attrs:{height:667},model:{value:t.model.use_content,callback:function(e){t.$set(t.model,"use_content",e)},expression:"model.use_content"}}),n("kdx-hint-text",[t._v("统一说明会放到购物券单独说明的前面")])],1)],1)],1)])],1)},o=[]},"865b":function(t,e,n){"use strict";n.r(e);var a=n("8319"),o=n("e8ac");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("dc22");var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"16d67852",null);e["default"]=s.exports},dc22:function(t,e,n){"use strict";n("7456")},e8ac:function(t,e,n){"use strict";n.r(e);var a=n("eee6"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},eee6:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("ceb0")),i={name:"index",components:{Editor:o.default},data:function(){return{model:{use_content:""},loading:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("sale.coupon.set.manage")}},methods:{getData:function(){var t=this;this.loading=!0,this.resetModel(),this.$api.marketApi.getOtherSetting().then((function(e){t.loading=!1,0===e.error&&(t.model=e,delete t.model.error)}))},handleSave:function(){var t=this;this.loading=!0,this.$api.marketApi.saveOtherSetting(this.model).then((function(e){t.loading=!1,0===e.error&&(t.$Message.success("其他设置保存成功"),t.getData())}))},resetModel:function(){this.model={use_content:""}}},mounted:function(){this.getData()}};e.default=i}}]);