(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{"044b":function(t,i,e){var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("3c51")),o=a(e("c58f")),r={name:"ListGoodCard",components:{RefundGoodsList:n.default,GoodsInfo:o.default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{orderList:[],cancelModal:!1}},watch:{list:{handler:function(t){this.orderList=t}}},computed:{backgroundImage:function(){return"background-image:url(".concat(this.$utils.staticMediaUrl("decorate/logo_default.png"),")")}},methods:{toDetail:function(t){var i=t.order_id,e=t.order_goods_id,a={order_id:i};"0"!==e&&(a.order_goods_id=e),this.$Router.auto({path:"/kdxOrder/refund/detail",query:a})},goGoodsDetail:function(t){var i,e="";i="/kdxGoods/detail/index",e={goods_id:t.id},this.$Router.auto({path:i,query:e})},getClass:function(t){var i={1:"icon-m-jintuikuan1 refund",2:"icon-m-tuihuotuikuan return",3:"icon-m-huanhuo1 exchange"};return i[t]}},filters:{getType:function(t){var i={1:"退款",2:"退货退款",3:"换货"};return i[t]}}};i.default=r},"2d14":function(t,i,e){"use strict";e.r(i);var a=e("91b2"),n=e("953f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("be64");var r,d=e("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"418625e8",null,!1,a["a"],r);i["default"]=s.exports},"453c":function(t,i,e){"use strict";var a=e("5997"),n=e.n(a);n.a},5997:function(t,i,e){var a=e("761a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("bb235934",a,!0,{sourceMap:!1,shadowMode:!1})},6285:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"list-goods-card"},t._l(t.orderList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"card-item"},[e("v-uni-view",{staticClass:"create-time flex"},[e("v-uni-view",{staticClass:"uni-text-color-grey refund-status"},[e("v-uni-view",{staticClass:"iconfont-m- status-icon",class:[t.getClass(i.refund_type)]}),e("v-uni-view",{staticClass:"refund-type"},[t._v(t._s(t._f("getType")(i.refund_type)))])],1),[e("v-uni-view",{staticClass:"uni-text-color-grey order-time"},[t._v(t._s(i.created_at))])]],2),e("v-uni-view",{staticClass:"refund-goods"},[1==i.order_goods.length?e("goods-info",{attrs:{isRefund:!0,"goods-data":i.order_goods[0]},on:{detail:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail(e,i)}}}):e("refund-goods-list",{attrs:{items:i.order_goods}})],1),e("v-uni-view",{staticClass:"card-btn flex"},[[-1==i.status?e("v-uni-view",{staticClass:"btn-default",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[t._v("售后失败")]):t._e(),i.status>=0&&i.status<=9?e("v-uni-view",{staticClass:"btn-primary theme-primary-border theme-primary-color",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[t._v("申请售后中")]):t._e(),10==i.status||11==i.status?e("v-uni-view",{staticClass:"btn-success",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[t._v("售后完成")]):t._e()]],2)],1)})),1)},o=[]},"761a":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list-goods-card .card-item[data-v-54c13d6b]{padding:%?16?% %?24?%;margin-bottom:%?16?%;background-color:#fff;border-radius:%?12?%}.list-goods-card .card-item .create-time[data-v-54c13d6b]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?16?%}.list-goods-card .card-item .create-time .status-icon[data-v-54c13d6b]{display:inline-block;margin-right:%?8?%;font-size:%?36?%;width:%?36?%;height:%?36?%;-webkit-transform:translateY(%?-2?%);transform:translateY(%?-2?%)}.list-goods-card .card-item .create-time .status-icon.refund[data-v-54c13d6b]{color:#ff3c29}.list-goods-card .card-item .create-time .status-icon.return[data-v-54c13d6b]{color:#367bf5}.list-goods-card .card-item .create-time .status-icon.exchange[data-v-54c13d6b]{color:#f90}.list-goods-card .card-item .create-time .shop-item[data-v-54c13d6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.list-goods-card .card-item .create-time .shop-item .shop-logo[data-v-54c13d6b]{margin-right:%?16?%;width:%?48?%;height:%?48?%;background-size:100% 100%;background-repeat:no-repeat}.list-goods-card .card-item .create-time .shop-item .shop-img[data-v-54c13d6b]{width:%?48?%;height:%?48?%;border-radius:50%}.list-goods-card .card-item .create-time .shop-item .self-label[data-v-54c13d6b]{margin-right:%?8?%;padding:%?2?% %?6?%;line-height:%?24?%;background:-webkit-linear-gradient(317.43deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(132.57deg,#ff3c29,#ff6f29 94.38%);color:#fff;font-size:%?18?%;font-weight:600;border-radius:%?4?%}.list-goods-card .card-item .create-time .shop-item .shop-name[data-v-54c13d6b]{line-height:20px}.list-goods-card .card-item .create-time .refund-status[data-v-54c13d6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-goods-card .card-item .create-time .refund-status .refund-type[data-v-54c13d6b]{color:#212121;font-size:%?28?%;line-height:%?40?%}.list-goods-card .card-item .create-time .order-time[data-v-54c13d6b]{line-height:%?40?%}.list-goods-card .card-item .create-time > uni-view[data-v-54c13d6b]{font-size:%?24?%}.list-goods-card .card-item .create-time .status[data-v-54c13d6b]{color:#969696;font-size:%?28?%;font-weight:700}.list-goods-card .card-item .goods-item[data-v-54c13d6b]{padding:%?32?% %?24?%}.list-goods-card .card-item .refund-goods[data-v-54c13d6b]{padding:%?32?% 0;background-color:#fff}.list-goods-card .card-item .card-footer[data-v-54c13d6b]{text-align:right}.list-goods-card .card-item .card-footer > uni-view[data-v-54c13d6b]{line-height:%?34?%;font-size:%?24?%}.list-goods-card .card-item .card-footer > uni-view[data-v-54c13d6b]:last-child{margin-top:%?8?%}.list-goods-card .card-item .card-footer .price[data-v-54c13d6b]{font-weight:700;font-size:%?32?%}.list-goods-card .card-item .card-btn[data-v-54c13d6b]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.list-goods-card .card-item .card-btn > uni-view[data-v-54c13d6b]{padding:%?11?% %?30?%;line-height:%?34?%;font-size:%?24?%;text-align:center;border-radius:%?30?%;border:1px solid #e6e7eb}.list-goods-card .card-item .card-btn > uni-view[data-v-54c13d6b]:last-child{margin-left:%?24?%}.list-goods-card .card-item .card-btn .btn-primary[data-v-54c13d6b]{border:1px solid #ff3c29;color:#ff3c29}.list-goods-card .card-item .card-btn .btn-success[data-v-54c13d6b]{border:1px solid #09c15f;color:#09c15f}.list-goods-card .card-item .card-btn .btn-default[data-v-54c13d6b]{border:1px solid #e6e7eb;color:#212121}',""]),t.exports=i},"91b2":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("page-box",[e("v-uni-view",{staticClass:"order-list"},[e("v-uni-view",{staticClass:"container"},[e("list-goods-card",{attrs:{list:t.list}}),0==t.list.length&&!t.loading&&t.count<=0?e("v-uni-view",{staticClass:"empty-list"},[e("v-uni-view",{staticClass:"bg"},[e("v-uni-image",{staticClass:"empty-img",attrs:{src:t.$utils.staticMediaUrl("default/cart.png")}})],1),e("v-uni-view",{staticClass:"empty-text"},[t._v("您暂时还没有售后订单哦")])],1):t._e(),t.list.length!=t.count?e("page-loading",{attrs:{loadingType:t.loadingType}}):t._e()],1)],1)],1)},o=[]},"953f":function(t,i,e){"use strict";e.r(i);var a=e("c55f"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},be64:function(t,i,e){"use strict";var a=e("cdac"),n=e.n(a);n.a},c55f:function(t,i,e){var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("dae0")),o=a(e("a64f")),r={mixins:[o.default],name:"list",components:{listGoodsCard:n.default},props:{},data:function(){return{status:"all",list:[],page:1,loading:!1,count:0,id:"",isLoad:!1}},computed:{loadingType:function(){var t=0;return this.loading?t=1:this.list.length==this.count&&this.count>0&&0==this.loading&&(t=2),t}},onLoad:function(){this.getList()},onShow:function(){this.isLoad&&(this.list=[],this.page=1,this.getList())},methods:{getList:function(){var t=this;this.loading=!0,this.$api.orderApi.refundList({page:this.page}).then((function(i){0==i.error?(i.list.length>0&&(t.list=t.list.concat(i.list)),t.page=t.page+1,t.loading=!1,t.isLoad=!0,t.count=i.total):uni.showToast({title:i.message,icon:"none"}),t.graceLazyload.load(0,t)})).finally((function(){uni.hideLoading()}))}},onReachBottom:function(){this.list.length==this.count&&this.page>1||this.getList()},onPageScroll:function(t){this.graceLazyload.load(t.scrollTop,this)},onPullDownRefresh:function(){this.list=[],this.page=1,this.getList()}};i.default=r},cdac:function(t,i,e){var a=e("cef6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("d3390f5e",a,!0,{sourceMap:!1,shadowMode:!1})},cef6:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.order-list[data-v-418625e8]{position:relative;min-height:100vh;overflow:auto;background-color:#f5f5f5}.order-list .container[data-v-418625e8]{padding:%?32?% %?24?% %?16?%}.order-list .empty-list[data-v-418625e8]{padding-top:%?64?%}.order-list .empty-list .bg[data-v-418625e8]{text-align:center}.order-list .empty-list .empty-img[data-v-418625e8]{height:%?176?%;width:%?176?%}.order-list .empty-list .empty-text[data-v-418625e8]{margin-top:%?32?%;font-size:%?24?%;text-align:center;line-height:%?34?%;color:#969696}.order-list[data-v-418625e8] .img-list-items{margin-right:%?24?%;margin-bottom:%?16?%;height:%?140?%;width:%?140?%;border:0}.order-list[data-v-418625e8] .img-list-items:nth-child(4n){margin-right:0}.order-list[data-v-418625e8] .img-list-items .price{position:absolute;bottom:0;left:0;border-radius:0 0 %?4?% %?4?%;width:100%;height:%?32?%;font-size:%?16?%;text-align:center;line-height:%?32?%;color:#fff;background:rgba(33,33,33,.7)}',""]),t.exports=i},dae0:function(t,i,e){"use strict";e.r(i);var a=e("6285"),n=e("e8d1");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("453c");var r,d=e("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"54c13d6b",null,!1,a["a"],r);i["default"]=s.exports},e8d1:function(t,i,e){"use strict";e.r(i);var a=e("044b"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a}}]);