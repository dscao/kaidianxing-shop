(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"0bcf":function(t,e,i){"use strict";i.r(e);var o=i("30972"),n=i("1577");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("78ed5");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"86b1b73a",null,!1,o["a"],s);e["default"]=l.exports},1487:function(t,e,i){var o=i("288e");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("bd86"));function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i("a481");var r=null,l={name:"GoodsGroup",props:{item:{type:Object,default:function(){}},hasBtn:{type:Boolean,default:!0}},data:function(){return{preloading:!0,loading:{},timestamp:null,dateTimer:null}},computed:{getLoadingSrc:function(){var t,e,i,o;return null!==(t=this.$store.state.setting.systemSetting)&&void 0!==t&&null!==(e=t.basic)&&void 0!==e&&e.loading?this.$store.state.setting.cacheLoadingImg||this.$utils.media(null===(i=this.$store.state.setting.systemSetting)||void 0===i||null===(o=i.basic)||void 0===o?void 0:o.loading):this.$utils.staticImg("decorate/goods_col2.png")},getGroupsPrice:function(){var t,e,i,o=(null===(t=this.item.activities)||void 0===t?void 0:t.groups)||(null===(e=this.item.activities)||void 0===e?void 0:e.preheat_activity)||{};return 0==this.item.has_option&&"0"==o.inner_type?o.activity_price:(null===o||void 0===o||null===(i=o.price_range)||void 0===i?void 0:i.min_price)||0},getPrice:function(){return"1"==this.item.has_option?this.item.price:this.item.min_price},isPreheat:function(){var t;return null===(t=this.item.activities)||void 0===t?void 0:t.preheat_activity},getGroupsNum:function(){var t,e,i,o=null===(t=this.item)||void 0===t||null===(e=t.activities)||void 0===e?void 0:e.groups;return 0==(null===o||void 0===o?void 0:o.inner_type)?"".concat(null===o||void 0===o||null===(i=o.rules)||void 0===i?void 0:i.success_num,"人团"):"阶梯团"}},mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),3e3)},methods:{loaded:function(t){var e=this;if(t){var i=t.replace(/\./g,"_");this.loading[i]=!1,clearTimeout(r),r=setTimeout((function(){e.loading=s({},e.loading)}),100)}},clickGood:function(){this.$emit("on-click",this.item)},addCart:function(){this.$emit("custom-event",{type:"addCart",data:{goods_id:this.item.id}})},toDetail:function(){this.$Router.auto({path:"/pagesGoods/detail/index",query:{goods_id:this.item.id}})}},filters:{formatMoney:function(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseInt(t/100)/100+"万":parseFloat(t):0}}};e.default=l},1577:function(t,e,i){"use strict";i.r(e);var o=i("1487"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"1d08":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("kdx-page-box",[i("div",{staticClass:"full-reduce"},[i("div",{staticClass:"header-box"},[i("img",{staticClass:"header-image",attrs:{src:t.$utils.staticImg("activity/full_reduce/full_reduce_bg.png")}}),i("div",{staticClass:"count-down"},[i("div",{class:["count-box",{"no-day-time":t.countTime.day<=0}]},[t.countTime.day>0?[t._l(t.countTime.day,(function(e,o){return i("span",{key:o+"_day",staticClass:"time"},[t._v(t._s(e))])})),i("span",{staticClass:"text"},[t._v("天")])]:t._e(),t._l(t.countTime.hour,(function(e,o){return i("span",{key:o+"_hour",staticClass:"time"},[t._v(t._s(e))])})),i("span",{staticClass:"colon"},[t._v(":")]),t._l(t.countTime.minute,(function(e,o){return i("span",{key:o+"_minute",staticClass:"time"},[t._v(t._s(e))])})),i("span",{staticClass:"colon"},[t._v(":")]),t._l(t.countTime.second,(function(e,o){return i("span",{key:o+"_second",staticClass:"time"},[t._v(t._s(e))])}))],2)])])]),i("div",{staticClass:"activity-rule"},[i("div",{staticClass:"left"},[i("div",{staticClass:"instr"},[t._v("以下商品可使用如下优惠")]),t.activityRule.length?i("div",{staticClass:"condition line-hide"},t._l(t.activityRule,(function(e,o){return i("span",{key:o},[o>0?i("span",[t._v("；")]):t._e(),t._v(t._s(1==t.activeInfo.rules.preferential_type?"满":"每满")),i("span",{staticClass:"price"},[t._v(t._s(e.startUnit)+t._s(e.condition))]),3==t.type||4==t.type?i("span",[t._v("件")]):t._e(),t._v(t._s(e.middle)),i("span",{staticClass:"price"},[t._v(t._s(e.endUnit)+t._s(e.value))]),t._v(t._s(e.end))])})),0):t._e()]),i("div",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookActivityRule.apply(void 0,arguments)}}},[t._v("活动规则"),i("i",{staticClass:"iconfont-m- icon-m-right"})])]),i("div",{staticClass:"goods-box"},[t._l(t.list,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-list"},[i("full-reduce-goods",{attrs:{item:e},on:{"custom-event":function(e){arguments[0]=e=t.$handleEvent(e),t.eventHandler.apply(void 0,arguments)}}})],1)})),t.list.length!=t.count?i("kdx-page-loading",{attrs:{loadingType:t.loadingType}}):t._e(),!t.loading&&t.count<=0?[i("v-uni-view",{staticClass:"default-page flex-column"},[i("v-uni-view",{staticClass:"bg"},[i("v-uni-image",{attrs:{src:t.$utils.staticImg("default/search.png")}})],1),i("v-uni-view",{staticClass:"default-text"},[t._v("没找到相关宝贝")])],1)]:t._e()],2),i("goods-picker",{ref:"goodsPicker",on:{"custom-event":function(e){arguments[0]=e=t.$handleEvent(e),t.customEventHandler.apply(void 0,arguments)}}})],1)},a=[]},"2d77":function(t,e,i){var o=i("288e");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("bd86"));function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i("a481");var r=null,l={name:"GoodsGroup",props:{item:{type:Object,default:function(){}},hasBtn:{type:Boolean,default:!0}},data:function(){return{preloading:!0,loading:{},timestamp:null,dateTimer:null}},computed:{getLoadingSrc:function(){var t,e,i,o;return null!==(t=this.$store.state.setting.systemSetting)&&void 0!==t&&null!==(e=t.basic)&&void 0!==e&&e.loading?this.$store.state.setting.cacheLoadingImg||this.$utils.media(null===(i=this.$store.state.setting.systemSetting)||void 0===i||null===(o=i.basic)||void 0===o?void 0:o.loading):this.$utils.staticImg("decorate/goods_col2.png")},getGroupsPrice:function(){var t,e,i,o=(null===(t=this.item.activities)||void 0===t?void 0:t.groups)||(null===(e=this.item.activities)||void 0===e?void 0:e.preheat_activity)||{};return 0==this.item.has_option&&"0"==o.inner_type?o.activity_price:(null===o||void 0===o||null===(i=o.price_range)||void 0===i?void 0:i.min_price)||0},getPrice:function(){return"1"==this.item.has_option?this.item.price:this.item.min_price},isPreheat:function(){var t;return null===(t=this.item.activities)||void 0===t?void 0:t.preheat_activity},getGroupsNum:function(){var t,e,i,o=null===(t=this.item)||void 0===t||null===(e=t.activities)||void 0===e?void 0:e.groups;return 0==(null===o||void 0===o?void 0:o.inner_type)?"".concat(null===o||void 0===o||null===(i=o.rules)||void 0===i?void 0:i.success_num,"人团"):"阶梯团"}},mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),3e3)},methods:{loaded:function(t){var e=this;if(t){var i=t.replace(/\./g,"_");this.loading[i]=!1,clearTimeout(r),r=setTimeout((function(){e.loading=s({},e.loading)}),100)}},clickGood:function(){this.$emit("on-click",this.item)}},filters:{formatMoney:function(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseInt(t/100)/100+"万":parseFloat(t):0}}};e.default=l},30972:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-reduce-goods",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail.apply(void 0,arguments)}}},[i("div",{staticClass:"image-box"},[t.item.preloading&&t.preloading?i("img",{staticClass:"goods-img preload",attrs:{mode:"widthFix","lazy-load":!0,src:t.getLoadingSrc,alt:""}}):t._e(),i("img",{staticClass:"goods-img",class:{loading:t.item.preloading&&t.preloading},attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.media(t.item.thumb),alt:""},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.loaded(t.item.thumb)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.loaded(t.item.thumb)}}})]),i("div",{staticClass:"goods-content"},[i("div",[i("div",{staticClass:"goods-title omit-2"},[t._v(t._s(t.item.title))]),t.item.sub_name?i("div",{staticClass:"goods-sub-title line-hide"},[t._v(t._s(t.item.sub_name))]):t._e()]),i("div",{staticClass:"goods-price-box",class:{"align-end":t.item.original_price<=0}},[i("div",{staticClass:"goods-price"},[i("div",{staticClass:"price"},[t._v("￥"),i("span",{staticClass:"primary-price"},[t._v(t._s(t._f("formatMoney")(t.item.min_price)))])]),t.item.original_price>0?i("div",{staticClass:"del-price"},[t._v("￥"+t._s(t._f("formatMoney")(t.item.original_price)))]):t._e()]),i("div",{staticClass:"buy-btn"},[i("div",{staticClass:"buy-btn-icon",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.addCart.apply(void 0,arguments)}}},[i("i",{staticClass:"iconfont-m- icon-m-buy1"})]),t.item.sales?i("div",{staticClass:"sales"},[t._v("销量："+t._s(t.item.sales))]):t._e()])])])])},a=[]},4640:function(t,e,i){var o=i("e994");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("74c33adc",o,!0,{sourceMap:!1,shadowMode:!1})},"575b":function(t,e,i){(function(t){var o=i("288e");i("8e6e"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("bd86"));i("96cf");var a=o(i("3b8d"));i("6b54"),i("ac6a"),i("a481"),i("6762"),i("2fdb"),i("28a5");var s=o(i("90ca")),r=o(i("0bcf")),l=o(i("b703")),d=o(i("cfe0"));function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={components:{Goods:s.default,FullReduceGoods:r.default,goodsPicker:d.default},data:function(){return{list:[],page:1,loading:!1,count:0,reqesting:!1,activityId:"",countTime:{day:[1,2,0],hour:[2,3],minute:[5,9],second:[5,9]},activeInfo:null,isFinish:!1,activityRule:[],type:""}},computed:{loadingType:function(){var t=0;return this.loading?t=1:this.list.length==this.count&&this.count>0&&0==this.loading&&(t=2),t}},onShow:function(){var t;if(null!==(t=this.$Route.query)&&void 0!==t&&t.scene){var e,i,o,n,a=decodeURIComponent(null===(e=this.$Route)||void 0===e||null===(i=e.query)||void 0===i?void 0:i.scene),s=a.split("&"),r=s.filter((function(t){return t.indexOf("id")>-1}));null!==r&&void 0!==r&&r.length&&(this.activityId=null===r||void 0===r||null===(o=r[0])||void 0===o||null===(n=o.split("="))||void 0===n?void 0:n[1])}else this.activityId=this.$Route.query.id,this.reset()},mounted:function(){var t=this;this.cartAdder=new l.default((function(e){var i,o;"toggle"==e.type&&(null===(i=t.$refs)||void 0===i||i.goodsPicker.toggle(t.cartAdder.pickerCallback,null===(o=e.data)||void 0===o?void 0:o.type),!t.$refs.goodsPicker.showmodal&&e.data.errorInfo&&t.$toast(e.data.errorInfo))}))},methods:{getActivity:function(){var e=this;this.requesting||(uni.showLoading(),this.$api.goodsApi.getFullReduceActivity({activity_id:this.activityId,page:this.page}).then((function(t){if(0==t.error){var i,o=t.activity,n=t.goods;if(!e.activeInfo)e.activeInfo=o,e.type=null===(i=o.rules)||void 0===i?void 0:i.type,e.getActivityRules(),uni.setNavigationBarTitle({title:[1,3].includes(+o.type)?"满减":"满折"});e.isFinish=o.status<0,e.list=e.list.concat(n.list),e.page=e.page+1,e.loading=!1,e.count=n.total,e.graceLazyload.load(0,e),e.reqesting=!1,e.isFinish?e.$Router.replace("/pagesGoods/activity/expire"):e.cutdownTime()}})).catch((function(e){t.log(e)})).finally((function(){uni.hideLoading()})))},reset:function(){this.list=[],this.page=1,this.getActivity(),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},cutdownTime:function(){var t=this.activeInfo.end_time,e=new Date(Date.parse(t.replace(/-/g,"/"))).getTime();if(e-Date.now()>0){var i=e/1e3;this.startCount(i)}},startCount:function(t){var e=this;this.countTime=o(this.$utils.countDown(t,!1));var i=setInterval((function(){e.countTime=o(e.$utils.countDown(t,!1))}),1e3);function o(t){if(0==t)return clearInterval(i),this.reset(),t;var e={0:"day",1:"hour",2:"minute",3:"second"},o={};return t.forEach((function(t,i){o[e[i]]=t.toString().split("")})),o}this.$once("hook:beforeDestroy",(function(){clearInterval(i)}))},clickGoods:function(t){this.$Router.auto({path:"/pagesGoods/detail/index",query:{goods_id:t.id}})},eventHandler:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("quickPurchase/checkLoginStatus");case 2:this.cartAdder.getGoodDetail(e.data.goods_id,"...giftCard/goods/index.vue").then((function(t){if(0===t.error){var e,o,n,a,s,r,l,d,c,u;if(!("2"!=(null===t||void 0===t||null===(e=t.data)||void 0===e||null===(o=e.goods)||void 0===o?void 0:o.type)||null!==t&&void 0!==t&&null!==(n=t.plugin_account)&&void 0!==n&&n.virtualAccount)||!("3"!=(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(s=a.goods)||void 0===s?void 0:s.type)||null!==t&&void 0!==t&&null!==(r=t.plugin_account)&&void 0!==r&&r.appointment))return void i.$toast("商品暂时无法购买");"3"==(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(d=l.goods)||void 0===d?void 0:d.type)?i.$Router.auto({path:"/pagesGoods/detail/index",query:{goods_id:null===t||void 0===t||null===(c=t.data)||void 0===c||null===(u=c.goods)||void 0===u?void 0:u.id}}):i.cartAdder.callback({type:"toggle",data:{type:"spec"}})}}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getActivityRules:function(){var e,i,o=this;t.log("activyty-rules",this.activeInfo,this.activeInfo.type),this.activityRule=null===(e=this.activeInfo)||void 0===e||null===(i=e.rules)||void 0===i?void 0:i.preferential_rules.map((function(t){var e,i,n=+(null===(e=o.activeInfo)||void 0===e||null===(i=e.rules)||void 0===i?void 0:i.type);return u({middle:[1,3].includes(n)?"减":"打",startUnit:[1,2].includes(n)?"￥":"",endUnit:[1,3].includes(n)?"￥":"",end:[2,4].includes(n)?"折":""},t)})),t.log("activity-rule",this.activityRule)},lookActivityRule:function(){this.$Router.push({path:"/pagesGoods/fullReduce/rules",query:{id:this.activityId}})},customEventHandler:function(t){var e;(this.cartAdder.pickerCallback(t),"clickBtn"===t.type)&&(null===(e=this.$refs)||void 0===e||e.goodsPicker.toggle())}},onPullDownRefresh:function(){uni.showLoading({title:"加载中"}),this.reset()},onReachBottom:function(){this.list.length==this.count&&this.page>1||this.getActivity()},onPageScroll:function(t){this.graceLazyload.load(t.scrollTop,this)}};e.default=f}).call(this,i("5a52")["default"])},"78ed5":function(t,e,i){"use strict";var o=i("4640"),n=i.n(o);n.a},"7aef":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods-group"},[i("div",{staticClass:"image-box"},[t.item.preloading&&t.preloading?i("img",{staticClass:"goods-img preload",attrs:{mode:"widthFix","lazy-load":!0,src:t.getLoadingSrc,alt:""}}):t._e(),i("img",{staticClass:"goods-img",class:{loading:t.item.preloading&&t.preloading},attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.media(t.item.thumb),alt:""},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.loaded(t.item.thumb)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.loaded(t.item.thumb)}}})]),i("div",{staticClass:"goods-content"},[i("div",[i("div",{staticClass:"goods-title",class:[t.item.sub_name?"omit-1":"omit-2"]},[t.isPreheat?t._e():i("span",{staticClass:"group-label"},[t._v(t._s(t.getGroupsNum))]),t._v(t._s(t.item.title))]),t.item.sub_name?i("div",{staticClass:"goods-sub-title line-hide"},[t._v(t._s(t.item.sub_name))]):t._e()]),i("div",{staticClass:"goods-price-box"},[i("div",{staticClass:"goods-price"},[i("div",{staticClass:"group-price"},[i("span",{staticClass:"name"},[t._v("拼团价")]),i("span",{staticClass:"price"},[i("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t._f("formatMoney")(t.getGroupsPrice)))])]),i("div",{staticClass:"original-price"},[i("span",{staticClass:"name"},[t._v("单买价")]),i("span",{staticClass:"price"},[i("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t._f("formatMoney")(t.getPrice)))])])]),t.hasBtn?i("div",{staticClass:"buy-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickGood.apply(void 0,arguments)}}},[t._v("马上拼")]):t._e()])])])},a=[]},"90ca":function(t,e,i){"use strict";i.r(e);var o=i("7aef"),n=i("d99e");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("c7ca");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"51688340",null,!1,o["a"],s);e["default"]=l.exports},"96d3":function(t,e,i){"use strict";i.r(e);var o=i("575b"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},b0df:function(t,e,i){var o=i("f644");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("face68aa",o,!0,{sourceMap:!1,shadowMode:!1})},b703:function(t,e,i){var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=o(i("3b8d")),a=o(i("d225")),s=o(i("b0b4")),r=o(i("4360")),l=i("a18c"),d=i("3f1e"),c=function(){function t(e){(0,a.default)(this,t),this.optionId=0,this.optionChoseNum=1,this.callback=null,this.callback=e,this.pickerCallback=this.pickerCallback.bind(this)}return(0,s.default)(t,[{key:"pickerCallback",value:function(t){var e=this;return new Promise(function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(o,n){var a,s,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if("clickBtn"!==(null===t||void 0===t?void 0:t.type)||"cart"!==t.data.type){i.next=10;break}if(!(0,d.hasBindBySence)("add_cart")){i.next=5;break}return r.default.commit("login/setModal",!0),o({type:"clickBtn"}),i.abrupt("return");case 5:return i.next=7,r.default.dispatch("quickPurchase/addCart",{option_id:e.optionId,total:e.optionChoseNum});case 7:o(),i.next=20;break;case 10:if("clickBtn"!==(null===t||void 0===t?void 0:t.type)||"buy"!==t.data.type){i.next=19;break}return i.next=13,r.default.dispatch("quickPurchase/createOrder",{option_id:e.optionId,total:e.optionChoseNum});case 13:a=i.sent,o(),r.default.commit("form/resetForm"),l.router.push({path:"/pagesOrder/create",query:a}),i.next=20;break;case 19:"choose"==t.type?e.optionId=(null===t||void 0===t||null===(s=t.data)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.id)||0:"changeNum"==t.type?e.optionChoseNum=t.data.total:t&&e.callback&&e.callback(t);case 20:case"end":return i.stop()}}),i)})));return function(t,e){return i.apply(this,arguments)}}())}},{key:"getGoodDetail",value:function(t){return r.default.commit("form/resetForm"),new Promise((function(e,i){r.default.dispatch("quickPurchase/getQuickPurchaseData",{goodId:t}).then((function(t){0==t.error?e(t):i(t),uni.hideLoading()})).catch((function(t){i(t),uni.hideLoading()}))}))}}]),t}();e.default=c},c17d:function(t,e,i){var o=i("d134");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("42298b61",o,!0,{sourceMap:!1,shadowMode:!1})},c7ca:function(t,e,i){"use strict";var o=i("b0df"),n=i.n(o);n.a},d134:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.full-reduce[data-v-7f62ee5e]{position:relative;height:%?420?%}.full-reduce .header-image[data-v-7f62ee5e]{height:%?420?%;width:%?750?%}.full-reduce .count-down[data-v-7f62ee5e]{position:absolute;left:0;right:0;bottom:%?80?%;width:%?702?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 auto}.full-reduce .count-down .count-box[data-v-7f62ee5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?32?%;color:#fff}.full-reduce .count-down .count-box > span[data-v-7f62ee5e]{margin-right:%?4?%;font-weight:700}.full-reduce .count-down .count-box > span[data-v-7f62ee5e]:last-child{padding-right:0}.full-reduce .count-down .count-box .time[data-v-7f62ee5e]{width:%?28?%;height:%?36?%;text-align:center;background-color:#fff;color:#ff3c29;border-radius:%?4?%;font-size:%?28?%;line-height:%?40?%}.full-reduce .count-down .count-box .text[data-v-7f62ee5e]{font-size:%?28?%;line-height:%?40?%;color:#fff}.full-reduce .count-down .count-box .colon[data-v-7f62ee5e]{line-height:%?32?%;color:#fff}.full-reduce .count-down .no-day-time .time[data-v-7f62ee5e]{width:%?40?%;height:%?50?%;font-size:%?36?%;line-height:%?50?%}.activity-rule[data-v-7f62ee5e]{position:relative;top:%?-30?%;margin:0 %?24?%;padding:%?24?%;background-color:#fff;border-radius:%?12?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;line-height:%?32?%}.activity-rule .left[data-v-7f62ee5e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0}.activity-rule .instr[data-v-7f62ee5e]{color:#969696}.activity-rule .condition[data-v-7f62ee5e]{color:#212121;padding-top:%?8?%}.activity-rule .condition .price[data-v-7f62ee5e]{color:#ff3c29}.activity-rule .right[data-v-7f62ee5e]{-webkit-flex-shrink:0;flex-shrink:0;color:#969696;padding-left:%?64?%}.goods-box[data-v-7f62ee5e]{margin-top:%?-14?%;padding:0 %?24?%}.goods-box .goods-list[data-v-7f62ee5e]{margin-bottom:%?16?%;background-color:#fff;border-radius:%?12?%}',""]),t.exports=e},d99e:function(t,e,i){"use strict";i.r(e);var o=i("2d77"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},e251:function(t,e,i){"use strict";i.r(e);var o=i("1d08"),n=i("96d3");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("fba0");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"7f62ee5e",null,!1,o["a"],s);e["default"]=l.exports},e994:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.full-reduce-goods[data-v-86b1b73a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?16?% %?24?%;background:#fff;border-radius:%?12?%;overflow:hidden}.full-reduce-goods .image-box[data-v-86b1b73a]{position:relative;width:%?220?%;height:%?220?%;-webkit-flex-shrink:0;flex-shrink:0}.full-reduce-goods .image-box .goods-img[data-v-86b1b73a]{width:100%;height:100%;border-radius:%?12?%}.full-reduce-goods .goods-content[data-v-86b1b73a]{padding-left:%?24?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?220?%}.full-reduce-goods .goods-content .goods-sub-title[data-v-86b1b73a]{font-size:%?24?%;line-height:%?34?%;color:#969696;padding-top:%?8?%}.full-reduce-goods .goods-content .goods-price-box[data-v-86b1b73a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:10px}.full-reduce-goods .goods-content .goods-price-box .align-end[data-v-86b1b73a]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.full-reduce-goods .goods-content .goods-price .price[data-v-86b1b73a]{color:#ff3c29;font-size:%?24?%;line-height:%?34?%}.full-reduce-goods .goods-content .goods-price .price .primary-price[data-v-86b1b73a]{font-size:%?32?%;line-height:%?40?%;font-weight:700}.full-reduce-goods .goods-content .goods-price .del-price[data-v-86b1b73a]{padding-top:%?4?%;font-size:%?20?%;line-height:%?28?%;color:#969696;-webkit-text-decoration-line:line-through;text-decoration-line:line-through}.full-reduce-goods .goods-content .buy-btn[data-v-86b1b73a]{text-align:right}.full-reduce-goods .goods-content .buy-btn .iconfont-m-[data-v-86b1b73a]{color:#ff3c29;font-size:24px}.full-reduce-goods .goods-content .buy-btn .sales[data-v-86b1b73a]{font-size:%?20?%;line-height:%?28?%;color:#969696}.full-reduce-goods .goods-content .group-price .name[data-v-86b1b73a],\n.full-reduce-goods .goods-content .original-price .name[data-v-86b1b73a]{margin-right:%?8?%}.full-reduce-goods .goods-content .group-price[data-v-86b1b73a]{font-size:%?24?%;line-height:%?34?%;color:#ff3c29;padding-top:%?8?%;padding-bottom:%?4?%}.full-reduce-goods .goods-content .group-price .price[data-v-86b1b73a]{font-size:%?32?%;font-weight:700;line-height:%?46?%}.full-reduce-goods .goods-content .group-price .unit[data-v-86b1b73a]{font-size:%?24?%;line-height:%?34?%}.full-reduce-goods .goods-content .original-price[data-v-86b1b73a]{font-size:%?24?%;line-height:%?34?%;color:#969696}.group-label[data-v-86b1b73a]{font-size:%?20?%;line-height:%?28?%;padding:%?2?% %?8?%;color:#ff6f29;background:#fff9f0;border:%?2?% solid #ffdaa3}.goods-title[data-v-86b1b73a]{font-size:%?28?%;line-height:%?40?%;color:#212121}.goods-title .group-label[data-v-86b1b73a]{border-radius:%?4?%;margin-right:%?4?%}.omit-1[data-v-86b1b73a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.omit-2[data-v-86b1b73a]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',""]),t.exports=e},f644:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goods-group[data-v-51688340]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?16?% %?24?%;border-radius:%?12?%;background:#fff}.goods-group .image-box[data-v-51688340]{position:relative;width:%?220?%;height:%?220?%;border-radius:%?12?%;overflow:hidden;-webkit-flex-shrink:0;flex-shrink:0}.goods-group .image-box .goods-img[data-v-51688340]{width:100%;height:100%;border-radius:%?12?%}.goods-group .goods-content[data-v-51688340]{padding-left:%?24?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?220?%}.goods-group .goods-content .goods-sub-title[data-v-51688340]{font-size:%?24?%;line-height:%?34?%;color:#969696;padding-top:%?8?%}.goods-group .goods-content .goods-price-box[data-v-51688340]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-group .goods-content .group-price .name[data-v-51688340],\n.goods-group .goods-content .original-price .name[data-v-51688340]{margin-right:%?8?%}.goods-group .goods-content .group-price[data-v-51688340]{font-size:%?24?%;line-height:%?34?%;color:#ff3c29;padding-top:%?8?%;padding-bottom:%?4?%}.goods-group .goods-content .group-price .price[data-v-51688340]{font-size:%?32?%;font-weight:700;line-height:%?46?%}.goods-group .goods-content .group-price .unit[data-v-51688340]{font-size:%?24?%;line-height:%?34?%}.goods-group .goods-content .original-price[data-v-51688340]{font-size:%?24?%;line-height:%?34?%;color:#969696}.goods-group .goods-content .buy-btn[data-v-51688340]{border-radius:%?48?%;width:%?128?%;height:%?54?%;font-size:%?24?%;font-weight:700;text-align:center;line-height:%?54?%;color:#fff;background:-webkit-linear-gradient(335.43deg,#ff8a00 19.05%,#ff4c14 87.67%);background:linear-gradient(114.57deg,#ff8a00 19.05%,#ff4c14 87.67%)}.group-label[data-v-51688340]{font-size:%?20?%;line-height:%?28?%;padding:%?2?% %?8?%;color:#ff6f29;background:#fff9f0;border:%?2?% solid #ffdaa3}.goods-title[data-v-51688340]{font-size:%?28?%;line-height:%?40?%;color:#212121}.goods-title .group-label[data-v-51688340]{border-radius:%?4?%;margin-right:%?4?%}.omit-1[data-v-51688340]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.omit-2[data-v-51688340]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}',""]),t.exports=e},fba0:function(t,e,i){"use strict";var o=i("c17d"),n=i.n(o);n.a}}]);