(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6b76446"],{"02f4":function(t,e,s){var a=s("4588"),r=s("be13");t.exports=function(t){return function(e,s){var n,o,i=String(r(e)),c=a(s),u=i.length;return c<0||c>=u?t?"":void 0:(n=i.charCodeAt(c),n<55296||n>56319||c+1===u||(o=i.charCodeAt(c+1))<56320||o>57343?t?i.charAt(c):n:t?i.slice(c,c+2):o-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,s){"use strict";var a=s("02f4")(!0);t.exports=function(t,e,s){return e+(s?a(t,e).length:1)}},7446:function(t,e,s){},a481:function(t,e,s){"use strict";var a=s("cb7c"),r=s("4bf8"),n=s("9def"),o=s("4588"),i=s("0390"),c=s("5f1b"),u=Math.max,f=Math.min,l=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};s("214f")("replace",2,function(t,e,s,v){return[function(a,r){var n=t(this),o=void 0==a?void 0:a[e];return void 0!==o?o.call(a,n,r):s.call(String(n),a,r)},function(t,e){var r=v(s,t,this,e);if(r.done)return r.value;var l=a(t),d=String(this),h="function"===typeof e;h||(e=String(e));var w=l.global;if(w){var _=l.unicode;l.lastIndex=0}var g=[];while(1){var b=c(l,d);if(null===b)break;if(g.push(b),!w)break;var $=String(b[0]);""===$&&(l.lastIndex=i(d,n(l.lastIndex),_))}for(var k="",x=0,y=0;y<g.length;y++){b=g[y];for(var S=String(b[0]),C=u(f(o(b.index),d.length),0),j=[],T=1;T<b.length;T++)j.push(p(b[T]));var P=b.groups;if(h){var A=[S].concat(j,C,d);void 0!==P&&A.push(P);var B=String(e.apply(void 0,A))}else B=m(S,d,C,j,P,e);C>=x&&(k+=d.slice(x,C)+B,x=C+S.length)}return k+d.slice(x)}];function m(t,e,a,n,o,i){var c=a+t.length,u=n.length,f=h;return void 0!==o&&(o=r(o),f=d),s.call(i,f,function(s,r){var i;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(c);case"<":i=o[r.slice(1,-1)];break;default:var f=+r;if(0===f)return s;if(f>u){var d=l(f/10);return 0===d?s:d<=u?void 0===n[d-1]?r.charAt(1):n[d-1]+r.charAt(1):s}i=n[f-1]}return void 0===i?"":i})}})},c72b:function(t,e,s){"use strict";var a=s("7446"),r=s.n(a);r.a},d54e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"account_safe"}},[s("div",{staticClass:"account_safe_title"},[t._v("\n    账户安全\n  ")]),t._m(0),s("div",{staticClass:"account_safe_contents"},[s("div",[t._v("昵称："+t._s(t.user_info.nick_name))]),s("div",[t._v("绑定手机："+t._s(t.user_phone)+" "),s("span",{on:{click:t.resetPhone}},[t._v("修改手机")])])]),t._m(1),s("div",{staticClass:"account_safe_form"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"135px"}},[s("el-form-item",{attrs:{label:"当前登录密码:"}},[s("el-input",{staticStyle:{width:"280px"},attrs:{"show-password":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("el-form-item",{attrs:{label:"新的登录密码:"}},[s("el-input",{staticStyle:{width:"280px"},attrs:{"show-password":""},model:{value:t.form.newpassword,callback:function(e){t.$set(t.form,"newpassword",e)},expression:"form.newpassword"}})],1),s("el-form-item",{attrs:{label:"确认新的登录密码:"}},[s("el-input",{staticStyle:{width:"280px"},attrs:{"show-password":""},model:{value:t.form.againpassword,callback:function(e){t.$set(t.form,"againpassword",e)},expression:"form.againpassword"}})],1),s("el-form-item",{attrs:{label:""}},[s("el-button",{staticStyle:{"margin-left":"80px"},attrs:{type:"primary"},on:{click:t.resetPassword}},[t._v("保   存")])],1)],1)],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account_safe_1"},[s("div",{staticClass:"account_safe_1_top"},[t._v("您的基础信息")]),s("div",{staticClass:"account_safe_1_Bn"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account_safe_1"},[s("div",{staticClass:"account_safe_1_top",staticStyle:{width:"100px"}},[t._v("修改密码")]),s("div",{staticClass:"account_safe_1_Bn"})])}],n=(s("a481"),s("a78e")),o=s.n(n),i={name:"accountsafe",data:function(){return{user_info:{},form:{password:"",newpassword:"",againpassword:""}}},computed:{user_phone:function(){if(this.user_info.mobile)return this.user_info.mobile.replace(this.user_info.mobile.substring(3,7),"****")}},created:function(){this.init()},methods:{init:function(){var t=this;this.tjy.hasToken(),this.tjy.Get("front/frontaccountsafe/").then(function(e){200===e.status&&(t.user_info=e.data),t.tjy.hasToken(1)})},resetPhone:function(){var t=this;this.$prompt("请输入新手机号","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^1[3456789]\d{9}$/,inputErrorMessage:"手机号格式不正确"}).then(function(e){var s=e.value;s&&(t.tjy.hasToken(),t.tjy.Put("front/frontaccountsafe/",{action:"changemobile",mobile:s}).then(function(e){t.tjy.hasToken(1),200===e.status&&(t.$message.success(e.data.msg),t.init())}))}).catch(function(){})},resetPassword:function(){var t=this;return""===this.form.password?this.$message.error("旧密码不为空"):""===this.form.newpassword?this.$message.error("新密码不为空"):""===this.form.againpassword?this.$message.error("确认新密码不为空"):this.form.againpassword!==this.form.newpassword?this.$message.error("两次密码输入不一致"):(this.tjy.hasToken(),void this.tjy.Put("front/frontaccountsafe/",{action:"changepwd",oldpwd:this.form.password,newpwd:this.form.newpassword}).then(function(e){t.tjy.hasToken(1),200===e.status&&(o.a.remove("token"),o.a.remove("userimg"),t.$store.commit("setUserinfo",{userimg:"",token:""}),setTimeout(function(){t.$router.replace("/account")},200))}))}}},c=i,u=(s("c72b"),s("2877")),f=Object(u["a"])(c,a,r,!1,null,"b6b28234",null);e["default"]=f.exports}}]);