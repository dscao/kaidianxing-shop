(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"0d44":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={global:[{type:"pictures",name:"图片",svg:"dantuzu"},{type:"singlelinetext",name:"单行文本",icon:"iconfont icon-biaotilan"},{type:"multilinetext",name:"多行文本",svg:"fuwenben"},{type:"selector",name:"下拉框",svg:"xialaxuanze"},{type:"radios",name:"单选框",svg:"radio"},{type:"checkboxes",name:"多选框",svg:"checked"},{type:"city",name:"地区",svg:"city"},{type:"datepicker",name:"日期",svg:"date"},{type:"daterange",name:"日期范围",svg:"daterange"},{type:"identity",name:"身份证号码",svg:"username"},{type:"timer",name:"时间",svg:"time"},{type:"timerange",name:"时间范围",svg:"timerange"},{type:"telephone",name:"手机号码",svg:"telephone"}]};e.default=n},1074:function(t,e,n){"use strict";n("1286")},"10dd":function(t,e,n){"use strict";n("cdb7")},1286:function(t,e,n){},1746:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-form-list"},[n("search-header",{ref:"search",on:{"on-change":t.handleSearch}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticClass:"content"},[n("table-list",{ref:"table",attrs:{data:t.table.data,total:t.table.total},on:{"on-page-change":t.changePage,"on-refresh":t.refreshTable}})],1),t._t("default")],2)},i=[]},"1adf":function(t,e,n){"use strict";n.r(e);var a=n("cea4"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"1bab":function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4de4"),n("d3b7"),n("a15b"),n("99af");var i=a(n("15fd")),o=a(n("329f")),r=["content"],s={name:"index",components:{PreviewImg:o.default},data:function(){return{imageList:[],data:{},formContent:[],previewImages:[],imgModal:!1,current:0}},mounted:function(){this.id=this.$route.query.id||"",this.getData()},methods:{getData:function(){var t=this;this.$api.formApi.getCustomDetailInfo({id:this.id}).then((function(e){if(0===e.error){var n=e.data,a=n.content,o=(0,i.default)(n,r);t.data=o,t.formContent=a?JSON.parse(a):[],t.imageList=t.formContent.filter((function(t){return"pictures"===t.id}))}}))},previewImg:function(t,e,n){console.log("index",e),this.previewImages=n,(e||0==e)&&(this.current=e),this.imgModal=t},getValue:function(t){var e;return"checkboxes"===t.id?"".concat((null===(e=t.params)||void 0===e?void 0:e.value.join(","))||"-"):"city"!==t.id?"daterange"===t.id||"timerange"===t.id?t.params.start.value&&t.params.end.value?"".concat(t.params.start.value," ~ ").concat(t.params.end.value):t.params.start.value||t.params.end.value?"".concat(t.params.start.value||t.params.end.value):"-":"".concat(t.params.value||"-"):2==t.params.status?"".concat(t.params.province||"-"):0==t.params.status?t.params.province&&t.params.city?"".concat(t.params.province).concat(t.params.city):"-":1==t.params.status?t.params.province&&t.params.city&&t.params.area?"".concat(t.params.province).concat(t.params.city).concat(t.params.area):"-":void 0},changePreview:function(t){this.current=t}}};e.default=s},2353:function(t,e,n){},3035:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"presell-message-list"},[n("div",{staticClass:"presell-message-list-index"},[n("notice-list",{attrs:{type:t.type},on:{toDetail:t.toDetail}})],1)])},i=[]},"31b5":function(t,e,n){"use strict";n.r(e);var a=n("b6e9"),i=n("3436");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1074");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"7360160a",null);e["default"]=s.exports},3436:function(t,e,n){"use strict";n.r(e);var a=n("eec3"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},4881:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("a15b"),n("d81d"),n("d3b7"),n("159b");var a=n("3b02"),i={props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},computed:{selectDisabled:function(){return 0===this.selectRows.length}},data:function(){var t=this;this.$createElement;return{columns:[{type:"selection",width:40,align:"center"},{title:"表单模板ID",key:"id"},{title:"表单名称",key:"name"},{title:"应用位置",key:"template_name",render:function(t,e){var n;if(null!==(n=e.row[e.column.key])&&void 0!==n&&n.length){var a=e.row[e.column.key],i=a.map((function(t){return"【".concat(t,"】")})).join(" ");return t("div",[i])}return t("div",["-"])}},{title:"创建时间",key:"created_at"},{title:"已收集数据(条)",key:"count"},{title:"操作",key:"action",minWidth:80,maxWidth:220,render:function(e,n){return e("div",{class:"action-btn"},[e("Button",{attrs:{type:"text"},on:{click:function(){t.handleEdit(n.row)}}},["编辑"]),e("Button",{attrs:{type:"text"},on:{click:function(){t.handleDelete({type:"single",id:n.row.id})}}},["删除"]),e("Button",{attrs:{type:"text"},on:{click:function(){t.handlePreview(n.row)}}},["预览"]),e("Button",{attrs:{type:"text"},on:{click:function(){t.$router.push({path:"/plugins/customForm/detail",query:{id:n.row.id}})}}},["查看"]),e("Button",{attrs:{type:"text"},on:{click:function(){t.handleExport(n.row)}}},["导出"]),e("Button",{attrs:{type:"text"},on:{click:function(){t.handleUpdateData(n.row)}}},["更新数据"])])}}],selectRows:[],isSelectAll:!1}},methods:{reset:function(){this.$refs["page"].reset(),this.selectRows=[],this.isSelectAll=!1},changePage:function(t){this.$emit("on-page-change",t)},checkboxChange:function(t){var e=this;this.$refs["table"].selectAll(t),this.data.forEach((function(n,a){e.$set(e.data[a],"_checked",t)})),this.selectRows=t?this.data:[]},selectChange:function(t){this.selectRows=t,this.isSelectAll=this.selectRows.length===this.data.length},handleDelete:function(t){var e=this,n=t.type,a=t.id;this.$Modal.confirm({title:"提示",content:"删除表单后往期数据将无法导出,确认删除这个表单吗？",onOk:function(){var t={};t="multiple"===n?{ids:e.selectRows.map((function(t){return t.id})).join(",")}:{id:a},e.deleteComment(t)},onCancel:function(){}})},deleteComment:function(t){var e=this;this.$api.formApi.deleteCustomForm(t).then((function(t){0===t.error&&(e.$Message.success("自定义表单删除成功"),e.$emit("on-refresh"))}))},handleExport:function(t){this.$Modal.confirm({title:"提示",content:"是否确认导出？",onOk:function(){(0,a.Export)("manage/apps/diyform/list/download",{id:t.id,location:t.location})}})},handlePreview:function(t){this.$emit("on-preview",t.content?JSON.parse(t.content):"")},handleEdit:function(t){this.$router.push({path:"/plugins/customForm/edit?id=".concat(t.id)})},handleUpdateData:function(t){this.$emit("on-update-data",t)},initFooterData:function(){this.isSelectAll=!1,this.selectRows=[]}}};e.default=i},"4bcf":function(t,e,n){"use strict";n.r(e);var a=n("e2ed"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"4c44":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-form-list"},[n("kdx-hint-alert",{staticClass:"marginB-10",attrs:{"show-icon":!1}},[t._v(" 自定义表单启用方式：页面装修中选择“表单”组件导入对应表单进行使用，除商品详情页、个人中心页之外的装修页面均可使用。 "),n("Button",{staticStyle:{"font-weight":"bold"},attrs:{type:"text"},on:{click:t.routeLink}},[t._v("立即前往装修")])],1),n("search-header",{ref:"search",on:{"on-change":t.handleSearch}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticClass:"content"},[n("table-list",{ref:"table",attrs:{data:t.table.data,total:t.table.total},on:{"on-page-change":t.changePage,"on-refresh":t.refreshTable,"on-preview":t.handlePreview,"on-update-data":t.handleUpdateData}})],1),n("preview-modal",{ref:"preview_modal",attrs:{data:t.preview.data}}),t._t("default")],2)},i=[]},"4d60":function(t,e,n){},5514:function(t,e,n){"use strict";n.r(e);var a=n("4c44"),i=n("caa0");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("10dd");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"00c9cda8",null);e["default"]=s.exports},"5f25":function(t,e,n){"use strict";n.r(e);var a=n("b020"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"60bf":function(t,e,n){"use strict";n.r(e);var a=n("c371"),i=n("e8f2");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"8d792b9a",null);e["default"]=s.exports},6747:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("a9e3"),n("d3b7"),n("159b"),n("d81d");var o=a(n("329f")),r={name:"EvaluateList",components:{PreviewImg:o.default},props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){var t=this;this.$createElement;return{columns:[{type:"selection",width:40,align:"center"},{title:"表单数据ID",key:"id",width:120},{title:"表单名称",key:"name"},{title:"应用位置",key:"location",render:function(t,e){return e.row[e.column.key]?t("div",[e.row[e.column.key]]):t("div",["-"])}},{title:"提交会员",key:"nickname",render:function(e,n){return e("div",{class:"vip-name line-hide",on:{click:function(){t.routerPath(n.row.member_id)}}},[n.row[n.column.key]||"-"])}},{title:"会员ID",key:"member_id"},{title:"提交时间",key:"created_at"},{title:"操作",key:"action",minWidth:80,maxWidth:160,render:function(e,n){return e("div",{class:"action-btn"},[e("Button",{attrs:{type:"text"},class:"del-btn",on:{click:function(){t.handleDel(n.row)}}},["删除"]),e("Button",{attrs:{type:"text"},on:{click:function(){t.$router.push({path:"/plugins/customForm/detail-info",query:{id:n.row.id}})}}},["查看详情"])])}}],previewImages:[],imgModal:!1,current:0,selectRows:[],isSelectAll:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("diyform.manage")},selectDisabled:function(){return 0===this.selectRows.length}},methods:{reset:function(){this.$refs["page"].reset(),this.selectRows=[],this.isSelectAll=!1},changePage:function(t){this.$emit("on-page-change",t)},routerPath:function(t){this.$utils.openNewWindowPage("/member/detail",{id:t})},previewImg:function(t,e,n){this.previewImages=n,e&&(this.current=e),this.imgModal=t},selectChange:function(t){this.selectRows=t,this.isSelectAll=this.selectRows.length===this.data.length},checkboxChange:function(t){var e=this;this.data.forEach((function(n,a){e.$set(e.data[a],"_checked",t)})),this.selectRows=t?this.data:[]},handleBatch:function(){var t=this;this.$Modal.confirm({title:"提示",content:"删除后所选数据不可恢复,确认删除？",onOk:function(){var e=t.selectRows.map((function(t){return t.id}));t.submitDel({ids:e})}})},handleDel:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"删除后所选数据不可恢复,确认删除？",onOk:function(){e.submitDel({id:t.id})}})},submitDel:function(t){var e=this,n=(0,i.default)({form_id:this.$route.query.id},t);this.$api.formApi.removeDiyFormData(n).then((function(t){0==t.error&&(e.selectRows=[],e.isSelectAll=!1,e.$Message.success("操作成功"),e.$emit("on-refresh"))}))}}};e.default=r},"6c7ef":function(t,e,n){"use strict";n.r(e);var a=n("b8c1"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},7114:function(t,e,n){"use strict";n("d10e")},72507:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"page-content-title"},[t._v(" 自定义表单预览 ")]),a("div",{staticClass:"row relative w840 page-content-item"},[a("div",{staticClass:"diy-phone"},[a("div",{staticClass:"phone-body"},[a("div",{staticClass:"phone-title"},[a("div",{staticClass:"phone-top"},[a("img",{staticStyle:{width:"375px",height:"20px"},attrs:{src:n("9d28"),alt:""}}),a("img",{staticStyle:{width:"375px",height:"44px"},attrs:{src:n("ba08"),alt:""}})]),a("p",{staticClass:"page-title"},[t._v("页面名称")])]),a("div",{staticClass:"phone-main",attrs:{id:"toCanvas"}},[t._t("top"),a("div",{staticClass:"phone-main-content-box"},[a("div",{staticClass:"phone-main-content"},t._l(t.items,(function(t,e){return a("div",{key:e,staticClass:"phone-main-content-item"},[a("form-items",{attrs:{model:t}})],1)})),0)]),a("div",{staticClass:"bottom-items",staticStyle:{width:"100%"}},[t._t("bottom")],2),t._t("fixed"),t.items.length?t._e():a("p",{staticStyle:{"text-align":"center","line-height":"400px"}},[t._v("您还没有添加任何元素")])],2)])])])])},i=[]},"78d6":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-form-detail"},[n("Table",{ref:"table",attrs:{columns:t.columns,data:t.data},on:{"on-selection-change":t.selectChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.data.length>0,expression:"data.length > 0"}],staticClass:"footer-action"},[n("Checkbox",{attrs:{disabled:t.noManagePerm},on:{"on-change":t.checkboxChange},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),n("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.handleBatch}},[t._v("批量删除")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.total>10,expression:"total > 10"}],staticClass:"footer-page"},[n("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1),n("preview-img",{directives:[{name:"show",rawName:"v-show",value:t.imgModal,expression:"imgModal"}],attrs:{imgList:t.previewImages||[],currentIndex:t.current},on:{"on-close":function(e){return t.previewImg(!1)}}})],1)},i=[]},8155:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("841c"),n("d3b7");var i=a(n("ef4c")),o=a(n("a048")),r=a(n("0c15")),s={name:"index",components:{SearchHeader:i.default,TableList:o.default,PreviewModal:r.default},inject:["returnToTop"],data:function(){return{search:{},table:{data:[],total:0,loading:!1},page:{pageSize:10,pageNumber:1},preview:{type:"",data:[]},type:""}},methods:{handleSearch:function(t){this.search=t,this.refreshTable(),this.value=!0},refreshTable:function(){var t,e=this;this.page={pageSize:10,pageNumber:1},this.getList().then((function(){e.type&&e.$Modal.confirm({title:"提示",content:"表单保存成功，可前往装修页面使用表单组件导入后使用,是否立即为您新建自定义页面并导入本表单进行使用？",cancelText:"暂不设置",okText:"立即创建",onOk:function(){var t;e.$router.push({path:e.$route.path}),e.$utils.openNewWindowPage("/decorate/custom?id=&type=add&pageItem=diyform&diyformId=".concat(null===(t=e.table.data[0])||void 0===t?void 0:t.id))},onCancel:function(){e.$router.push({path:e.$route.path})}}),e.type=""})),null===(t=this.$refs["table"])||void 0===t||t.reset()},changePage:function(t){this.page=t,this.getList()},getList:function(){var t=this;return new Promise((function(e){t.returnToTop(),t.table.loading=!0;var n=Object.assign({pagesize:t.page.pageSize,page:t.page.pageNumber},t.search);t.$api.formApi.getCustomFormList(n).then((function(n){t.table.loading=!1,0===n.error&&(t.table.data=n.data.list||[],t.table.total=n.data.total||0,e())}))}))},handlePreview:function(t){var e=this;this.preview.data=t,this.$nextTick((function(){e.$refs["preview_modal"].setValue()}))},routeLink:function(){this.$utils.openNewWindowPage("/shop/list/system")},handleUpdateData:function(t){var e=this;this.table.loading=!0,this.$api.formApi.updateCustomFormData({id:t.id}).then((function(t){0===t.error&&(e.getList(),e.$refs["table"].initFooterData())}))}},mounted:function(){this.type=this.$route.query.type||"",this.refreshTable()}};e.default=s},8334:function(t,e,n){"use strict";n.r(e);var a=n("4881"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"898bc":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[n("Button",{attrs:{type:"primary",to:"/plugins/customForm/add"}},[t._v("+添加自定义表单")])]},proxy:!0}])},[n("Form",{ref:"form",attrs:{model:t.model,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[n("FormItem",{attrs:{label:"关键词："}},[n("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入关键词"},on:{"on-enter":t.handleSearch},model:{value:t.model.keyword,callback:function(e){t.$set(t.model,"keyword",e)},expression:"model.keyword"}})],1),n("div",{staticClass:"ivu-form-item-btn"},[n("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),n("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)},i=[]},"8b5d":function(t,e,n){"use strict";n("8d77")},"8d77":function(t,e,n){},"9ff5":function(t,e,n){"use strict";n.r(e);var a=n("72507"),i=n("cd96");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a24a");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"f2510fa8",null);e["default"]=s.exports},a048:function(t,e,n){"use strict";n.r(e);var a=n("a939"),i=n("8334");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("c553");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"4670bd6a",null);e["default"]=s.exports},a24a:function(t,e,n){"use strict";n("4d60")},a939:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-evaluate-list"},[n("Table",{ref:"table",attrs:{columns:t.columns,data:t.data},on:{"on-selection-change":t.selectChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],staticClass:"footer-action"},[n("Checkbox",{on:{"on-change":t.checkboxChange},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),n("Button",{attrs:{disabled:t.selectDisabled},on:{click:function(e){return t.handleDelete({type:"multiple"})}}},[t._v("批量删除")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.total>10,expression:"total > 10"}],staticClass:"footer-page"},[n("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1)},i=[]},a9d1:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=a(n("3a38")),r=n("2f62"),s={components:{FormItems:o.default},computed:(0,i.default)({},(0,r.mapState)("plugins/form",{items:function(t){return t.formItems}}))};e.default=s},b020:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("9794")),o={name:"index",components:{noticeIndex:i.default},props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}};e.default=o},b6e9:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-form"},[n("div",{staticClass:"custom-form-main"},[n("div",{staticClass:"diyphone"},[n("DiyPhone")],1),n("div",{ref:"form_setter",staticClass:"form-setter"},[n("kdx-content-bar",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"content_bar",scopedSlots:t._u([{key:"btn",fn:function(){return[n("Button",{staticClass:"primary-long",on:{click:t.handleSave}},[t._v("保存")]),n("Button",{staticClass:"default-long",on:{click:t.goBack}},[t._v("返回")])]},proxy:!0}])},[n("Form",{ref:"form",staticClass:"form-setter-item",attrs:{model:t.model,rules:t.rules,"label-width":120}},[n("kdx-form-title",[t._v("基本信息")]),n("BaseInfo",{attrs:{id:t.id}}),n("div",{staticClass:"form-adder-box",style:t.styleBox},[n("div",{ref:"form_adder",style:t.styles},[n("kdx-form-title",[t._v("添加字段")]),n("ItemAdder",{attrs:{items:t.formItems}})],1)]),t.items.length?n("kdx-form-title",[t._v("表单设置")]):t._e(),n("ItemSetter"),n("kdx-form-title",[t._v("设置")]),n("div",[n("FormItem",{attrs:{label:"表单提交权限："}},[n("RadioGroup",{attrs:{vertical:""},model:{value:t.model.is_submit_number,callback:function(e){t.$set(t.model,"is_submit_number",e)},expression:"model.is_submit_number"}},[n("Radio",{attrs:{label:"0"}},[t._v("不限制")]),n("Radio",{attrs:{label:"1"}},[t._v("同一账号限提交1次")])],1),n("kdx-hint-text",{staticClass:"perm-tip"},[t._v("由不限制修改为同一账号限制提交次数时，将重新累计用户提交次数。")])],1),n("FormItem",{attrs:{label:"消息通知设置："}},[n("RadioGroup",{model:{value:t.model.is_notification,callback:function(e){t.$set(t.model,"is_notification",e)},expression:"model.is_notification"}},[n("Radio",{attrs:{label:"1"}},[t._v("开启")]),n("Radio",{attrs:{label:"0"}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)])])},i=[]},b8c1:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"SearchHeader",data:function(){return{model:{keyword:""}}},methods:{handleSearch:function(){var t=Object.assign({},this.model);this.$emit("on-change",t)},handleReset:function(){this.$emit("on-change",{}),this.resetModel()},resetModel:function(){this.model={keyword:""}}}};e.default=n},bb3a:function(t,e,n){"use strict";n.r(e);var a=n("3035"),i=n("4bcf");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("be83");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},bcf9:function(t,e,n){},be83:function(t,e,n){"use strict";n("bcf9")},c371:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kdx-header-bar",[n("Form",{ref:"form",attrs:{model:t.model,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[n("FormItem",{attrs:{label:"提交会员："}},[n("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"会员昵称/会员ID"},on:{"on-enter":t.handleSearch},model:{value:t.model.keyword,callback:function(e){t.$set(t.model,"keyword",e)},expression:"model.keyword"}})],1),n("div",{staticClass:"ivu-form-item-btn"},[n("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),n("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)},i=[]},c553:function(t,e,n){"use strict";n("ca9f")},ca9f:function(t,e,n){},caa0:function(t,e,n){"use strict";n.r(e);var a=n("8155"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},cd96:function(t,e,n){"use strict";n.r(e);var a=n("a9d1"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},cdb7:function(t,e,n){},ce85:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-form-detail-info"},[n("div",{staticClass:"item-box"},[n("kdx-form-title",[t._v("基本信息")]),n("div",{staticClass:"base-info"},[n("ul",[n("li",[n("div",{staticClass:"label"},[t._v(" 表单数据ID： ")]),n("div",{staticClass:"content id"},[t._v(" "+t._s(t.data.id)+" ")])]),n("li",[n("div",{staticClass:"label"},[t._v(" 表单名称： ")]),n("div",{staticClass:"content name"},[t._v(" "+t._s(t.data.name)+" ")])]),n("li",[n("div",{staticClass:"label"},[t._v(" 应用位置： ")]),n("div",{staticClass:"content id"},[t._v(" "+t._s(t.data.location)+" ")])])]),n("ul",[n("li",[n("div",{staticClass:"label"},[t._v(" 会员ID： ")]),n("div",{staticClass:"content id"},[t._v(" "+t._s(t.data.member_id)+" ")])]),n("li",[n("div",{staticClass:"label"},[t._v(" 会员昵称： ")]),n("div",{staticClass:"content name"},[t._v(" "+t._s(t.data.nickname)+" ")])]),n("li",[n("div",{staticClass:"label"},[t._v(" 提交时间： ")]),n("div",{staticClass:"content name"},[t._v(" "+t._s(t.data.created_at)+" ")])])])])],1),n("div",{staticClass:"item-box"},[n("kdx-form-title",[t._v("表单内容")]),t.formContent.length>0?n("div",{staticClass:"form-content"},[n("ul",[t._l(t.formContent,(function(e,a){return["pictures"!==e.id?n("li",{key:a},[n("div",{staticClass:"label"},[t._v(" "+t._s(e.params.title)+"： ")]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.getValue(e))+" ")])]):t._e()]})),t.imageList.length>0?t._l(t.imageList,(function(e,a){return n("li",{key:a},[n("div",{staticClass:"label"},[t._v(" "+t._s(e.params.title)+"： ")]),e.params.value.length?n("div",{staticClass:"content image"},t._l(e.params.value,(function(a,i){return n("div",{key:i,staticClass:"image-item"},[n("img",{attrs:{src:t.$media(a),alt:""},on:{error:t.previewImg}}),n("div",{staticClass:"shade",on:{click:function(n){return t.previewImg(!0,i,e.params.value)}}},[n("div",{staticClass:"shade-content"},[n("p",[n("Icon",{attrs:{type:"ios-search"}})],1),n("p",[t._v(" 查看 ")])])])])})),0):t._e()])})):t._e()],2)]):t._e()],1),n("preview-img",{directives:[{name:"show",rawName:"v-show",value:t.imgModal,expression:"imgModal"}],attrs:{imgList:t.previewImages||[],currentIndex:t.current},on:{"on-close":function(e){return t.previewImg(!1)},"on-change":t.changePreview}}),t._t("default")],2)},i=[]},cea4:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("841c");var i=a(n("60bf")),o=a(n("f2b4")),r={name:"index",components:{SearchHeader:i.default,TableList:o.default},inject:["returnToTop"],data:function(){return{search:{},table:{data:[],total:0,loading:!1},page:{pageSize:10,pageNumber:1},id:0}},methods:{handleSearch:function(t){this.search=t,this.refreshTable()},refreshTable:function(){var t;this.page={pageSize:10,pageNumber:1},this.getList(),null===(t=this.$refs["table"])||void 0===t||t.reset()},changePage:function(t){this.page=t,this.getList()},getList:function(){var t=this;this.returnToTop(),this.table.loading=!0;var e=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber,id:this.id},this.search);this.$api.formApi.getCustomFormDetail(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.data.list||[],t.table.total=e.data.total||0)}))}},mounted:function(){this.id=this.$route.query.id||0,this.refreshTable()}};e.default=r},d10e:function(t,e,n){},d145:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"SearchHeader",data:function(){return{model:{keyword:""}}},methods:{handleSearch:function(){var t=Object.assign({},this.model);this.$emit("on-change",t)},handleReset:function(){this.$emit("on-change",{}),this.resetModel()},resetModel:function(){this.model={keyword:""}}}};e.default=n},d57d:function(t,e,n){"use strict";n.r(e);var a=n("1746"),i=n("1adf");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("8b5d");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"2f8e6be6",null);e["default"]=s.exports},d686:function(t,e,n){"use strict";n.r(e);var a=n("ce85"),i=n("e6d1");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("ec11");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"3d39a9f4",null);e["default"]=s.exports},dbd2:function(t,e,n){"use strict";n.r(e);var a=n("6747"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},e2ed:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("487f")),o={name:"index",components:{noticeList:i.default},props:{},data:function(){return{type:{plugin_name:"diyform",group_name:"seller_notice",group_item_name:"seller_notice"}}},computed:{},created:function(){},mounted:function(){},methods:{toDetail:function(t){this.$router.push({path:"/plugins/customForm/notice/index",query:{type_code:t.type_code,items:t.items}})}}};e.default=o},e6d1:function(t,e,n){"use strict";n.r(e);var a=n("1bab"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},e8f2:function(t,e,n){"use strict";n.r(e);var a=n("d145"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},e9e3:function(t,e,n){"use strict";n.r(e);var a=n("f5ae"),i=n("5f25");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},ec11:function(t,e,n){"use strict";n("2353")},eec3:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4"),n("d3b7"),n("b0c0");var i=a(n("5530")),o=a(n("c9cc")),r=a(n("19fd")),s=a(n("49439")),l=a(n("0d44")),c=a(n("9ff5")),u=n("2f62"),d={components:{BaseInfo:o.default,ItemAdder:r.default,ItemSetter:s.default,DiyPhone:c.default},data:function(){return{formItems:l.default.global,rules:{title:[{required:!0,message:"表单名称必填"}]},styles:{},styleBox:{},loading:!1,id:""}},computed:(0,i.default)({},(0,u.mapState)("plugins/form",{model:function(t){return t.model},items:function(t){return t.formItems}})),methods:{handleSave:function(){var t=this;this.$refs["form"].validate((function(e){if(e){var n,a=t.$store.state.plugins.form;if(null===(n=a.formItems)||void 0===n||!n.length)return void t.$Message.error("请选择表单");var i=t.$store.state.plugins.form.model,o=i.title,r=i.is_submit_number,s=i.is_notification,l={name:o,content:JSON.stringify(t.$store.state.plugins.form.formItems),is_submit_number:r,is_notification:s};t.id?(t.loading=!0,l.id=t.id,t.$api.formApi.editCustom(l).then((function(e){0===e.error&&(t.$Message.success("自定义表单修改成功"),t.$router.push({path:"/plugins/customForm/list"}))})).finally((function(){t.loading=!1}))):(t.loading=!0,t.$api.formApi.createCustomForm(l).then((function(e){0===e.error&&(t.$Message.success("自定义表单添加成功"),t.$router.push({path:"/plugins/customForm/list?type=add"}))})).finally((function(){t.loading=!1})))}else t.$Message.error("请填写表单名称")}))},goBack:function(){var t=this;this.$Modal.confirm({title:"确认离开",content:"系统可能不会保存您所做的操作？",onOk:function(){t.$router.push({path:"/plugins/customForm/list"})}})}},mounted:function(){var t=this;this.$store.commit("plugins/form/initForm"),this.id=this.$route.query.id,this.id&&(this.loading=!0,this.$api.formApi.getCustom({id:this.id}).then((function(e){0===e.error&&(t.$store.commit("plugins/form/setFormItems",JSON.parse(e.data.content)),t.$store.commit("plugins/form/setTitle",e.data.name))})).finally((function(){t.loading=!1}))),this.$nextTick((function(){t.$refs["content_bar"].handleScroll((function(e){var n=t.$refs["form_adder"],a=n.getBoundingClientRect().left,i=t.$refs["form_setter"].clientWidth-86,o=n.getBoundingClientRect();t.styleBox={height:"".concat(o.height+30,"px")},e.target.scrollTop>=200?t.styles={position:"fixed",width:"".concat(i,"px"),top:"55px",left:"".concat(a,"px"),background:"#ffffff","border-bottom":"1px solid #e9edef","box-shadow":"rgba(133, 148, 162, 0.2) 0px 1px 4px",zIndex:20}:t.styles={}}))}))}};e.default=d},ef4c:function(t,e,n){"use strict";n.r(e);var a=n("898bc"),i=n("6c7ef");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"bd3ea5a2",null);e["default"]=s.exports},f2b4:function(t,e,n){"use strict";n.r(e);var a=n("78d6"),i=n("dbd2");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7114");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"60bae4c1",null);e["default"]=s.exports},f5ae:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("notice-index",{attrs:{is_showNoticeMember:""}})},i=[]}}]);