(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{"13f3":function(t,e,a){},3672:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("b0c0");var n=function(){var t=this,e=t._self._c;return e("kdx-modal-frame",{attrs:{value:t.value,title:"商品分类选择器",width:"1000",loading:t.loading,"ok-text":"保存"},on:{"on-ok":t.handleSave,"on-cancel":t.handleCancel}},[e("div",{staticClass:"goods-classification-link"},[e("div",{staticClass:"header"},[e("div",{staticClass:"name-box"},[t._v("分类名称")]),e("div",{staticClass:"image-box"},[t._v("分类图片")]),e("div",{staticClass:"action-box"},[t._v("操作")])]),t.data&&t.data.length>0?[e("ul",{staticClass:"first-class"},t._l(t.data,(function(a){return e("li",{key:a.id,staticClass:"first-class-item class-item"},[e("div",{staticClass:"first-class-item-content class-item-content"},[e("div",{staticClass:"name-box tree"},[e("div",{staticClass:"content"},[e("span",{staticClass:"title"},[t._v("一级")]),e("Input",{staticClass:"width-100",attrs:{disabled:""},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1)]),e("div",{staticClass:"image-box"},[e("img",{attrs:{src:t.$media(a.thumb),alt:""},on:{error:t.replaceImage}})]),e("div",{staticClass:"action-box"},[e("Button",{directives:[{name:"show",rawName:"v-show",value:a.checked,expression:"item.checked"}],attrs:{type:"primary"},on:{click:function(e){return t.setChecked(a,!1)}}},[t._v(" 已选 ")]),e("Button",{directives:[{name:"show",rawName:"v-show",value:!a.checked,expression:"!item.checked"}],staticClass:"default-primary",on:{click:function(e){return t.setChecked(a,!0)}}},[t._v(" 选择 ")])],1)]),a.children&&a.children.length?e("ul",{staticClass:"second-class"},t._l(a.children,(function(a){return e("li",{key:a.id,staticClass:"second-class-item class-item"},[e("div",{staticClass:"second-class-item-content class-item-content"},[e("div",{staticClass:"name-box tree"},[e("div",{staticClass:"link"},[e("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-cengji"}})],1),e("div",{staticClass:"content"},[e("span",{staticClass:"title"},[t._v("二级")]),e("Input",{staticClass:"width-100",attrs:{disabled:""},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item_sec.name"}})],1)]),e("div",{staticClass:"image-box"},[e("img",{attrs:{src:t.$media(a.thumb),alt:""},on:{error:t.replaceImage}})]),e("div",{staticClass:"action-box"},[e("Button",{directives:[{name:"show",rawName:"v-show",value:a.checked,expression:"item_sec.checked"}],attrs:{type:"primary"},on:{click:function(e){return t.setChecked(a,!1)}}},[t._v(" 已选 ")]),e("Button",{directives:[{name:"show",rawName:"v-show",value:!a.checked,expression:"!item_sec.checked"}],staticClass:"default-primary",on:{click:function(e){return t.setChecked(a,!0)}}},[t._v(" 选择 ")])],1)]),a.children&&a.children.length?e("ul",{staticClass:"third-class"},t._l(a.children,(function(a){return e("li",{key:a.id,staticClass:"third-class-item class-item"},[e("div",{staticClass:"third-class-item-content class-item-content"},[e("div",{staticClass:"name-box tree"},[e("div",{staticClass:"link"},[e("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-cengji"}})],1),e("div",{staticClass:"content"},[e("span",{staticClass:"title"},[t._v("三级")]),e("Input",{staticClass:"width-100",attrs:{disabled:""},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item_thi.name"}})],1)]),e("div",{staticClass:"image-box"},[e("img",{attrs:{src:t.$media(a.thumb),alt:""},on:{error:t.replaceImage}})]),e("div",{staticClass:"action-box"},[e("Button",{directives:[{name:"show",rawName:"v-show",value:a.checked,expression:"item_thi.checked"}],attrs:{type:"primary"},on:{click:function(e){return t.setChecked(a,!1)}}},[t._v(" 已选 ")]),e("Button",{directives:[{name:"show",rawName:"v-show",value:!a.checked,expression:"!item_thi.checked"}],staticClass:"default-primary",on:{click:function(e){return t.setChecked(a,!0)}}},[t._v(" 选择 ")])],1)])])})),0):t._e()])})),0):t._e()])})),0)]:e("div",{staticStyle:{"text-align":"center"}},[t._v(" 暂无数据 ")])],2)])};e.render=n;var i=[];e.staticRenderFns=i},"7839f":function(t,e,a){},"86c9":function(t,e,a){"use strict";a.r(e);var n=a("8872"),i=a("d92e");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("def8");var c=a("2877"),o=Object(c["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"23cb2b6e",null);e["default"]=o.exports},8872:function(t,e,a){"use strict";var n=a("3672");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"8b16":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("b0c0"),a("d81d");var i=n(a("53ca")),s=n(a("86c9")),c={components:{ClassSelector:s.default},props:["currentInfo"],data:function(){var t=this;this.$createElement;return{show:!1,componentData:{params:{cateid:"",catethumb:"",catename:"",goodssort:0},data:[]},columns:[{key:"thumb",title:"分类名称",align:"left",render:function(e,a){return e("div",{class:"category"},[e("img",{attrs:{src:t.$utils.media(a.row.thumb),alt:""},style:{width:"40px",height:"40px"}}),e("div",{class:"title"},[a.row.title])])}},{key:"option",title:"操作",align:"center",width:100,render:function(e,a){return e("p",{class:"option",style:"text-align:center;"},[e("span",{on:{click:function(){t.selectLink(a)}}},["替换"]),e("span",{on:{click:function(){t.delete(a)}}},["删除"])])}}]}},computed:{getCate:function(){if(!this.componentData.params.cateid)return[];var t=[{thumb:this.componentData.params.catethumb,title:this.componentData.params.catename,id:this.componentData.params.cateid}];return t}},watch:{"componentData.data":{deep:!0,handler:function(){console.log("deep"),this.$emit("handleChange",this.componentData)}}},created:function(){Array.isArray(this.currentInfo)||"object"!==(0,i.default)(this.currentInfo)||(this.componentData={params:{cateid:this.currentInfo.params.cateid||"",catethumb:this.currentInfo.params.catethumb||"",catename:this.currentInfo.params.catename||"",goodssort:this.currentInfo.params.goodssort||0},data:this.currentInfo.params.data||[]})},methods:{delete:function(){this.componentData={params:{cateid:"",catethumb:"",catename:"",goodssort:0},data:[]}},selectLink:function(){this.show=!this.show},handleCancel:function(){this.show=!1},handleChange:function(){var t,e,a,n,i,s=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:null===(t=this.componentData.params)||void 0===t?void 0:t.cateid,name:null===(e=this.componentData.params)||void 0===e?void 0:e.catename,thumb:null===(a=this.componentData.params)||void 0===a?void 0:a.catethumb};if("goods"==(null===(n=this.errorInfo)||void 0===n?void 0:n.id)&&this.$emit("validateGoodsForm"),c.id){var o={0:{key:"",by:"desc"},1:{key:"sales",by:"desc"},2:{key:"price",by:"desc"},3:{key:"price",by:"asc"}};this.componentData.params.cateid=null===c||void 0===c?void 0:c.id,this.componentData.params.catename=null===c||void 0===c?void 0:c.name,this.componentData.params.catethumb=null===c||void 0===c?void 0:c.thumb;var r={pageCount:1,pagesize:50,status:1,category_id:null!==(i=null===c||void 0===c?void 0:c.id)&&void 0!==i?i:"",sort:o[this.componentData.params.goodssort].key,by:o[this.componentData.params.goodssort].by};this.$api.goodsApi.goodsList(r).then((function(t){0===t.error&&(s.componentData.data=t.list.map((function(t){return{thumb:t.thumb,price:t.price,productprice:t.original_price,sales:1*t.sales+1*t.real_sales,title:t.title,sub_title:t.sub_title,gid:t.id,bargain:0,credit:0,ctype:0}})),console.log(s.componentData," this.componentData"))})).catch()}else this.componentData.data=[]}}};e.default=c},aae4:function(t,e,a){"use strict";a.r(e);var n=a("8b16"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},b033:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"select-good-type"},[e("div",{staticClass:"type-table"},[e("Table",{attrs:{border:"",columns:t.columns,data:t.getCate,size:"small"}}),t.getCate.length?t._e():e("div",{staticClass:"add",on:{click:t.selectLink}},[t._v("+添加分类")])],1),e("class-selector",{attrs:{current:t.getCate[0]},on:{"on-cancel":t.handleCancel,"on-change":t.handleChange},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)};e.render=a;var n=[];e.staticRenderFns=n},b480:function(t,e,a){"use strict";a("7839f")},b7b0:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b"),a("fb6a");var i=n(a("5530")),s={name:"goodsClassifySelector",props:{value:{type:Boolean,default:!1},current:{type:[Object,String],default:function(){}}},data:function(){return{data:[],selectRow:{},loading:!1}},watch:{value:function(t){t&&this.getList()}},methods:{getList:function(){var t=this;this.loading=!0,this.$api.goodsApi.goodClassifyList().then((function(e){var a;if((t.loading=!1,0===e.error)&&(t.data=e.list,null!==(a=t.current)&&void 0!==a&&a.id)){var n,i=(null===(n=t.current)||void 0===n?void 0:n.id)||t.current;t.defaultChecked(i)}}))},setChecked:function(t,e){e?(this.selectRow=(0,i.default)({},t),this.defaultChecked(t.id)):this.selectRow=(0,i.default)({},{})},defaultChecked:function(t){this.data.forEach((function(e){e.checked=!1,e.id===t&&(e.checked=!0),e.children&&e.children.length&&e.children.forEach((function(e){e.checked=!1,e.id===t&&(e.checked=!0),e.children&&e.children.length&&e.children.forEach((function(e){e.checked=!1,e.id===t&&(e.checked=!0)}))}))})),this.data=this.data.slice(0)},handleSave:function(){this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel")}}};e.default=s},c6fea:function(t,e,a){"use strict";var n=a("b033");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},d92e:function(t,e,a){"use strict";a.r(e);var n=a("b7b0"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},def8:function(t,e,a){"use strict";a("13f3")},f2ec9:function(t,e,a){"use strict";a.r(e);var n=a("c6fea"),i=a("aae4");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("b480");var c=a("2877"),o=Object(c["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"70f19e1a",null);e["default"]=o.exports}}]);