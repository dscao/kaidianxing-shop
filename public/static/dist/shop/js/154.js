(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[154],{"22c1":function(e,t,n){"use strict";var a=n("3745");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},3745:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,n("b0c0"),n("9911");var a=function(){var e=this,t=e._self._c;return t("kdx-content-bar",[t("kdx-header-bar",{staticClass:"header"},[t("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:function(t){e.isShow=!0}}},[e._v("+添加客服")]),t("Form",{ref:"form",staticClass:"form_wraps",attrs:{inline:"","label-width":120},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormItem",{attrs:{label:"客服名称：",prop:"service_name"}},[t("Input",{attrs:{type:"text",placeholder:"请输入客服名称"},on:{"on-enter":e.handleSearch},model:{value:e.service_name,callback:function(t){e.service_name=t},expression:"service_name"}})],1),t("div",{staticClass:"ivu-form-item-btn"},[t("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1),t("div",{staticClass:"content"},[t("div",{staticClass:"table-list"},[t("Table",{ref:"table",attrs:{columns:e.columns,data:e.data,loading:e.loading}})],1),t("div",{staticClass:"footer-page"},[t("kdx-page-component",{ref:"page",attrs:{current:e.page.page,total:e.total},on:{"on-change":e.handlePageChange}})],1)]),t("kdx-modal-frame",{attrs:{value:e.isShow,title:"创建客服",width:"700","ok-text":e.model.id?"保存":"创建","ok-cancel":"取消"},on:{"on-ok":e.save,"on-cancel":e.hide}},[t("div",{staticClass:"service_modal_wrap"},[t("Form",{ref:"form_modal",staticClass:"form_wraps",attrs:{model:e.model,rules:e.rules,inline:"","label-width":120}},[t("FormItem",{attrs:{label:"选择企业：",prop:"company_id"}},[t("Select",{staticClass:"width-500",model:{value:e.model.company_id,callback:function(t){e.$set(e.model,"company_id",t)},expression:"model.company_id"}},e._l(e.companyList,(function(n){return t("Option",{key:n.id,attrs:{value:n.id}},[e._v(e._s(n.name)+" ")])})),1)],1),t("FormItem",{attrs:{label:"客服名称：",prop:"name"}},[t("Input",{staticClass:"width-500",attrs:{maxlength:"30","show-word-limit":"",type:"text",placeholder:"请输入企业名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),t("FormItem",{attrs:{label:"客服链接：",prop:"link"}},[t("Input",{staticClass:"width-500",attrs:{type:"textarea",placeholder:"请输入客服链接"},model:{value:e.model.link,callback:function(t){e.$set(e.model,"link",t)},expression:"model.link"}}),t("kdx-hint-text",[e._v("请输入正确有效的企业微信客服账号链接，若已经正式对外绑定到商城，更换链接"),t("br"),e._v("时需要重新进行选择")])],1)],1)],1)])],1)};t.render=a;var i=[];t.staticRenderFns=i},"56d3":function(e,t,n){"use strict";n("9adf")},9911:function(e,t,n){"use strict";var a=n("23e7"),i=n("857a"),r=n("af03");a({target:"String",proto:!0,forced:r("link")},{link:function(e){return i(this,"a","href",e)}})},"9adf":function(e,t,n){},"9f60":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530"));n("4de4"),n("d3b7"),n("9911"),n("fb6a");var r={name:"servie_manage",props:{},data:function(){var e=this;this.$createElement;return{companyList:[],isShow:!1,service_name:"",model:{company_id:"",name:"",link:"",id:""},columns:[{title:"企业名称",key:"company_name"},{title:"客服名称",key:"name"},{title:"客服链接",key:"link"},{title:"创建时间",key:"create_time"},{title:"操作",key:"action",with:150,render:function(t,n){return t("div",[t("a",{class:e.noManagePerm?"disabled-btn":"btn-item",on:{click:function(){e.noManagePerm||e.editShow(n.row)}}},["编辑"]),t("a",{on:{click:function(){e.noManagePerm||e.delConfirm(n.row.id)}},class:e.noManagePerm?"disabled-btn":"btn-item"},["删除"])])}}],data:[],total:0,page:{pagesize:10,page:1},loading:!1,rules:{company_id:[{required:!0,message:"请选择企业名称"}],name:[{required:!0,message:"请输入客服名称"}],link:[{required:!0,message:"请输入客服链接"}]}}},computed:{noManagePerm:function(){return!this.$getPermMap("wechatCustomerService.customer-service.manage")}},created:function(){this.getList(),this.getCompanyList()},methods:{save:function(){var e=this;this.$refs.form_modal.validate((function(t){t&&(e.model.id?e.editService():e.addService())}))},addService:function(){var e=this;this.$api.customerApi.addService(this.model).then((function(t){var n=t.error;0==n&&(e.$Message.success("创建成功"),e.hide(),e.getList())}))},editShow:function(e){this.isShow=!0;var t=this.companyList.filter((function(t){return t.id==e.company_id}));console.log("hasCom-------------------",e.link.indexOf("?"),e),e.link=e.link.slice(0,e.link.indexOf("?")),t[0]||(e.company_id=""),this.model=(0,i.default)({},e)},editService:function(){var e=this;this.$api.customerApi.editService(this.model).then((function(t){var n=t.error;0==n&&(e.$Message.success("编辑成功"),e.hide(),e.getList())}))},hide:function(){this.isShow=!1,this.$refs.form_modal.resetFields(),this.model={company_id:"",name:"",link:"",id:""}},delConfirm:function(e){var t=this;this.$Modal.confirm({title:"您确定要删除当前客服？",content:"<div style='color:#ff0000c7;'>如果咨询入口已正式对外，建议先下掉咨询入口后再删除账号</div>",onOk:function(){t.del(e)}})},del:function(e){var t=this;this.$api.customerApi.delService({id:e}).then((function(e){var n=e.error;0==n&&(console.log(e),t.getList(),t.$Message.success("删除成功"))}))},handlePageChange:function(e){this.page.page=e.pageNumber,this.page.pagesize=e.pageSize,this.getList()},handleSearch:function(){this.getList()},handleReset:function(){this.service_name="",this.page.page=1,this.getList()},getList:function(){var e=this;console.log("--------------a---");var t=(0,i.default)({name:this.service_name},this.page);this.$api.customerApi.getServiceList(t).then((function(t){var n=t.error,a=t.data,i=a.list,r=a.total;0==n&&(e.data=i,e.total=r)}))},getCompanyList:function(){var e=this,t={only_list:1};this.$api.customerApi.getCompanyList(t).then((function(t){var n=t.error,a=t.data.list;0==n&&(e.companyList=a)}))}}};t.default=r},a34c:function(e,t,n){"use strict";n.r(t);var a=n("22c1"),i=n("b97b");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("56d3");var s=n("2877"),o=Object(s["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"c1ea912e",null);t["default"]=o.exports},b97b:function(e,t,n){"use strict";n.r(t);var a=n("9f60"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}}]);