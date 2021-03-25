(this["webpackJsonpcomics-with-thunk"]=this["webpackJsonpcomics-with-thunk"]||[]).push([[0],{68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(18),o=c.n(a),s=c(10),i=c.n(s),l="FETCH_SUCCESS",r="FETCH_FAIL",m="FETCH_START",j="ADD_COMMENT",u=function(){var e=Math.floor((Date.now()/864e5-18708)/3),t=Math.ceil(Math.random()*(2440+e));return function(e){e({type:m}),i.a.all([i.a.get("http://xkcd.com/".concat(t,"/info.0.json")),i.a.get("http://xkcd.com/".concat(t+1,"/info.0.json")),i.a.get("http://xkcd.com/".concat(t+2,"/info.0.json")),i.a.get("http://xkcd.com/".concat(t+3,"/info.0.json"))]).then((function(t){e({type:l,payload:t.map((function(e){return{alt:e.data.alt,img:e.data.img,num:e.data.num,title:e.data.title,comments:[]}}))})})).catch((function(t){e({type:r,payload:t})}))}},b=c(12),d=c(11),x=c(1),h=function(e){var t=e.comic;return Object(x.jsx)("div",{children:Object(x.jsx)(d.b,{to:"/".concat(t.num),children:Object(x.jsxs)("div",{className:" rounded bg-white shadow m-8 p-8 flex flex-col items-center max-w-screen-xl",children:[Object(x.jsx)("h2",{className:"text-4xl mb-8",children:t.title}),Object(x.jsxs)("p",{className:"text-l mb-4",children:["# ",t.num]}),Object(x.jsx)("img",{className:"mb-4",src:t.img,alt:t.alt}),Object(x.jsx)("p",{className:"text-xl m-4",children:t.alt})]})})})},O=c(37),f=function(){var e=Object(b.c)((function(e){return e})),t=Object(b.b)();return Object(n.useEffect)((function(){t(u())}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"flex flex-col items-center ",children:[e.isLoading&&Object(x.jsx)("div",{children:'"LOADING...."'}),e.error&&Object(x.jsx)("div",{children:'"ERROR WHILE LOADING"'}),Object(x.jsx)(O.a,{dataLength:e.comics.length,next:function(){t(u())},hasMore:!0,loader:Object(x.jsx)("h4",{children:"Loading..."}),children:e.comics.map((function(e){return Object(x.jsx)(h,{comic:e},e.title)}))})]})})},p=c(17),g=c(3),v=function(){var e=Object(g.g)().num;e=Number(e);var t=Object(b.c)((function(e){return e.comics})),c=Object(n.useState)([{}]),a=Object(p.a)(c,2),o=a[0],s=a[1],l=Object(g.f)();return Object(n.useEffect)((function(){t.length>0&&t.map((function(e){return e.num})).includes(e)?(console.log(e),t.forEach((function(t){Number(t.num)===Number(e)&&s(t)}))):i.a.get("http://xkcd.com/".concat(e,"/info.0.json")).then((function(e){var t={alt:e.data.alt,img:e.data.img,num:e.data.num,title:e.data.title,comments:[]};s(t)})).catch((function(e){console.log(e)}))}),[e,t]),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"flex flex-col items-center w-full ",children:[Object(x.jsxs)("div",{className:"flex mt-8 mb-5",children:[Object(x.jsx)("button",{className:"bg-gradient-to-r mr-12 p-4 from-gray-500 rounded font-bold",onClick:function(){l.push("/".concat(e-1))},children:"Previous"}),Object(x.jsx)("button",{className:"bg-gradient-to-l ml-10 p-4 pl-10 from-gray-500 rounded font-bold",onClick:function(){return console.log("/".concat(e+1)),void l.push("/".concat(e+1))},children:"Next"})]}),Object(x.jsx)("h1",{className:"text-5xl mb-8",children:o.title}),Object(x.jsx)("img",{className:"max-w-screen-xl max-h-screen",src:o.img,alt:o.alt}),Object(x.jsx)("p",{className:"text-2xl mt-16 w-9/12",children:o.alt}),Object(x.jsxs)("p",{className:"text-l my-4",children:["# ",o.num]})]})})},N=function(){var e=Object(g.f)(),t=Object(n.useState)(""),c=Object(p.a)(t,2),a=c[0],o=c[1],s=Object(n.useState)(!1),i=Object(p.a)(s,2),l=i[0],r=i[1],m=Math.floor((Date.now()/864e5-18708)/3);return Object(x.jsxs)("div",{className:" flex flex-col items-center mb-6",children:[Object(x.jsx)("p",{children:"Jump to comic by #"}),Object(x.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log(a),e.push("/".concat(a))}(t)},children:[Object(x.jsx)("input",{class:"focus:ring-indigo-500 focus:border-indigo-500 block text-xl border-gray-300 rounded-md",type:"number",name:"jumpToNum",value:a,onChange:function(e){e.target.value>=0&&e.target.value<Math.ceil(2440+m)?(o(e.target.value),r(!1)):r(!0)}}),l&&Object(x.jsxs)("p",{className:"text-red-700 text-md",children:[" ","# Must be 1 - ",Math.ceil(2440+m)]}),Object(x.jsx)("button",{className:"btn btn-blue self-center my-4 ml-20 ",type:"submit",children:"Jump"})]})]})};var y=function(){return Object(x.jsx)(d.a,{children:Object(x.jsx)(g.c,{children:Object(x.jsxs)("div",{className:"flex flex-col justify-start items-center  ",children:[Object(x.jsxs)("div",{className:" flex justify-between w-full bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200  rounded shadow-xl h-1/6",children:[Object(x.jsx)(d.b,{to:"/",children:Object(x.jsx)("p",{className:"underline inline font-black text-lg",children:"Go Home"})}),Object(x.jsx)("h1",{className:"text-8xl self-center ml-40 ",children:" xkcd comics"}),Object(x.jsx)(N,{})]}),Object(x.jsx)(g.a,{path:"/:num",component:v}),Object(x.jsx)(g.a,{exact:!0,path:"/",component:f})]})})})},w=c(15),k=c(21),E=c(9),L={comics:[],isFetching:!1,err:""},M=c(38),C=c.n(M),S=c(39),D=(c(68),Object(w.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0});case l:return Object(E.a)(Object(E.a)({},e),{},{comics:[].concat(Object(k.a)(e.comics),Object(k.a)(t.payload)),isLoading:!1,error:""});case r:return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,error:t.payload});case j:return Object(E.a)(Object(E.a)({},e),{},{comics:e.comics.map((function(e){return Number(e.num)==Number(t.payload.num)?Object(E.a)(Object(E.a)({},e),{},{comments:[].concat(Object(k.a)(e.comments),[t.payload.comment])}):e}))});default:return e}}),Object(w.a)(S.a,C.a)));o.a.render(Object(x.jsx)(b.a,{store:D,children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.635ee5f0.chunk.js.map