(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116],{"0e8c":function(e,t,a){"use strict";var s=a("50d3");a.o(s,"render")&&a.d(t,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]}))},"110c":function(e,t,a){},1873:function(e,t,a){var s=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("5530")),i=s(a("b85c")),n=s(a("2909"));a("a9e3"),a("ac1f"),a("841c"),a("14d9"),a("4de4"),a("d3b7"),a("159b"),a("3c65");var o={name:"VipSelector",props:{current:{type:[String,Object],default:function(){}},currentList:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},restParams:{type:Object,default:function(){}},passId:{type:[String,Number]},source:{type:String},type:{type:String,default:"vip"}},data:function(){var e=this;this.$createElement;return{value:!1,search:{keyword:"",level_id:"all",group_id:"all"},columns:[{title:"会员",key:"shop",minWidth:200,render:function(t,a){var s={10:t("kdx-svg-icon",{attrs:{type:"icon-H"},class:"platform-icon"}),20:t("kdx-svg-icon",{attrs:{type:"icon-weixin"},class:"platform-icon"}),21:t("kdx-svg-icon",{attrs:{type:"icon-weixinxiaochengxu"},class:"platform-icon"}),30:t("kdx-svg-icon",{attrs:{type:"icon-qudao-toutiao2"},class:"platform-icon"}),31:t("kdx-svg-icon",{attrs:{type:"icon-douyin"},class:"platform-icon"}),32:t("kdx-svg-icon",{attrs:{type:"icon-qudao-toutiaojisuban"},class:"platform-icon"}),70:t("span",{style:"color:#12aa9c;font-size:16px",class:"iconfont icon-PCduan"})},r=s[a.row.source];return t("div",{class:"vip-info"},[t("div",{class:"user-image"},[t("img",{attrs:{src:e.$media(a.row.avatar),alt:""},on:{error:function(t){e.replaceImage(t,"avatar")}}})]),t("div",{class:"vip-content"},[t("p",{class:"vip-name line-hide"},[a.row.nickname]),t("div",{class:"vip-platform"},[r])])])}},{title:"会员等级",key:"level_name",minWidth:100,render:function(e,t){return e("div",[t.row.level_name?t.row.level_name:"普通会员"])}},{title:"标签组",key:"group_name",minWidth:100,render:function(e,t){return e("div",[t.row.group_name?t.row.group_name:"-"])}},{title:"注册时间",key:"created_at",width:180},{title:"操作",key:"action",width:80,render:function(t,a){return t("div",{class:"action"},[t("Button",{class:"default-primary",style:{display:a.row.checked?"none":"block"},attrs:{disabled:e.disabledBtn(a.row)&&e.passId!==a.row.id},on:{click:function(){e.setChecked(a.index,!0)}}},["选择"]),t("Button",{attrs:{type:"primary"},style:{display:a.row.checked?"block":"none"},on:{click:function(){e.setChecked(a.index,!1)}}},["已选"])])}}],data:[],levels:[],groups:[],total:0,page:{pageSize:10,pageNumber:1},selectRow:{},loading:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.multiple?this.selectRows=(0,n.default)(this.currentList):this.selectRow=this.current,this.resetSearch(),this.resetPage(),this.getList())},handleSearch:function(){this.resetPage(),this.getList()},resetSearch:function(){this.search={keyword:"",level_id:"all",group_id:"all"}},resetPage:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["page"])||void 0===e||e.reset()},setChecked:function(e,t){var a=this;this.multiple?(this.$set(this.data[e],"checked",t),0===this.selectRows.length||t?this.selectRows.push(this.data[e]):this.selectRows=this.selectRows.filter((function(t){return t.id!==a.data[e].id}))):(this.data.forEach((function(e,t){a.$set(a.data[t],"checked",!1)})),this.$set(this.data[e],"checked",t),this.selectRow=t?this.data[e]:{},this.$emit("on-change",this.selectRow))},defaultChecked:function(){var e=this;this.multiple?this.data.forEach((function(t,a){var s,r=(0,i.default)(e.selectRows);try{for(r.s();!(s=r.n()).done;){var n=s.value;if(n.id===t.id){e.$set(e.data[a],"checked",!0);break}}}catch(o){r.e(o)}finally{r.f()}})):this.data.forEach((function(t,a){e.current&&t.id===e.selectRow.id?e.$set(e.data[a],"checked",!0):e.$set(e.data[a],"checked",!1)}))},handlePageChange:function(e){this.page=e,this.getList();try{this.$refs.scrollBox.scrollTop=0}catch(t){console.log(t)}},handleOk:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.setValue()},handleCancel:function(){this.setValue()},getList:function(){var e=this;this.loading=!0;var t={};this.source&&(t.source=this.source);var a=(0,r.default)((0,r.default)({},this.search),{},{level_id:"all"===this.search.level_id?"":this.search.level_id,group_id:"all"===this.search.group_id?"":this.search.group_id}),s=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},a,this.restParams,t);this.$api.memberApi["vip"===this.type?"memberList":"videoMemberList"](s).then((function(t){0===t.error&&(e.data=t.list,e.total=t.total,t.groups.unshift({id:"all",group_name:"全部"}),t.levels.unshift({id:"all",level_name:"全部"}),e.groups=t.groups,e.levels=t.levels,e.defaultChecked(),e.loading=!1)}))},disabledBtn:function(e){return 1==e.is_use_verify}}};t.default=o},"2a0d":function(e,t,a){"use strict";a.r(t);var s=a("4492"),r=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);t["default"]=r.a},4492:function(e,t,a){var s=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("b0c0");var r=s(a("5530")),i=s(a("2909")),n=s(a("a8bf")),o={components:{VipSelector:n.default},data:function(){return{canModifyPassword:!0,notAutoSet:!0,id:"",formData:{username:"",password:"",role_id:"",uid:"",status:"1",name:"",contact:"",member_id:""},restParams:{bind_setter:""},placeList:[],rules:{username:[{required:!0,message:"请填写操作员用户名"}],password:[{required:!0,message:"请设置操作员密码"}],role_id:[{required:!0,message:"请选择所属角色"}],name:[{required:!0,message:"请填写操作员姓名"}],contact:[{required:!0,message:"请填写操作员手机号"}],member_id:[{required:!0,message:"请选择会员"}]},user:{},roleList:[],submitLoading:!1,userId:""}},computed:{getMember:function(){return this.user.id?[this.user]:[]}},created:function(){this.getRoleList();var e=this.$route.query.id;e&&(this.id=e,this.canModifyPassword=!1,this.editOperator())},mounted:function(){var e=this;setTimeout((function(){e.notAutoSet=!1,console.log(e.notAutoSet,"  this.notAutoSet")}),100)},methods:{getRoleList:function(){var e=this;this.$api.settingApi.getRoleList({}).then((function(t){0==t.error&&(e.roleList=(0,i.default)(t.list))}))},editOperator:function(){var e=this;this.$api.settingApi.editOperator({id:this.id}).then((function(t){var a,s,i;0==t.error&&("0"==t.member_id&&(t.member_id=""),e.formData=(0,r.default)((0,r.default)({},e.formData),{},{id:t.id,uid:t.uid,is_root:t.is_root,username:(null===(a=t.user)||void 0===a?void 0:a.username)||"",password:(null===(s=t.user)||void 0===s?void 0:s.password)||"",role_id:t.role_id,status:t.status,name:t.name,contact:t.contact,member_id:t.member_id||""}),null!==(i=t.member)&&void 0!==i&&i.id&&(e.user=t.member,e.userId=t.member.id))}))},changeUsername:function(e){this.id||e&&this.checkUser()},checkUser:function(){var e=this;this.$api.settingApi.checkUser({username:this.formData.username}).then((function(t){var a;0==t.error&&(e.formData.uid=(null===(a=t.data)||void 0===a?void 0:a.uid)||"")}))},handleSave:function(){var e=this;this.$refs["form"].validate().then((function(t){t&&(e.submitLoading=!0,e.id?e.saveOperator():e.createOperator())}))},createOperator:function(){var e=this,t=this.formData,a=t.username,s=t.role_id,i=t.status,n=t.name,o=t.contact,c=t.member_id,l={username:a,role_id:s,status:i,name:n,contact:o};this.formData.uid?l.uid=this.formData.uid:l.password=this.formData.password,this.hasRXYRole&&(l.member_id=c),this.$api.settingApi.createOperator((0,r.default)({},l)).then((function(t){e.submitLoading=!1,0==t.error&&(e.$Message.success("保存成功"),setTimeout((function(){e.$router.go(-1)}),1500))}))},saveOperator:function(){var e=this,t=this.formData,a=t.id,s=t.role_id,i=t.status,n=t.name,o=t.contact,c=t.is_root,l=t.member_id,d={id:a,role_id:s,status:i,name:n,contact:o,is_root:c};this.hasRXYRole&&(d.member_id=l),this.$api.settingApi.saveOperator((0,r.default)({},d)).then((function(t){e.submitLoading=!1,0==t.error&&(e.$Message.success("保存成功"),setTimeout((function(){e.$router.go(-1)}),1500))}))},createUser:function(){this.$utils.openNewWindowPage("/setting/systemAuthority/roleManagement")},addMember:function(){this.$refs.VipSelector.setValue()},memberChange:function(e){this.user=e,this.formData.member_id=e.id}}};t.default=o},"50d3":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("b0c0");var s=function(){var e=this,t=e._self._c;return t("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[t("Button",{staticClass:"primary-long",attrs:{loading:e.submitLoading},on:{click:e.handleSave}},[e._v(" 保存 ")])]},proxy:!0}])},[t("div",{staticClass:"content"},[t("Form",{ref:"form",attrs:{model:e.formData,"label-width":120,rules:e.rules}},[t("kdx-form-title",[e._v(e._s(e.id?"编辑":"添加")+"操作员")]),e.notAutoSet?e._e():t("div",[t("FormItem",{attrs:{label:"操作员用户名：",prop:"username"}},[t("i-input",{staticClass:"width-430",attrs:{placeholder:"请输入",disabled:!!e.id},on:{"on-change":e.changeUsername},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}}),!e.id&&e.formData.uid?t("kdx-hint-text",[e._v(" 检测到该操作员存在其他身份。 ")]):e._e()],1),e.id||e.formData.uid?e._e():t("FormItem",{attrs:{label:"操作员密码：",prop:"password"}},[t("i-input",{staticClass:"width-160",attrs:{placeholder:"请输入",type:"password",disabled:!e.canModifyPassword},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1),t("FormItem",{attrs:{label:"所属角色：",prop:"role_id"}},[t("Select",{staticClass:"width-430",model:{value:e.formData.role_id,callback:function(t){e.$set(e.formData,"role_id",t)},expression:"formData.role_id"}},e._l(e.roleList,(function(a,s){return t("Option",{key:s,attrs:{value:a.id}},[e._v(" "+e._s(a.name)+" ")])})),1),t("Button",{staticClass:"mL-20",attrs:{type:"text"},on:{click:e.getRoleList}},[e._v("刷新 ")]),t("Button",{staticClass:"mL-20",attrs:{type:"text"},on:{click:e.createUser}},[e._v("立即创建角色 ")]),t("kdx-hint-text",[e._v(" 如果您选择了角色，则此用户本身继承了此角色的所有权限 ")])],1),t("FormItem",{attrs:{label:"操作员状态："}},[t("RadioGroup",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[t("Radio",{attrs:{label:"1"}},[t("span",[e._v("启用")])]),t("Radio",{attrs:{label:"0"}},[t("span",[e._v("禁用")])])],1),t("kdx-hint-text",[e._v(" 用户可以在此角色权限的基础上附加其他权限 ")])],1),t("kdx-form-title",[e._v("操作员信息")]),t("FormItem",{attrs:{label:"操作员姓名：",prop:"name"}},[t("i-input",{staticClass:"width-250",attrs:{placeholder:"请输入"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),t("FormItem",{attrs:{label:"操作员手机号：",prop:"contact"}},[t("i-input",{staticClass:"width-250",attrs:{placeholder:"请输入"},model:{value:e.formData.contact,callback:function(t){e.$set(e.formData,"contact",t)},expression:"formData.contact"}})],1)],1)],1),t("vip-selector",{ref:"VipSelector",attrs:{current:e.user,passId:e.userId,restParams:e.restParams},on:{"on-change":e.memberChange}})],1)};t.render=s;var r=[];t.staticRenderFns=r},"66bb":function(e,t,a){"use strict";a("6a58")},"6a58":function(e,t,a){},"7a12":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("ac1f"),a("841c");var s=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{attrs:{title:"会员选择器",width:850},on:{"on-ok":e.handleOk,"on-cancel":e.handleCancel},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[t("div",{staticClass:"vip-selector"},[t("div",{ref:"scrollBox",staticClass:"vip-selector-content"},[t("div",{staticClass:"search"},[t("Form",{ref:"form",attrs:{model:e.search,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormItem",{staticClass:"search-content"},[t("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":e.handleSearch},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1),t("FormItem",{attrs:{label:"用户等级："}},[t("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},on:{"on-change":e.handleSearch},model:{value:e.search.level_id,callback:function(t){e.$set(e.search,"level_id",t)},expression:"search.level_id"}},e._l(e.levels,(function(a){return t("Option",{key:a.id,attrs:{value:a.id}},[e._v(e._s(a.level_name))])})),1)],1),t("FormItem",{attrs:{label:"标签组："}},[t("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},on:{"on-change":e.handleSearch},model:{value:e.search.group_id,callback:function(t){e.$set(e.search,"group_id",t)},expression:"search.group_id"}},e._l(e.groups,(function(a){return t("Option",{key:a.id,attrs:{value:a.id}},[e._v(e._s(a.group_name))])})),1)],1)],1)],1),t("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{columns:e.columns,data:e.data}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.total>10,expression:"total > 10"}],staticClass:"footer-page"},[t("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.handlePageChange}})],1)])])};t.render=s;var r=[];t.staticRenderFns=r},a409:function(e,t,a){"use strict";a.r(t);var s=a("0e8c"),r=a("2a0d");for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("66bb");var n=a("2877"),o=Object(n["a"])(r["default"],s["render"],s["staticRenderFns"],!1,null,"17c14311",null);t["default"]=o.exports},a8bf:function(e,t,a){"use strict";a.r(t);var s=a("ebba"),r=a("f064");for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("f8b6");var n=a("2877"),o=Object(n["a"])(r["default"],s["render"],s["staticRenderFns"],!1,null,"d9d12acc",null);t["default"]=o.exports},ebba:function(e,t,a){"use strict";var s=a("7a12");a.o(s,"render")&&a.d(t,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]}))},f064:function(e,t,a){"use strict";a.r(t);var s=a("1873"),r=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);t["default"]=r.a},f8b6:function(e,t,a){"use strict";a("110c")}}]);