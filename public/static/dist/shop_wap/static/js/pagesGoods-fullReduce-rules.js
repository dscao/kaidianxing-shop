(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{"37e1":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return c})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"activity-rules"},[n("div",{staticClass:"title"},[t._v("活动内容")]),n("div",{staticClass:"activity-content"},[t._v(t._s(t.activityRule))]),n("div",{staticClass:"title"},[t._v("活动时间")]),t.activityInfo?n("div",{staticClass:"activity-time"},[t._v(t._s(t.activityInfo.start_time)+" ~ "+t._s(t.activityInfo.end_time))]):t._e()])},c=[]},4376:function(t,i,n){var e=n("e8ab");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("e51d77b8",e,!0,{sourceMap:!1,shadowMode:!1})},"79e55":function(t,i,n){"use strict";var e=n("4376"),a=n.n(e);a.a},"81f1":function(t,i,n){"use strict";n.r(i);var e=n("c712"),a=n.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(c);i["default"]=a.a},b29f:function(t,i,n){"use strict";n.r(i);var e=n("37e1"),a=n("81f1");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(c);n("79e55");var o,r=n("f0c5"),d=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"47e3b7f2",null,!1,e["a"],o);i["default"]=d.exports},c712:function(t,i,n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("ac6a");var e={name:"rules",data:function(){return{activityInfo:null,activityId:"",activityRule:""}},onLoad:function(){this.activityId=this.$Route.query.id,this.getActivity()},methods:{getActivity:function(){var t=this;this.$api.goodsApi.getFullReduceActivity({activity_id:this.activityId,page:1}).then((function(i){0===i.error&&(t.activityInfo=i.activity,t.getActivityRules())}))},getActivityRules:function(){var t={1:{middle:"减",startUnit:"￥",endUnit:"￥",end:""},2:{middle:"打",startUnit:"￥",endUnit:"",end:"折"},3:{middle:"减",startUnit:"",endUnit:"￥",end:""},4:{middle:"打",startUnit:"",endUnit:"",end:"折"}},i=t[this.activityInfo.type],n=this.activityInfo.rules,e="";n.preferential_rules.forEach((function(t,a){a>0&&(e+="；"),e+="".concat(1===+n.preferential_type?"满":"每满").concat(i.startUnit).concat(t.condition).concat(3==n.type||4==n.type?"件":"").concat(i.middle).concat(i.endUnit).concat(t.value).concat(i.end)})),this.activityRule=e}}};i.default=e},e8ab:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.activity-rules[data-v-47e3b7f2]{position:relative;min-height:100%;padding:0 %?24?%;background-color:#fff}.activity-rules .title[data-v-47e3b7f2]{font-size:%?24?%;line-height:%?34?%;font-weight:700;color:#121212;padding-top:%?32?%}.activity-rules .activity-content[data-v-47e3b7f2],\n.activity-rules .activity-time[data-v-47e3b7f2]{padding-top:%?16?%;font-size:%?24?%;line-height:%?34?%;color:#969696}',""]),t.exports=i}}]);