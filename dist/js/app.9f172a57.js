(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],f=0,p=[];f<i.length;f++)s=i[f],r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0912":function(t,e,n){"use strict";var a=n("2f18"),r=n.n(a);r.a},"0cfb":function(t,e,n){},"0f4b":function(t,e,n){"use strict";var a=n("56d2"),r=n.n(a);r.a},2008:function(t,e,n){"use strict";var a=n("dcb7"),r=n.n(a);r.a},"2f18":function(t,e,n){},"4b98":function(t,e,n){t.exports=n.p+"img/buttercms-logo.0ffea21a.png"},"56d2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("cf25"),n("2877")),i={},l=Object(s["a"])(i,r,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site"},[t._m(0),n("div",{staticClass:"page-links"},[n("router-link",{staticClass:"page-link",attrs:{to:"/projects/"}},[t._v("PROJECTS")]),n("br"),n("a",{staticClass:"page-link",attrs:{href:"mailto:badatfun@gmail.com",target:"_blank"}},[t._v("\n        CONTACT\n      ")])],1),n("TinyFooter")],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name-about-container"},[n("h1",{staticClass:"name"},[t._v("JEREMY FIELDS")]),n("h6",{attrs:{id:"about"}},[t._v("\n  \t\t\tI studied Economics at the University of Maryland, College Park"),n("br"),t._v("\n  \t\t\tI currently work as a Data Analyst "),n("a",{attrs:{href:"https://www.merkleinc.com/",target:"_blank"}},[t._v("@Merkle")]),n("br"),t._v("\n  \t\t\tCheck me out on\n        "),n("a",{attrs:{href:"https://www.twitter.com/delafields",target:"_blank"}},[t._v("Twitter")]),t._v(",\n        "),n("a",{attrs:{href:"https://www.github.com/delafields",target:"_blank"}},[t._v("Github")]),t._v(",\n        or "),n("a",{attrs:{href:"https://www.kaggle.com/delafields",target:"_blank"}},[t._v("Kaggle")])])])}],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tiny-footer"}},[n("h6",[t._v("Made in the U.S.A.")]),n("h6",[t._v("Jeremy Fields 2019")]),n("h6",[t._v("Thanks for passing through")])])}],h={name:"tiny-footer"},_=h,m=(n("0912"),Object(s["a"])(_,d,v,!1,null,"00b8bd3a",null));m.options.__file="TinyFooter.vue";var b=m.exports,g={name:"home",components:{TinyFooter:b}},y=g,k=(n("0f4b"),Object(s["a"])(y,f,p,!1,null,"40a7ebf7",null));k.options.__file="Home.vue";var w=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site"},[n("TitleBar",{staticClass:"title",attrs:{pageTitle:"PROJECTS",leftLinkPath:"/",leftLinkName:"HOME"}}),n("div",{staticClass:"content"},t._l(t.posts,function(e,a){return n("div",{key:e.slug+"_"+a,staticClass:"content-item"},[n("router-link",{staticClass:"project-title",attrs:{to:"/projects/"+e.slug}},[t._v("\n        "+t._s(e.title)+"\n      ")]),n("br"),n("h2",{staticClass:"project-description"},[t._v(t._s(e.summary))]),n("hr",{staticClass:"hr-style"})],1)})),n("TinyFooter")],1)},T=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container"},[n("router-link",{staticClass:"title-link",attrs:{to:t.leftLinkPath}},[t._v(t._s(t.leftLinkName))]),n("a",{staticClass:"title-name"},[t._v(t._s(t.pageTitle))])],1)},P=[],O={name:"title-bar",props:{pageTitle:String,leftLinkName:String,leftLinkPath:String}},x=O,E=(n("2008"),Object(s["a"])(x,C,P,!1,null,"7c4f9416",null));E.options.__file="TitleBar.vue";var S=E.exports,$=n("b396"),M=n.n($),F=M()("a69b8785c7fab0a505e31da290cb5d2f7718f071"),L={name:"projects-home",data:function(){return{page_title:"Blog",posts:[]}},methods:{getPosts:function(){var t=this;F.post.list({page:1,page_size:10}).then(function(e){t.posts=e.data.data,console.log(t.posts)})}},created:function(){this.getPosts()},components:{TitleBar:S,TinyFooter:b}},B=L,J=(n("9523"),Object(s["a"])(B,j,T,!1,null,"06718ea2",null));J.options.__file="ProjectsHome.vue";var N=J.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site"},[a("TitleBar",{staticClass:"title",attrs:{pageTitle:t.post.data.title,leftLinkPath:"/projects/",leftLinkName:"⇦"}}),a("div",{attrs:{id:"blog-post"}},[a("div",{domProps:{innerHTML:t._s(t.post.data.body)}}),a("div",{attrs:{id:"blog-post-footer"}},[a("h4",[t._v("\n        "+t._s(t.post.data.author.first_name)+"\n        "+t._s(t.post.data.author.last_name)+" ||\n        "+t._s(t.post.data.published.slice(0,10))+"\n      ")]),a("img",{attrs:{src:n("4b98"),alt:"Butter CMS",width:"200px",height:"50px"}})])]),a("TinyFooter")],1)},H=[],I=M()("a69b8785c7fab0a505e31da290cb5d2f7718f071"),R={name:"project",data:function(){return{post:null}},components:{TitleBar:S,TinyFooter:b},methods:{getPost:function(){var t=this;I.post.retrieve(this.$route.params.slug).then(function(e){t.post=e.data,console.log(t.post.data)}).catch(function(t){console.log(t)})}},watch:{$route:function(t,e){this.getPost()}},created:function(){this.getPost()}},D=R,U=(n("b615"),Object(s["a"])(D,A,H,!1,null,null,null));U.options.__file="Project.vue";var z=U.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"site"}})},K=[],Y={name:"not-found"},q=Y,Q=(n("b371"),Object(s["a"])(q,G,K,!1,null,"04bc4165",null));Q.options.__file="NotFound.vue";var V=Q.exports;a["a"].use(u["a"]);var W=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:w},{path:"/projects/",name:"projects-home",component:N},{path:"/projects/:slug",name:"project",component:z},{path:"/404",component:V},{path:"*",redirect:"/404"}]});a["a"].config.productionTip=!1,new a["a"]({router:W,render:function(t){return t(c)}}).$mount("#app")},9523:function(t,e,n){"use strict";var a=n("f42b"),r=n.n(a);r.a},b371:function(t,e,n){"use strict";var a=n("dc65"),r=n.n(a);r.a},b615:function(t,e,n){"use strict";var a=n("f3a1"),r=n.n(a);r.a},cf25:function(t,e,n){"use strict";var a=n("0cfb"),r=n.n(a);r.a},dc65:function(t,e,n){},dcb7:function(t,e,n){},f3a1:function(t,e,n){},f42b:function(t,e,n){}});
//# sourceMappingURL=app.9f172a57.js.map