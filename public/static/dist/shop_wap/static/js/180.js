(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[180],{"10c4":function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.componentData&&"detail_comment"==t.componentData.id?a("div",{staticClass:"detail_comment",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+"  "+t.px2rpx(t.componentData.style.marginbottom)}},[a("div",{staticStyle:{overflow:"hidden"},style:{"border-radius":t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius)}},[a("div",{staticClass:"container",style:{background:t.componentData.style.background}},[a("div",{staticClass:"label van-hairline--bottom",style:{"border-bottom-color":t.componentData.style.titledividercolor,background:t.componentData.style.titlebgcolor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkMore.apply(void 0,arguments)}}},[a("p",{staticClass:"evaluate",style:{color:t.componentData.style.titlecolor}},[t._v("评价"),1==t.componentData.params.showcommentnum?a("i",{style:{color:t.componentData.style.commentnumcolor}},[t._v("("+t._s(t.componentData.params.total)+")")]):t._e()]),0!=t.componentData.params.total?a("div",{staticClass:"flex align-center"},[1==t.componentData.params.showmore&&0==t.componentData.params.showtype?a("p",{staticClass:"toDetail",style:{color:t.componentData.style.morecolor}},[t._v(t._s(t.componentData.params.moretext))]):t._e(),1==t.componentData.params.showarrow?a("i",{class:t.componentData.params.arrowicon,style:{color:t.componentData.style.arrowcolor}}):t._e()]):t._e()]),t.getComments.length?a("div",{staticClass:"body",class:{"is-scroll":1==t.componentData.params.showtype}},[0==t.componentData.params.showtype?a("ul",{staticClass:"all-comment"},t._l(t.getComments,(function(e,o){return a("li",{key:o,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkMore.apply(void 0,arguments)}}},[a("div",{staticClass:"avart"},[a("img",{attrs:{src:t.$utils.media(e.avart)||t.$utils.staticImg("decorate/avatar_mobile.png")}})]),a("div",{staticClass:"item-content van-hairline--bottom",style:{"border-bottom-color":t.componentData.style.dividercolor}},[a("div",{staticClass:"head"},[a("div",{staticClass:"userinfo"},[a("div",{staticClass:"flex align-center"},[a("div",{staticClass:"name",style:{color:t.componentData.style.usercolor}},[t._v(t._s(e.username||""))]),1==t.componentData.params.showlevel&&e.levelname?a("div",{staticClass:"level",style:{color:t.componentData.style.levelcolor,background:t.componentData.style.levelbgcolor}},[a("span",{staticClass:"level-text"},[t._v(t._s(e.levelname))])]):t._e()]),1==t.componentData.params.showstar?a("p",{staticClass:"star"},t._l(5,(function(o,i){return a("i",{key:o,staticClass:"iconfont-m- icon-m-xingxingshixin",style:{color:i>=e.starnum?t.componentData.style.nostarcolor:t.componentData.style.starcolor}})})),0):t._e()]),1==t.componentData.params.showtime?a("div",{staticClass:"time",style:{color:t.componentData.style.timecolor}},[t._v(t._s(e.time))]):t._e()]),a("div",{staticClass:"content",style:{color:t.componentData.style.commentcolor}},[t._v(t._s(e.content))]),e.spec&&1==t.componentData.params.showspec?a("p",{staticClass:"spec",style:{color:t.componentData.style.speccolor}},[t._v(t._s(e.spec))]):t._e(),e.images.length&&1==t.componentData.params.showimg?a("ul",{staticClass:"comment-imgs"},t._l(e.images.slice(0,4),(function(o,i){return a("li",{key:i,staticClass:"img-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.previewImage(e.images,i)}}},[a("img",{staticClass:"img",attrs:{mode:"scaleToFill",src:t.$utils.media(o),alt:""}}),e.images.length>4&&3===i?a("div",{staticClass:"img-num"},[a("span",{staticClass:"img-num-text"},[t._v(t._s(e.images.length+"张"))])]):t._e()])})),0):t._e()])])})),0):a("ul",{staticClass:"scroll"},[t._l(t.getComments,(function(e,o){return a("li",{key:o,staticClass:"item",style:{background:t.componentData.style.commentbgcolor,"border-color":t.componentData.style.bordercolor,"margin-right":""+t.px2rpx(t.componentData.style.betweenmargin)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkMore.apply(void 0,arguments)}}},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"userinfo"},[a("div",{staticClass:"avart"},[a("img",{attrs:{src:t.$utils.media(e.avart)||t.$utils.staticImg("decorate/avatar_mobile.png")}})]),a("div",{staticClass:"name",style:{color:t.componentData.style.usercolor}},[t._v(t._s(e.username||""))]),1==t.componentData.params.showlevel&&e.levelname?a("div",{staticClass:"level",style:{color:t.componentData.style.levelcolor,background:t.componentData.style.levelbgcolor}},[a("span",{staticClass:"level-text"},[t._v(t._s(e.levelname))])]):t._e()]),a("div",{staticClass:"content",style:{color:t.componentData.style.commentcolor}},[t._v(t._s(e.content))])]),e.images.length&&1==t.componentData.params.showimg?a("div",{staticClass:"comment-img"},[a("div",{staticClass:"img-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImage(e.images,0)}}},[a("img",{staticClass:"img",attrs:{mode:"scaleToFill",src:t.$utils.media(e.images[0]),alt:""},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.previewImage(e.images,0)}}}),e.images.length>1?a("div",{staticClass:"img-num"},[a("span",{staticClass:"img-num-text"},[t._v(t._s(e.images.length+"张"))])]):t._e()])]):t._e()])})),1==t.componentData.params.showall?a("li",{staticClass:"item all",style:{background:t.componentData.style.commentbgcolor,"border-color":t.componentData.style.bordercolor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkMore.apply(void 0,arguments)}}},[a("span",{staticClass:"all-text",style:{color:t.componentData.style.allcolor}},[t._v(t._s(t.componentData.params.alltext))])]):t._e()],2)]):a("div",{staticClass:"no-comment"},[t._v("暂无评价")])])])]):t._e()},n=[]},"19cee":function(t,e,a){var o=a("81c5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("ef8e731a",o,!0,{sourceMap:!1,shadowMode:!1})},7810:function(t,e,a){var o=a("288e");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("bd86")),n=a("2f62"),l=a("dc11");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){(0,i.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var r={computed:s({},(0,n.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:l.px2rpx}};e.default=r},"81c5":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.isbottom[data-v-3bc7cbd8], .istop[data-v-3bc7cbd8]{z-index:999990}._i[data-v-3bc7cbd8]{display:inline}uni-view[data-v-3bc7cbd8]{box-sizing:border-box}.def-pad[data-v-3bc7cbd8]{padding:%?8?% %?16?%}*[data-v-3bc7cbd8]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-3bc7cbd8]{list-style:none}ul[data-v-3bc7cbd8]{padding:0}uni-image[data-v-3bc7cbd8]{height:auto}.detail_comment[data-v-3bc7cbd8]{width:100%}.detail_comment .container[data-v-3bc7cbd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;width:100%}.detail_comment .label[data-v-3bc7cbd8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;padding:0 %?24?%;box-sizing:border-box}.detail_comment .label.van-hairline--bottom[data-v-3bc7cbd8]:after{border-bottom-color:inherit;border-style:solid}.detail_comment .label i[data-v-3bc7cbd8]{font-style:normal}.detail_comment .label p[data-v-3bc7cbd8]{line-height:%?80?%}.detail_comment .label .evaluate[data-v-3bc7cbd8]{font-size:%?28?%;color:#212121}.detail_comment .label .toDetail[data-v-3bc7cbd8]{font-size:%?24?%;color:#969696}.detail_comment .label .icon-m-right[data-v-3bc7cbd8]{color:#969696;width:%?32?%;height:%?32?%;line-height:%?32?%;text-align:center;font-size:%?32?%}.detail_comment .no-comment[data-v-3bc7cbd8]{height:%?112?%;padding:%?16?% %?24?% 0;box-sizing:border-box;color:#212121;font-size:%?28?%}.detail_comment .container .body[data-v-3bc7cbd8]{width:100%;padding-left:%?24?%;position:relative}.detail_comment .body.is-scroll[data-v-3bc7cbd8]{overflow-x:auto}.detail_comment .body .level[data-v-3bc7cbd8]{margin-left:%?8?%;display:inline-block;height:%?24?%;line-height:%?24?%;padding:0 %?2?%;border-radius:%?20?%}.detail_comment .body .level .level-text[data-v-3bc7cbd8]{position:relative;top:%?-2?%;height:100%;width:100%;display:inline-block;font-size:%?24?%;-webkit-transform:scale(.75);transform:scale(.75)}.detail_comment .body .name[data-v-3bc7cbd8]{max-width:%?86?%;overflow:hidden;font-size:%?24?%;white-space:nowrap;text-overflow:ellipsis}.detail_comment .body .content[data-v-3bc7cbd8]{font-size:%?24?%;line-height:%?32?%;margin-bottom:%?16?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.detail_comment .body .img-num[data-v-3bc7cbd8]{position:absolute;bottom:%?8?%;right:%?8?%;height:%?24?%;line-height:%?24?%;padding:%?4?% %?8?%;color:#fff;background-color:#212121;border-radius:%?20?%;opacity:.7}.detail_comment .body .img-num-text[data-v-3bc7cbd8]{position:relative;top:%?-6?%;display:inline-block;font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8)}.detail_comment .body .all-comment[data-v-3bc7cbd8]{width:100%;font-family:PingFang SC;font-style:normal;font-weight:500;overflow:hidden}.detail_comment .body .all-comment .item[data-v-3bc7cbd8]{margin-top:%?32?%;padding-right:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex}.detail_comment .all-comment .item:last-child .item-content.van-hairline--bottom[data-v-3bc7cbd8]:after{border-width:0}.detail_comment .all-comment .avart[data-v-3bc7cbd8]{-webkit-flex-shrink:0;flex-shrink:0;width:%?76?%;height:%?76?%;border-radius:50%;overflow:hidden}.detail_comment .all-comment .avart img[data-v-3bc7cbd8]{width:100%;height:100%;display:block}.detail_comment .all-comment .item-content[data-v-3bc7cbd8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?16?%;padding-bottom:%?16?%}.detail_comment .all-comment .item-content.van-hairline--bottom[data-v-3bc7cbd8]:after{border-bottom-color:inherit;border-style:solid}.detail_comment .all-comment .head[data-v-3bc7cbd8]{display:-webkit-box;display:-webkit-flex;display:flex;margin:0 0 %?16?% 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.detail_comment .all-comment .head .time[data-v-3bc7cbd8]{-webkit-flex-shrink:0;flex-shrink:0;font-size:%?20?%;display:inline-block}.detail_comment .all-comment .star[data-v-3bc7cbd8]{font-size:%?24?%}.detail_comment .all-comment .spec[data-v-3bc7cbd8]{font-size:%?24?%;line-height:%?32?%;margin-bottom:%?16?%}.detail_comment .all-comment .comment-imgs[data-v-3bc7cbd8]{margin-bottom:%?16?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.detail_comment .all-comment .comment-imgs .img-box[data-v-3bc7cbd8]{overflow:hidden;border-radius:%?8?%;width:%?120?%;height:%?120?%;box-sizing:border-box;margin-right:%?16?%}.detail_comment .comment-imgs .img-box[data-v-3bc7cbd8]:nth-child(4n){position:relative;margin-right:0}.detail_comment .comment-imgs .img-box .img[data-v-3bc7cbd8]{width:100%;height:100%}.detail_comment .scroll[data-v-3bc7cbd8]{padding:%?32?% 0;display:-webkit-box;display:-webkit-flex;display:flex;width:-webkit-fit-content;width:fit-content;overflow-x:auto;overflow-y:hidden}.detail_comment .scroll .item[data-v-3bc7cbd8]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?16?% %?24?%;width:%?464?%;height:%?194?%;border-radius:%?12?%;border:%?2?% solid #e6e7eb}.detail_comment .scroll .item.all[data-v-3bc7cbd8]{width:%?148?%;line-height:%?158?%;margin-right:%?24?%}.detail_comment .scroll .item.all .all-text[data-v-3bc7cbd8]{font-size:%?24?%}.detail_comment .scroll .item .item-content .userinfo[data-v-3bc7cbd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail_comment .scroll .item .item-content .name[data-v-3bc7cbd8]{margin:0 %?8?% 0 %?16?%}.detail_comment .scroll .item .item-content .content[data-v-3bc7cbd8]{margin-top:%?16?%;margin-bottom:0;-webkit-line-clamp:3}.detail_comment .scroll .item .item-content .avart[data-v-3bc7cbd8]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%;border-radius:50%;overflow:hidden}.detail_comment .scroll .item .item-content .avart img[data-v-3bc7cbd8]{width:100%;height:100%;display:block}.detail_comment .scroll .item .comment-img[data-v-3bc7cbd8]{margin-left:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;width:%?162?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.detail_comment .scroll .item .comment-img .img-box[data-v-3bc7cbd8]{position:relative;overflow:hidden;border-radius:%?8?%;width:%?162?%;height:%?162?%;box-sizing:border-box}.detail_comment .scroll .item .comment-img .img-box .img[data-v-3bc7cbd8]{width:100%;height:100%}.detail_comment .openBtn[data-v-3bc7cbd8]{width:%?258.95765?%;height:%?63.51792?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?29.31596?%;border:%?1?% solid #f55;color:#f55;margin:%?36.64495?% auto;border-radius:%?36.64495?%}',""]),t.exports=e},"9c124":function(t,e,a){"use strict";a.r(e);var o=a("10c4"),i=a("e647");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("efd0");var l,c=a("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"3bc7cbd8",null,!1,o["a"],l);e["default"]=s.exports},aeea:function(t,e,a){var o=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("75fc"));a("ac6a"),a("c5f6");var n=o(a("7810")),l={mixins:[n.default],name:"detail_comment",props:{max:{type:Number,default:2}},computed:{getComments:function(){return this.$isPC&&this.componentData.data.forEach((function(t){t.levelname="会员"})),this.max>0&&this.componentData.data.length>this.max?(0,i.default)(this.componentData.data).splice(0,this.max):this.componentData.data}},created:function(){null==this.componentData.style.dividercolor&&(this.componentData.style.dividercolor="#E6E7EB")},methods:{checkMore:function(){this.$emit("custom-event",{target:"detail_comment/checkMore",total:this.componentData.params.total})},previewImage:function(t,e){this.$emit("custom-event",{target:"detail_comment/previewImage",data:{index:e,urls:t}})}}};e.default=l},e647:function(t,e,a){"use strict";a.r(e);var o=a("aeea"),i=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=i.a},efd0:function(t,e,a){"use strict";var o=a("19cee"),i=a.n(o);i.a}}]);