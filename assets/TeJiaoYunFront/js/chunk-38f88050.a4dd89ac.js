(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f88050"],{"0174":function(t,e,n){},"05d1":function(t,e,n){},"216b":function(t,e,n){},"2d65":function(t,e,n){"use strict";var a=n("05d1"),c=n.n(a);c.a},"7ec7":function(t,e,n){"use strict";var a=n("0174"),c=n.n(a);c.a},"7f75":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"product"}},[n("div",{staticClass:"banner",style:{background:"url("+t.banner+") no-repeat center center"}}),n("div",{staticClass:"content"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#1D83EC","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[t._l(t.productcc,function(e){return[n("el-menu-item",{key:e.cc_id,attrs:{index:String(e.cc_id)}},[t._v(t._s(e.cc_name))])]})],2),t.lists.length?n("div",{staticClass:"contents"},t._l(t.lists,function(e,a){return n("div",{key:a+e,staticClass:"items"},[n("div",{staticClass:"items-img"},[n("el-image",{attrs:{src:e.product_img,alt:e.course_name}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])])],1),n("div",{staticClass:"items-title"},[n("span",[t._v(t._s(e.product_name))]),n("span",[t._v("¥  "+t._s(e.product_price))])])])}),0):t._e(),0===t.lists.length?n("div",{attrs:{id:"noData"}},[t._v("暂无数据")]):t._e(),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"","page-size":16,layout:"prev, pager, next, jumper","pager-count":7,"current-page":t.currentpage,total:t.total},on:{"update:currentPage":function(e){t.currentpage=e},"update:current-page":function(e){t.currentpage=e},"current-change":t.changeCurrentPage}})],1)],1)])},c=[],s=(n("386d"),n("7c15")),r={name:"product",data:function(){return{excludecc_query:"",banner:"",lists:[],total:100,currentpage:1,productcc:[],activeIndex2:"",mycount:-1}},created:function(){var t=this;this.tjy.Get("front/frontproductsearch").then(function(e){if(200===e.status){var n=[e.data.results.bannerimg,e.data.count];t.banner=n[0],t.total=n[1]}}),this.searchValue.length>0?this.getList(1):this.total=0},watch:{searchValue:function(t){t.length>0&&this.getlist(1)}},computed:{searchValue:{get:function(){return this.$store.state.search},set:function(t){}}},methods:{handleSelect:function(t,e){this.currentpage=1,this.activeIndex2=t},changeCurrentPage:function(t){this.getList(t)},getList:function(t){var e=this;this.tjy.Get("front/frontproductsearch/?exclude_banner=1&&page=".concat(t,"&product_search=").concat(this.searchValue)).then(function(t){200===t.status&&(e.lists=t.data.results.products,e.total=t.data.count)})},getlist:Object(s["a"])(function(t){this.getList(t)},500)}},i=r,u=(n("c6a8"),n("2d65"),n("7ec7"),n("2877")),o=Object(u["a"])(i,a,c,!1,null,"bca510fe",null);e["default"]=o.exports},c6a8:function(t,e,n){"use strict";var a=n("216b"),c=n.n(a);c.a}}]);