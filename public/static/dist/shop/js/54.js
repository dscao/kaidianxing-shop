(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"0976":function(t,e,a){},"0af6":function(t,e,a){t.exports=a.p+"static/dist/shop/img/wxapp.png"},1232:function(t,e,a){var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s=i(a("c0d3")),o={components:{FormBase:s.default},data:function(){return{loading:!1,info:{wx:{image:a("0af6"),title:"微信小程序",describe:"绑定微信公众号，集沉淀、运营、唤醒粉丝功能于一体，提高转化率",style:{color:"#677DE0",backgroundColor:"#FAFAFF",backgroundImage:"url(".concat(a("501f"),")")}},tt:{image:a("d827"),title:"头条/抖音小程序",describe:"于字节跳动全产品矩阵，天然搭配图文、视频等场景，极速带货转化",style:{color:"#239BFF",backgroundColor:"#FAFDFF",backgroundImage:"url(".concat(a("9d97"),")")}}},module:"",type:"",setting:{appid:"",app_secret:"",navigate_appid_list:[],maintain:"",maintain_explain:""}}},created:function(){var t=this.$route.params,e=t.module,a=void 0===e?"home":e,i=t.type,n=void 0===i?"wx":i;this.module=a,this.type="douyin"===n?"tt":n,this.getSetting()},methods:{getSetting:function(){if("home"===this.module)switch(this.type){case"wx":this.getWxAppBase();break;case"tt":this.getTtAppSetting();break}else"merchant"===this.module&&this.getWxappSettings()},getWxAppBase:function(){var t=this;this.loading=!0,this.$api.homeApi.getWxAppBase().then((function(e){t.loading=!1,0===e.error&&(t.setting=(0,n.default)((0,n.default)((0,n.default)({},t.setting),e.data),{},{maintain:e.data.maintain||"0",navigate_appid_list:e.data.navigate_appid_list||[]}))}))},getTtAppSetting:function(){var t=this;this.loading=!0,this.$api.homeApi.getTtAppSetting().then((function(e){t.loading=!1,0===e.error&&(t.setting=(0,n.default)((0,n.default)((0,n.default)({},t.setting),e.data),{},{maintain:e.data.maintain||"0"}))}))},getWxappSettings:function(){var t=this;this.loading=!0,this.$api.merchantApi.getWxappSettings().then((function(e){t.loading=!1,0===e.error&&(t.setting=(0,n.default)((0,n.default)((0,n.default)({},t.setting),e.settings),{},{appid:e.settings.app_id,maintain:0===e.settings.enable?"1":"0",maintain_explain:e.settings.close_reason}))}))},handleSave:function(){this.$refs["formBase"].validate()},fnSave:function(t){var e=t.appid,a=t.app_secret,i=t.pay_merchant_id,s=t.pay_appid,o=t.pay_app_secret,r=t.maintain,l=t.maintain_explain,d=t.navigate_appid_list,p={app_secret:a};if("home"===this.module)switch(p["appid"]=e,p["maintain"]=r,p["maintain_explain"]=l,this.type){case"wx":d.length&&(p.navigate_appid_list=d),this.setWxAppBase(p);break;case"tt":p=(0,n.default)((0,n.default)({},p),{},{pay_merchant_id:i,pay_appid:s,pay_app_secret:o}),this.setTtAppSetting(p);break}else"merchant"===this.module&&(p["app_id"]=e,p["enable"]="0"===r?1:0,p["close_reason"]=l,1===p.enable&&(p["close_reason"]=""),this.setWxappSettings(p))},setWxAppBase:function(t){var e=this;this.$api.homeApi.setWxAppBase(t).then((function(t){e.$refs["formBase"].loading=!1,0===t.error&&(e.$Message.success("小程序基本信息保存成功"),e.getSetting())}))},setTtAppSetting:function(t){var e=this;this.$api.homeApi.setTtAppSetting(t).then((function(t){e.$refs["formBase"].loading=!1,0===t.error&&(e.$Message.success("小程序基本信息保存成功"),e.getSetting())}))},setWxappSettings:function(t){var e=this;this.$api.merchantApi.setWxappSettings(t).then((function(t){e.$refs["formBase"].loading=!1,0===t.error&&(e.$Message.success("小程序基本信息保存成功"),e.getSetting())}))}}};e.default=o},"3fd6":function(t,e,a){},4944:function(t,e,a){"use strict";a.r(e);var i=a("1232"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"501f":function(t,e,a){t.exports=a.p+"static/dist/shop/img/bg-wxapp.png"},7431:function(t,e,a){},"75e6":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"channel-base-form-data"},[a("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":160}},[a("div",{staticClass:"form-box"},[a("kdx-form-title",[t._v("参数配置")]),a("FormItem",{attrs:{label:"小程序APP ID：",prop:"appid"}},[a("i-input",{staticClass:"width-430",attrs:{disabled:!t.haveJurisdiction.manage,placeholder:"请输入小程序APPID"},model:{value:t.model.appid,callback:function(e){t.$set(t.model,"appid",e)},expression:"model.appid"}})],1),a("FormItem",{attrs:{label:"小程序APP Secret：",prop:"app_secret"}},[a("i-input",{staticClass:"width-430",attrs:{disabled:!t.haveJurisdiction.manage,placeholder:"请输入小程序APP Secret"},model:{value:t.model.app_secret,callback:function(e){t.$set(t.model,"app_secret",e)},expression:"model.app_secret"}})],1),a("FormItem",{attrs:{label:"支付设置："}},[a("Button",{staticClass:"default-primary",attrs:{to:"/setting/paymentSettings/way/index",target:"_blank"}},[t._v(" 立即前往设置 ")])],1)],1),"home"===t.module&&"wx"===t.type?a("div",{staticClass:"form-box"},[a("kdx-form-title",{staticStyle:{"margin-bottom":"10px"}},[t._v(" 跳转小程序名单 ")]),a("kdx-hint-alert",[t._v(" 添加您当前小程序站点需要跳转的小程序AppID信息，可在装修中进行配置跳转小程序。 "),a("Button",{attrs:{type:"text",to:"/shop/list/system",target:"_blank"}},[t._v(" 前往装修配置 ")])],1),a("FormItem",{attrs:{label:"小程序名单："}},[a("app-table",{ref:"appTable",attrs:{list:t.setting.navigate_appid_list},model:{value:t.model.navigate_appid_list,callback:function(e){t.$set(t.model,"navigate_appid_list",e)},expression:"model.navigate_appid_list"}})],1)],1):t._e(),a("div",{staticClass:"form-box"},[a("kdx-form-title",[t._v("基础设置")]),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"维护小程序：",prop:"maintain"}},[a("RadioGroup",{model:{value:t.model.maintain,callback:function(e){t.$set(t.model,"maintain",e)},expression:"model.maintain"}},[a("Radio",{attrs:{disabled:!t.haveJurisdiction.manage,label:"1"}},[t._v("开启")]),a("Radio",{attrs:{disabled:!t.haveJurisdiction.manage,label:"0"}},[t._v("关闭")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.model.maintain,expression:"model.maintain === '1'"}],staticClass:"form-bg"},[a("i-input",{staticClass:"width-430 limit-input",attrs:{disabled:!t.haveJurisdiction.manage,placeholder:"请输入维护说明",type:"textarea",maxlength:"100","show-word-limit":""},model:{value:t.model.maintain_explain,callback:function(e){t.$set(t.model,"maintain_explain",e)},expression:"model.maintain_explain"}})],1)],1),"home"===t.module?a("FormItem",[a("Button",{staticClass:"default-primary",on:{click:t.downloadWXapp}},[t._v(" 下载小程序源码 ")])],1):t._e()],1)])],1)},n=[]},7833:function(t,e,a){var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a434"),a("d3b7"),a("b0c0");var n=i(a("2909")),s={props:{list:{type:Array,default:function(){return[]}}},data:function(){var t=this,e=this.$createElement;return{appList:[],columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"小程序名称",key:"name",render:function(e,a){return e("div",{class:{"edit-table-input":!0}},[e("Input",{props:{value:a.row[a.column.key],placeholder:"请输入小程序名称",maxlength:10},style:{width:"100%"},on:{input:function(e){a.row[a.column.key]=e,t.setTableInput(a.index,a.column.key,e)}}})])}},{title:"参数值",renderHeader:function(){return e("div",{class:"required-content"},[e("span",["小程序AppID"]),e("kdx-hint-tooltip",{attrs:{maxWidth:700,width:"640px",type:"image",image:a("a86e")}})])},key:"appid",render:function(e,a){return e("div",[e("Input",{props:{value:a.row[a.column.key],placeholder:"请输入AppID",maxlength:200},style:{width:"100%"},on:{input:function(e){a.row[a.column.key]=e,t.setTableInput(a.index,a.column.key,e)}}})])}},{title:"添加时间",key:"created_at"},{title:"操作",key:"action",align:"center",width:80,render:function(e,a){return e("div",[e("Button",{props:{type:"text"},on:{click:function(){t.remove(a.index)}}},"删除")])}}]}},watch:{list:{handler:function(t){this.appList=(0,n.default)(t)},immediate:!0}},methods:{addWxapp:function(){this.appList.push({appid:"",name:""})},setTableInput:function(t,e,a){this.appList[t][e]=a,this.appList=(0,n.default)(this.appList)},remove:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除?",onOk:function(){e.appList.splice(t,1)},onCancel:function(){}})},validate:function(){return!this.appList.some((function(t){return!t.appid||!t.name}))&&this.appList}}};e.default=s},"7e05":function(t,e,a){"use strict";a.r(e);var i=a("7833"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"90cd9":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-table"},[a("Table",{attrs:{columns:t.columns,data:t.appList,border:""}}),a("Button",{staticClass:"brand",on:{click:t.addWxapp}},[t._v("+添加小程序")])],1)},n=[]},"93ed":function(t,e,a){var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s=i(a("c83e")),o={props:{module:{type:String,default:""},type:{type:String,default:"wx"},setting:{type:Object,default:function(){return{}}}},computed:{haveJurisdiction:function(){return{view:!0,manage:!0}}},components:{AppTable:s.default},data:function(){return{model:{appid:"",app_secret:"",maintain:"0",maintain_explain:"",navigate_appid_list:[]},rules:{appid:[{required:!0,message:"小程序APP ID必填"}],app_secret:[{required:!0,message:"小程序APP Secret必填"}],pay_merchant_id:[{required:!0,message:"支付商户号必填"}],pay_appid:[{required:!0,message:"支付App ID必填"}],pay_app_secret:[{required:!0,message:"支付secret必填"}]},loading:!1}},methods:{validate:function(){var t=this;this.$refs["form"].validate((function(e){if(e){var a=(0,n.default)({},t.model);if("wx"==t.type&&"home"===t.module){var i=t.$refs.appTable.validate();if(!i)return void t.$Message.error("请填写小程序名单信息");a.navigate_appid_list=i}t.loading=!0,t.$emit("on-save",a)}}))},downloadWXapp:function(){window.open("https://gitee.com/kaidianxing/kaidianxing-mobile")}},watch:{setting:{handler:function(t){this.model=(0,n.default)((0,n.default)({},this.model),t)},deep:!0}}};e.default=o},"960e":function(t,e,a){"use strict";a.r(e);var i=a("d315"),n=a("4944");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("dfb4");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"2ef71812",null);e["default"]=r.exports},"9d97":function(t,e,a){t.exports=a.p+"static/dist/shop/img/bg-toutiao.png"},a86e:function(t,e,a){t.exports=a.p+"static/dist/shop/img/wxapp_link.png"},c0d3:function(t,e,a){"use strict";a.r(e);var i=a("75e6"),n=a("de84");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("e189");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"3c241ca8",null);e["default"]=r.exports},c83e:function(t,e,a){"use strict";a.r(e);var i=a("90cd9"),n=a("7e05");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("e3a8");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"69bcf75f",null);e["default"]=r.exports},d315:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"channel-base"},[a("div",{staticClass:"top-image flex",style:t.info[t.type].style},[a("div",{staticClass:"channel-img"},[a("img",{attrs:{src:t.info[t.type].image,alt:""}})]),a("div",{staticClass:"channel-desc"},[a("div",{staticClass:"title"},[t._v(t._s(t.info[t.type].title))]),a("div",{staticClass:"desc"},[t._v(t._s(t.info[t.type].describe))])])]),a("div",{staticClass:"channel-line"}),a("div",{staticClass:"form-base"},[a("form-base",{ref:"formBase",attrs:{module:t.module,type:t.type,setting:t.setting},on:{"on-save":t.fnSave}})],1)])])},n=[]},d827:function(t,e,a){t.exports=a.p+"static/dist/shop/img/toutiao.png"},de84:function(t,e,a){"use strict";a.r(e);var i=a("93ed"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},dfb4:function(t,e,a){"use strict";a("7431")},e189:function(t,e,a){"use strict";a("3fd6")},e3a8:function(t,e,a){"use strict";a("0976")}}]);