(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{"016f":function(t,e,s){"use strict";s.r(e);var o=s("f659c"),n=s("5041");for(var i in n)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(i);s("ca12");var a=s("2877"),l=Object(a["a"])(n["default"],o["a"],o["b"],!1,null,"1c16036e",null);e["default"]=l.exports},5041:function(t,e,s){"use strict";s.r(e);var o=s("5ade"),n=s.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"517c":function(t,e,s){},"5ade":function(t,e,s){var o=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("d81d"),s("a15b"),s("a434");var n=o(s("2909")),i=o(s("5530")),a=o(s("5471")),l=o(s("416b")),d=o(s("0659")),r=s("2f62"),c={components:{GoodsSelector:d.default,MyRadioGroup:a.default,ShopNamePageList:l.default},computed:(0,i.default)((0,i.default)({},(0,r.mapState)("plugins/commission/settings",{goodsList:function(t){return t.goodsList},settings:function(t){return t.settings}})),{},{noManagePerm:function(){return!this.$getPermMap("commission.settings.commission.manage")},type:function(){var t=this;return[{label:"订单付款后",id:"1"},{label:"订单完成后",id:"2"}].map((function(e){return e.disabled=t.noManagePerm,e}))}}),data:function(){return{show:!1}},methods:(0,i.default)((0,i.default)((0,i.default)({},(0,r.mapMutations)("plugins/commission/settings",["setGoodsList"])),(0,r.mapActions)("plugins/commission/settings",["getGoodsList"])),{},{addGood:function(){this.show=!0},handleCancel:function(){this.show=!1},handleChange:function(t){var e=t.map((function(t){return t.id}));this.settings.become_goods_ids=e.join(","),this.setGoodsList(t),this.show=!1},deleteGoods:function(t){var e=(0,n.default)(this.goodsList);e.splice(t,1),this.setGoodsList(e)}})};e.default=c},ca12:function(t,e,s){"use strict";s("517c")},f659c:function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("FormItem",{attrs:{label:"购买指定商品：","label-width":120,prop:"commission_level"}},[s("Button",{staticClass:"simple-btn",staticStyle:{"margin-bottom":"10px"},style:{color:t.noManagePerm?"":t.$css["--theme-color"]},attrs:{disabled:t.noManagePerm},on:{click:t.addGood}},[t._v("+添加指定商品")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.goodsList.length>0,expression:"goodsList.length > 0"}],staticClass:"goods-list"},[s("shop-name-page-list",{ref:"shop_name_list",attrs:{list:t.goodsList},on:{"on-delete":t.deleteGoods}})],1),s("goods-selector",{attrs:{multiple:"",limit:5,currentList:t.goodsList},on:{"on-cancel":t.handleCancel,"on-change":t.handleChange},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),s("FormItem",{staticStyle:{"margin-bottom":"0"},attrs:{label:"统计方式：","label-width":120,prop:"commission_level"}},[s("MyRadioGroup",{attrs:{items:t.type},model:{value:t.settings.become_order_status,callback:function(e){t.$set(t.settings,"become_order_status",e)},expression:"settings.become_order_status"}})],1)],1)},n=[]}}]);