(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[181],{"1c9d":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var o=function(){var e=this,t=e._self._c;return t("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[t("Button",{staticClass:"primary-long",attrs:{type:"primary",loading:e.submitLoading},on:{click:e.handleSave}},[e._v("保存")]),t("Button",{on:{click:e.goBack}},[e._v("返回列表")])]},proxy:!0}])},[t("div",{staticClass:"vip-grade-add"},[t("div",{staticClass:"grade-content"},[t("kdx-form-title",[e._v(e._s(e.type))]),t("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120}},[e.is_default?e._e():t("FormItem",{attrs:{label:"等级权重：",prop:"level"}},[t("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",fixed:0,minValue:1,maxValue:100,type:"text",placeholder:"请输入"},on:{"on-blur":e.handleTest},model:{value:e.model.level,callback:function(t){e.$set(e.model,"level",t)},expression:"model.level"}}),t("kdx-hint-text",[e._v("数字越大，等级权重越高，等级权重不可重复")])],1),t("FormItem",{attrs:{label:"等级名称：",prop:"level_name"}},[t("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.level_name,callback:function(t){e.$set(e.model,"level_name",t)},expression:"model.level_name"}})],1),e.is_default?e._e():t("FormItem",{ref:"updateForm",staticClass:"r-form-item-checkbox",attrs:{label:"升级条件：",prop:"update_condition"}},[t("RadioGroup",{on:{"on-change":e.changeType},model:{value:e.model.update_condition,callback:function(t){e.$set(e.model,"update_condition",t)},expression:"model.update_condition"}},[t("Radio",{attrs:{label:"2"}},[t("span",[e._v("订单金额")])]),t("Radio",{attrs:{label:"1"}},[t("span",[e._v("订单数量")])]),t("Radio",{attrs:{label:"3"}},[t("span",[e._v("购买指定商品")])]),t("Radio",{attrs:{label:"0"}},[t("span",[e._v("不自动升级")])])],1),2==e.model.update_condition?t("div",{staticClass:"bg-color"},[2==e.model.update_condition?t("FormItem",{ref:"orderMoney",attrs:{label:"完成订单金额：",prop:"order_money","label-width":160}},[t("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",fixed:2,maxValue:9999999.99},model:{value:e.model.order_money,callback:function(t){e.$set(e.model,"order_money",t)},expression:"model.order_money"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("满")]),t("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])]),t("kdx-hint-text",{staticStyle:{"margin-left":"160px"}},[e._v("满足升级条件后可升级为此会员等级")])],1):e._e()],1):e._e(),"1"==e.model.update_condition?t("div",{staticClass:"bg-color"},["1"==e.model.update_condition?t("FormItem",{ref:"orderMoney",attrs:{label:"完成订单数量：",prop:"order_count","label-width":160}},[t("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",fixed:0,maxValue:999999999},model:{value:e.model.order_count,callback:function(t){e.$set(e.model,"order_count",t)},expression:"model.order_count"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("满")]),t("span",{attrs:{slot:"append"},slot:"append"},[e._v("单")])]),t("kdx-hint-text",{staticStyle:{"margin-left":"160px"}},[e._v("满足升级条件后可升级为此会员等级")])],1):e._e()],1):e._e(),"3"==e.model.update_condition?t("div",{staticClass:"bg-color goods"},[t("FormItem",{ref:"orderMoney",staticStyle:{"margin-bottom":"0"},attrs:{prop:"goods_ids","label-width":0}},[t("Button",{staticClass:"default-primary",on:{click:e.addShop}},[e._v("+添加指定商品")]),t("div",{staticClass:"goods-box"},[e.selector.data&&e.selector.data.length>0?t("shop-name-page-list",{ref:"shop_name_list",attrs:{list:e.selector.data},on:{"on-delete":e.deleteGoods}}):e._e()],1)],1)],1):e._e()],1),t("FormItem",{attrs:{label:"折扣权益："}},[t("RadioGroup",{model:{value:e.model.is_discount,callback:function(t){e.$set(e.model,"is_discount",t)},expression:"model.is_discount"}},[t("Radio",{attrs:{label:"0"}},[t("span",[e._v("不设置折扣")])]),t("Radio",{attrs:{label:"1"}},[t("span",[e._v("自定义")])])],1),"1"==e.model.is_discount?t("div",{staticClass:"bg-color"},["1"==e.model.is_discount?t("FormItem",{ref:"orderMoney",attrs:{label:"当前等级可享受：",prop:"discount","label-width":160}},[t("kdx-rr-input",{staticClass:"width-250",attrs:{fixed:1,number:"",minValue:.1,maxValue:9.9,placeholder:"请输入0.1-9.9之间的数字"},model:{value:e.model.discount,callback:function(t){e.$set(e.model,"discount",t)},expression:"model.discount"}},[t("span",{attrs:{slot:"append"},slot:"append"},[e._v("折")])])],1):e._e()],1):e._e()],1),e.is_default?e._e():t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"状态：",prop:"status"}},[t("RadioGroup",{model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}},[t("Radio",{attrs:{label:"1"}},[e._v("启用")]),t("Radio",{attrs:{label:"0"}},[e._v("禁用")])],1)],1)],1)],1)]),t("goods-selector",{attrs:{multiple:!0,"current-list":e.selector.data},on:{"on-change":e.selectorChange,"on-cancel":e.selectorCancel},model:{value:e.selector.value,callback:function(t){e.$set(e.selector,"value",t)},expression:"selector.value"}})],1)};t.render=o;var a=[];t.staticRenderFns=a},"683e":function(e,t,o){},"84a2":function(e,t,o){var a=o("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("d3b7"),o("d81d"),o("a434"),o("14d9");var n=a(o("c7eb")),i=a(o("1da1")),s=a(o("416b")),d=a(o("0659")),r={name:"index",components:{ShopNamePageList:s.default,GoodsSelector:d.default},data:function(){var e=this;this.$createElement;return{type:"添加会员等级",id:"",submitLoading:!1,error_text:"",zancun:"",is_default:!1,model:{level:"",level_name:"",update_condition:"2",order_money:"",order_count:"",goods_ids:"",is_discount:"0",discount:"",state:"0"},rules:{level:[{required:!0,message:"请输入等级"},{pattern:/^([1]?\d{1,2})$/,message:"请输入1-100的数字"}],level_name:[{required:!0,message:"请输入等级名称"}],update_condition:[{required:!0,message:"请选择升级条件"}],order_money:[{required:!0,message:"请填写订单金额"},{pattern:/^[0-9]+([.]{1}[0-9]{1,2})?$/,message:"请输入正确的数值"}],order_count:[{required:!0,message:"请填写订单数量"},{pattern:/^[1-9]\d*$/,message:"请输入正确的数值"}],discount:[{required:!0,message:"请填写等级折扣权益"}],goods_ids:[{required:!0,message:"请添加商品"}]},selector:{value:!1,data:[]},columns:[{title:"商品",key:"title",render:function(t,o){return t("div",{class:"flex align-center"},[t("div",{class:"goods-image"},[t("img",{attrs:{src:e.$media(o.row.thumb),alt:""},on:{error:function(t){e.replaceImage(t)}}})]),t("div",{class:"goods-title two-line-hide"},[o.row.title])])}},{title:"操作",key:"action",width:80,render:function(t,o){return t("Button",{attrs:{type:"text"},on:{click:function(){e.deleteShop(o.index)}}},["删除"])}}]}},computed:{},created:function(){},mounted:function(){this.is_default=!1,"edit"==this.$route.params.type&&(this.type="编辑会员等级",this.id=this.$route.query.id,this.getDetail())},methods:{getDetail:function(){var e=this;this.$api.memberApi.getLevel({id:this.id}).then((function(t){0==t.error&&(e.model=t,e.selector.data=t.goods_info,e.model.is_default&&"1"==e.model.is_default&&(e.is_default=!0))}))},changeType:function(e){var t=this;this.$refs.orderMoney&&(this.$refs.orderMoney.validateState=""),0!=e&&4!=e?this.zancun=e:0==e?this.$Modal.confirm({title:"提示",content:"您设置的等级不会自动升级到该等级下，请谨慎设置",onOk:function(){t.model.update_condition="0"},onCancel:function(){t.model.update_condition=t.zancun}}):4==e&&this.$Modal.confirm({title:"提示",content:"您如果设置改等级为当前系统默认等级，则商城原有默认等级、和用户的等级将会被替换，请慎重操作！",onOk:function(){t.model.update_condition="4"},onCancel:function(){t.model.update_condition=t.zancun}})},handleSave:function(){this.submitLoading=!0,this.customForm()},customForm:function(){var e=this;return(0,i.default)((0,n.default)().mark((function t(){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.validateForm();case 3:e.submit(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.submitLoading=!1;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},validateForm:function(){var e=this;return new Promise((function(t,o){e.$refs["form"].validate((function(e){e?t(e):o()}))}))},submit:function(){var e=this,t={level:this.model.level,level_name:this.model.level_name,update_condition:this.model.update_condition,is_discount:this.model.is_discount,discount:this.model.discount,state:this.model.state};3==this.model.update_condition?t.goods_ids=this.selector.data.map((function(e){return e.id})):1==this.model.update_condition?t.order_count=this.model.order_count:2==this.model.update_condition&&(t.order_money=this.model.order_money),this.id&&(t.id=this.id),this.$api.memberApi[this.id?"editLevel":"addLevel"](t).then((function(t){0==t.error&&(e.$Message.success("保存成功"),setTimeout((function(){e.$router.go(-1)}),2e3)),e.submitLoading=!1}))},addShop:function(){this.selector.value=!0},deleteGoods:function(e){this.selector.data.splice(e,1),this.model.goods_ids=this.selector.data.map((function(e){return e.id}))},selectorChange:function(e){this.selector.data=e,this.model.goods_ids=this.selector.data.map((function(e){return e.id}))},selectorCancel:function(){this.selector.value=!1},handleTest:function(e){var t=this;"edit"!=this.$route.params.type||this.model.level!=e.target.value?this.$api.memberApi.testLevelId({level:e.target.value}).then((function(e){0==e.error?t.error_text="":(t.model.level="",t.error_text="该等级已存在")})):this.error_text=""},goBack:function(){this.$router.push({path:"/member/grade/list"})}}};t.default=r},aa8d:function(e,t,o){"use strict";o.r(t);var a=o("84a2"),n=o.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},c9b4:function(e,t,o){"use strict";o.r(t);var a=o("d83b"),n=o("aa8d");for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);o("eeae");var s=o("2877"),d=Object(s["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);t["default"]=d.exports},d83b:function(e,t,o){"use strict";var a=o("1c9d");o.o(a,"render")&&o.d(t,"render",(function(){return a["render"]})),o.o(a,"staticRenderFns")&&o.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},eeae:function(e,t,o){"use strict";o("683e")}}]);