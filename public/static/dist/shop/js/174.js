(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{"151d":function(t,e,n){},2679:function(t,e,n){"use strict";var a=n("589d");n.o(a,"render")&&n.d(e,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"589d":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"fans-label"},[e("kdx-hint-alert",{staticStyle:{margin:"10px 0"}},[t._v("提示：自定义菜单只能有一个菜单生效。")]),e("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"header-btn"},[e("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.to}},[t._v("+新建菜单")])],1)]},proxy:!0}])}),e("div",{staticClass:"t-wp"},[e("Table",{attrs:{columns:t.columns,data:t.data}}),e("kdx-page-component",{ref:"page",staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{total:t.total,pageSize:t.page.pagesize},on:{"on-change":t.handlePageChange}})],1)],1)};e.render=n;var a=[];e.staticRenderFns=a},"826c":function(t,e,n){"use strict";n.r(e);var a=n("f9cc"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"881d":function(t,e,n){"use strict";n("151d")},"8b76":function(t,e,n){"use strict";n.r(e);var a=n("2679"),i=n("826c");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("881d");var s=n("2877"),o=Object(s["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"4d4b2606",null);e["default"]=o.exports},f9cc:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("14d9");var r={created:function(){this.getList()},data:function(){var t=this,e=this.$createElement;return{page:{pagesize:10,page:1},total:0,loading:!1,columns:[{title:"菜单名称",key:"name"},{title:"显示对象",key:"name",render:function(){return e("div",["全部粉丝"])}},{title:"是否启用",key:"status",render:function(t,e){return t("div",[1==e.row.status?"已启用":"已禁用"])}},{title:"操作",key:"action",render:function(e,n){return e("div",{class:"opts"},[e("Button",{class:"btn",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.opt(n.row.status,n.row.id)}}},[1==n.row.status?"禁用":"启用"]),e("Button",{class:"btn",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.edit(n.row.id)}}},["编辑"]),e("Button",{class:"btn",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.del(n.row.id)}}},["删除"])])}}],data:[]}},computed:{noManagePerm:function(){return!this.$getPermMap("channel.wechat.manage")}},methods:{opt:function(t,e){var n=this,a=1==t?"禁用":"启用";this.$Modal.confirm({title:"提示",content:"确认".concat(a,"吗?"),onOk:function(){n.$api.homeApi.disableMenu({menu_id:e,status:1==t?"0":"1"}).then((function(t){0==t.error&&(n.resetPage(),n.$Message.success("".concat(a,"成功")))}))}})},del:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除吗?",onOk:function(){e.$api.homeApi.deleteMenu({id:t}).then((function(t){0==t.error&&(e.resetPage(),e.$Message.success("删除成功"))}))}})},edit:function(t){this.$router.push({path:"/home/public/lib",query:{id:t}})},resetPage:function(){var t;this.page={pagesize:10,page:1},null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getList()},handlePageChange:function(t){this.page.pagesize=t.pageSize,this.page.page=t.pageNumber,this.getList()},getList:function(){var t=this;this.$api.homeApi.customMenuList((0,i.default)({},this.page)).then((function(e){t.total=e.total,t.data=e.list}))},to:function(){this.$router.push({path:"/home/public/lib"})}}};e.default=r}}]);