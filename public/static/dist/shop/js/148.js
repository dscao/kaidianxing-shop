(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{"4b7a1":function(t,e,n){"use strict";n.r(e);var o=n("9b5e"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"70c5":function(t,e,n){"use strict";n("8b35")},"8b35":function(t,e,n){},"9b5e":function(t,e,n){var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a434"),n("99af");var i=o(n("2909")),a=o(n("5530")),r=n("2f62"),c=n("3fdc"),s=n("c79a"),l={name:"QuickActions",data:function(){return{newIndex:0,currentIndex:0}},computed:(0,a.default)((0,a.default)({},(0,r.mapState)("decorate",{currentModal:function(t){return t.currentModal},sortAbleList:function(t){return t.sortAbleList},pageList:function(t){return t.pageList},pageInfo:function(t){return t.pageInfo},currentSortableModalIndex:function(t){return t.currentSortableModalIndex}})),{},{isPrev:function(){var t;return!(null===(t=this.sortAbleList)||void 0===t||!t.length||-1===this.currentSortableModalIndex)&&this.currentSortableModalIndex>0},isNext:function(){var t;return!(null===(t=this.sortAbleList)||void 0===t||!t.length||-1===this.currentSortableModalIndex)&&this.currentSortableModalIndex<this.sortAbleList.length-1},isCopy:function(){var t,e;return!(null!==(t=this.currentModal)&&void 0!==t&&t.max)&&"pageInfo"!==(null===(e=this.currentModal)||void 0===e?void 0:e.id)}}),methods:(0,a.default)({getNewSortableList:function(){var t=(0,i.default)(this.sortAbleList);t.splice(this.currentSortableModalIndex,1),t.splice(this.newIndex,0,this.currentModal),this.$store.commit("decorate/setSortAbleList",t),this.$store.commit("decorate/setSortableIndex"),this.$store.commit("decorate/changeFocus",{item:this.currentModal,pageId:this.$route.params.page}),(0,s.scrollTo)(this.currentModal,!0)},handlePrev:function(){this.newIndex=this.currentSortableModalIndex-1,this.getNewSortableList()},handleNext:function(){this.newIndex=this.currentSortableModalIndex+1,this.getNewSortableList()},handleCopy:function(){var t=(0,c.deepCopy)(this.currentModal);t._comIndex_="".concat(t.type,"_").concat(this.pageList.length,"_").concat((new Date).getTime()),this.addModal({list:t,pageId:this.$route.params.page}).then((function(t){var e=t[0];e&&(0,s.scrollTo)(e,!0)}))},handleSetting:function(){var t;"pageInfo"!==(null===(t=this.currentModal)||void 0===t?void 0:t.id)&&this.$store.commit("decorate/changeFocus",{item:this.pageInfo,pageId:this.$route.params.page})}},(0,r.mapActions)("decorate",["addModal"]))};e.default=l},c132:function(t,e,n){"use strict";n.r(e);var o=n("da64"),i=n("4b7a1");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("70c5");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"68da9f6e",null);e["default"]=c.exports},da64:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quick-actions-box"},[n("div",{staticClass:"quick-actions"},[n("div",{staticClass:"quick-actions-content"},[n("Tooltip",{attrs:{content:"组件上移",placement:"left"}},[n("Button",{attrs:{disabled:!t.isPrev},on:{click:t.handlePrev}},[n("i",{staticClass:"iconfont icon-shangyi"})])],1),n("Tooltip",{attrs:{content:"组件下移",placement:"left"}},[n("Button",{attrs:{disabled:!t.isNext},on:{click:t.handleNext}},[n("i",{staticClass:"iconfont icon-xiayi"})])],1),n("Tooltip",{attrs:{content:"复制组件",placement:"left"}},[n("Button",{attrs:{disabled:!t.isCopy},on:{click:t.handleCopy}},[n("i",{staticClass:"iconfont icon-fuzhi"})])],1),n("Tooltip",{attrs:{content:"页面设置",placement:"left"}},[n("Button",{on:{click:t.handleSetting}},[n("i",{staticClass:"iconfont icon-shezhi"})])],1)],1)])])},i=[]}}]);