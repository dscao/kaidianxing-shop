(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"11b3":function(t,e,i){"use strict";i.r(e);var n=i("1920"),o=i("ccd6");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("6d77");var s=i("2877"),a=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"19915884",null);e["default"]=a.exports},1920:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{key:t.item._comIndex_,staticClass:"float-item",class:[{on:t.activeItem,errorInfo:t.errorInfo&&t.errorInfo._comIndex_==t.item._comIndex_},t.item._comIndex_],style:t.getStyle,on:{"!click":function(e){return t.clickTmp(t.item)}}},[t._t("default"),i("div",{staticClass:"del-mask",attrs:{"data-html2canvas-ignore":""}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.onlyOneComponent&&t.currentModal===t.item,expression:"!onlyOneComponent&&currentModal===item"}],staticClass:"del",on:{click:function(e){return e.stopPropagation(),t.delTmp(t.item)}}},[t._v("删除")]),t.modalShow&&t.activeItem?i("div",{staticClass:"del-modal"},[i("div",{staticClass:"del-title"},[t._v("确认删除该组件吗？")]),i("div",{staticClass:"modal-btn-group"},[i("div",{staticClass:"modal-btn sure",on:{click:t.sureHandler}},[t._v("确认")]),i("div",{staticClass:"modal-btn cancel",on:{click:t.cancelHandler}},[t._v("取消")])])]):t._e()]),i("i",{staticClass:"left-border border",attrs:{"data-html2canvas-ignore":""}}),i("i",{staticClass:"right-border border",attrs:{"data-html2canvas-ignore":""}})],2)},o=[]},"6d77":function(t,e,i){"use strict";i("bca7")},7008:function(t,e,i){var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("ac1f"),i("1276");var o=n(i("5530")),r=i("2f62"),s=i("dc11"),a={props:{item:{type:Object,default:null}},data:function(){return{modalShow:!1}},computed:(0,o.default)((0,o.default)({},(0,r.mapState)("decorate",{currentModal:function(t){return t.currentModal},onlyOneComponent:function(t){return t.onlyOneComponent},errorInfo:function(t){return t.errorInfo}})),{},{activeItem:function(){return this.currentModal===this.item&&!this.onlyOneComponent},getStyle:function(){var t=this;if("gotop"==this.item.id){var e={height:(0,s.px2rpx)(this.item.style.width),width:(0,s.px2rpx)(this.item.style.width),margin:"0 ".concat((0,s.px2rpx)(1*this.item.style.left+30)),bottom:(0,s.px2rpx)(1*this.item.style.top+100)};return this.item.params.iconposition.indexOf("left")>-1?e.left=0:e.right=0,e}if("layer"==this.item.id){var i={height:(0,s.px2rpx)(this.item.style.width),width:(0,s.px2rpx)(this.item.style.width),margin:"0 ".concat((0,s.px2rpx)(1*this.item.style.offset_left_right+30))};return this.item.position.split(" ").forEach((function(e){i[e]="top"==e||"bottom"==e?(0,s.px2rpx)(1*t.item.style.offset_up_down+100):0})),i}if("customer"==this.item.id){var n={};return n="1"===this.item.style.showType?{height:(0,s.px2rpx)(this.item.style.width),width:(0,s.px2rpx)(this.item.style.width),margin:"0 ".concat((0,s.px2rpx)(1*this.item.style.offset_left_right+30))}:"one"===this.item.style.styleType?{height:(0,s.px2rpx)(1.1*this.item.style.width),width:(0,s.px2rpx)(this.item.style.width),margin:"0 ".concat((0,s.px2rpx)(1*this.item.style.offset_left_right+30))}:"three"===this.item.style.styleType?{height:(0,s.px2rpx)(this.item.style.width/.25),width:(0,s.px2rpx)(this.item.style.width),margin:"0 ".concat((0,s.px2rpx)(1*this.item.style.offset_left_right))}:{height:(0,s.px2rpx)(this.item.style.width/3.95),width:(0,s.px2rpx)(this.item.style.width),margin:"0 ".concat((0,s.px2rpx)(1*this.item.style.offset_left_right))},this.item.position.split(" ").forEach((function(e){n[e]="top"==e||"bottom"==e?(0,s.px2rpx)(1*t.item.style.offset_up_down+110):0})),n}return{}}}),watch:{activeItem:function(t){t||(this.modalShow=!1)}},methods:(0,o.default)({delTmp:function(){this.modalShow=!0},sureHandler:function(){this.delModal({item:this.item,pageId:this.$route.params.page}),this.modalShow=!1},cancelHandler:function(){this.modalShow=!1},clickTmp:function(t){var e=this;"diymenu"!=t.id&&(this.$emit("beforeChange"),this.$nextTick((function(){e.changeFocus({item:t,pageId:e.$route.params.page})})))}},(0,r.mapMutations)("decorate",["changeFocus","delModal"]))};e.default=a},bca7:function(t,e,i){},ccd6:function(t,e,i){"use strict";i.r(e);var n=i("7008"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a}}]);