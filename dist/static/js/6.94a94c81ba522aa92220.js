webpackJsonp([6],{"Lhc+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("YQmk"),n=a("CkEF"),i={components:{tableBar:s.a,searchBar:n.a},data:function(){return{activeIndex:0,tabList:[{name:"我接收的",url:"/list"},{name:"我发起的",url:"/noData"}],params:{pageNum:0,pageSize:20},list:[]}},methods:{refresh:function(t){this.list=[],this.params.pageNum=1,this.getList(t)},infinite:function(t){this.list.length>25?(this.$refs.scroller.finishInfinite(!0),this.list.length<10&&(document.getElementsByClassName("loading-layer")[0].style.display="none"),document.getElementsByClassName("pull-to-refresh-layer")[0].style.display="none"):(this.params.pageNum++,this.getList(t))},getList:function(t){document.getElementsByClassName("pull-to-refresh-layer")[0].style.display="block";for(var e=0;e<10;e++)this.list.push({id:e+1});t&&t()},toSearch:function(){console.log("搜索")},cancelSearch:function(){console.log("取消搜索")}},created:function(){}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainPage"},[a("tableBar",{attrs:{activeIndex:t.activeIndex,list:t.tabList}}),t._v(" "),a("searchBar",{attrs:{defaultText:"搜索"},on:{toSearch:t.toSearch,cancelSearch:t.cancelSearch}}),t._v(" "),a("div",{staticClass:"list"},[a("scroller",{ref:"scroller",staticClass:"my-scroller",attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite,noDataText:"已无更多数据"}},t._l(t.list,function(e,s){return a("div",{key:s,staticClass:"listItem"},[a("span",[t._v("这是一行数据"+t._s(s+1))])])}),0)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,r,!1,function(t){a("eXBS")},"data-v-20a182f2",null);e.default=l.exports},YQmk:function(t,e,a){"use strict";var s={props:{activeIndex:{type:Number},list:{type:Array}},methods:{toUrl:function(t){this.$router.replace({path:t.url})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabBar clearfix"},t._l(t.list,function(e,s){return a("div",{key:s,staticClass:"item",class:{active:t.activeIndex==s},on:{click:function(a){t.toUrl(e)}}},[t._v(t._s(e.name))])}),0)},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("ZNFH")},"data-v-3ef94a2a",null);e.a=i.exports},ZNFH:function(t,e){},eXBS:function(t,e){}});
//# sourceMappingURL=6.94a94c81ba522aa92220.js.map