(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{3347:function(t,e,a){},4472:function(t,e,a){"use strict";a.r(e);var n=a("ddd3"),l=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=l.a},"4fadc":function(t,e,a){var n=a("23e7"),l=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return l(t)}})},"6f53":function(t,e,a){var n=a("83ab"),l=a("e330"),i=a("df75"),o=a("fc6a"),r=a("d1e7").f,s=l(r),c=l([].push),u=function(t){return function(e){var a,l=o(e),r=i(l),u=r.length,g=0,d=[];while(u>g)a=r[g++],n&&!s(l,a)||c(d,t?[a,l[a]]:l[a]);return d}};t.exports={entries:u(!0),values:u(!1)}},8485:function(t,e,a){"use strict";a.r(e);var n=a("8959"),l=a("4472");for(var i in l)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return l[t]}))}(i);a("d1dd");var o=a("2877"),r=Object(o["a"])(l["default"],n["a"],n["b"],!1,null,"5aabb129",null);e["default"]=r.exports},8959:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return l}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handleSubmit}},[t._v("提交 ")])]},proxy:!0}])},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("kdx-hint-alert",{attrs:{showIcon:!1}},[a("div",{staticClass:"description"},[a("div",{staticClass:"tit"},[t._v("任务类型说明")]),a("div",{staticClass:"desc"},[t._v(" 被动触发：当有用户访问商城时计划任务才进行工作，根据任务模式的参数进行任务内容 ")]),a("div",{staticClass:"desc"},[t._v(" 代码配置：需要配置操作系统的计划任务,如果没有配置，则不会进行自动收货等计划任务 ")])])]),a("div",{staticClass:"content-body"},[a("Form",{ref:"form",attrs:{model:t.formData,"label-width":120,rules:t.rules}},[a("FormItem",{attrs:{label:"任务类型：",prop:"execute_type"}},[a("RadioGroup",{model:{value:t.formData.execute_type,callback:function(e){t.$set(t.formData,"execute_type",e)},expression:"formData.execute_type"}},[a("Radio",{attrs:{label:"0"}},[a("span",[t._v("被动触发")])]),a("Radio",{attrs:{label:"1"}},[a("span",[t._v("代码配置（主动触发）")])])],1)],1),"0"===t.formData.execute_type?a("div",{staticClass:"passive"},[a("Table",{attrs:{border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"setting",fn:function(e){var n=e.row;return[a("span",{staticClass:"text"},[t._v(t._s(n.setting))]),n.tooltips?a("Tooltip",{attrs:{placement:"top","max-width":"200",content:n.tooltips,theme:"light"}},[a("i",{staticClass:"iconfont icon-icon-test",staticStyle:{"margin-left":"5px"}})]):t._e()]}},{key:"high",fn:function(e){var n=e.row,l=e.index;return[a("Radio",{on:{"on-change":function(e){return t.highRadioChange(l)}},model:{value:t.data[l].highFlag,callback:function(e){t.$set(t.data[l],"highFlag",e)},expression:"data[index].highFlag"}},[t._v(" "+t._s(n.high)+" ")])]}},{key:"low",fn:function(e){var n=e.row,l=e.index;return[a("Radio",{on:{"on-change":function(e){return t.lowRadioChange(l)}},model:{value:t.data[l].lowFlag,callback:function(e){t.$set(t.data[l],"lowFlag",e)},expression:"data[index].lowFlag"}},[t._v(" "+t._s(n.low)+" ")])]}}],null,!1,1778440282)})],1):t._e()],1)],1)],1)])])},l=[]},c1f9:function(t,e,a){var n=a("23e7"),l=a("2266"),i=a("8418");n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return l(t,(function(t,a){i(e,t,a)}),{AS_ENTRIES:!0}),e}})},d1dd:function(t,e,a){"use strict";a("3347")},ddd3:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=n(a("5530")),i=n(a("3835"));a("d3b7"),a("159b"),a("d81d"),a("4fadc"),a("c1f9");var o={data:function(){var t=this;return{formData:{execute_type:"0"},rules:{execute_type:[{required:!0,message:"请选择任务类型"}]},highSelectAllFlag:!1,lowSelectAllFlag:!1,columns:[{title:"统一设置",align:"right",slot:"setting"},{title:"高效能模式",align:"center",slot:"high",renderHeader:function(e,a){return e("div",[e("Checkbox",{props:{value:t.highSelectAllFlag},on:{"on-change":function(){var e=t.highSelectAllFlag;t.highSelectAllFlag=!e,t.lowSelectAllFlag=e,t.data.forEach((function(e){e.highFlag=t.highSelectAllFlag,e.lowFlag=!t.highSelectAllFlag}))}}},a.column.title)])}},{title:"低效能模式",align:"center",slot:"low",renderHeader:function(e,a){return e("div",[e("Checkbox",{props:{value:t.lowSelectAllFlag},on:{"on-change":function(){var e=t.lowSelectAllFlag;t.lowSelectAllFlag=!e,t.highSelectAllFlag=e,t.data.forEach((function(e){e.lowFlag=t.lowSelectAllFlag,e.highFlag=!t.lowSelectAllFlag}))}}},a.column.title)])}}],data:[{setting:"自动关闭未付款订单",high:"10分钟/次",low:"30分钟/次",highFlag:!0,lowFlag:!1,tooltips:""},{setting:"关闭未付款订单通知",high:"10分钟/次",low:"30分钟/次",highFlag:!0,lowFlag:!1,tooltips:""},{setting:"自动收货",high:"10分钟/次",low:"30分钟/次",highFlag:!0,lowFlag:!1,tooltips:""},{setting:"优惠券自动返利",high:"10分钟/次",low:"30分钟/次",highFlag:!0,lowFlag:!1,tooltips:""},{setting:"商品自动上下架",high:"10分钟/次",low:"30分钟/次",highFlag:!0,lowFlag:!1,tooltips:""}],submitLoading:!1}},watch:{data:{handler:function(t){this.highSelectAllFlag=!t.some((function(t){return!1===t.highFlag})),this.lowSelectAllFlag=!t.some((function(t){return!1===t.lowFlag}))},deep:!0,immediate:!0}},created:function(){this.getCrontab()},methods:{getCrontab:function(){var t=this;this.$api.systemApi.getCrontab({}).then((function(e){0===e.error&&(t.formData.execute_type=e.execute_type+"",t.data=e.params.map((function(t){return{setting:t.title,high:"10分钟/次",low:"30分钟/次",highFlag:10===t.value,lowFlag:30===t.value,tooltips:t.tips,resKey:t.key}})))}))},handleSubmit:function(){var t=this.data.map((function(t){for(var e,a,n=0,l=Object.entries(t);n<l.length;n++){var o=(0,i.default)(l[n],2),r=o[0],s=o[1];"highFlag"===r&&(a=s),"resKey"===r&&(e=s)}return[e,a?10:30]}));t=Object.fromEntries(t),this.postCrontab(t)},postCrontab:function(t){var e=this;this.submitLoading=!0,this.$api.systemApi.postCrontab((0,l.default)({execute_type:this.formData.execute_type},t)).then((function(t){e.submitLoading=!1,0===t.error&&e.$Message.success("保存成功")}))},highRadioChange:function(t){this.data[t].lowFlag=!1},lowRadioChange:function(t){this.data[t].highFlag=!1}}};e.default=o}}]);