(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50fa44e4"],{"048f":function(t,e,a){"use strict";a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"j",(function(){return o})),a.d(e,"m",(function(){return c})),a.d(e,"n",(function(){return u})),a.d(e,"l",(function(){return m})),a.d(e,"c",(function(){return v})),a.d(e,"d",(function(){return d})),a.d(e,"f",(function(){return f})),a.d(e,"g",(function(){return b})),a.d(e,"k",(function(){return p})),a.d(e,"i",(function(){return _}));var r=a("b775");function l(t){return Object(r["a"])({url:"/scale01evaperson/",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/scale01evaperson/",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/scale01evaperson/".concat(t,"/"),method:"delete"})}function i(t){return Object(r["a"])({url:"/scale01evaperson/".concat(t,"/"),method:"get"})}function o(t,e){return Object(r["a"])({url:"/scale01evaperson/".concat(t,"/"),method:"put",data:e})}function c(t){return Object(r["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"get",params:t})}//! scaleevaluate/scale01evaoperate/=>通过不通过
function u(t){return Object(r["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"post",data:t})}//! scaleevaluate/scale01evaoperate/
function m(t){return Object(r["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/scaleevaluate/scale01evaoperate/",method:"post",data:t})}function f(t){return Object(r["a"])({url:"scaleevaluate/scale01evareport/",method:"get",params:t})}function b(){return Object(r["a"])({url:"scaleevaluate/scale01comment/",method:"get"})}function p(t){return Object(r["a"])({url:"scaleevaluate/scale01comment/",method:"post",data:t})}function _(t){return Object(r["a"])({url:"scaleevaluate/scale01evareport/",method:"post",data:t})}},2944:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"scale_01scale",attrs:{id:"main-container"}},[a("el-container",[a("el-header",[a("div",{attrs:{id:"main-title"}},[a("span",[t._v(t._s(t.$route.meta.title))])]),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[a("el-button",{attrs:{type:"",size:"mini"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回上一页")])],1)],1),t._v(" "),a("el-main",[a("el-form",{ref:"form",attrs:{size:"medium",inline:!0,model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.name))])]),t._v(" "),a("el-form-item",{attrs:{label:"性别:",prop:"sex"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.sex))])]),t._v(" "),a("el-form-item",{attrs:{label:"出生日期:",prop:"birthday"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.birthday))])]),t._v(" "),a("el-form-item",{attrs:{label:"学校:",prop:"school"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.school))])]),t._v(" "),a("el-form-item",{attrs:{label:"地址:",prop:"addr"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.addr))])]),t._v(" "),a("el-form-item",{attrs:{label:"体重:",prop:"weight"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.weight))])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"母名:",prop:"mama"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.mama))])]),t._v(" "),a("el-form-item",{attrs:{label:"民族:",prop:"mingzu2"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.mingzu2))])]),t._v(" "),a("el-form-item",{attrs:{label:"职业:",prop:"zhiye2"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.zhiye2))])]),t._v(" "),a("el-form-item",{attrs:{label:"文化:",prop:"wenhua2"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.wenhua2))])]),t._v(" "),a("el-form-item",{attrs:{label:"儿童出生时年龄:",prop:"age2"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.age2))])]),t._v(" "),a("el-form-item",{attrs:{label:"孕期:",prop:"yunqi"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.yunqi))])]),t._v(" "),a("el-form-item",{attrs:{label:"胎:",prop:"tai"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.tai))])]),t._v(" "),a("el-form-item",{attrs:{label:"产:",prop:"chan"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.chan))])]),t._v(" "),a("el-form-item",{attrs:{label:"顺(难)产:",prop:"shunnanchan"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.shunnanchan))])]),t._v(" "),a("el-form-item",{attrs:{label:"曾患病:",prop:"cenhuanbing"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.cenhuanbing))])]),t._v(" "),a("el-form-item",{attrs:{label:"现患病:",prop:"xianhuanbing"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.xianhuanbing))])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"父名:",prop:"baba"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.baba))])]),t._v(" "),a("el-form-item",{attrs:{label:"民族:",prop:"mingzu1"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.mingzu1))])]),t._v(" "),a("el-form-item",{attrs:{label:"职业:",prop:"zhiye1"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.zhiye1))])]),t._v(" "),a("el-form-item",{attrs:{label:"文化:",prop:"wenhua1"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.wenhua1))])]),t._v(" "),a("el-form-item",{attrs:{label:"儿童出生时年龄:",prop:"age1"}},[a("div",{staticClass:"label-text"},[t._v(t._s(t.form.age1))])])],1)],1),t._v(" "),a("el-footer")],1)],1)},l=[],n=a("048f"),s={name:"AddUser",inject:["reload"],data:function(){return{form:{name:"",sex:"男",school:"",birthday:null,addr:"",weight:"",yunqi:"",tai:"",chan:"",shunnanchan:"",cenhuanbing:"",xianhuanbing:"",baba:"",mingzu1:"",zhiye1:"",wenhua1:"",age1:"",mama:"",mingzu2:"",zhiye2:"",wenhua2:"",age2:""},show:!0,loading:!1}},created:function(){this.init()},methods:{init:function(){var t=this;this.loading=!0,Object(n["e"])(this.$route.params.id).then((function(e){t.form=e,t.loading=!1}))},resetForm:function(){this.reload()}}},i=s,o=(a("c810"),a("2877")),c=Object(o["a"])(i,r,l,!1,null,"e2fa2b92",null);e["default"]=c.exports},"7daa":function(t,e,a){},c810:function(t,e,a){"use strict";var r=a("7daa"),l=a.n(r);l.a}}]);