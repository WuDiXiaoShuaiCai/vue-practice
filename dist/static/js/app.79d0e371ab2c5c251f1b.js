webpackJsonp([7],{"+skl":function(t,e){},KONF:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[this._v("\n    vue test\n  "),e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(t){n("KONF")},null,null).exports,i=n("//Fk"),c=n.n(i),u=n("/ocq"),s=n("BTaQ"),l=n.n(s),p=n("Gu7T"),m=n.n(p),h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("div",{staticStyle:{overflow:"hidden"}},[n("span",[t._v("Main")]),t._v(" "),n("p",{staticStyle:{float:"right"}},[n("Button",{attrs:{type:"error"},on:{click:t.logout}},[t._v("Loginout")])],1),t._v(" "),n("p",{staticStyle:{float:"right","margin-right":"10px"}},[n("Button",{attrs:{type:"warning"},on:{click:t.goOwner}},[t._v("Me")])],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")({methods:{logout:function(){this.$store.commit("logout"),this.$router.replace({name:"login"})},goOwner:function(){this.$router.push({name:"owner-space",params:{userName:"jss",userId:1e4}})}}},h,!1,function(t){n("pY8u")},"data-v-07c71d7e",null).exports,f=[{path:"/vue-slot",name:"slot",title:"slot",meta:{title:"Vue-Slot"},component:d,children:[{path:"slot-props",title:"slot-props",name:"slot-props",component:function(t){n.e(1).then(function(){var e=[n("79B5")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],g=[{path:"/js-upload-preview",name:"jscropper",title:"jscropper",meta:{title:"JS-Upload-Preview"},component:d,children:[{path:"cropper",title:"cropper",name:"cropper",component:function(t){n.e(2).then(function(){var e=[n("+k8Q")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],v=[{path:"/h5-blob",name:"h5blob",title:"h5blob",meta:{title:"JS-Blob"},component:d,children:[{path:"blob",title:"blob",name:"blob",component:function(t){n.e(3).then(function(){var e=[n("e1YC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],b=[{path:"/",name:"otherRouter",title:"otherRouter",component:d,children:[{path:"home",name:"home",meta:{requiresAuth:!0},title:"Home",component:function(t){n.e(5).then(function(){var e=[n("zKIK")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"owner-space/:userName/id/:userId",meta:{scrollToTop:!0},name:"owner-space",title:"Owner Space",component:function(){return n.e(0).then(n.bind(null,"rnMv"))}}]},{path:"/login",name:"login",meta:{title:"Login"},component:function(t){n.e(4).then(function(){var e=[n("Quw4")];t.apply(null,e)}.bind(this)).catch(n.oe)}}].concat(m()(f),m()(g),m()(v)),w={changePageTitle:function(t){t=t||"learn admin",window.document.title=t}},y=w,k=n("lbHh"),T=n.n(k);o.default.use(u.a);var x={routes:b,scrollBehavior:function(t,e,n){if(n)return n;var o={};return t.hash&&(o.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(o.x=0,o.y=0),new c.a(function(t,e){setTimeout(function(){t(o)},500)})}},M=new u.a(x);M.beforeEach(function(t,e,n){l.a.LoadingBar.start();var o=t.meta.title;y.changePageTitle(o),T.a.get("account")||"login"===t.name?(n(),l.a.LoadingBar.finish()):n({name:"login",query:{redirect:t.name}}),window.scrollTo(0,0)}),M.afterEach(function(t,e,n){l.a.LoadingBar.finish(),window.scrollTo(0,0)});var N=n("NYxO"),S={increment:function(t,e){t.count+=isNaN(e)?1:e},decrement:function(t,e){t.count-=isNaN(e)?2:e}},_={incrementAsync:function(t){setTimeout(function(){t.commit("increment")},1e3)},decrementAsync:function(t,e){var n=t.state,o=t.commit;setTimeout(function(){alert("count:"+n.count),o("decrement",e)},1e3)},promiseOperate:function(t,e){var n=t.commit;return new c.a(function(t,e){setTimeout(function(){n("increment"),console.log("先加"),t()},1e3)})},operateAsync:function(t){var e=t.dispatch,n=t.commit;e("promiseOperate").then(function(){n("decrement"),console.log("后减")})}},B={state:{},getters:{},mutations:{},actions:{}},I={state:{},getters:{},mutations:{},actions:{}},O={state:{token:""},getters:{},mutations:{login:function(t,e){e.token&&(t.token=e.token,localStorage.token=e.token),e.userId&&(t.userId=e.userId,T.a.set("userId",e.userId,{expires:7})),e.account&&(t.account=e.account,T.a.set("account",e.account,{expires:7}))},logout:function(t){t.token=null,T.a.remove("account"),T.a.remove("userId"),localStorage.clear(),sessionStorage.clear()}},actions:{}};o.default.use(N.a);var R=new N.a.Store({state:{count:1},getters:{doubleCount:function(t){return 2*t.count},quadraCount:function(t,e){return 2*e.doubleCount},funcCount:function(t){return function(t){return t+1}}},mutations:S,actions:_,modules:{app:B,cart:I,user:O}}),$=(n("7t+N"),n("qb6w"),n("Bb4J"),n("+skl"),{install:function(t,e){t.mixin({methods:{test:function(){console.log("这是Vue-Mixin的输出测试 <========")}}}),t.directive("border",{bind:function(t,e,n){t.style.border="1px solid blue"}}),t.directive("htmlRender",{bind:function(t,e,n){t.innerHTML=e.value}}),t.filter("formatTime",function(t,e){return t||(t=(new Date).getTime()),Date.prototype.FormatNha=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},e||(e="yyyy-MM-dd hh:mm:ss"),new Date(t).FormatNha(e)})}}),E=n("mtWM"),j=n.n(E);n("hKoQ").polyfill();var q=j.a.create({timeout:5e3});q.interceptors.request.use(function(t){return R.state.user.token&&(t.headers.Authorization="Bearer "+R.state.user.token),t},function(t){return alert("error params","fail"),c.a.reject(t)}),q.interceptors.response.use(function(t){var e=t.data,n=e.code?1*e.code:200;return e.code=n,e},function(t){return console.log("Network error, please try again later."),c.a.reject(t)});var F={install:function(t){Object.defineProperty(t.prototype,"$http",{value:q})}};o.default.config.productionTip=!1,o.default.use(l.a),o.default.use($),o.default.use(F),window.localStorage.token&&R.commit("login",{token:window.localStorage.token,userId:T.a.get("userId"),account:T.a.get("account")}),new o.default({el:"#app",router:M,store:R,render:function(t){return t(a)},template:"<App/>"})},pY8u:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.79d0e371ab2c5c251f1b.js.map