(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb76c7b6"],{"2aa0":function(e,t,a){},"3bee":function(e,t,a){"use strict";var o=a("2aa0"),r=a.n(o);r.a},cc2e:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"userData"}},[a("div",{staticClass:"navs"},[e._v("\n    个人资料\n  ")]),a("div",{staticClass:"user_avatar"},[a("img",{staticClass:"avatar",attrs:{src:e.form.login_image,alt:""},on:{click:function(t){e.dialogVisible=!0}}})]),a("div",{staticClass:"user_form"},[a("el-form",{ref:"form",staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{model:{value:e.form.nick_name,callback:function(t){e.$set(e.form,"nick_name",t)},expression:"form.nick_name"}})],1),a("el-form-item",{attrs:{label:"真实姓名"}},[a("el-input",{model:{value:e.form.true_name,callback:function(t){e.$set(e.form,"true_name",t)},expression:"form.true_name"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[a("el-radio",{attrs:{label:"男"}}),a("el-radio",{attrs:{label:"女"}}),a("el-radio",{attrs:{label:"保密"}})],1)],1),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),a("el-form-item",{attrs:{label:"电子邮箱"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"个性签名"}},[a("el-input",{model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5}},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),a("el-button",{staticStyle:{width:"90px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保 存")])],1),a("el-dialog",{attrs:{title:"上传头像",visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[a("el-row",[a("input",{staticClass:"el-button",staticStyle:{"margin-bottom":"15px"},attrs:{type:"file",id:"uploads",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:e.uploadImg}})]),a("el-row",[a("vueCropper",{ref:"cropper",staticStyle:{width:"100%",height:"300px"},attrs:{img:e.attach.customaryUrl,autoCrop:e.options.autoCrop,fixedBox:e.options.fixedBox,canMoveBox:e.options.canMoveBox,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,centerBox:e.options.centerBox},on:{realTime:e.realTime}})],1),a("el-row",{staticClass:"footerBtn",attrs:{align:"center"}},[a("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(t){return e.cut("blob")}}},[e._v("确认")]),a("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:e.handleClose}},[e._v("取消")])],1)],1)])],1)},r=[],i=a("a78e"),l=a.n(i),s={data:function(){return{dialogVisible:!1,options:{autoCrop:!0,fixedBox:!0,canMoveBox:!1,autoCropWidth:200,autoCropHeight:200,centerBox:!1},previews:{},attach:{id:"",userId:"",customaryUrl:"",laterUrl:"",attachType:"photo"},fileName:"",uploadImgRelaPath:"",userinfo:{},imageUrl:"",form:{nick_name:"",true_name:"",gender:"",birthday:"",mobile:"",email:"",remark:"",address:"",login_image:""}}},created:function(){var e=this;this.tjy.hasToken(),this.tjy.Get("front/frontforeuserinfo/").then(function(t){e.tjy.hasToken(1),200===t.status&&(e.form=t.data)})},methods:{onSubmit:function(){var e=this;this.tjy.hasToken(),this.tjy.Put("front/frontforeuserinfo/",{nick_name:this.form.nick_name,true_name:this.form.true_name,gender:this.form.gender,birthday:this.form.birthday,mobile:this.form.mobile,email:this.form.email,remark:this.form.remark,address:this.form.address,login_image:this.form.login_image}).then(function(t){e.tjy.hasToken(1),200===t.status&&(e.$message.success("修改成功"),l.a.set("userimg",e.form.login_image),setTimeout(function(){e.$router.go(0)},10))})},handleClose:function(){this.dialogVisible=!1},realTime:function(e){this.previews=e},uploadImg:function(e){var t=this,a=e.target.files[0];if(!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value))return this.$message.error("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种"),!1;var o=new FileReader;o.readAsDataURL(a),o.onload=function(e){var a=e.target.result;t.attach.customaryUrl=a}},cut:function(e){var t=this,a=new FormData;this.$refs.cropper.getCropBlob(function(e){a.append("up_file",e),a.append("filepathtype",1),a.append("filesizetype",3),t.tjy.hasToken(),t.tjy.Post("fileuploadfull/",a,{contentType:!1,processData:!1,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.tjy.hasToken(1),201===e.status&&(t.dialogVisible=!1,t.form.login_image=e.data.fileurl)})})}}},n=s,m=(a("3bee"),a("2877")),f=Object(m["a"])(n,o,r,!1,null,"3fa78ee8",null);t["default"]=f.exports}}]);