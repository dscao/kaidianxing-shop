(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"0e54":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.codeRule=e.captchaRule=void 0,e.levelPass=s,e.requiredRule=e.mobileRule=void 0,n("ac1f"),n("00b4");var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blur";return[{required:!0,message:t||"必填",trigger:e}]};e.requiredRule=a;var o=[{required:!0,message:"请输入11位手机号码"},{pattern:/^1[1-9][0-9]{9}$/,message:"请填写正确格式的手机号",trigger:"blur"}];e.mobileRule=o;var r=[{required:!0,len:4,message:"请输入正确的图形验证码",trigger:"blur"}];e.captchaRule=r;var i=[{required:!0,message:"请输入验证码"},{pattern:/^\d{4}$/,message:"请输入正确的短信验证码",trigger:"blur"}];function s(t){var e=0;/\d+/.test(t)&&e++,/[a-zA-Z]+/.test(t)&&e++;var n=/[\_\#\@\$\^\%\*\&\!\~\+\-]+/;return n.test(t)&&e++,e}e.codeRule=i},"18f1":function(t,e,n){"use strict";n.r(e);var a=n("e8ae"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"1c3f":function(t,e,n){"use strict";n.r(e);var a=n("7d03"),o=n("f5f0");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("e5d9");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"0ec30b36",null);e["default"]=s.exports},"255a":function(t,e,n){"use strict";n.r(e);var a=n("65e5"),o=n("6162");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("27af");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"a7abae08",null);e["default"]=s.exports},2773:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={name:"AModal",props:{title:{type:String,default:""},value:{type:Boolean},transfer:{type:Boolean,default:!1},width:{type:[String,Number],default:520}},methods:{inputHandler:function(t){this.$emit("input",t)}}};e.default=a},"27af":function(t,e,n){"use strict";n("724e")},"305d":function(t,e,n){"use strict";n.r(e);var a=n("561e"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"34cf":function(t,e,n){"use strict";n.r(e);var a=n("47d0"),o=n("18f1");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"877d158a",null);e["default"]=s.exports},"3f63":function(t,e,n){"use strict";n.r(e);var a=n("ebb3"),o=n("efbc");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("b508");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"77ce1da1",null);e["default"]=s.exports},"47d0":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Input",{staticClass:"form-input",attrs:{value:t.value,maxlength:t.maxlength,placeholder:t.placeholder},on:{input:t.handleInput,"on-focus":t.onFocus,"on-blur":t.onBlur,"on-enter":t.enterHandler}},[n("Icon",{attrs:{slot:"append",type:"ios-phone-portrait"},slot:"append"})],1)],1)},o=[]},5429:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("5319");var o=a(n("5530")),r=a(n("34cf")),i=a(n("a175")),s=a(n("1c3f")),u=n("2f62"),l=n("0e54"),c={components:{LogInput:r.default,PassInput:i.default,LogButton:s.default},data:function(){return{rememberStatus:!0,focusInput:"",model:{username:"",password:""},rules:{username:(0,l.requiredRule)("请输入登录账号"),password:(0,l.requiredRule)("请输入密码")},showCode:!1}},created:function(){this.model.username=localStorage.getItem("username")||"",this.model.password=localStorage.getItem("password")||""},computed:(0,o.default)((0,o.default)({},(0,u.mapState)("alone",{setting:function(t){return t.setting||{}},qrcode_url:function(t){return t.qrcode_url}})),{},{getLoginBg:function(){var t,e;return this.setting.login_show_img?"0"==(null===(t=this.setting)||void 0===t?void 0:t.login_show_img.length)?n("ed77"):this.$utils.media(null===(e=this.setting)||void 0===e?void 0:e.login_show_img,"manage"):n("ed77")},getLogo:function(){var t,e;return this.setting.pc_logo?"0"==(null===(t=this.setting)||void 0===t?void 0:t.pc_logo.length)?n("3c96"):this.$utils.media(null===(e=this.setting)||void 0===e?void 0:e.pc_logo,"manage"):n("3c96")}}),methods:{onFocus:function(t){this.focusInput=t},onBlur:function(){console.log("blur"),this.focusInput=""},toForget:function(){this.$router.push("/account/forget")},toLogin:function(){var t=this;this.$refs.form.validate((function(e){e&&t.submitLogin()}))},submitLogin:function(){var t=this,e=this.model,n=e.username,a=e.password;this.$api.aloneApi.submitLogin(this.model).then((function(e){var o=e.error;0===o?(localStorage.setItem("userId",e.user.id),t.rememberStatus?(localStorage.setItem("username",n),localStorage.setItem("password",a)):(localStorage.removeItem("username"),localStorage.removeItem("password")),t.$store.commit("alone/setLoginStatus",!0),t.$router.push("/")):110022==o&&(t.$store.commit("alone/setLoginStatus",!0),t.$router.replace({path:"/"}))}))}}};e.default=c},5573:function(t,e,n){"use strict";n.r(e);var a=n("2773"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"561e":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{value:{type:String},placeholder:{type:String,default:"请输入您的登录密码"}},data:function(){return{show:!1}},methods:{handleInput:function(t){this.$emit("input",t)},onFocus:function(){this.$emit("on-focus")},onBlur:function(){this.$emit("on-blur")},enterHandler:function(){this.$emit("on-enter")}}};e.default=n},6162:function(t,e,n){"use strict";n.r(e);var a=n("dd25"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"63f9":function(t,e,n){},"65e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"avatar",attrs:{for:"file"}},[n("div",{staticClass:"container choose"},[n("img",{staticClass:"avatar-img",attrs:{src:t.getImgPath}}),n("div",{staticClass:"replace-btn"},[t._v("替换")])]),n("input",{ref:"upload_input",staticStyle:{display:"none"},attrs:{id:"file",type:"file",name:"file"},on:{change:t.changeFile}})])},o=[]},"724e":function(t,e,n){},"73a1":function(t,e,n){"use strict";n.r(e);var a=n("7cb6"),o=n("b9b5");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("8baf");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"44ea1ace",null);e["default"]=s.exports},"7cb6":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-form"},[n("div",{staticClass:"login-form_top"},[n("img",{staticClass:"login-form_logo",attrs:{src:t.getLogo,alt:""}})]),n("div",{staticClass:"login-form_bt"},[n("div",{staticClass:"login-form_form"},[n("Form",{ref:"form",attrs:{"label-position":"top",model:t.model,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[n("form-item",{attrs:{label:"手机号码",prop:"username"}},[n("log-input",{class:["Mobile"===t.focusInput?"input-focus":""],attrs:{placeholder:"请输入登录账号"},on:{"on-focus":function(e){return t.onFocus("Mobile")},"on-blur":t.onBlur,"on-enter":t.toLogin},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}})],1),n("form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"密码",prop:"password"}},[n("pass-input",{class:["Pass"===t.focusInput?"input-focus":""],attrs:{placeholder:"请输入密码"},on:{"on-focus":function(e){return t.onFocus("Pass")},"on-blur":t.onBlur,"on-enter":t.toLogin},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1)],1),n("div",{staticClass:"login-form_pass"},[n("Checkbox",{staticStyle:{transform:"scale(0.9)"},attrs:{label:""},model:{value:t.rememberStatus,callback:function(e){t.rememberStatus=e},expression:"rememberStatus"}},[t._v("记住密码 ")])],1),n("div",{staticClass:"login-form_submit"},[n("log-button",{attrs:{long:""},on:{click:t.toLogin}},[t._v("登录")])],1)],1)])])},o=[]},"7d03":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("span",["text"!==e.type?a("span",{class:["log-btn log-btn-"+e.type,"log-btn--"+e.size,"log-btn--"+e.shape,(t={},t["log-btn--disabled"]=e.disabled,t["log-btn--long"]=e.long,t)],on:{click:e.handleClick}},[e._t("default")],2):a("a",{staticClass:"log-btn-text",on:{click:e.goPage}},[e._t("default")],2)])},o=[]},"8baf":function(t,e,n){"use strict";n("c35a5")},"8d6d":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"LogButton",props:{type:{type:String,default:"primary",validator:function(t){return["primary","default","text"].indexOf(t)>-1}},size:{type:String,default:"medium",validator:function(t){return["medium","large"].indexOf(t)>-1}},long:{type:Boolean,default:!1},shape:{type:String,default:"radius",validator:function(t){return["circle","radius"].indexOf(t)>-1}},disabled:{type:Boolean,default:!1},to:{type:String}},methods:{goPage:function(t){this.disabled||(this.to&&this.$router.push({path:this.to}),this.$emit("click",t))},handleClick:function(t){this.disabled||this.$emit("click",t)}}};e.default=n},"8d92":function(t,e,n){"use strict";n.r(e);var a=n("90cd"),o=n("5573");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("c1fd");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"2dced351",null);e["default"]=s.exports},"90cd":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{title:t.title,transfer:t.transfer,value:t.value,width:t.width},on:{input:t.inputHandler},scopedSlots:t._u([{key:"footer",fn:function(){return[t._t("footer")]},proxy:!0}],null,!0)},[t._t("default")],2)},o=[]},a175:function(t,e,n){"use strict";n.r(e);var a=n("b019"),o=n("305d");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"33b94cd9",null);e["default"]=s.exports},b019:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Input",{staticClass:"form-input",attrs:{type:"password",password:"",value:t.value,maxlength:"20",placeholder:t.placeholder},on:{input:t.handleInput,"on-focus":t.onFocus,"on-blur":t.onBlur,"on-enter":t.enterHandler}},[n("Icon",{attrs:{slot:"append",type:"ios-lock-outline"},slot:"append"})],1)],1)},o=[]},b508:function(t,e,n){"use strict";n("d926")},b9b5:function(t,e,n){"use strict";n.r(e);var a=n("5429"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},c1fd:function(t,e,n){"use strict";n("63f9")},c35a5:function(t,e,n){},d926:function(t,e,n){},dd25:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("b680"),__webpack_require__("a15b"),__webpack_require__("d81d"),__webpack_require__("99af"),__webpack_require__("ac1f"),__webpack_require__("00b4"),__webpack_require__("b0c0");var _accessory=__webpack_require__("35f3"),_fileRequest=__webpack_require__("d08c"),_default={props:{value:{type:[String]},default:{type:Boolean,default:!0}},computed:{getImgPath:function(){return this.value?this.$media(this.value):this.default?__webpack_require__("28b2"):""},maxSize:function(){var t,e,n,a;return this.toFixed(null===(t=this.$store.state)||void 0===t||null===(e=t.config)||void 0===e||null===(n=e.uploadSetting)||void 0===n||null===(a=n.image)||void 0===a?void 0:a.max_size)||2048},limitType:function(){var t,e,n,a,o=((null===(t=this.$store.state)||void 0===t||null===(e=t.config)||void 0===e||null===(n=e.uploadSetting)||void 0===n||null===(a=n.image)||void 0===a?void 0:a.extensions)||[]).map((function(t){return"jpg"===t?"image/jpeg":"image/".concat(t)})).join(",");return o||"image/png"},hintMaxText:function(){var t=this.toFixed(this.maxSize/1024);return"大小不要超过".concat(t,"M")},hintTooltipText:function(){var t,e,n,a,o=((null===(t=this.$store.state)||void 0===t||null===(e=t.config)||void 0===e||null===(n=e.uploadSetting)||void 0===n||null===(a=n.image)||void 0===a?void 0:a.extensions)||[]).join(",")||"png";return"".concat(this.hintMaxText,",支持图片类型").concat(o)}},created:function(){this.$store.dispatch("config/getAccountUploadSetting")},methods:{toFixed:function(t){var e=Math.pow(10,2),n=t*e+.5;return n=parseInt(n,10)/e,n+""},changeFile:function changeFile(e){if(e){var _this$$store$state4,_this$$store$state4$c,_this$$store$state4$c2,_this$$store$state4$c3,file=e.target.files[0];if(file.size>1024*this.maxSize)return void this.$Message.error("图片应选择小于".concat(this.toFixed(this.maxSize/1024),"M的"));var type=((null===(_this$$store$state4=this.$store.state)||void 0===_this$$store$state4||null===(_this$$store$state4$c=_this$$store$state4.config)||void 0===_this$$store$state4$c||null===(_this$$store$state4$c2=_this$$store$state4$c.uploadSetting)||void 0===_this$$store$state4$c2||null===(_this$$store$state4$c3=_this$$store$state4$c2.image)||void 0===_this$$store$state4$c3?void 0:_this$$store$state4$c3.extensions)||[]).join("|"),reg2=eval("/^(\\s|\\S)+("+type+")+$/");if(!reg2.test(file.name.toLowerCase()))return void this.$Message.error("请选择正确的格式的图片");this.upload(file)}this.$refs["upload_input"].value=""},upload:function(t){var e=this,n=new FormData;n.append("file",t),n.append("type","10"),n.append("scene",50),(0,_fileRequest.uploadFile)(_accessory.accessoryApi.uploadImageNoShop.api,n).then((function(t){0===t.error?e.$emit("input",t.path):e.$Message.error(t.message)}))}}};exports.default=_default},e5d9:function(t,e,n){"use strict";n("f032")},e8ae:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{value:{type:String},maxlength:{type:[String,Number],default:20},placeholder:{type:String,default:"请输入"}},data:function(){return{show:!1}},methods:{handleInput:function(t){this.$emit("input",t)},onFocus:function(){this.$emit("on-focus")},onBlur:function(){this.$emit("on-blur")},enterHandler:function(){this.$emit("on-enter")}}};e.default=a},ebb3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"form-title"},[t._v("个人账号资料设置")]),n("Form",{ref:"form",staticClass:"form",attrs:{"label-width":120,model:t.model},nativeOn:{submit:function(t){t.preventDefault()}}},[n("form-item",{attrs:{label:"登录账号："}},[n("div",{staticClass:"user-account"},[n("span",{staticClass:"user-mobile"},[t._v(t._s(t.username))]),n("log-button",{attrs:{type:"text"},on:{click:t.toSetPass}},[t._v("修改密码")])],1)]),n("form-item",{attrs:{label:"个人头像："}},[n("Avatar",{model:{value:t.model.avatar,callback:function(e){t.$set(t.model,"avatar",e)},expression:"model.avatar"}}),n("kdx-hint-text",[t._v("建议尺寸：200x200px")])],1),t._l(t.model.form_info,(function(e,a){return n("div",{key:a},["1"==e.enabled?n("form-item",{attrs:{label:e.name+"：",prop:"form_info."+a+".value",rules:{required:"1"==e.required,message:e.name+"必填"}}},[n("Input",{staticClass:"form-input",attrs:{placeholder:e.name},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1):t._e()],1)})),n("div",{staticClass:"btn",on:{click:t.validate}},[t._v("保存")])],2),n("alone-modal",{attrs:{width:"510",title:"修改密码"},scopedSlots:t._u([{key:"footer",fn:function(){return[n("div",{staticClass:"modal-btn",on:{click:t.validatePass}},[t._v(" 修改密码 ")])]},proxy:!0}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[n("Form",{ref:"pass",attrs:{model:t.passModel,rules:t.passRules,"label-width":100}},[n("form-item",{staticClass:"form-item",attrs:{prop:"original_password",label:"原密码："}},[n("pass-input",{attrs:{placeholder:"请输入原密码"},model:{value:t.passModel.original_password,callback:function(e){t.$set(t.passModel,"original_password",e)},expression:"passModel.original_password"}})],1),n("form-item",{staticClass:"form-item",attrs:{prop:"password",label:"新密码："}},[n("pass-input",{attrs:{placeholder:"请输入新密码"},model:{value:t.passModel.password,callback:function(e){t.$set(t.passModel,"password",e)},expression:"passModel.password"}}),n("kdx-hint-text",[t._v("请输入8-20位密码，区分大小写")])],1)],1)],1)],1)},o=[]},efbc:function(t,e,n){"use strict";n.r(e);var a=n("f7ce"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},f032:function(t,e,n){},f5f0:function(t,e,n){"use strict";n.r(e);var a=n("8d6d"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},f7ce:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("d3b7"),n("d81d"),n("159b"),n("ac1f"),n("5319");var o=a(n("5530")),r=a(n("2909")),i=a(n("1c3f")),s=a(n("255a")),u=a(n("a175")),l=a(n("8d92")),c=n("0e54"),d={components:{Avatar:s.default,LogButton:i.default,AloneModal:l.default,PassInput:u.default},data:function(){return{model:{avatar:"",form_info:[]},passModel:{original_password:"",password:""},passRules:{original_password:(0,c.requiredRule)("请输入原密码"),password:[].concat((0,r.default)((0,c.requiredRule)("请输入密码")),[{pattern:/.{8,20}/,message:"8-20位密码，区分大小写",trigger:"blur"},{validator:function(t,e,n){(0,c.levelPass)(e)>=2?n():n(new Error("密码强度太低"))},trigger:"blur"}])},username:"",showModal:!1}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return new Promise((function(e){t.$api.aloneApi.getUserRegist().then((function(n){if(0==n.error){var a=n.user_info,r=a.username,i=a.profile,s=n.setting.register_info,u=s.map((function(t){return(0,o.default)((0,o.default)({},t),{},{value:""})}));if(i){var l=i.avatar,c=i.form_info;if(t.model.avatar=l||"",c){var d={};c.forEach((function(t){d[t.key]=t.value})),u=u.map((function(t){return(0,o.default)((0,o.default)({},t),{},{value:d[t.key]||""})}))}}t.model.form_info=u,t.username=r,t.$store.commit("alone/setUserInfo",n.user_info),e()}}))}))},validate:function(){var t=this;this.$refs.form.validate((function(e){e&&t.setUserInfo()}))},setUserInfo:function(){var t=this;this.$api.aloneApi.setUserRegist(this.model).then((function(e){0===e.error&&(t.$Message.success("用户资料设置成功"),t.getUserInfo().then((function(){t.handleAjust(e.audit_status)})))}))},handleAjust:function(t){switch(+t){case 10:this.$router.push("/");break;case 1:default:break}},toSetPass:function(){this.showModal=!0},validatePass:function(){var t=this;this.$refs.pass.validate((function(e){e&&t.setPass()}))},setPass:function(){var t=this;this.$api.aloneApi.modifyPass(this.passModel).then((function(e){0===e.error&&(t.$Message.success("密码修改成功"),t.$store.commit("alone/setLoginStatus",!1),t.$store.commit("alone/setUserInfo",{}),t.$router.replace("/account/login"))}))}}};e.default=d}}]);