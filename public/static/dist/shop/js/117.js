(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[117],{"2c1d":function(t,e,n){"use strict";n.r(e);var o=n("c16c"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},a4816:function(t,e,n){},c16c:function(t,e,n){var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("5530")),a=n("8812"),d=n("2f62"),r={name:"index",computed:(0,i.default)((0,i.default)((0,i.default)({},(0,d.mapState)("goodAddEdit",{model:function(t){return t.model}})),(0,a.stateMap)(["rules"])),(0,a.modelMap)()),data:function(){return{}},mounted:function(){}};e.default=r},d6cc:function(t,e,n){"use strict";n("a4816")},d94c:function(t,e,n){"use strict";n.r(e);var o=n("fb02"),i=n("2c1d");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("d6cc");var d=n("2877"),r=Object(d["a"])(i["default"],o["a"],o["b"],!1,null,"4f77e023",null);e["default"]=r.exports},fb02:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-add-distribution"},[n("Form",{ref:"form",attrs:{rules:t.rules,"label-width":120}},[n("div",{staticClass:"box"},[n("kdx-form-title",[t._v(" 基本信息 ")]),n("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"参与分销：",prop:"join_distibution"}},[n("RadioGroup",{model:{value:t.model.is_commission,callback:function(e){t.$set(t.model,"is_commission",e)},expression:"model.is_commission"}},[n("Radio",{attrs:{label:"0"}},[t._v("不参与")]),n("Radio",{attrs:{label:"1"}},[t._v("参与")])],1),"0"===t.model.is_commission?n("div",[n("kdx-hint-text",{attrs:{content:"如果不参与分销，则不产生分销佣金"}})],1):t._e()],1)],1)])],1)},i=[]}}]);