(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[123],{"26e4":function(t,e,a){"use strict";a("dcdc")},"4c2c":function(t,e,a){"use strict";a.r(e);var n=a("5f1c"),s=a("965a");for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);a("26e4");var i=a("2877"),o=Object(i["a"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"618adb4b",null);e["default"]=o.exports},"5f1c":function(t,e,a){"use strict";var n=a("830e");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"671d":function(t,e,a){"use strict";a("fab5")},"830e":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"good-group-table-list"},[e("Table",{ref:"table",attrs:{columns:t.columns,data:t.getTableData},on:{"on-selection-change":t.selectChange},scopedSlots:t._u([{key:"type",fn:function(a){var n=a.row;return[t.category.length>0?t._l(t.category,(function(a,s){return e("div",{key:s},[a.key==n.goods_type?e("span",[t._v(t._s(a.val))]):t._e()])})):[e("span",[t._v("-")])]]}}])}),e("div",{staticClass:"footer-page"},[e("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},"83e7":function(t,e,a){"use strict";var n=a("f768");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"861b":function(t,e,a){"use strict";a.r(e);var n=a("cc64"),s=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},"965a":function(t,e,a){"use strict";a.r(e);var n=a("f081"),s=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},ba7d:function(t,e,a){"use strict";a.r(e);var n=a("83e7"),s=a("861b");for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);a("671d");var i=a("2877"),o=Object(i["a"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"167d7ee6",null);e["default"]=o.exports},cc64:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d81d"),a("ac1f"),a("841c"),a("14d9");var s=n(a("4c2c")),r=a("d1be"),i={name:"list",components:{TableList:s.default},computed:{noManagePerm:function(){return!this.$getPermMap("pc.goods-group.manage")},getTableData:function(){var t=this;return this.table.data.map((function(e){return e._disabled=t.noManagePerm,e}))}},data:function(){return{search:{name:"",goods_type:"",start_time:"",end_time:""},category:[],table:{data:[],loading:!1,total:0},page:{pageSize:10,pageNumber:1}}},created:function(){this.getCategory()},methods:{getCategory:function(){var t=this;this.$api.homeApi.goodsGroupTypes().then((function(e){0===e.error&&(t.category=(0,r.dealClassifyList)(e.data))}))},handleSearch:function(){this.refreshTable()},handleReset:function(){this.search={name:"",goods_type:"",start_time:"",end_time:""},this.refreshTable()},toAdd:function(){this.$router.push({path:"/home/pc/goods/add"})},refreshTable:function(t){t||(this.page={pageSize:10,pageNumber:1}),this.$refs["table_list"].reset(t),this.getList()},changePage:function(t){this.page=t,this.getList()},getList:function(){var t=this;this.$history.setData({search:this.search,page:this.page}),this.$refs["table_list"].initFooterData(),this.table.loading=!0;var e=Object.assign({},this.search);e.start_time=(0,r.formatDate)(e.start_time,"yyyy-MM-dd hh:mm:ss"),e.end_time=(0,r.formatDate)(e.end_time,"yyyy-MM-dd hh:mm:ss");var a=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber,pager:1},e);this.$api.homeApi.goodsGroupList(a).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total)})).catch()}},mounted:function(){var t=this;this.$history.setRoute(this.$route).getData((function(e){var a=e.search,n=e.page;t.search=t.$utils.deepCopy(a)||t.search,t.page=n,t.$nextTick((function(){t.refreshTable(t.page)}))}))}};e.default=i},dcdc:function(t,e,a){},f081:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("14d9"),a("d81d"),a("d3b7");var n={name:"TableList",props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0},category:{type:Array,default:function(){return[]}}},data:function(){var t=this;this.$createElement;return{columns:[{title:"排序",key:"sort_order",width:100},{title:"商品组名称",key:"name"},{title:"商品类型",key:"name",slot:"type"},{title:"创建时间",key:"created_at"},{title:"状态",key:"status",width:100,render:function(t,e){return"0"===e.row.status?t("kdx-status-text",["隐藏"]):"1"===e.row.status?t("kdx-status-text",{attrs:{type:"success"}},["显示"]):void 0}},{title:"操作",key:"action",width:200,render:function(e,a){return e("div",{class:"action"},[e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.$router.push({path:"/home/pc/goods/add",query:{id:a.row.id}})}}},["编辑"]),e("Button",{attrs:{type:"text",disabled:t.noManagePerm||"1"==a.row.is_default},on:{click:function(){t.handleDelete(a.row)}}},["删除"])])}}],selectRows:[],isSelectAll:!1}},computed:{getTableData:function(){var t=this;return this.data.map((function(e){return e._disabled=t.noManagePerm,e}))},noManagePerm:function(){return!this.$getPermMap("pc.goods-group.manage")},isDisabled:function(){return 0===this.selectRows.length},selectHasDefault:function(){return this.selectRows.some((function(t){return"1"==t.is_default}))}},methods:{selectChange:function(t){this.selectRows=t,this.isSelectAll=this.selectRows.length===this.data.length},checkboxChange:function(t){this.$refs["table"].selectAll(t)},handleLabelGroupStatus:function(t,e){var a=t.type,n=t.row;if("single"===a)this.editLabelGroupStatus([n.id],e);else if("multiple"===a){var s=this.selectRows.map((function(t){return t.id}));this.editLabelGroupStatus(s,e)}},editLabelGroupStatus:function(t,e){var a=this;this.$api.goodsApi.editLabelGroupStatus({id:t,status:e}).then((function(t){0===t.error&&(a.$Message.success("标签状态修改成功"),a.$emit("on-refresh"))}))},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"是否确认删除？",onOk:function(){e.$api.homeApi.goodsGroupDelete({id:t.id}).then((function(t){0===t.error&&(e.$Message.success("删除成功"),e.$emit("on-refresh"))})).catch()}})},reset:function(t){this.$refs["page"].reset(t)},changePage:function(t){this.$emit("on-page-change",t)},initFooterData:function(){this.isSelectAll=!1,this.selectRows=[]}}};e.default=n},f768:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("ac1f"),a("841c"),a("b0c0");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"good-label"},[e("kdx-header-bar",{scopedSlots:t._u([{key:"header",fn:function(){return[e("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.toAdd}},[t._v("添加商品组块")])]},proxy:!0}])},[e("br"),e("Form",{ref:"form",attrs:{model:t.search,"label-width":130,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"商品组块名称："}},[e("Input",{staticClass:"width-160",attrs:{type:"text",placeholder:"商品组块名称"},on:{"on-enter":t.handleSearch},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1),e("FormItem",{attrs:{label:"商品类型："}},[e("Select",{staticClass:"width-160",model:{value:t.search.goods_type,callback:function(e){t.$set(t.search,"goods_type",e)},expression:"search.goods_type"}},t._l(t.category,(function(a){return e("Option",{key:a.key,attrs:{value:a.key}},[t._v(" "+t._s(a.val)+" ")])})),1)],1),e("FormItem",{staticStyle:{"margin-bottom":"0"},attrs:{label:"创建时间："}},[e("div",{staticClass:"flex"},[e("FormItem",{attrs:{label:"",prop:"start_time"}},[e("DatePicker",{staticClass:"width-170",attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"请选择开始时间"},model:{value:t.search.start_time,callback:function(e){t.$set(t.search,"start_time",e)},expression:"search.start_time"}})],1),e("span",{staticStyle:{"padding-left":"10px","padding-right":"10px"}},[t._v(" ~ ")]),e("FormItem",{attrs:{label:"",prop:"end_time"}},[e("DatePicker",{staticClass:"width-170",attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"请选择结束时间"},model:{value:t.search.end_time,callback:function(e){t.$set(t.search,"end_time",e)},expression:"search.end_time"}})],1)],1)]),e("div",{staticClass:"ivu-form-item-btn"},[e("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),e("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticClass:"table-list"},[e("table-list",{ref:"table_list",attrs:{category:t.category,data:t.getTableData,total:t.table.total},on:{"on-refresh":t.getList,"on-page-change":t.changePage}})],1),t._t("default")],2)};e.render=n;var s=[];e.staticRenderFns=s},fab5:function(t,e,a){}}]);