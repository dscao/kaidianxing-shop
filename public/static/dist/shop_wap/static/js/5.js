(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"166d":function(t,o,i){"use strict";i.r(o);var e=i("d19a"),s=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(o,t,(function(){return e[t]}))}(a);o["default"]=s.a},4276:function(t,o,i){"use strict";var e=i("8808"),s=i.n(e);s.a},5942:function(t,o,i){"use strict";i.r(o);var e=i("a3ec"),s=i("166d");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(o,t,(function(){return s[t]}))}(a);i("4276");var d,n=i("f0c5"),r=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"60e729d5",null,!1,e["a"],d);o["default"]=r.exports},"6c7b":function(t,o,i){var e=i("5ca1");e(e.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},8808:function(t,o,i){var e=i("c2b7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("394a4556",e,!0,{sourceMap:!1,shadowMode:!1})},a3ec:function(t,o,i){"use strict";var e;i.d(o,"b",(function(){return s})),i.d(o,"c",(function(){return a})),i.d(o,"a",(function(){return e}));var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return t.componentData&&"goods"==t.componentData.id&&t.limitNumData.length&&t.insideStyle.liststyle?i("div",{staticClass:"goods",style:{padding:t.getPadding,background:t.getBg}},[i("ul",{staticClass:"goods-list",class:t.getClass,style:{"padding-bottom":t.isScroll?t.px2rpx(t.insideStyle.marginbottom):"",borderRadius:"list"==t.insideStyle.liststyle?t.px2rpx(t.insideStyle.topradius)+" "+t.px2rpx(t.insideStyle.topradius)+" "+t.px2rpx(t.insideStyle.bottomradius)+" "+t.px2rpx(t.insideStyle.bottomradius):""}},t._l(t.limitNumData,(function(o,e){return i("li",{key:e,staticClass:"good-box",class:{"scroll-box":t.isScroll},style:{background:"list"==t.insideStyle.liststyle?t.insideStyle.background:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickGood(o,e)}}},[i("div",{staticClass:"good-box-item",style:{background:t.insideStyle.background,borderRadius:t.hasItemRaidus?t.px2rpx(t.insideStyle.topradius)+" "+t.px2rpx(t.insideStyle.topradius)+" "+t.px2rpx(t.insideStyle.bottomradius)+" "+t.px2rpx(t.insideStyle.bottomradius):""}},[t.insideStyle.liststyle?i("div",{staticClass:"img-box"},[i("div",{staticClass:"good-img-box",class:{soldOut:t.showSoldOutIcon||0==o.stock&&("0"==t.insideParams.saleout||"1"==t.insideParams.saleout)}},[1==t.insideParams.showicon?i("p",{staticClass:"marker system",class:[t.insideStyle.iconstyle,t.insideStyle.goodsicon]},[i("span",{staticClass:"bgImgSpan"},[i("i",{staticClass:"bgImgPre bgIconI"}),i("i",{staticClass:"bgImgAft bgIconI",style:t.getCornerIcon})]),i("span",{staticClass:"name"},[t._v(t._s(t.getSycMarker))])]):2==t.insideParams.showicon&&t.insideParams.goodsiconsrc&&t.startLoadImg?i("img",{staticClass:"marker custom",class:[t.insideParams.iconposition],style:{width:t.insideStyle.iconzoom+"%",margin:t.markerPosition},attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.media(t.insideParams.goodsiconsrc),alt:""}}):t._e(),o.preloading&&t.preloading||!t.startLoadImg?i("img",{staticClass:"good-img preload",staticStyle:{position:"absolute"},attrs:{mode:"widthFix","lazy-load":!0,src:t.getLoadingSrc,alt:""}}):t._e(),t.startLoadImg?i("img",{staticClass:"good-img",class:{loading:o.preloading&&t.preloading},attrs:{"lazy-load":!0,src:t.getThumb(o),alt:""},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.loaded(o.thumb)},error:function(i){arguments[0]=i=t.$handleEvent(i),t.loaded(o.thumb)}}}):t._e(),i("div",{staticClass:"commision-box",class:{style2:"1"==t.insideParams.commisionstyle}},[t.showCommission(o)?i("p",{staticClass:"commision-bg",style:{background:t.getCommissionBg.background,opacity:t.getCommissionBg.opacity}}):t._e(),t.showCommission(o)&&t.getListStyle>-1?i("p",{staticClass:"commision-money",style:{color:t.insideStyle.commissionColor}},[t._v("￥"+t._s(t.formatMoney(o.commission)))]):t._e(),t.showCommission(o)&&-1==t.getListStyle?i("p",{staticClass:"commision-money",style:{color:t.insideStyle.commissionColor}},[t._v(t._s(t.insideParams.commisiontext||"预计佣金")+"￥"+t._s(t.formatMoney(o.commission)))]):t._e()]),t.showSoldOutIcon||0==o.stock?i("div",{staticClass:"soldout default"},[t.startLoadImg?i("div",{staticClass:"soldout-img",style:t.soldOutBg}):t._e()]):t._e()]),"list"!=t.insideStyle.liststyle?i("p",{staticClass:"title",style:{color:t.insideStyle.titlecolor}},[t._v(t._s(o.title))]):t._e()]):t._e(),"list"==t.insideStyle.liststyle||t.preloadingText||o.buy_button_status&&0!=o.buy_button_status&&!t.is_preheatActivies(o)?"list"==t.componentData.style.liststyle||t.preloadingText||!o.buy_button_status||1!=o.buy_button_status||t.is_preheatActivies(o)?"list"!=t.insideStyle.liststyle||t.preloadingText?t._e():i("div",{staticClass:"right van-hairline--bottom"},[i("div",[i("p",{staticClass:"title",style:{color:t.insideStyle.titlecolor}},[t._v(t._s(o.title))]),i("p",{staticClass:"subtitle"},[t._v(t._s(o.sub_name))])]),!o.buy_button_status||0==o.buy_button_status||t.is_preheatActivies(o)?i("div",{staticClass:"right-bottom",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o)}}},[i("div",{staticClass:"price",class:{"price-end":1!==t.insideParams.showproductprice&&!t.hasProductPrice(o)}},[1==t.insideParams.showprice?i("span",{staticClass:"pro-price",style:{color:t.insideStyle.pricecolor}},[t.getCredit(o)?i("i",[t._v(t._s(t.getCredit(o))+"+")]):t._e(),t._v("￥"),i("i",[t._v(t._s(t.getPrice(o)))])]):t._e(),1==t.insideParams.showproductprice&&t.hasProductPrice(o)?i("span",{staticClass:"del-price",style:{color:t.insideStyle.productpricecolor}},[t.insideParams.productpricetext?i("i",{staticClass:"del-icon"},[t._v(t._s(t.insideParams.productpricetext)+":")]):t._e(),i("i",{staticClass:"del-num"},[t._v("￥"+t._s(t.getDelPrice(o)))])]):t._e()]),i("div",{staticClass:"btn",class:{"btn-end":1!=t.insideParams.showsales}},[t.is_active(o)?t._e():i("span",{class:[t.buyBtnIcon.class],style:t.buyBtnIcon.style,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickBuyBtn(o,e)}}}),1==t.insideParams.showsales?i("span",{staticClass:"sales-num",style:{color:t.insideStyle.salescolor}},[t._v(t._s(t.insideParams.salestext||"销量")+":"+t._s(o.sales||0))]):t._e()])]):i("div",{staticClass:"right-bottom",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o)}}},[i("div",{staticClass:"price"},[i("span",{staticClass:"pro-price bargaining",style:{color:t.componentData.style.pricecolor}},[t._v(t._s(t.buy_button_settings(o)))])])])]):i("div",{staticClass:"box-bottom",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o)}}},[i("div",{staticClass:"price"},[i("span",{staticClass:"pro-price bargaining",style:{color:t.componentData.style.pricecolor}},[t._v(t._s(t.buy_button_settings(o)))])])]):i("div",{staticClass:"box-bottom",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o)}}},[i("div",{staticClass:"price"},[1==t.insideParams.showprice?i("span",{staticClass:"pro-price",style:{color:t.insideStyle.pricecolor}},[t.getCredit(o)?i("i",[t._v(t._s(t.getCredit(o))+"+")]):t._e(),t._v("￥"),i("i",[t._v(t._s(t.getPrice(o)))])]):t._e(),1==t.insideParams.showproductprice&&t.hasProductPrice(o)?i("span",{staticClass:"del-price",style:{color:t.insideStyle.productpricecolor}},[t.insideParams.productpricetext?i("i",{staticClass:"del-icon"},[t._v(t._s(t.insideParams.productpricetext)+":")]):t._e(),i("i",{staticClass:"del-num"},[t._v("￥"+t._s(t.getDelPrice(o)))])]):t._e()]),i("div",{staticClass:"btn"},[t.is_active(o)?t._e():i("span",{staticClass:"buybtn-icon",class:[t.buyBtnIcon.class],style:t.buyBtnIcon.style,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickBuyBtn(o,e)}}}),1==t.insideParams.showsales?i("span",{staticClass:"sales-num",style:{color:t.insideStyle.salescolor}},[t._v(t._s(t.insideParams.salestext||"销量")+":"+t._s(o.sales))]):t._e()])])])])})),0)]):t._e()},a=[]},c2b7:function(t,o,i){var e=i("24fb");o=e(!1),o.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.isbottom[data-v-60e729d5], .istop[data-v-60e729d5]{z-index:999990}._i[data-v-60e729d5]{display:inline}uni-view[data-v-60e729d5]{box-sizing:border-box}.def-pad[data-v-60e729d5]{padding:%?8?% %?16?%}*[data-v-60e729d5]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-60e729d5]{list-style:none}ul[data-v-60e729d5]{padding:0}uni-image[data-v-60e729d5]{height:auto}.goods *[data-v-60e729d5], .goods uni-view[data-v-60e729d5]{box-sizing:border-box}.goods[data-v-60e729d5]{width:100%;overflow:auto;padding:%?16?% %?24?% 0;-webkit-overflow-scrolling:touch;background-size:cover!important}.goods i[data-v-60e729d5]{font-style:normal}.goods .goods-list[data-v-60e729d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;min-width:100%;box-sizing:border-box;padding-left:0}.goods .goods-list .good-box[data-v-60e729d5]{-webkit-flex-shrink:0;flex-shrink:0;overflow:hidden}.good-box.scroll-box[data-v-60e729d5]:first-child{padding-left:0}.good-box-item[data-v-60e729d5]{overflow:hidden}.good-box .good-img[data-v-60e729d5]{display:block;width:100%}.good-box .good-img.loading[data-v-60e729d5]{display:block;height:0;opacity:0}.good-img-box[data-v-60e729d5]{position:relative;overflow:hidden}.good-img-box.soldOut[data-v-60e729d5]{position:relative}.good-img-box.soldOut[data-v-60e729d5]::after{position:absolute;content:"";top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.36)}.goods-list .good-box .img-box[data-v-60e729d5]{overflow:hidden;position:relative}.goods-list .good-box .img-box .marker[data-v-60e729d5]{position:absolute;z-index:100}.goods-list .good-box .img-box .marker.system[data-v-60e729d5]{left:0;top:0;color:#fff;font-size:%?29.31596?%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?38?%;padding:0 %?12?%}.good-box .img-box .marker.system .icon[data-v-60e729d5]{position:absolute;top:0;left:0;width:100%;height:100%}.img-box .marker.system .bgImgSpan[data-v-60e729d5]{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.img-box .marker.system .bgImgSpan .bgImgAft[data-v-60e729d5]{height:100%}.img-box .marker.system .name[data-v-60e729d5]{position:relative;z-index:10;display:block;font-size:%?24?%;line-height:%?24?%;height:%?24?%;margin:auto;white-space:nowrap;text-align:center}.img-box .marker.system.circle .bgImgSpan[data-v-60e729d5]{background:#367bf5;border-bottom-right-radius:%?18?%}.img-box .marker.system.rectangle .bgImgSpan .bgImgPre[data-v-60e729d5]{height:%?38?%;width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;background:#367bf5}.img-box .marker.system.rectangle .bgImgSpan .bgImgAft[data-v-60e729d5]{width:%?14?%;height:%?38?%;-webkit-flex-shrink:0;flex-shrink:0;background-size:%?72?% %?38?%;background-position:%?-58?% 0;background-repeat:no-repeat}.img-box .marker.system.triangle .bgImgSpan .bgImgPre[data-v-60e729d5]{height:%?38?%;width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;background:#09c15f}.img-box .marker.system.triangle .bgImgSpan .bgImgAft[data-v-60e729d5]{width:%?14?%;height:%?38?%;-webkit-flex-shrink:0;flex-shrink:0;background-size:%?72?% %?38?%;background-position:%?-58?% 0;background-repeat:no-repeat}.img-box .marker.system.echelon[data-v-60e729d5]{background:-webkit-linear-gradient(left,#ff7e24,#fcd10e);background:linear-gradient(90deg,#ff7e24,#fcd10e);border-bottom-right-radius:%?20?%;border-top-right-radius:%?20?%;border-bottom-left-radius:%?4?%}.img-box .marker.system.square[data-v-60e729d5]{height:%?66?%}.img-box .marker.system.square .name[data-v-60e729d5]{padding-bottom:%?8?%}.img-box .marker.system.square .bgImgSpan[data-v-60e729d5]{background:#ff3c29;border-bottom-right-radius:%?34?%;border-bottom-left-radius:%?34?%;border-top-right-radius:%?4?%}.img-box .marker.system.istime .name[data-v-60e729d5]{padding-right:%?8?%}.img-box .marker.system.bigsale .name[data-v-60e729d5]{padding-right:%?8?%}.img-box .marker.system.istime.square .name[data-v-60e729d5]{padding-right:0}.img-box .marker.custom[data-v-60e729d5]{position:absolute;z-index:100;width:100%}.img-box .marker.custom.top[data-v-60e729d5]{top:0!important}.img-box .marker.custom.right[data-v-60e729d5]{right:0!important}.img-box .marker.custom.bottom[data-v-60e729d5]{bottom:0!important}.img-box .marker.custom.left[data-v-60e729d5]{left:0!important}.img-box .soldout[data-v-60e729d5],\n.img-box .soldOutIcon[data-v-60e729d5]{position:absolute;top:0;left:0;right:0;width:100%;z-index:10;color:#fff}.img-box .soldout[data-v-60e729d5]{background:rgba(0,0,0,.5);height:100%}.img-box .soldout-img[data-v-60e729d5]{position:absolute;width:100%;height:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-repeat:no-repeat;background-position:50%;background-size:contain}.img-box .soldOutIcon[data-v-60e729d5]{width:%?200?%;height:%?200?%;line-height:%?200?%;text-align:center;font-size:%?172?%;z-index:100;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.title[data-v-60e729d5]{width:100%;box-sizing:border-box;color:#212121;font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;max-height:%?80?%;padding:0 %?16?%;margin:%?16?% 0 %?8?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-all}.good-box .price .del-price[data-v-60e729d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?28?%;line-height:%?28?%}.price .del-num[data-v-60e729d5]{text-decoration:line-through}.price .del-icon[data-v-60e729d5],\n.price .del-num[data-v-60e729d5]{display:inline-block;color:inherit;font-size:%?20?%;height:%?28?%;line-height:%?28?%}.price .pro-price[data-v-60e729d5]{box-sizing:border-box;font-size:%?24?%;line-height:%?34?%}.price .pro-price i[data-v-60e729d5],\n.price .pro-price ._i[data-v-60e729d5]{font-size:%?28?%;height:%?48?%;line-height:%?48?%;text-overflow:ellipsis;box-sizing:border-box;white-space:nowrap;overflow:hidden;font-style:normal;font-weight:700}.price .pro-price.bargaining[data-v-60e729d5]{font-weight:700}.btn[data-v-60e729d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.btn .buybtn[data-v-60e729d5]{font-size:%?48?%;height:%?48?%;line-height:%?48?%;text-align:right}.btn .sales-num[data-v-60e729d5]{height:%?28?%;font-size:%?20?%;line-height:%?28?%;\n  /* 商品组color/96 */color:#969696;text-align:right}.box-bottom[data-v-60e729d5], .right-bottom[data-v-60e729d5]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box}.box-bottom .price[data-v-60e729d5],\n.right-bottom .price[data-v-60e729d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods-list.block .good-box-item[data-v-60e729d5]{position:relative;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-list.block .good-img.loading[data-v-60e729d5]{display:block;height:0;opacity:0}.goods-list.block .good-box .box-bottom[data-v-60e729d5]{padding:0 %?16?% %?16?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-list.block .good-box .box-bottom .pro-price[data-v-60e729d5],\n.goods-list.block .good-box .box-bottom .buybtn[data-v-60e729d5]{height:%?48?%}.goods-list.block .good-box .box-bottom .del-price[data-v-60e729d5],\n.goods-list.block .good-box .box-bottom .sales-num[data-v-60e729d5]{margin-top:%?8?%}.goods-list.block .good-box .box-bottom .pro-price[data-v-60e729d5]{line-height:%?48?%}.goods-list.block.two .good-box[data-v-60e729d5]{width:50%}.goods-list.block.two .good-box[data-v-60e729d5]:nth-child(odd){padding-right:%?8?%}.goods-list.block.two .good-box[data-v-60e729d5]:nth-child(even){padding-left:%?8?%}.goods-list.block.two .good-box[data-v-60e729d5]:nth-child(n+3){margin:%?16?% 0 0}.goods-list.block.two .good-box .pro-price[data-v-60e729d5]{min-height:%?48?%;height:auto}.goods-list.block.two .good-img-box[data-v-60e729d5]{height:%?344?%}.goods-list.block.two .good-img-box .good-img[data-v-60e729d5]{height:%?344?%}.goods-list.block.one .good-box[data-v-60e729d5]{width:100%}.goods-list.block.one .good-box[data-v-60e729d5]:nth-child(n+2){margin-top:%?16?%}.goods-list.block.one .good-box .good-box-item[data-v-60e729d5]{padding-bottom:%?16?%}.goods-list.block.one .good-box .good-img-box[data-v-60e729d5]{height:%?322?%}.goods-list.block.one .good-box .good-img-box .good-img[data-v-60e729d5]{height:%?322?%}.goods .goods-list.block.one .good-box .box-bottom[data-v-60e729d5]{padding:0 %?16?% 0}.goods .goods-list.block.one .good-box .price[data-v-60e729d5],\n.goods .goods-list.block.one .good-box .btn[data-v-60e729d5]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods .goods-list.block.one .good-box .pro-price[data-v-60e729d5],\n.goods .goods-list.block.one .good-box .buybtn[data-v-60e729d5]{margin-bottom:%?0?%}.goods .goods-list.block.one .good-box .price .pro-price[data-v-60e729d5]{margin-right:%?16?%}.goods .goods-list.block.one .good-box .price .del-price[data-v-60e729d5]{margin-top:0;height:%?48?%;line-height:%?48?%}.goods .goods-list.block.one .good-box .price .del-price .del-icon[data-v-60e729d5],\n.goods .goods-list.block.one .good-box .price .del-price .del-num[data-v-60e729d5]{font-size:%?20?%;height:%?48?%;line-height:%?48?%}.goods .goods-list.block.one .good-box .btn .sales-num[data-v-60e729d5]{margin-top:0;margin-right:%?8?%;height:%?48?%;line-height:%?48?%}.goods .goods-list.block.one .good-box .btn .buybtn[data-v-60e729d5]{-webkit-box-ordinal-group:3;-webkit-order:2;order:2}.goods .goods-list.block.three .title[data-v-60e729d5]{font-size:%?24?%;line-height:%?34?%;max-height:%?68?%}.goods .goods-list.block.three .good-box[data-v-60e729d5]{width:33.33%}.goods .goods-list.block.three .good-box[data-v-60e729d5]:nth-child(3n-2), .goods .goods-list.block.three .good-box[data-v-60e729d5]:nth-child(3n-1){padding-right:%?8?%}.goods .goods-list.block.three .good-box[data-v-60e729d5]:nth-child(3n-1), .goods .goods-list.block.three .good-box[data-v-60e729d5]:nth-child(3n){padding-left:%?8?%}.goods .goods-list.block.three .good-box[data-v-60e729d5]:nth-child(3){margin:0 0 0}.goods .goods-list.block.three .good-box[data-v-60e729d5]:nth-child(n+4){margin:%?16?% 0 0}.goods .goods-list.block.three .good-box .good-img-box[data-v-60e729d5]{height:%?224?%;margin-bottom:%?16?%}.goods .goods-list.block.three .good-box .good-img[data-v-60e729d5]{height:%?224?%}.goods .goods-list.block.three .good-box .good-img-box .soldOutIcon[data-v-60e729d5]{font-size:%?160?%}.goods .goods-list.block.three .good-box .price[data-v-60e729d5],\n.goods .goods-list.block.three .good-box .btn[data-v-60e729d5]{height:%?48?%}.goods .goods-list.block.three .good-box .pro-price i[data-v-60e729d5]{font-size:%?24?%}.goods .goods-list.block.three .good-box .pro-price[data-v-60e729d5],\n.goods .goods-list.block.three .good-box .btn[data-v-60e729d5]{margin-bottom:0}.goods .goods-list.block.three .good-box .sales-num[data-v-60e729d5],\n.goods .goods-list.block.three .good-box .del-price[data-v-60e729d5]{display:none}.goods .goods-list.list[data-v-60e729d5]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0;margin:0 auto}.goods .goods-list.list .good-box[data-v-60e729d5]{border-radius:0;width:100%;margin:0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?16?% %?24?% 0}.goods .goods-list.list .good-box:last-child .right.van-hairline--bottom[data-v-60e729d5]:after{border-width:0}.goods .goods-list.list .good-box-item[data-v-60e729d5]{display:-webkit-box;display:-webkit-flex;display:flex}.goods .goods-list.list .good-box .img-box[data-v-60e729d5]{width:%?219.86971?%;height:%?219.86971?%;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?16?%}.goods .goods-list.list .good-box .img-box .good-img-box[data-v-60e729d5]{height:100%;display:block;border-radius:%?12?%}.goods .goods-list.list .good-box .img-box .good-img-box .good-img[data-v-60e729d5]{width:100%;height:100%}.goods .goods-list.list .good-box .img-box .good-img-box .good-img.loading[data-v-60e729d5]{display:block;height:0;opacity:0}.goods .goods-list.list .good-box .right[data-v-60e729d5]{height:%?216?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?16?%;box-sizing:initial;overflow:hidden}.goods .goods-list.list .good-box .right.van-hairline--bottom[data-v-60e729d5]:after{border-bottom-color:#e6e7eb;border-style:solid}.goods .goods-list.list .good-box .right .title[data-v-60e729d5]{margin-top:0;padding:0;max-height:%?68?%;line-height:%?34?%;font-size:%?24?%}.goods .goods-list.list .good-box .right .subtitle[data-v-60e729d5]{font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;color:#969696;padding:0;margin-bottom:%?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;box-sizing:border-box}.goods .goods-list.list .good-box .right .right-bottom[data-v-60e729d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:0}.goods .goods-list.list .good-box .right .right-bottom .pro-price[data-v-60e729d5]{height:%?44?%}.goods .goods-list.list .good-box .right .right-bottom .pro-price i[data-v-60e729d5]{font-size:%?32?%}.goods .goods-list.list .good-box .right .right-bottom .pro-price.price-end[data-v-60e729d5],\n.goods .goods-list.list .good-box .right .right-bottom .btn.btn-end[data-v-60e729d5]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.goods .goods-list.list .good-box .right .right-bottom .btn .sales-num[data-v-60e729d5]{margin-top:%?4?%}.goods .goods-list.scroll[data-v-60e729d5]{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;flex-direction:row!important;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.goods-list.scroll .good-box[data-v-60e729d5]{padding-left:%?16?%}.goods-list.scroll .good-box-item[data-v-60e729d5]{position:relative;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-list.scroll .good-img-box[data-v-60e729d5]{height:%?312?%;overflow:hidden}.goods-list.scroll .good-img[data-v-60e729d5]{height:%?312?%}.goods-list.scroll .box-bottom[data-v-60e729d5]{padding:0 %?16?% %?16?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-list.scroll .box-bottom .del-price[data-v-60e729d5],\n.goods-list.scroll .box-bottom .sales-num[data-v-60e729d5]{margin-top:%?8?%}.goods-list.scroll .box-bottom .pro-price[data-v-60e729d5]{height:%?48?%}.goods-list.scroll.two .good-box-item[data-v-60e729d5]{width:%?312?%}.goods-list.scroll.one[data-v-60e729d5]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods-list.scroll.one .good-box[data-v-60e729d5]{width:%?592?%}.goods-list.scroll.one .good-img-box[data-v-60e729d5]{overflow:hidden;width:100%;height:%?276?%}.goods-list.scroll.one .good-img-box .good-img[data-v-60e729d5]{height:%?276?%}.goods-list.scroll.one .soldout-img[data-v-60e729d5]{width:100%}.goods-list.scroll.three[data-v-60e729d5]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.goods-list.scroll.three .good-box-item[data-v-60e729d5]{width:%?204?%}.goods-list.scroll.three .good-img-box[data-v-60e729d5]{width:100%;height:%?204?%;margin-bottom:%?16?%}.goods-list.scroll.three .good-img-box .good-img[data-v-60e729d5]{height:%?204?%}.goods-list.scroll.three .soldOutIcon[data-v-60e729d5]{font-size:%?160?%}.goods-list.scroll.three .good-box .title[data-v-60e729d5]{font-size:%?24?%;line-height:%?34?%;max-height:%?68?%}.goods-list.scroll.three .good-box .pro-price i[data-v-60e729d5]{font-size:%?24?%}.goods-list.scroll.three .good-box .del-price[data-v-60e729d5],\n.goods-list.scroll.three .good-box .sales-num[data-v-60e729d5]{display:none}.goods .commision-bg[data-v-60e729d5]{position:absolute;bottom:0;left:0;z-index:999;width:100%;height:%?42?%;background:-webkit-linear-gradient(278.34deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(171.66deg,#ff3c29,#ff6f29 94.38%)}.commision-box[data-v-60e729d5]{position:absolute;left:0;bottom:0;height:%?42?%;width:100%;overflow:hidden}.commision-box.style2[data-v-60e729d5]{width:-webkit-fit-content;width:fit-content;border-radius:0}.commision-box.style2 .commision-bg[data-v-60e729d5]{border-top-right-radius:%?4?%}.commision-money[data-v-60e729d5]{position:relative;padding:0 %?8?%;font-size:%?20?%;line-height:%?42?%;text-align:center;color:#fff;z-index:1000}',""]),t.exports=o},c984:function(t,o,i){var e=i("288e");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=e(i("bd86")),a=i("2f62"),d=i("dc11");function n(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.push.apply(i,e)}return i}function r(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(Object(i),!0).forEach((function(o){(0,s.default)(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))}))}return t}var l={computed:r({},(0,a.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:d.px2rpx}};o.default=l},d19a:function(t,o,i){var e=i("288e");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=e(i("bd86"));i("a481"),i("6c7b"),i("2fdb"),i("6762");var a=e(i("c984"));function d(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.push.apply(i,e)}return i}function n(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?d(Object(i),!0).forEach((function(o){(0,s.default)(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))}))}return t}var r=null,l={mixins:[a.default],name:"goods",data:function(){return{imgs:{},loading:{},preloading:!0,preloadingText:!0}},mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),500),this.preloadingText=!1},destroyed:function(){clearTimeout(r)},computed:{credit_text:function(){var t;return this.$isPC?"积分":(null===(t=this.$store.state.setting.systemSetting)||void 0===t?void 0:t.credit_text)||"积分"},showCommissionPerm:function(){return!!this.$isPC||this.$store.state.setting.pluginsPerms.commission},insideParams:function(){return this.componentData.params||{}},insideStyle:function(){return this.componentData.style||{}},soldOutBg:function(){return"\n                background-image:url(".concat(this.getSoldOutIcon,")\n            ")},hasItemRaidus:function(){var t=["list"];return!t.includes(this.insideStyle.liststyle)},getGoodsList:function(){var t,o;if(null!==(t=this.componentData.data)&&void 0!==t&&t.length){var i=this.componentData.data;return i}return this.$isPC&&null!==(o=this.componentData.tpl_data)&&void 0!==o&&o.length?this.componentData.tpl_data:[]},exampleGoods:function(){if(this.insideStyle.liststyle){var t;t=this.insideStyle.liststyle.includes("one")?this.$utils.staticImg("decorate/goods_col1.png"):this.$utils.staticImg("decorate/goods_col2.png");var o=this.insideStyle.liststyle.includes("three")?3:2;return new Array(o).fill({thumb:t,price:"20.00",productprice:"99.00",title:"这里是商品标题",sub_name:"这里是商品副标题",sales:"0",gid:"",bargain:0,credit:0,ctype:1,commission:5})}},systemSetting:function(){var t;return null!==(t=this.$store.state.setting)&&void 0!==t&&t.systemSetting?this.$store.state.setting.systemSetting:{}},getCornerIcon:function(){var t="";return"triangle"==this.insideStyle.iconstyle?t={backgroundImage:"url(".concat(this.$utils.staticImg("goods/1.png"),")")}:"rectangle"==this.insideStyle.iconstyle&&(t={backgroundImage:"url(".concat(this.$utils.staticImg("goods/7.png"),")")}),t},getListStyle:function(){return this.insideStyle.liststyle?this.insideStyle.liststyle.indexOf("three"):-2},getClass:function(){if(!this.insideStyle.liststyle)return"inline";var t=this.insideStyle.liststyle;return"block"==t&&(t="block two"),1==this.insideParams.goodsscroll?"scroll "+t.replace("block"," "):t},showSoldOutIcon:function(){return!1},getLoadingSrc:function(){var t,o,i,e;return null!==(t=this.$store.state.setting.systemSetting)&&void 0!==t&&null!==(o=t.basic)&&void 0!==o&&o.loading?this.$store.state.setting.cacheLoadingImg||this.$utils.media(null===(i=this.$store.state.setting.systemSetting)||void 0===i||null===(e=i.basic)||void 0===e?void 0:e.loading):this.$utils.staticImg("decorate/goods_col2.png")},hasLimitGoods:function(){var t=this.insideParams,o=t.goodsdata,i=t.goodstype,e=t.creditgoodsdata;return"0"==i&&0!=o||1==i&&0!=e},limitNumData:function(){var t,o,i=this;if((null===(t=this.getGoodsList)||void 0===t?void 0:t.length)>0){var e=this.getGoodsList;return this.hasLimitGoods&&(e=this.getGoodsList.slice(0,this.insideParams.goodsnum)),e.map((function(t){if(i.localStorage){var o=t.thumb?t.thumb.replace(/\./g,"_"):i.$utils.staticImg("decorate/goods_col2.png");t.preloading=void 0===i.loading[o]||i.loading[o]}else t.preloading=!1;return t}))}return this.$isPC&&0===(null===(o=this.componentData.data)||void 0===o?void 0:o.length)?this.exampleGoods:[]},markerPosition:function(){if(this.insideParams.iconposition){var t={top:0,bottom:0,left:0,right:0};return this.insideParams.iconposition.indexOf("top")>-1?t.top=this.px2rpx(this.insideStyle.iconpaddingtop):this.insideParams.iconposition.indexOf("bottom")>-1&&(t.bottom=this.px2rpx(this.insideStyle.iconpaddingtop)),this.insideParams.iconposition.indexOf("left")>-1?t.left=this.px2rpx(this.insideStyle.iconpaddingleft):this.insideParams.iconposition.indexOf("right")>-1&&(t.right=this.px2rpx(this.insideStyle.iconpaddingleft)),"".concat(t.top," ").concat(t.right," ").concat(t.bottom," ").concat(t.left)}},getSoldOutIcon:function(){var t,o,i,e;return null!==(t=this.systemSetting)&&void 0!==t&&null!==(o=t.basic)&&void 0!==o&&o.sale_out?this.$utils.media(null===(i=this.systemSetting)||void 0===i||null===(e=i.basic)||void 0===e?void 0:e.sale_out):this.$utils.staticImg("decorate/sale_out.png")},getSycMarker:function(){switch(this.insideStyle.goodsicon){case"recommand":return"推荐";case"hotsale":return"热销";case"isnew":return"上新";case"sendfree":return"包邮";case"istime":return"限时卖";case"bigsale":return"促销"}return this.insideParams.customicontext},buyBtnIcon:function(){var t={class:"",style:"color:".concat(this.insideStyle.buybtncolor)};switch(this.insideStyle.buystyle){case"buybtn-1":t.class="buybtn iconfont-m- icon-m-buy-jiagou2";break;case"buybtn-2":t.class="buybtn iconfont-m- icon-m-buy-jiagou1";break;case"buybtn-3":t.class="buybtn iconfont-m- icon-m-buy2";break;case"buybtn-4":t.class="buybtn iconfont-m- icon-m-buy3";break;case"buybtn-5":t.class="buybtn iconfont-m- icon-m-buy";break;case"buybtn-6":t.class="buybtn iconfont-m- icon-m-buy1";break}return t},getPadding:function(){var t=this.insideStyle,o=t.marginbottom,i=t.margintop,e=t.marginleft;return"".concat(this.px2rpx(i)," ").concat(this.px2rpx(e)," ").concat(this.px2rpx(o))},isScroll:function(){return 1==this.insideParams.goodsscroll},getBg:function(){switch(this.insideParams.componentbg){case"1":return this.insideStyle.bgcolor;case"2":return"url(".concat(this.insideParams.bgimg?this.$utils.media(this.insideParams.bgimg):"",")");default:return""}},getCommissionBg:function(){var t=this.insideStyle,o=t.commissionBackground,i=t.commisionopcaity;return null==i&&(i=100),{background:o,opacity:i/100}}},methods:{is_active:function(t){var o=["presell","seckill","groups"];return t.activities&&o.some((function(o){return t.activities[o]}))},buy_button_settings:function(t){var o,i,e;return(null===t||void 0===t||null===(o=t.ext_field)||void 0===o||null===(i=o.buy_button_settings)||void 0===i?void 0:i.price_text)||(null===t||void 0===t||null===(e=t.buy_button_settings)||void 0===e?void 0:e.price_text)},is_preheatActivies:function(t){var o=["presell","seckill","groups","preheat_activity"];return t.activities&&o.some((function(o){return t.activities[o]}))},loaded:function(t){var o=this;if(t){var i=t.replace(/\./g,"_");this.loading[i]=!1,clearTimeout(r),r=setTimeout((function(){o.loading=n({},o.loading)}),100)}},clickGood:function(t,o){this.$emit("custom-event",{target:"goods/clickGood",data:{value:t,key:o}})},clickBuyBtn:function(t,o){if(!this.$isPC){var i,e;if(t.credit_good)return void this.$emit("custom-event",{target:"goods/clickGood",data:{value:t,key:o}});if(("2"==t.goodstype||"2"==t.type)&&(null===t||void 0===t||null===(i=t.plugin_account)||void 0===i||!i.virtualAccount)||("3"==t.goodstype||"3"==t.type)&&(null===t||void 0===t||null===(e=t.plugin_account)||void 0===e||!e.appointment))return void this.$toast("商品暂时无法购买");"3"!=t.goodstype&&"3"!=t.type?this.$emit("custom-event",{target:"goods/clickBuyBtn",data:{value:t,key:o}}):this.$emit("custom-event",{target:"goods/clickGood",data:{value:t,key:o}})}},showCommission:function(t){return!(!this.$isPC||"-1"==this.insideParams.commisionstyle)||t.commission&&parseFloat(t.commission)>0&&this.showCommissionPerm&&"-1"!=this.insideParams.commisionstyle},getThumb:function(t){if("1"==t.act_type){var o,i="";(null===(o=this.insideStyle)||void 0===o?void 0:o.liststyle.indexOf("one"))>-1&&(i="_block");var e="2"==t.coupon_sale_type?"creditShop/discount".concat(i,".png"):"creditShop/full".concat(i,".png");return this.$utils.staticImg(e)}return this.$utils.media(t.thumb)},getDelPrice:function(t){var o,i;return"1"==t.act_type?(t.shop_coupon_credit&&(o="".concat(t.shop_coupon_credit).concat(this.credit_text)),t.shop_coupon_credit&&(i="￥".concat(this.formatMoney(t.shop_coupon_balance))),o&&i?o+i:""):this.formatMoney(t.productprice)},hasProductPrice:function(t){return"1"==t.act_type?t.shop_coupon_credit>0&&t.shop_coupon_credit>0:t.productprice>=0},getPrice:function(t){return"undefined"===typeof t.act_type?this.formatMoney(t.price):"".concat(this.formatMoney(t.credit_shop_price))},getCredit:function(t){return t.act_type&&null!==t&&void 0!==t&&t.credit_shop_credit?"".concat(null===t||void 0===t?void 0:t.credit_shop_credit).concat(this.credit_text):""},formatMoney:function(t){return("number"===typeof t||"string"===typeof t&&""!==t.trim())&&t>=1e4?parseInt(t/100)/100+"万":t}}};o.default=l}}]);