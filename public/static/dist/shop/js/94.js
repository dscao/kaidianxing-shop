(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{"1bf7":function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return a}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"radio-group"},[o("RadioGroup",{attrs:{type:e.type,vertical:e.vertical},on:{"on-change":e.onChange},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.items,(function(t,i){return o("Radio",{key:i,attrs:{label:i,disabled:t.disabled||e.disabled}},[e.$slots.example?e._e():o("span",[e._v(" "+e._s(t.label)+" ")]),e._t("example",null,{example:t})],2)})),1),e.$slots.tip&&e.$slots.tip.length?o("div",{staticClass:"tip"},[e._t("tip")],2):e._e(),e.$slots.default&&e.$slots.default.length?o("div",{staticClass:"content"},[e._t("default")],2):e._e()],1)},a=[]},"1e29":function(e,t,o){},5471:function(e,t,o){"use strict";o.r(t);var i=o("1bf7"),a=o("78d8");for(var s in a)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(s);o("8c2e");var n=o("2877"),r=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,"4f72f8de",null);t["default"]=r.exports},5720:function(e,t,o){},"78d8":function(e,t,o){"use strict";o.r(t);var i=o("bdc7"),a=o.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"8b72":function(e,t,o){var i=o("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("ade3")),s=i(o("5530"));o("d3b7"),o("3ca3"),o("ddb0"),o("159b"),o("d81d");var n=o("2f62"),r=i(o("58bb")),l=i(o("5471")),d=o("d1be"),c={name:"index",components:{UnionSelector:r.default,MyRadioGroup:l.default,GoodSelector1:function(){return o.e(102).then(o.bind(null,"6481"))},GoodSelector2:function(){return o.e(99).then(o.bind(null,"f2ec9"))},GoodSelector3:function(){return o.e(100).then(o.bind(null,"bd35"))}},computed:(0,s.default)((0,s.default)({},(0,n.mapState)("account",{shopId:function(e){return e.shop.shopId}})),{},{noManagePerm:function(){return!this.$getPermMap("pc.goods-group.manage")},isRoot:function(){var e,t;return 1==(null===(e=this.$store.state.config)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.is_root)},goodSelector:function(){return 1==this.model.goods_type||2==this.model.goods_type||3==this.model.goods_type?"GoodSelector"+this.model.goods_type:""},addGoods:function(){var e=this;return!this.goodsList.some((function(t){return e.model.goods_type&&e.model.goods_type==t.id}))}}),data:function(){return{linkFlg:0,showUnionSelect:!1,currentModal:{},goods_info_message:!1,groupId:"",model:{status:1,name:"",main_img:"",main_img_url:"",goods_type:"1",goods_info:[],sort_order:"",top_advertise_img:"",top_advertise_img_url:"",bottom_advertise_img:"",bottom_advertise_img_url:""},rules:{status:[{required:!0,message:"请选择商城状态"}],name:[{required:!0,message:"请输入商品组块名称"}],main_img:[{required:!0,message:"请上传商城主推图",trigger:"change"}],main_img_url:[{required:!0,message:"请输入主推图链接",trigger:"change"}],goods_type:[{required:!0,message:"请选择商品类型",trigger:"change"}],sort_order:[{required:!0,validator:function(e,t,o){t.length>4?o(new Error("最多为4位数")):t?o():o(new Error("请输入商品组排序"))}}]},submitLoading:!1,goodsList:[{label:"自选商品",id:"1"},{label:"商品分类",id:"2"},{label:"商品分组",id:"3"}]}},created:function(){this.getCategory()},methods:{getCategory:function(){var e=this;this.$api.homeApi.goodsGroupTypes().then((function(t){if(0===t.error){var o=[];t.data.forEach((function(e){o.push({label:e.val,id:e.key})})),e.goodsList=(0,d.dealClassifyList)(o)}}))},handleChange:function(e){this.goods_info_message=!1,this.model.goods_info=e,this.$set(this.model,"goods_info",e),console.log("被赋值",this.model.goods_info)},validateGoodsForm:function(){console.log("3456")},getLabelField:function(){var e=this,t={0:{key:"",by:"desc"},1:{key:"sales",by:"desc"},2:{key:"price",by:"desc"},3:{key:"price",by:"asc"}};if(isNaN(1*this.goodsSelectType)){var o={pageCount:1,pagesize:50,status:1,label_field:this.goodsSelectType,sort:t[this.currentModal.params.goodssort].key,by:t[this.currentModal.params.goodssort].by};this.$api.goodsApi.goodsList(o).then((function(t){0===t.error&&(e.currentModal.data=t.list.map((function(e){return{thumb:e.thumb,price:e.price,productprice:e.original_price,sales:e.sales,title:e.title,sub_title:e.sub_title,gid:e.id,bargain:0,credit:0,ctype:0,type:e.type}})),e.refreshCurrentModal())})).catch()}},changeLink:function(e){this.model.mall_close_url=e.url},showSelect:function(){this.showUnionSelect=!this.showUnionSelect},changeThumb:function(e,t){console.log(e,t),this.$set(this.model,t,e)},getData:function(){var e=this;this.$api.homeApi.goodsGroupDetail({id:this.groupId}).then((function(t){0===t.error&&(console.log(t.data.goods_info),t.data.goods_info=JSON.parse(t.data.goods_info),e.model=Object.assign({},t.data),console.log(e.model," this.model"))}))},onValidate:function(e,t){this.cacheError=(0,s.default)((0,s.default)({},this.cacheError),{},(0,a.default)({},e,t))},validate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise((function(o){e.$refs["form"].validate((function(i){(Array.isArray(e.model.goods_info)&&e.model.goods_info.length<=0||!Array.isArray(e.model.goods_info)&&!e.model.goods_info.hasOwnProperty("data"))&&(e.goods_info_message=!0),o(i),t(i),e.$nextTick((function(){if(!i)for(var t in e.cacheError)if(!e.cacheError[t]){e.$focusError(t);break}}))}))}))},handleSave:function(){var e=this;console.log(this.model,"model"),this.validate().then((function(t){if(t&&!e.goods_info_message){var o="goodsGroupEdit";""==e.groupId&&(o="goodsGroupAdd"),e.model.id=e.groupId,e.$api.homeApi[o](e.model).then((function(t){0===t.error?(e.$Message.success("保存成功"),setTimeout((function(){e.$router.go(-1)}),1e3)):e.$Message.error(t.message),console.log("保存成功",t)}))}}))}},mounted:function(){this.$route.query.hasOwnProperty("id")&&(this.groupId=this.$route.query.id,this.getData())}};t.default=c},"8c2e":function(e,t,o){"use strict";o("5720")},"9b9c":function(e,t,o){"use strict";o.r(t);var i=o("f3b9"),a=o("a4d8");for(var s in a)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(s);o("d80b");var n=o("2877"),r=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,"3b40476c",null);t["default"]=r.exports},a4d8:function(e,t,o){"use strict";o.r(t);var i=o("8b72"),a=o.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},a656:function(e,t,o){e.exports=o.p+"static/dist/shop/img/goodsGroupTitle.png"},bdc7:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("a9e3");var i={props:{vertical:{type:Boolean,default:!1},value:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},items:{type:Array,default:function(){return[{label:"label1",iconType:"",disabled:!1},{label:"label2",iconType:"",disabled:!1}]}},type:{type:String,default:void 0}},watch:{value:{immediate:!0,handler:function(){this.selected="-1";for(var e=0;e<this.items.length;e++)this.items[e].id==this.value&&(this.selected=e);if("-1"==this.selected)for(var t=0;t<this.items.length;t++)""===this.items[t].id&&(this.selected=t);this.lastSelected=this.selected}}},data:function(){return{selected:"",lastSelected:null}},methods:{onChange:function(e){var t=this;if(this.lazy)if(null!==this.lastSelected)this.$nextTick((function(){t.selected=t.lastSelected;var o=t.items[e].id;t.$emit("input",o),t.$emit("change",o,t.items[e])}));else{this.lastSelected=this.selected;var o=this.items[this.selected].id;this.$emit("input",o),this.$emit("change",o,this.items[this.selected])}else{var i=this.items[this.selected].id;this.$emit("input",i),this.$emit("change",i,this.items[this.selected])}}}};t.default=i},d80b:function(e,t,o){"use strict";o("1e29")},f3b9:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return a}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[i("Button",{staticClass:"handler-btn primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[i("div",{staticClass:"container"},[i("Form",{ref:"form",staticClass:"content",attrs:{model:e.model,rules:e.rules,"label-width":140},on:{"on-validate":e.onValidate}},[i("div",{staticClass:"content-box"},[i("kdx-form-title",[e._v("添加组块信息")]),i("FormItem",{attrs:{label:"商品组块状态：",prop:"mall_status"}},[i("RadioGroup",{model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[i("Radio",{attrs:{disabled:e.noManagePerm,label:1}},[i("span",[e._v("开启")])]),i("Radio",{attrs:{disabled:e.noManagePerm,label:0}},[i("span",[e._v("关闭")])])],1),i("kdx-hint-text",[e._v("开启后，PC商城首页显示该商品组模块内容。")])],1),i("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.name",modifiers:{name:!0}}],attrs:{label:"商品组块名称：",prop:"name"}},[i("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"10","show-word-limit":""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),i("div",{staticClass:"flex"},[i("kdx-hint-text",{attrs:{content:"PC商城 首页展示组块名称。"}}),i("kdx-hint-tooltip",{attrs:{width:"320px",type:"image",image:o("a656")}})],1)],1),i("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.main_img",modifiers:{main_img:!0}}],attrs:{label:"主推图片：",prop:"main_img"}},[i("kdx-image-video",{attrs:{type:"image",current:e.model.main_img},on:{"on-change":function(t){return e.changeThumb(t,"main_img")}}}),i("kdx-hint-text",[e._v("图片为长方形，建议尺寸472*400，用于商城首页分享的系统默认宣传图。")])],1),i("FormItem",{attrs:{label:" 主图图跳转链接：",prop:"main_img_url"}},[i("Input",{staticClass:"width-300",attrs:{placeholder:"请填写跳转pc页面的访问路径"},model:{value:e.model.main_img_url,callback:function(t){e.$set(e.model,"main_img_url",t)},expression:"model.main_img_url"}})],1),i("FormItem",{attrs:{label:"商品选择："}},[i("MyRadioGroup",{attrs:{items:e.goodsList},model:{value:e.model.goods_type,callback:function(t){e.$set(e.model,"goods_type",t)},expression:"model.goods_type"}}),i("div",{staticClass:"width-600"},[i("FormItem",{attrs:{"label-width":0,prop:"goods_info",error:"请选择商品","show-message":e.goods_info_message}},[i(e.goodSelector,{key:e.model.goods_type,tag:"component",attrs:{currentInfo:e.model.goods_info},on:{validateGoodsForm:e.validateGoodsForm,handleChange:e.handleChange}})],1)],1)],1),i("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.name",modifiers:{name:!0}}],attrs:{label:"商品组块排序：",prop:"sort_order"}},[i("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,type:"number",maxlength:"4",placeholder:"请输入"},model:{value:e.model.sort_order,callback:function(t){e.$set(e.model,"sort_order",t)},expression:"model.sort_order"}}),i("div",{staticClass:"flex"},[i("kdx-hint-text",{attrs:{content:"最多4位数字，数字越大，排名越靠前，默认排序为创建时间。"}})],1)],1),i("kdx-form-title",[e._v("广告设置")]),i("FormItem",{attrs:{"label-width":0}},[i("kdx-hint-alert",{attrs:{"show-icon":!1}},[e._v(" 说明：跟随商品组块可添加 广告，在商品组块上下均可添加1条广告图片。 ")])],1),i("FormItem",{attrs:{label:"顶部广告："}},[i("kdx-image-video",{attrs:{height:67,type:"image",current:e.model.top_advertise_img},on:{"on-change":function(t){return e.changeThumb(t,"top_advertise_img")}}}),i("kdx-hint-text",[e._v("最多可添加1张，建议尺寸：1200*120")])],1),i("FormItem",{attrs:{label:" 顶部广告跳转链接："}},[i("Input",{staticClass:"width-300",attrs:{placeholder:"请填写跳转pc页面的访问路径"},model:{value:e.model.top_advertise_img_url,callback:function(t){e.$set(e.model,"top_advertise_img_url",t)},expression:"model.top_advertise_img_url"}})],1),i("FormItem",{attrs:{label:"底部广告：",prop:"login_show_img"}},[i("kdx-image-video",{attrs:{height:67,type:"image",current:e.model.bottom_advertise_img},on:{"on-change":function(t){return e.changeThumb(t,"bottom_advertise_img")}}}),i("kdx-hint-text",[e._v("最多可添加1张，建议尺寸：1200*120")])],1),i("FormItem",{attrs:{label:" 底部广告跳转链接："}},[i("Input",{staticClass:"width-300",attrs:{placeholder:"请填写跳转pc页面的访问路径"},model:{value:e.model.bottom_advertise_img_url,callback:function(t){e.$set(e.model,"bottom_advertise_img_url",t)},expression:"model.bottom_advertise_img_url"}})],1)],1)])],1),e.showUnionSelect?i("div",[i("union-selector",{attrs:{"tab-name":e.chooseTabs,current:e.linkInfo,disabledLink:["wx_service"]},on:{"on-cancel":e.showSelect,"on-change":e.changeLink},model:{value:e.showUnionSelect,callback:function(t){e.showUnionSelect=t},expression:"showUnionSelect"}})],1):e._e()])},a=[]}}]);