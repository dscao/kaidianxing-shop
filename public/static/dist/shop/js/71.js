(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"05f6":function(e,t,n){"use strict";n("241d")},"085d":function(e,t,n){"use strict";n.r(t);var a=n("face"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},"08c7d":function(e,t,n){"use strict";n.r(t);var a=n("167e"),i=n("3300");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("980e");var r=n("2877"),l=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"35e9f137",null);t["default"]=l.exports},"0ddb":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("159b"),n("e9c4"),n("b0c0");var i=a(n("b85c")),s=a(n("5530")),r=a(n("08c7d")),l=n("2f62"),d={name:"index",components:{TreeTable:r.default},inject:["returnToTop"],computed:(0,s.default)((0,s.default)({},(0,l.mapState)("createGoodClassification",{list:function(e){return e.list}})),{},{noManagePerm:function(){return!this.$getPermMap("goods.category.manage")},expand:function(){var e=!1;return this.list.forEach((function(t){t.expand&&(e=!0),t.children&&t.children.length>0&&t.children.forEach((function(t){t.expand&&(e=!0)}))})),e}}),data:function(){return{loading:!1}},methods:(0,s.default)((0,s.default)({},(0,l.mapMutations)("createGoodClassification",["setList","refreshList","setExpandAll","setLevel","addFirstClassify"])),{},{handleSave:function(){var e=this,t=this.validate(this.list);t?this.$Message.error("请填写完整的分类名称和分类图片"):(this.loading=!0,this.formatData(this.list),this.$api.goodsApi.daveGoodClassify({data:JSON.stringify(o(JSON.parse(JSON.stringify(this.list))))}).then((function(t){e.loading=!1,0===t.error&&(e.$Message.success("保存成功"),e.handleRefresh())})).catch())},expandAll:function(){this.setExpandAll(!this.expand)},handleRefresh:function(){var e=this;this.returnToTop(),this.loading=!0,this.$api.goodsApi.goodClassifyList({}).then((function(t){e.loading=!1,0===t.error&&(e.setLevel(t.level||"0"),e.setList(t.list),e.setExpandAll(!0))})).catch()},validate:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.$store.state.createGoodClassification.level,s=(0,i.default)(this.list);try{for(s.s();!(t=s.n()).done;){var r=t.value;if(n)break;if(!r.name||!r.thumb){n=!0;break}if("0"!==a&&r.children&&r.children.length>0){var l,d=(0,i.default)(r.children);try{for(d.s();!(l=d.n()).done;){var o=l.value;if(n)break;if(!o.name||!o.thumb){n=!0;break}if("2"===a&&o.children&&o.children.length>0){var c,u=(0,i.default)(o.children);try{for(u.s();!(c=u.n()).done;){var f=c.value;if(!f.name||!f.thumb){n=!0;break}}}catch(v){u.e(v)}finally{u.f()}}}}catch(v){d.e(v)}finally{d.f()}}}}catch(v){s.e(v)}finally{s.f()}return n},formatData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){-1!==t.id.indexOf("cus_")&&(t.id="",t.status="1"),t.children&&t.children.length>0&&e.formatData(t.children)}))}}),mounted:function(){this.handleRefresh()}};function o(e){return e.forEach((function(e){e.children&&(0===e.children.length?delete e.children:e.children.length>0&&o(e.children))})),e}t.default=d},"127a":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530"));n("d3b7"),n("3ca3"),n("ddb0"),n("14d9"),n("159b"),n("a434");var s=a(n("7177")),r=a(n("5fa5")),l=a(n("344b")),d=n("2f62"),o={name:"TreeTable",components:{ImageSelector:s.default,DragSortList:r.default,DragSortItem1:l.default,DragSortItem2:function(){return n.e(162).then(n.bind(null,"aaf9"))},DragSortItem3:function(){return n.e(163).then(n.bind(null,"b308"))}},computed:(0,i.default)({list:{get:function(){var e=this.$store.state.createGoodClassification.list;return e},set:function(e){this.setList(e)}}},(0,d.mapState)("createGoodClassification",{level:function(e){return e.level}})),data:function(){return{model:{},currentItem:{thumb:""}}},methods:(0,i.default)((0,i.default)({},(0,d.mapMutations)("createGoodClassification",["setList","refreshList","addFirstClassify","setLevel"])),{},{handler:function(e,t){var n=this,a=t.event,i=t.params;switch(a){case"setExpand":i.expand=!i.expand,this.refreshList();break;case"addTwoChild":case"addThreeChild":this.addChild(i);break;case"deleteImage":i.thumb="",this.refreshList();break;case"addImage":this.currentItem=i,this.$nextTick((function(){n.$refs["image_selector"].setValue()}));break;case"setIsShow":this.setIsShow(i);break;case"handleDelete":this.handleDelete(e,i);break}},changeSelector:function(e){this.currentItem.thumb=e,this.refreshList()},addChild:function(e){e.expand=!0,e.children?e.children.push({id:"cus_".concat(Date.now()),name:"",thumb:"",time:"",status:"1"}):e.children=[{id:"cus_".concat(Date.now()),name:"",thumb:"",time:"",status:"1"}],this.refreshList()},setIsShow:function(e){var t=this;this.$api.goodsApi.editGoodClassifyStatus({id:e.id}).then((function(n){0===n.error&&(t.$Message.success("商品分类状态修改成功"),e.status="0"==e.status?"1":"0",t.refreshList())}))},delClass:function(e,t){var n=-1;e.forEach((function(e,a){e===t&&(n=a)})),e.splice(n,1),this.refreshList()},handleDelete:function(e,t){var n=this;this.$Modal.confirm({title:"提示",content:"确认删除该商品分类?",onOk:function(){var a;-1===(null===t||void 0===t||null===(a=t.id)||void 0===a?void 0:a.indexOf("cus_"))?n.$api.goodsApi.deleteGoodClassify({id:t.id}).then((function(a){"0"==a.error&&(n.$Message.success("商品分类删除成功"),n.delClass(e,t))})):(n.$Message.success("商品分类删除成功"),n.delClass(e,t))},onCancel:function(){}})},getDataList:function(){this.$emit("on-refresh")}})};t.default=o},"167e":function(e,t,n){"use strict";var a=n("f8ae");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},2161:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9");var i=a(n("5530")),s=n("2f62"),r={computed:(0,i.default)({noManagePerm:function(){return!this.$getPermMap("goods.category.manage")}},(0,s.mapState)("createGoodClassification",{level:function(e){return e.level}})),props:{value:{type:Object,default:function(){return{}}}},methods:{handlers:function(e,t){"setAdvs"!=e?this.$emit("handler",{event:e,params:this.value}):this.$router.push({path:"/goods/classify/setting-ad",query:{id:t}})}}};t.default=r},"241d":function(e,t,n){},3150:function(e,t,n){"use strict";n.r(t);var a=n("6827"),i=n("8432");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("d49f");var r=n("2877"),l=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"773b4acd",null);t["default"]=l.exports},3300:function(e,t,n){"use strict";n.r(t);var a=n("127a"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},"344b":function(e,t,n){"use strict";n.r(t);var a=n("ffd0"),i=n("b6f5");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("05f6");var r=n("2877"),l=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"a75c71a6",null);t["default"]=l.exports},"46e0":function(e,t,n){},"5fa5":function(e,t,n){"use strict";n.r(t);var a=n("84ee"),i=n("085d");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("a3a20");var r=n("2877"),l=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"11d204a6",null);t["default"]=l.exports},6827:function(e,t,n){"use strict";var a=n("b29a");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},8127:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"grag-sort-list"},[t("div",{ref:"draggle"},e._l(e.value,(function(n){return t("div",{key:n.id},[t("div",{staticClass:"drag-item"},[e._t("default",null,{data:n})],2)])})),0)])};t.render=n;var a=[];t.staticRenderFns=a},8432:function(e,t,n){"use strict";n.r(t);var a=n("0ddb"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},"84ee":function(e,t,n){"use strict";var a=n("8127");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},8958:function(e,t,n){},"980e":function(e,t,n){"use strict";n("46e0")},a3a20:function(e,t,n){"use strict";n("e2c7")},b29a:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var a=function(){var e=this,t=e._self._c;return t("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[t("div",{staticClass:"btn-bottom"},[t("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])],1)]},proxy:!0}])},[t("div",{staticClass:"good-classification"},[t("div",{staticClass:"header"},[t("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:e.addFirstClassify}},[e._v("+添加一级分类")]),t("Button",{class:{"default-primary":!e.noManagePerm},attrs:{disabled:e.noManagePerm,to:"/goods/classify/setting-level"}},[e._v("设置分类层级")]),t("Button",{directives:[{name:"show",rawName:"v-show",value:"0"!==e.$store.state.createGoodClassification.level,expression:"$store.state.createGoodClassification.level!=='0'"}],staticClass:"default-primary",attrs:{icon:e.expand?"ios-arrow-up":"ios-arrow-down"},on:{click:e.expandAll}},[e._v(" "+e._s(e.expand?"全部折叠":"全部展开")+" ")])],1),t("div",{staticClass:"header-space"}),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"content"},[t("tree-table",{ref:"tree_table",on:{"on-refresh":e.handleRefresh}})],1)])])};t.render=a;var i=[];t.staticRenderFns=i},b5f8:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,n("b0c0");var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tree-table",staticStyle:{"border-bottom":"none"}},[t("div",{staticClass:"content content-bg-one"},[t("div",{staticClass:"icon"},[t("Icon",{attrs:{type:"md-menu"}})],1),t("div",{staticClass:"tree"},[t("div",{staticClass:"content",staticStyle:{"border-bottom":"none"}},["0"!==e.level&&e.value.children&&e.value.children.length>0?t("div",{staticClass:"icon-box"},[t("span",{class:{"iconfont icon-full-down":e.value.expand,"iconfont icon-full-right":!e.value.expand},on:{click:function(t){return e.handlers("setExpand")}}})]):t("div",{staticClass:"icon-box"}),t("span",{staticClass:"title"},[e._v("一级")]),t("Input",{staticClass:"width-200",attrs:{disabled:e.noManagePerm,maxlength:"10","show-word-limit":"",placeholder:"请输入分类名称"},model:{value:e.value.name,callback:function(t){e.$set(e.value,"name",t)},expression:"value.name"}}),"0"!==e.level?t("Button",{attrs:{disabled:e.noManagePerm,type:"text"},on:{click:function(t){return e.handlers("addTwoChild")}}},[e._v("+添加二级分类")]):e._e()],1)]),t("div",{staticClass:"image"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.value.thumb,expression:"value.thumb"}],staticClass:"image-content"},[t("img",{attrs:{src:e.$media(e.value.thumb),alt:""},on:{error:e.replaceImage}}),e.noManagePerm?e._e():t("Icon",{staticClass:"close",attrs:{type:"ios-close-circle"},on:{click:function(t){return e.handlers("deleteImage")}}}),e.noManagePerm?e._e():t("div",{staticClass:"single-replace",on:{click:function(t){return e.handlers("addImage")}}},[e._v(" 替换 ")])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.value.thumb,expression:"!value.thumb"}],staticClass:"add-image",on:{click:function(t){return e.handlers("addImage")}}},[t("kdx-svg-icon",{staticClass:"icon",attrs:{type:"icon-tianjia"}})],1)]),t("div",{staticClass:"add-time"},[e._v(" "+e._s(e.value.created_at)+" ")]),t("div",{staticClass:"status"},[t("span",{class:{show:1==e.value.status,hide:1!=e.value.status}},[e._v(e._s(1==e.value.status?"显示中":"已隐藏"))])]),t("div",{staticClass:"action"},[e.value.id?[-1==e.value.id.indexOf("cus_")?t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(t){return e.handlers("setIsShow")}}},[e._v(e._s(1==e.value.status?"隐藏":"显示"))]):e._e(),t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(t){return e.handlers("setAdvs",e.value.id)}}},[e._v("广告设置")])]:e._e(),t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(t){return e.handlers("handleDelete")}}},[e._v("删除")])],2)]),e.value.children&&e.value.children.length>0&&e.value.expand?t("div",[e._t("default",null,{data:e.value.children})],2):e._e()])};t.render=a;var i=[];t.staticRenderFns=i},b6f5:function(e,t,n){"use strict";n.r(t);var a=n("2161"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},d49f:function(e,t,n){"use strict";n("8958")},e2c7:function(e,t,n){},f8ae:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"good-classification-tree-table"},[e._m(0),t("div",{ref:"draggle",staticClass:"tree-table-box"},[e.list.length>0?t("div",[t("DragSortList",{scopedSlots:e._u([{key:"default",fn:function(n){var a=n.data;return[t("DragSortItem1",{on:{handler:function(t){return e.handler(e.list,t)}},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.data;return["0"!=e.level?t("DragSortList",{scopedSlots:e._u([{key:"default",fn:function(n){var i=n.data;return[t("DragSortItem2",{on:{handler:function(t){return e.handler(a,t)}},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.data;return["2"==e.level?t("DragSortList",{scopedSlots:e._u([{key:"default",fn:function(n){var i=n.data;return[t("DragSortItem3",{on:{handler:function(t){return e.handler(a,t)}},model:{value:i,callback:function(e){i=e},expression:"item"}})]}}],null,!0),model:{value:a,callback:function(e){a=e},expression:"items"}}):e._e()]}}],null,!0),model:{value:i,callback:function(e){i=e},expression:"itemChildren"}})]}}],null,!0),model:{value:a,callback:function(e){a=e},expression:"children"}}):e._e()]}}],null,!0),model:{value:a,callback:function(e){a=e},expression:"data"}})]}}],null,!1,2421518540),model:{value:e.list,callback:function(t){e.list=t},expression:"list"}})],1):t("div",[t("div",{staticStyle:{"text-align":"center"}},[e._v(" 暂无数据 ")])])]),t("image-selector",{ref:"image_selector",attrs:{current:e.currentItem.thumb},on:{"on-change":e.changeSelector}})],1)};t.render=n;var a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"name"},[e._v(" 分类名称 ")]),t("div",{staticClass:"image"},[e._v(" 分类图片 ")]),t("div",{staticClass:"add-time"},[e._v(" 添加时间 ")]),t("div",{staticClass:"status"},[e._v(" 状态 ")]),t("div",{staticClass:"action"},[e._v(" 操作 ")])])}];t.staticRenderFns=a},face:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a434"),n("d3b7"),n("159b");var i=a(n("aa47")),s={components:{},props:{value:{type:Array,default:function(){return[]}}},watch:{value:{immediate:!0,handler:function(){this.value.length&&this.initSortable()}}},methods:{initSortable:function(){var e=this;this.$nextTick((function(){var t=e.$refs["draggle"];new i.default(t,{handle:".icon",dataIdAttr:"one",onEnd:e.endSortable,animation:150,ghostClass:"blue-background-class"})}))},endSortable:function(e){var t=this.value[e.oldIndex];this.value.splice(e.oldIndex,1),this.value.splice(e.newIndex,0,t),this.value.forEach((function(e,t){e.sort_by=t})),this.$emit("input",this.value)}}};t.default=s},ffd0:function(e,t,n){"use strict";var a=n("b5f8");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))}}]);