(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{1860:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var i={name:"MultiSelect",props:{value:{type:[Number,String],required:!0},data:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}},data:function(){return{type:""}},watch:{value:{handler:function(e){this.type=e},immediate:!0}},methods:{handleInput:function(e){this.$emit("input",e),this.$emit("on-change",e)}}};t.default=i},"1b9e":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"multi-select"},[a("RadioGroup",{on:{input:e.handleInput},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.data,(function(t){return a("Radio",{key:t.id,attrs:{label:t.id,border:"",disabled:t.disabled||e.disabled}},[a("div",{staticClass:"tit"},[e._v(e._s(t.name))]),a("div",{staticClass:"desc"},[e._v("普通的商品")]),a("kdx-svg-icon",{staticClass:"icon",attrs:{type:"icon-yes1"}})],1)})),1)],1)},n=[]},"227e":function(e,t,a){"use strict";a("4dea")},2658:function(e,t,a){"use strict";a.r(t);var i=a("7e9d"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},29297:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[i("Button",{staticClass:"primary-long",on:{click:e.setData}},[e._v("保存")])]},proxy:!0}])},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"good-helper"},[i("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120}},[i("kdx-form-title",{attrs:{hasMargin:!1}},[e._v("基础设置")]),i("kdx-hint-alert",{staticClass:"hint-alert",attrs:{showIcon:!0}},[i("div",{staticClass:"hint-alert-content"},[i("div",{staticClass:"text"},[e._v("提示：商品助手需要申请接口，配置完成后才可以进行套餐设置。只有通过该页面的专属通道申请的接口才可正常使用。")]),i("a",{staticClass:"apply",attrs:{href:"https://www.99api.com/Login?log=5&referee=2903",target:"_blank"}},[e._v("立即申请")]),i("kdx-hint-tooltip",{attrs:{type:"image",maxWidth:690,width:"650px",image:a("7ff5")}})],1)]),i("FormItem",{attrs:{label:"接口apikey：",prop:"api_key"}},[i("Input",{staticClass:"width-430",attrs:{placeholder:"接口apikey"},model:{value:e.model.api_key,callback:function(t){e.$set(e.model,"api_key",t)},expression:"model.api_key"}})],1)],1)],1)])},n=[]},"2db2":function(e,t,a){"use strict";a.r(t);var i=a("9fc8"),n=a("3ae2");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("227e");var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"1cdc9ff6",null);t["default"]=o.exports},3057:function(e,t,a){},3101:function(e,t,a){function i(e,t){var a=[];function i(t){t.forEach((function(t){if(new Set(e).has(t.value))if(t.children&&t.children.length){var n=t.children.map((function(e){return e.value})),r=n.some((function(t){return e.indexOf(t)>=0}));r||a.push(t.value),i(t.children)}else a.push(t.value);else t.children&&t.children.length&&i(t.children)}))}return i(t),a}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=i,a("d3b7"),a("159b"),a("6062"),a("3ca3"),a("ddb0"),a("d81d")},"39a3":function(e,t,a){"use strict";a.r(t);var i=a("1860"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"3ae2":function(e,t,a){"use strict";a.r(t);var i=a("7f01"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"3b02":function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.Export=void 0;var n=i(a("5530")),r=a("d8cc"),s=i(a("4328")),o=a("384d"),l=i(a("1cc8")),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e){var a="";if(-1===e.indexOf(r.config.base_url)){var i={baseURL:r.config.base_url,url:e};(0,l.default)(i),a=i.baseURL+i.url}else a=e;a=a.indexOf("?")>-1?a:a+"?",t=(0,n.default)((0,n.default)({},t),(0,o.getUserInfo)()),a+="&".concat(s.default.stringify(t)),window.open(a)}};t.Export=c},"3d2b":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i-select",e._b({ref:"select",staticClass:"ivu-tree-select",class:e.classes,attrs:{placeholder:e.placeholder,multiple:e.multiple,"transfer-class-name":e.transferClassName,transfer:e.transfer},on:{"on-change":e.handleChange,"on-open-change":e.handleOpenChange}},"i-select",e.$attrs,!1),[a("Tree",{ref:"tree",attrs:{data:e.tmpData,multiple:e.multiple,"check-strictly":e.checkStrictly,"show-checkbox":e.multiple&&e.showCheckbox,"check-directly":e.checkDirectly,"load-data":e.loadData},on:{"on-select-change":e.handleSelectNode,"on-check-change":e.handleSelectNode}})],1)},n=[]},"427b":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{width:430,"footer-hide":!0,closable:e.progress>=100},on:{"on-cancel":e.handleOk,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{staticClass:"goods-helper-progress-bar"},[a("div",{staticClass:"icon"},[e.progress<100?a("span",{staticClass:"iconfont icon-xiaochengxuzhibo-tongbu"}):[e.errorNum!==e.total?a("span",{staticClass:"iconfont icon-chenggong-shixin"}):a("span",{staticClass:"iconfont icon-del"})]],2),a("div",{staticClass:"content"},[e.progress<100?[a("p",{staticClass:"text"},[e._v(" "+e._s("link"===e.type?"正在获取中":"正在导入中")+" "),e.current>0&&"link"===e.type?a("span",[e._v(e._s(e.current)+" / "+e._s(e.total))]):e._e(),e._v("... ")]),a("div",[a("Progress",{attrs:{percent:e.progress,"hide-info":"","stroke-width":4}})],1)]:[a("div",{staticClass:"result"},[-1===e.total?[a("span",{staticClass:"danger-color"},[e._v("文件导入失败")])]:a("p",{staticClass:"res-success"},["link"===e.type?[e._v(" 已同步 "+e._s(e.total-e.errorNum)+" / "+e._s(e.total)+" 件商品 ")]:[e._v(" 成功导入 "+e._s(e.current)+"/"+e._s(e.total)+"件商品 ")]],2),e.errorNum>0?a("p",{staticClass:"res-error danger-color"},[e._v(" 失败"+e._s(e.errorNum)+"件商品 ")]):e._e()],2)]],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.progress>=100,expression:"progress >= 100"}],staticClass:"footer-btn"},[a("Button",{staticClass:"primary-long marginR-10",on:{click:e.handleOk}},[e._v("确定")]),e.errorNum!==e.total?a("Button",{staticClass:"default-long",on:{click:e.readGoods}},[e._v("查看商品")]):e._e()],1)])])},n=[]},"462f":function(e,t,a){e.exports=a.p+"static/dist/shop/img/pdd_share.png"},"49d1":function(e,t,a){},"4aaf":function(e,t,a){"use strict";a.r(t);var i=a("29297"),n=a("4dd4");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("5b2a");var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"4b5ab4cc",null);t["default"]=o.exports},"4dd4":function(e,t,a){"use strict";a.r(t);var i=a("ab57"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"4dea":function(e,t,a){},5373:function(e,t,a){"use strict";a.r(t);var i=a("1b9e"),n=a("39a3");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("af01");var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"0401d26c",null);t["default"]=o.exports},"583f":function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=i(a("2909"));function r(e,t){var a=[];function i(e,r){e.forEach((function(e){var s=[].concat((0,n.default)(r),[e]);e.children&&e.children.length?i(e.children,s):t||a.push(s),t&&a.push(s)}))}return i(e,[]),a}a("d3b7"),a("159b"),a("99af")},"5b2a":function(e,t,a){"use strict";a("49d1")},"6dd0":function(e,t,a){function i(e,t,a){this.$children.forEach((function(n){var r=n.$options.name;r===e?n.$emit.apply(n,[t].concat(a)):i.apply(n,[e,t].concat([a]))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("159b"),a("b0c0"),a("99af");var n={methods:{dispatch:function(e,t,a){var i=this.$parent||this.$root,n=i.$options.name;while(i&&(!n||n!==e))i=i.$parent,i&&(n=i.$options.name);i&&i.$emit.apply(i,[t].concat(a))},broadcast:function(e,t,a){i.call(this,e,t,a)}}};t.default=n},"7e9d":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var i={name:"ProgressBar",props:{current:{type:[String,Number],default:"0"},total:{type:Number,default:0},errorNum:{type:Number,default:0},type:{type:String,default:"link"}},data:function(){return{value:!1,progress:0,timeInterval:null}},watch:{current:{handler:function(){0!==this.total&&this.setProgress()}},errorNum:{handler:function(){0!==this.total&&0!==this.errorNum&&"link"===this.type&&this.setProgress()}}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.progress=0,this.setProgress())},handleOk:function(){this.setValue(),this.$emit("on-reset")},readGoods:function(){this.setValue(),this.$emit("on-reset"),this.$utils.openNewWindowPage("/goods/list/inStock")},setProgress:function(){var e=this;if(this.timeInterval&&clearInterval(this.timeInterval),"link"===this.type){this.progress=(this.current+this.errorNum)/this.total*100;var t=parseInt(100/(10*this.total));if(this.current+this.errorNum===this.total)return void(this.progress=100);this.timeInterval=setInterval((function(){e.progress+=t,(e.progress>=(e.current+e.errorNum+1)*parseInt(100/e.total)||e.progress+t>=98)&&clearInterval(e.timeInterval)}),1e3)}else this.timeInterval=setInterval((function(){console.log("total",e.total,e.current),e.progress+=1,e.progress>=90&&clearInterval(e.timeInterval),e.current+e.errorNum===e.total&&(e.progress=100,e.timeInterval&&clearInterval(e.timeInterval))}),1e3)}}};t.default=i},"7f01":function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("b85c")),r=i(a("1da1"));a("d3b7"),a("159b"),a("b0c0"),a("ac1f"),a("00b4"),a("a15b"),a("1276");var s=i(a("5373")),o=i(a("f431")),l=i(a("f189")),c=a("d08c"),u=a("3b02"),d={name:"index",components:{MultiSelect:s.default,TreeSelect:o.default,ProgressBar:l.default},data:function(){return{model:{type:"0",url:"",excelFile:"",zipFile:""},rules:{url:[{required:!0,message:"商品链接必填"}]},file:{excel:"",zip:""},category_id:[],excelName:"",zipName:"",category:[],type:"taobao",typeArr:[{id:"0",name:"商品链接上传",disabled:this.noManagePerm},{id:"1",name:"csv上传",disabled:this.noManagePerm}],fileTotal:"",title:"淘宝",progress:{current:0,total:0,errorNum:0}}},watch:{"$route.path":{handler:function(){this.type=this.$route.params.type,this.model.type="0",this.changeType(),this.init()},immediate:!0}},computed:{noManagePerm:function(){return!this.$getPermMap("goodsHelper.manage")}},methods:{getCategory:function(){var e=this;this.$api.goodsApi.goodClassifyList().then((function(t){0===t.error&&(e.category=e.$utils.dealClassifyList(t.list))}))},changeData:function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Array.isArray(e)&&e.forEach((function(e){e.children&&e.children.length>0&&(e.indeterminate=e.children.some((function(e){return!0===e.checked})),t(e.children))}))}t(e),this.category=e},downExcel:function(){(0,u.Export)("manage/apps/goodsHelper/upload/download-excel-template")},downZip:function(){(0,u.Export)("manage/apps/goodsHelper/upload/download-zip-template")},selectExcelFile:function(){this.$refs["upload_excel_input"].click()},changeExcel:function(e){if(e){var t,a,i=null===(t=e.target)||void 0===t||null===(a=t.files[0])||void 0===a?void 0:a.name,n=/^.*\.(?:xls|xlsx)$/i;if(!n.test(i))return void this.$Message.error("请上传csv文件");this.excelName=i,this.file.excel=e.target.files[0]}},selectZipFile:function(){this.$refs["upload_zip_input"].click()},changeZipFile:function(e){if(e){var t,a,i=null===(t=e.target)||void 0===t||null===(a=t.files[0])||void 0===a?void 0:a.name,n=/^.*\.(?:zip)$/i;if(!n.test(i))return void this.$Message.error("请上传zip文件");this.zipName=i,this.file.zip=e.target.files[0]}},deleteExcelFile:function(){this.excelName="",this.file.excel="",this.$refs["upload_excel_input"]&&(this.$refs["upload_excel_input"].value="")},deleteZipFile:function(){this.zipName="",this.file.zip="",this.$refs["upload_zip_input"]&&(this.$refs["upload_zip_input"].value="")},handleSave:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=null===(a=e.$store.state.config.apps)||void 0===a?void 0:a.goodsHelper,1==(null===i||void 0===i?void 0:i.is_forever)||1!=(null===i||void 0===i?void 0:i.about_expire)||0!=(null===i||void 0===i?void 0:i.shop_app_status)){t.next=4;break}return e.$Message.error("商品助手应用已过期"),t.abrupt("return");case 4:if(0!==e.residueNumber){t.next=7;break}return e.$Message.error("您的抓取次数已用完，请尽快进行充值操作"),t.abrupt("return");case 7:e.$refs["form"].validate((function(t){t&&e.getGoodsInfo()}));case 8:case"end":return t.stop()}}),t)})))()},getGoodsInfo:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,i,r,s,o,l,c,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={tmall:"tmall",jd:"jd",pinduoduo:"pdd",suning:"suning",1688:"alibaba",xiaohongshu:"redbook",taobao:"taobao"},r="",r=null!==(a=e.category_id)&&void 0!==a&&a.length?e.category_id.join(","):"",s=i[e.type],o=e.model.url.split(/[\n,]/g),!(o.length>3)){t.next=8;break}return e.$Message.error("单次获取的商品数量请不要超过3个,以免会影响抓取效率!"),t.abrupt("return");case 8:e.progress={current:0,total:(null===o||void 0===o?void 0:o.length)||0,errorNum:0},e.$nextTick((function(){e.$refs["progress_bar"].setValue()})),l=(0,n.default)(o),t.prev=11,l.s();case 13:if((c=l.n()).done){t.next=29;break}return u=c.value,d=void 0,t.prev=16,t.next=19,e.$api.goodsHelperApi.getGoodsLink({url:u,type:s,category_id:r});case 19:d=t.sent,t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](16),d={error:-1};case 25:0!==d.error&&(e.progress.errorNum+=1),e.progress.current+=1;case 27:t.next=13;break;case 29:t.next=34;break;case 31:t.prev=31,t.t1=t["catch"](11),l.e(t.t1);case 34:return t.prev=34,l.f(),t.finish(34);case 37:case"end":return t.stop()}}),t,null,[[11,31,34,37],[16,22]])})))()},uploadFile:function(){var e,t=this,a=null===(e=this.$store.state.config.apps)||void 0===e?void 0:e.goodsHelper;if(1==(null===a||void 0===a?void 0:a.is_forever)||1!=(null===a||void 0===a?void 0:a.about_expire)||0!=(null===a||void 0===a?void 0:a.shop_app_status))if(0!==this.residueNumber)if(this.file.excel)if(this.file.zip){var i=new FormData;i.append("taobao_excel",this.file.excel),i.append("taobao_zip",this.file.zip),this.progress={current:0,total:1,errorNum:0},this.$nextTick((function(){t.$refs["progress_bar"].setValue()})),(0,c.uploadFile)("manage/apps/goodsHelper/upload",i).then((function(e){var a=e.error,i=e.data;0===a?(console.log("res",e),t.progress.current=i.success,t.progress.errorNum=i.error||0,t.progress.total=i.total):(t.$Message.error(e.message),t.$refs["progress_bar"].setValue(),t.progress.total=-1)}))}else this.$Message.error("请选择要上传的zip文件");else this.$Message.error("请选择要上传的excel文件");else this.$Message.error("您的抓取次数已用完，请尽快进行充值操作");else this.$Message.error("商品助手应用已过期")},saveEveryFileGoods:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=0;case 1:if(!a++){t.next=16;break}return i=void 0,t.prev=3,t.next=6,e.$api.goodsHelperApi.uploadEveryFileGoods();case 6:i=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log("e",t.t0);case 12:console.log("result",i);case 13:e.fileTotal,t.next=1;break;case 16:case"end":return t.stop()}}),t,null,[[3,9]])})))()},changeType:function(){var e={tmall:"天猫",jd:"京东",pinduoduo:"拼多多",suning:"苏宁",1688:"1688",xiaohongshu:"小红书"};if("taobao"===this.type){if(this.typeArr=[{id:"0",name:"商品链接上传",disabled:this.noManagePerm},{id:"1",name:"csv上传",disabled:this.noManagePerm}],"0"===this.model.type)this.title="淘宝";else if("1"===this.model.type){var t;null===(t=this.$refs["form"])||void 0===t||t.resetFields(),this.title="淘宝csv上传助手"}}else this.title=e[this.type]},handleReset:function(){var e;"0"===this.model.type?(this.model.url="",this.category_id=[],null===(e=this.$refs["form"])||void 0===e||e.resetFields()):"1"===this.model.type&&(this.excelName="",this.zipName="",this.file.excel=null,this.file.zip=null,console.log("value",this.$refs["upload_excel_input"]),this.$refs["upload_excel_input"]&&(this.$refs["upload_excel_input"].value=""),this.$refs["upload_zip_input"]&&(this.$refs["upload_zip_input"].value=""))},init:function(){this.getCategory(),this.handleReset()}}};t.default=d},"7ff5":function(e,t,a){e.exports=a.p+"static/dist/shop/img/api_key.png"},"9fc8":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("kdx-content-bar",[i("div",{staticClass:"goods-helper-store"},[i("div",{staticClass:"store-content"},[i("div",{staticClass:"form-title"},[i("kdx-form-title",{attrs:{"has-margin":!1}},[e._v(e._s(e.title))]),i("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"0"===e.model.type,expression:"model.type === '0'"}],staticClass:"marginT-10",attrs:{type:"error","show-icon":!1}},[i("p",[e._v(" 提示：尽量在服务器空闲时间来操作，会占用大量内存与带宽，在获取过程中，请不要进行任何操作!")]),i("p",[e._v("由于平台有防数据抓取措施，不能获取到商品价，所以，统一用商品标价填充，如果抓取商品无标价，则统一填充0")]),i("p",[e._v("商城当前最多支持3个规格项，如果抓取商品超出3个规格项后，抓取后格为空，需要手动进行补充规格内容。")]),i("p",{directives:[{name:"show",rawName:"v-show",value:"pinduoduo"===e.type,expression:"type === 'pinduoduo'"}]},[e._v("将拼多多APP内的商品链接粘贴到输入框内，每行1个链接，每次添加的商品链接不超过3个。 "),i("kdx-hint-tooltip",{attrs:{type:"image",image:a("462f")}})],1),i("p",{directives:[{name:"show",rawName:"v-show",value:"xiaohongshu"===e.type,expression:"type === 'xiaohongshu'"}]},[e._v("将小红书APP内的商品链接粘贴到输入框内，每行1个链接，每次添加的商品链接不超过3个。 "),i("kdx-hint-tooltip",{attrs:{type:"image",image:a("d1937")}})],1)]),i("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"1"===e.model.type,expression:"model.type === '1'"}],staticClass:"marginT-10",attrs:{"show-icon":!1}},[i("p",{staticClass:"danger-color"},[e._v("提示：尽量在服务器空闲时间来操作，会占用大量内存与宽带，在获取的过程中，请不要进行任何操作")]),i("p",{staticClass:"bold"},[e._v("功能介绍：")]),i("p",[e._v("可将淘宝助理以及其他途径获取的淘宝商品CSV文件快速上传至商城,节约您的大量时间!")]),i("p",{staticClass:"bold"},[e._v("使用方法：")]),i("p",[e._v("1. 将您获取到的CSV文件转存为Excel格式,否则将无法识别")]),i("p",[e._v("2. 将配套的图片文件包压缩为Zip格式压缩包并且导入(图片需在压缩包根目录下)")]),i("p",[e._v("3. 确认上传即可")])])],1),i("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120}},[i("FormItem",{directives:[{name:"show",rawName:"v-show",value:"taobao"===e.type,expression:"type === 'taobao'"}],staticClass:"r-form-item-checkbox",attrs:{label:"选择上传方式："}},[i("multi-select",{attrs:{data:e.typeArr},on:{"on-change":e.changeType},model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}})],1),"0"===e.model.type?[i("FormItem",{attrs:{label:"商品链接：",prop:"url"}},[i("Input",{staticClass:"width-430",attrs:{disabled:e.noManagePerm,type:"textarea",autosize:{minRows:6},placeholder:"商品链接"},model:{value:e.model.url,callback:function(t){e.$set(e.model,"url",t)},expression:"model.url"}}),"taobao"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: http://item.taobao.com/item.htm?id=522155891308")]),i("kdx-hint-text",[e._v("将淘宝链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:"tmall"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: https://www.tmall.com/?ali_trackid=2:mm_26632258_3504122_55934697:1587974850_126_1068622329 ")]),i("kdx-hint-text",[e._v("将天猫链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:"jd"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: https://item.jd.com/65417738725.html")]),i("kdx-hint-text",[e._v("将京东链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:"pinduoduo"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: https://mobile.yangkeduo.com/goods.html?goods_id=91240910838&page_from=35 ")]),i("kdx-hint-text",[e._v("将拼多多链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:"suning"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: https://product.suning.com/0000000000/10263045922.html")]),i("kdx-hint-text",[e._v("将苏宁链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:"1688"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: https://detail.1688.com/offer/580088565958.html")]),i("kdx-hint-text",[e._v("将1688链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:"xiaohongshu"===e.type?[i("kdx-hint-text",[e._v("例如商品链接为: https://pages.xiaohongshu.com/goods/5de77cf89b8b6b003545a642?goods_id=5de77cf89b8b6b003545a642 ")]),i("kdx-hint-text",[e._v("将小红书链接粘贴至输入框内，每行1个链接，每次添加的商品链接不超过3个。")])]:e._e()],2),i("FormItem",{attrs:{label:"商品分类："}},[i("tree-select",{staticClass:"width-430",attrs:{transfer:!0,"show-checkbox":!0,data:e.category,multiple:!0,disabled:e.noManagePerm},on:{"change-data":e.changeData},model:{value:e.category_id,callback:function(t){e.category_id=t},expression:"category_id"}}),i("kdx-hint-text",[e._v("将商品同步至此分类")])],1),i("FormItem",[i("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("立即获取")])],1)]:"1"===e.model.type?[i("FormItem",{attrs:{label:"模板下载："}},[i("Button",{attrs:{disabled:e.noManagePerm},on:{click:e.downExcel}},[i("span",{staticClass:"iconfont icon-download"}),e._v(" Excel示例文件下载 ")]),i("Button",{staticClass:"mL-20",attrs:{disabled:e.noManagePerm},on:{click:e.downZip}},[i("span",{staticClass:"iconfont icon-download"}),e._v(" Zip示例文件下载 ")])],1),i("FormItem",{attrs:{label:"Excel导入："}},[i("Button",{staticClass:"default-primary",staticStyle:{"margin-bottom":"6px"},attrs:{disabled:e.noManagePerm},on:{click:e.selectExcelFile}},[i("span",{staticClass:"iconfont icon-upload"}),e._v(" 文件上传 ")]),i("input",{ref:"upload_excel_input",staticClass:"upload-input-file",attrs:{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel "},on:{change:e.changeExcel}}),i("kdx-hint-text",[e._v("如果遇到数据重复则进行数据更新")]),e.excelName?i("div",{staticClass:"upload-name"},[i("kdx-svg-icon",{attrs:{type:"icon-file-b-3"}}),i("span",{staticClass:"name"},[e._v(e._s(e.excelName))]),i("Button",{attrs:{disabled:e.noManagePerm,type:"text"},on:{click:e.deleteExcelFile}},[e._v("删除")])],1):e._e()],1),i("FormItem",{attrs:{label:"Zip导入："}},[i("Button",{staticClass:"default-primary",staticStyle:{"margin-bottom":"6px"},attrs:{disabled:e.noManagePerm},on:{click:e.selectZipFile}},[i("span",{staticClass:"iconfont icon-upload"}),e._v(" 文件上传 ")]),i("input",{ref:"upload_zip_input",staticClass:"upload-input-file",attrs:{disabled:e.noManagePerm,type:"file",accept:"application/zip,application/x-zip,application/x-zip-compressed"},on:{change:e.changeZipFile}}),i("kdx-hint-text",[e._v("如果遇到数据重复则进行数据更新")]),e.zipName?i("div",{staticClass:"upload-name"},[i("kdx-svg-icon",{attrs:{type:"icon-file-b-3"}}),i("span",{staticClass:"name"},[e._v(e._s(e.zipName))]),i("Button",{attrs:{disabled:e.noManagePerm,type:"text"},on:{click:e.deleteZipFile}},[e._v("删除")])],1):e._e(),i("Button",{staticStyle:{"margin-top":"20px"},attrs:{disabled:e.noManagePerm,type:"primary"},on:{click:e.uploadFile}},[e._v("确认导入")])],1)]:e._e()],2)],1)]),i("progress-bar",{ref:"progress_bar",attrs:{current:e.progress.current,total:e.progress.total,type:"0"===e.model.type?"link":"file","error-num":e.progress.errorNum},on:{"on-reset":e.handleReset}})],1)},n=[]},ab57:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"settings",data:function(){return{model:{api_key:""},rules:{api_key:[{required:!0,message:"接口apikey必填"}]},data:[],loading:!1}},methods:{getData:function(){var e=this;this.loading=!0,this.$api.goodsHelperApi.getGoodsApiKey().then((function(t){e.loading=!1,e.model.api_key=t.settings.api_key||""}))},setData:function(){var e=this;this.$refs["form"].validate((function(t){t&&(e.loading=!0,e.$api.goodsHelperApi.setGoodsApiKey({api_key:e.model.api_key||""}).then((function(t){e.loading=!1,0===t.error&&e.$Message.success("保存成功")})))}))}},mounted:function(){this.getData()}};t.default=a},af01:function(e,t,a){"use strict";a("3057")},d1937:function(e,t,a){e.exports=a.p+"static/dist/shop/img/red_book_share.png"},d4a9:function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("53ca"));a("a9e3"),a("e9c4"),a("d81d"),a("d3b7"),a("159b"),a("4de4"),a("a15b");var r=i(a("6dd0")),s=i(a("583f")),o=a("3101"),l=[],c={name:"TreeSelect",mixins:[r.default],props:{value:{type:[String,Number,Array]},data:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},loadData:{type:Function},transfer:{type:Boolean,default:function(){return!(!this.$IVIEWPRO||""===this.$IVIEWPRO.transfer)&&this.$IVIEWPRO.transfer}},checkStrictly:{type:Boolean,default:!1},checkDirectly:{type:Boolean,default:!0},placeholder:{type:String,default:"请选择"},isHandlePath:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value,isChangeValueInTree:!1,isValueChangeByTree:!1,tmpData:[]}},watch:{value:{handler:function(e){var t;this.isChangeValueInTree?this.isChangeValueInTree=!1:(this.currentValue=e,null===(t=this.$refs.select)||void 0===t||t.reset(),l=(0,s.default)(this.data,this.isHandlePath),this.handleUpdateTreeNodes(this.tmpData,!0),this.tmpData=JSON.parse(JSON.stringify(this.tmpData)))},deep:!0},data:{handler:function(){var e;(this.tmpData=JSON.parse(JSON.stringify(this.data)),l=(0,s.default)(this.data,this.isHandlePath),this.isChangeValueInTree)?this.isChangeValueInTree=!1:(null===(e=this.$refs.select)||void 0===e||e.reset(),this.handleUpdateTreeNodes(this.tmpData,!0))},deep:!0}},computed:{valueToArray:function(){return"object"===(0,n.default)(this.currentValue)?this.isHandlePath?(0,o.formatData)(this.currentValue,this.tmpData):this.currentValue:[this.currentValue]},isCheckboxUsable:function(){return this.multiple&&this.showCheckbox},transferClassName:function(){return this.transfer?"ivu-tree-select-transfer":""},classes:function(){return{"ivu-tree-select-with-checkbox":this.showCheckbox}}},methods:{handleSelectNode:function(e,t){if(this.$emit("change-data",this.tmpData),this.multiple)e.length?(this.currentValue=e.map((function(e){return e.value})),this.handleUpdateSelectValue(t.value,t.title)):(this.currentValue=[],this.handleUpdateSelectValue("","")),this.traverseData(this.tmpData,this.currentValue);else if(e.length){var a=e[0];this.currentValue=a.value,this.handleUpdateSelectValue(a.value,a.title)}else this.currentValue="",this.handleUpdateSelectValue("","");this.isChangeValueInTree=!0,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue),this.dispatch("FormItem","on-form-change",this.currentValue)},handleUpdateTreeNodes:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.forEach((function(e){t.valueToArray.indexOf(e.value)>=0?(t.isCheckboxUsable?e.checked=!0:e.selected=!0,t.handleUpdateSelectValue(e.value,e.title)):t.isCheckboxUsable?e.checked=!1:e.selected=!1,e.children&&e.children.length&&t.handleUpdateTreeNodes(e.children)})),a&&this.$refs.select&&(this.$refs.select.isFocused=!1)},handleUpdateSelectValue:function(e){if(""===e){var t;null===(t=this.$refs.select)||void 0===t||t.reset()}else{this.isValueChangeByTree=!0;var a=l.filter((function(t){return t[t.length-1].value==e}))[0];a&&a.length>0&&this.$refs.select&&this.$refs.select.onOptionClick({value:e,label:a.map((function(e){return e.title})).join("->")||""}),this.multiple||(this.isValueChangeByTree=!1)}},handleChange:function(e){var t,a=this;this.isValueChangeByTree?this.isValueChangeByTree=!1:(this.currentValue=e,this.$emit("input",e),this.$emit("on-change",e),this.dispatch("FormItem","on-form-change",e),null===(t=this.$refs.select)||void 0===t||t.reset(),this.handleUpdateTreeNodes(this.tmpData,!0),this.$emit("change-data",this.tmpData),this.$nextTick((function(){a.isValueChangeByTree=!1})))},handleOpenChange:function(e){this.$emit("on-open-change",e)},traverseData:function(e,t){var a=this;e.forEach((function(e){t.indexOf(e.value)>-1?e.checked=!0:e.checked=!1,e.children&&e.children.length>0&&a.traverseData(e.children,t)}))}},mounted:function(){var e;null!==(e=this.data)&&void 0!==e&&e.length&&(this.tmpData=JSON.parse(JSON.stringify(this.data))),l=(0,s.default)(this.data,this.isHandlePath),this.handleUpdateTreeNodes(this.data,!0)}};t.default=c},daaa:function(e,t,a){"use strict";a("f480")},ed26:function(e,t,a){"use strict";a.r(t);var i=a("d4a9"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},f189:function(e,t,a){"use strict";a.r(t);var i=a("427b"),n=a("2658");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("daaa");var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"5e40e961",null);t["default"]=o.exports},f431:function(e,t,a){"use strict";a.r(t);var i=a("3d2b"),n=a("ed26");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=o.exports},f480:function(e,t,a){}}]);