(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[193],{"148e":function(t,e,a){},"39bb":function(t,e,a){"use strict";a("148e")},"4e18":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("kdx-header-bar",{scopedSlots:t._u([{key:"header",fn:function(){return[a("Button",{attrs:{type:"primary",to:"/setting/systemAuthority/operatorManagement/add",disabled:t.noManagePerm}},[t._v(" +添加操作员 ")])]},proxy:!0}])},[a("Form",{ref:"form",attrs:{model:t.searchData,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"关键字："}},[a("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入"},on:{"on-enter":t.handleSearch},model:{value:t.searchData.keyword,callback:function(e){t.$set(t.searchData,"keyword",e)},expression:"searchData.keyword"}})],1),a("FormItem",{attrs:{label:"角色："}},[a("Select",{staticClass:"width-160",model:{value:t.searchData.role_id,callback:function(e){t.$set(t.searchData,"role_id",e)},expression:"searchData.role_id"}},t._l(t.roleList,(function(e,s){return a("Option",{key:s,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("FormItem",{attrs:{label:"状态："}},[a("Select",{staticClass:"width-160",model:{value:t.searchData.status,callback:function(e){t.$set(t.searchData,"status",e)},expression:"searchData.status"}},t._l(t.statusList,(function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v(" 搜索 ")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v(" 重置 ")])],1)],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"refund-address-list"},[a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{columns:t.columns,data:t.getTableData},on:{"on-selection-change":t.selectChange},scopedSlots:t._u([{key:"status",fn:function(e){var s=e.row;return[a("kdx-status-text",{attrs:{type:"1"===s.status?"success":"danger"}},[t._v(" "+t._s("1"===s.status?"已启用":"已禁用")+" ")])]}}])}),t.list.length>0?a("div",{staticClass:"footer-action"},[a("Checkbox",{attrs:{value:t.isSelectAll,disabled:t.noManagePerm},on:{"on-change":t.checkboxChange}}),a("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchEnable}},[t._v(" 启用 ")]),a("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchDisable}},[t._v(" 禁用 ")]),a("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchDelete}},[t._v(" 删除 ")])],1):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.total>10,expression:"total > 10"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1),t._t("default")],2)},n=[]},"81c5":function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("2909"));a("d81d"),a("d3b7"),a("159b"),a("b0c0"),a("a15b"),a("ac1f"),a("1276");var i={inject:["returnToTop"],components:{},props:{},data:function(){var t=this;this.$createElement;return{total:0,page:1,pagesize:10,list:[],selectRows:[],searchData:{keyword:"",status:"all",role_id:"all"},loading:!1,statusList:[{label:"全部",value:"all"},{label:"已启用",value:"1"},{label:"已禁用",value:"0"}],roleList:[],columns:[{type:"selection",width:40,align:"center"},{title:"登录ID",key:"manage_id"},{title:"操作员",key:"name"},{title:"手机号码",key:"contact"},{title:"角色名称",key:"role_name"},{title:"状态",slot:"status"},{title:"操作",key:"action",render:function(e,a){return e("div",[e("Button",{class:"marginL-10",attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleEdit(a.row.manage_id)}}},["编辑"]),e("Button",{class:"marginL-10",attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleStatus(a.row)}}},["1"===a.row.status?"禁用":"启用"]),e("Button",{class:"marginL-10",attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleDelete(a.row.manage_id)}}},["删除"])])}}]}},computed:{isSelectAll:function(){return this.selectRows.length===this.list.length},selectDisabled:function(){return 0===this.selectRows.length||this.noManagePerm},noManagePerm:function(){return!this.$getPermMap("user.index.manage")},getTableData:function(){var t=this;return this.list.map((function(e){return e._disabled=t.noManagePerm,e}))}},created:function(){this.getOperatorList(),this.getAllRole()},methods:{getOperatorList:function(){var t=this;this.returnToTop(),this.loading=!0,this.$api.settingApi.getOperatorList({keyword:this.searchData.keyword,status:"all"!==this.searchData.status&&""!==this.searchData.status?1*this.searchData.status:"",role_id:"all"===this.searchData.role_id?"":this.searchData.role_id,page:this.page,pagesize:this.pagesize}).then((function(e){t.loading=!1,0==e.error&&(t.total=e.total,e.list.forEach((function(t){var e;t["contact"]=t.contact||"-",t["role_name"]=(null===(e=t.roleName)||void 0===e?void 0:e.name)||"-"})),t.list=(0,n.default)(e.list),t.selectRows=[])}))},getAllRole:function(){var t=this;this.$api.settingApi.getRoleAllList().then((function(e){var a=e.error,s=e.data,n=void 0===s?[]:s;0===a&&(n.unshift({id:"all",name:"全部"}),t.roleList=n)}))},handleEdit:function(t){this.$router.push({path:"/setting/systemAuthority/operatorManagement/add",query:{id:t}})},handleStatus:function(t){"1"===t.status?this.forbiddenOperator(t.manage_id):this.activeOperator(t.manage_id)},batchEnable:function(){var t=this.selectRows.map((function(t){return t.manage_id}));t=t.join(","),this.activeOperator(t)},batchDisable:function(){var t=this.selectRows.map((function(t){return t.manage_id}));t=t.join(","),this.forbiddenOperator(t)},activeOperator:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.activeOperator(a).then((function(e){0==e.error&&(t.getOperatorList(),t.$Message.success("启用成功"))}))},forbiddenOperator:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.forbiddenOperator(a).then((function(e){0==e.error&&(t.getOperatorList(),t.$Message.success("禁用成功"))}))},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除该操作员",onOk:function(){e.deleteOperator(t)},onCancel:function(){}})},batchDelete:function(){var t=this.selectRows.map((function(t){return t.manage_id}));t=t.join(","),this.deleteOperator(t)},deleteOperator:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.deleteOperator(a).then((function(e){0==e.error&&(t.getOperatorList(),t.$Message.success("删除成功"))}))},handleSearch:function(){var t;this.page=1,this.pagesize=10,null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getOperatorList()},handleReset:function(){var t;this.searchData.keyword="",this.searchData.role_id="all",this.searchData.status="all",this.page=1,this.pagesize=10,null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getOperatorList()},changePage:function(t){this.page=t.pageNumber,this.pagesize=t.pageSize,this.getOperatorList()},selectChange:function(t){this.selectRows=t},checkboxChange:function(t){this.$refs["table"].selectAll(t)}}};e.default=i},c7a3:function(t,e,a){"use strict";a.r(e);var s=a("81c5"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},fe9f:function(t,e,a){"use strict";a.r(e);var s=a("4e18"),n=a("c7a3");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("39bb");var r=a("2877"),o=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"17adda98",null);e["default"]=o.exports}}]);