(this["webpackJsonpexmpty-react-example"]=this["webpackJsonpexmpty-react-example"]||[]).push([[0],{27:function(e,t,c){e.exports={image:"ImageTransition_image__2IZn2","overlay-animation":"ImageTransition_overlay-animation__2cmwW","image-animation":"ImageTransition_image-animation__3XsMH",overlay:"ImageTransition_overlay__13QUy"}},28:function(e,t,c){e.exports={"hoverable-item":"StoreMapUtils_hoverable-item__2tfT5","marked-item":"StoreMapUtils_marked-item__3xzvz"}},51:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(54),a=c(13),s=c(8),r=c(6),o=c(0),l=c.n(o),i=c(37),u=c(17),d=c(18),j=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"login",value:function(e,t){return new Promise("1234"===t?function(e){setTimeout((function(){return e("token!")}),1500)}:function(e,t){setTimeout((function(){return t('Not correct password, test "1234"')}),1500)})}}]),e}(),m=c(4),b=c(1);function h(e){var t=e.children,c=e.size,n=void 0===c?"md":c,a=e.onClick,s=e.type,r=void 0===s?"primary":s,o=e.className,l=e.disable,i={primary:Object(m.classnames)("bg-blue-900","hover:bg-blue-500","text-white"),secondary:Object(m.classnames)("hover:shadow","text-black","border","bg-white"),ghost:""}[r],u={md:"",lg:"",sm:""}[n],d=Object(m.classnames)("outline-none","focus:outline-none","rounded-full","p-2","pl-5","pr-5","transition-all","ml-1","mr-1"),j=l?Object(m.classnames)("text-opacity-40"):"";return Object(b.jsx)("button",{onClick:l?void 0:a,className:"".concat(d," ").concat(i," ").concat(u," ").concat(j," ").concat(o),children:t})}function f(e){var t=e.children,c=e.className;return Object(b.jsx)("div",{className:"shadow-md p-10 "+c,children:t})}function O(e){var t=e.className,c=Object(m.classnames)("bg-gray-400","mb-5","mt-5");return Object(b.jsx)("hr",{className:"".concat(c," ").concat(t)})}var x=function(e){var t=e.children,c=e.onSubmit,n=e.onChange;return Object(b.jsx)("form",{onChange:n,onSubmit:c,children:t})},v=l.a.forwardRef((function(e,t){var c=e.className,n=e.password,a=e.placeholder,s=e.onChange,r=e.size,o=void 0===r?"md":r,l=e.defaultValue,i=e.name,u=Object(m.classnames)("focus:outline-none","border","p-1","rounded","w-full","mt-2","mb-2"),d={md:"",lg:""}[o];return Object(b.jsx)("input",{name:i,ref:t,placeholder:a,type:n?"password":void 0,className:"".concat(d," ").concat(u," ").concat(c),defaultValue:l,onChange:s})})),g=c(35),p=null;function w(e){p?p.notice({duration:1.5,style:{transform:"translate(-50%)",backgroundColor:e.backgroundColor,color:e.color,padding:"0.5em"},className:Object(m.classnames)("shadow"),content:Object(b.jsx)("span",{children:e.message}),onClose:function(){console.log("simple close")}}):console.error(p)}g.a.newInstance({},(function(e){return p=e}));var N={success:function(e){return w({message:e,color:"green",backgroundColor:"white"})},fail:function(e){return w({message:e,color:"white",backgroundColor:"red"})}};function y(e){var t=e.className;return Object(b.jsx)("div",{className:"".concat(t),children:Object(b.jsx)("div",{className:"animate-spin inline-block",children:Object(b.jsx)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading-3-quarters",width:"3em",height:"3em",fill:"currentColor","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"})})})})}function k(e){var t=e.children,c=e.className,n=e.level,a=void 0===n?"h1":n,s={h1:function(e){return Object(b.jsx)("h1",Object(r.a)(Object(r.a)({},e),{},{children:e.children}))},h2:function(e){return Object(b.jsx)("h2",Object(r.a)(Object(r.a)({},e),{},{children:e.children}))},h3:function(e){return Object(b.jsx)("h3",Object(r.a)(Object(r.a)({},e),{},{children:e.children}))}}[a],o={h1:Object(m.classnames)("text-6xl","font-bold"),h2:"",h3:""}[a],l=Object(m.classnames)("mb-5");return s({className:"".concat(o," ").concat(l," ").concat(c),children:t})}function C(e){var t=e.children,c=e.size,n=void 0===c?"md":c,a=e.type,s=void 0===a?"default":a,r=e.className,o={md:"",lg:"",sm:""}[n],l={error:Object(m.classnames)("text-red-500"),default:""}[s],i=Object(m.classnames)("text-base");return Object(b.jsx)("p",{className:"".concat(l," ").concat(o," ").concat(i," ").concat(r),children:t})}var E=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"build",value:function(e){if("params"in e&&null!==e.params){var t=e.params,c=new URLSearchParams;for(var n in t)t[n]&&c.set(n,t[n]);return"".concat(e.path,"?").concat(c.toString())}return e.path}}]),e}(),I=function(e,t){switch(t.type){case"failure":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,signedIn:void 0,requestError:t.requestError});case"loading":return Object(r.a)(Object(r.a)({},e),{},{requestError:void 0,signedIn:void 0,loading:!0});case"success":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,signedIn:!0,username:t.username,requestError:void 0})}return e};function _(){var e=Object(n.d)(),t=Object(i.a)(),c=t.register,a=t.handleSubmit,r=t.errors,l=Object(o.useReducer)(I,{loading:!1,signedIn:!1}),u=Object(s.a)(l,2),d=u[0],m=u[1],g=function(e){return Object(b.jsx)(C,{type:"error",children:{required:"Field must be filled"}[e.type]||e.type})};return Object(o.useEffect)((function(){d.requestError&&N.fail(d.requestError),d.signedIn&&d.username&&e.push(E.build({path:"/data",params:{username:d.username}}))}),[d,e]),Object(b.jsx)("div",{className:"flex h-screen",children:Object(b.jsx)(f,{className:"flex w-screen h-screen md:w-3/6 xl:w-2/6 m-auto",children:Object(b.jsxs)("div",{className:"w-11/12 ml-auto mt-20 h-auto ",children:[Object(b.jsx)("section",{children:Object(b.jsxs)(x,{onSubmit:a((function(e){m({type:"loading"}),j.login(e.username,e.password).then((function(t){console.debug("Got token ".concat(t)),m({type:"success",username:e.username})})).catch((function(e){m({type:"failure",requestError:e.toString()})}))}),(function(e){console.error(e)})),children:[Object(b.jsxs)(k,{level:"h1",children:["sign in",Object(b.jsx)("br",{})]}),Object(b.jsx)(C,{children:"Username"}),Object(b.jsx)(v,{"aria-invalid":r.username?"true":"false",ref:c({required:!0}),name:"username",placeholder:"username@mail.com"}),r.username&&g(r.username),Object(b.jsx)(C,{children:"Password"}),Object(b.jsx)(v,{"aria-invalid":r.password?"true":"false",ref:c({minLength:3,required:!0}),name:"password",placeholder:"**********",password:!0}),r.password&&g(r.password),Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"flow-root",children:[Object(b.jsx)(h,{className:"float-right",children:"Login"}),Object(b.jsx)(h,{className:"float-right",type:"secondary",onClick:function(e){e.preventDefault(),N.success("You have created a new account!")},children:"create"})]})]})}),Object(b.jsx)("section",{className:"flex",children:d.loading&&Object(b.jsx)(y,{className:"ml-auto mr-auto m-14"})})]})})})}var T=c.p+"static/media/items.03a6460a.svg",S=c.p+"static/media/image.bc958827.png",q=c(27),M=c.n(q);function z(e){var t=e.image,c=e.svg,n=e.className,a=e.onComplete;return Object(o.useEffect)((function(){setTimeout(a,5e3)}),[a]),Object(b.jsx)("div",{className:"".concat(n),children:Object(b.jsxs)("div",{className:"relative w-full h-full ",children:[Object(b.jsx)("img",{id:M.a.image,src:t,alt:"background ",className:"absolute max-h-full max-w-full transform -translate-x-1/2 left-1/2"}),Object(b.jsx)("img",{src:c,id:M.a.overlay,alt:"overlay",className:"absolute max-h-full max-w-full transform -translate-x-1/2 left-1/2"})]})})}function L(){var e=Object(n.d)();return Object(b.jsx)("div",{className:"flex",children:Object(b.jsxs)(f,{className:"w-screen h-screen flex flex-col lg:w-4/6 m-auto",children:[Object(b.jsx)(k,{className:"flex ",level:"h1",children:"Tolkar din butik..."}),Object(b.jsx)(O,{}),Object(b.jsx)(z,{className:"flex-1 w-full mx-auto text-lg h-full rounded overflow-hidden",image:S,svg:T,onComplete:function(){e.push(E.build({path:"/store"}))}}),Object(b.jsx)("div",{className:"w-full ",children:Object(b.jsx)(h,{className:"float-right",onClick:function(){e.push(E.build({path:"/store"}))},children:"G\xe5 vidare"})})]})})}function R(){var e=Object(n.d)();return Object(b.jsx)("div",{className:"flex h-screen",children:Object(b.jsxs)(f,{className:"w-screen h-screen lg:h-4/6 lg:w-2/6 m-auto",children:[Object(b.jsxs)(k,{level:"h1",children:["Page not",Object(b.jsx)("br",{})," found"]}),Object(b.jsx)(C,{children:"It seems that you trying to find a page which does not exist. Please enter one of the following buttons below to be navigated to a more interesting view"}),Object(b.jsx)(O,{}),Object(b.jsx)(h,{onClick:function(t){e.push(E.build({path:"/login"}))},className:"float-right",children:"Go to login"})]})})}var P=c(3),U=c(36),A=c(9),B=c(28),D=c.n(B),F=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"recursiveForEach",value:function(t,c){var n,a=Object(A.a)([].slice.call(t.children));try{for(a.s();!(n=a.n()).done;){var s=n.value;e.recursiveForEach(s,c)}}catch(r){a.e(r)}finally{a.f()}c(t)}},{key:"getId",value:function(e){var t,c=null===(t=e.attributes.getNamedItem("id"))||void 0===t?void 0:t.value;if(c)return c}}]),e}();function H(e){var t=e.svg,c=e.className,n=e.onHover,a=e.markedIds,r=e.onItemClick,l=Object(o.useState)(1.5),i=Object(s.a)(l,2),u=i[0],d=i[1],j=function(){return Object(b.jsxs)("div",{className:"float-right fixed z-10",children:[Object(b.jsx)(h,{disable:u>2,onClick:function(){d(u+.25)},type:"secondary",children:"+"}),Object(b.jsx)(h,{disable:u<.5,onClick:function(){d(u-.25)},type:"secondary",children:"-"})]})};return Object(b.jsxs)("div",{className:"relative ".concat(c," "),children:[Object(b.jsx)(j,{}),Object(b.jsx)(U.a,{src:t,style:{transform:"scale(".concat(u,", ").concat(u,")"),transformOrigin:"left top"},beforeInjection:function(e){F.recursiveForEach(e,(function(e){if("rect"===e.tagName||"circle"===e.tagName){var t=F.getId(e);e.classList.add(F.HOVERABLE_ITEM),n&&(e.onmouseenter=function(e){if(!t)throw new Error("Not able to hook a listener onto object without id.");n(t)}),r&&(e.onclick=function(e){if(!t)throw new Error("Not able to hook a listener onto object without id.");r(t)}),t&&(null===a||void 0===a?void 0:a.includes(t))&&e.classList.add(F.MARKED_ITEM)}}))}})]})}function V(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)(f,{className:"w-screen h-screen flex flex-col lg:w-11/12 m-auto",children:[Object(b.jsx)(k,{className:"flex ",level:"h1",children:"Din butik"}),Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"flex-1 w-full mx-auto text-lg h-full rounded overflow-scroll",children:Object(b.jsx)(H,{onItemClick:function(e){console.log(e),c.includes(e)||n([].concat(Object(P.a)(c),[e]))},markedIds:c,svg:T})})]})}F.HOVERABLE_ITEM=D.a["hoverable-item"],F.MARKED_ITEM=D.a["marked-item"];var G=Object(a.a)();function J(){return Object(b.jsx)(n.b,{history:G,children:Object(b.jsxs)(n.c,{children:[Object(b.jsx)(n.a,{path:"/login",children:Object(b.jsx)(_,{})}),Object(b.jsx)(n.a,{path:"/data",children:Object(b.jsx)(L,{})}),Object(b.jsx)(n.a,{path:"/store",children:Object(b.jsx)(V,{})}),Object(b.jsx)(n.a,{path:"",children:Object(b.jsx)(R,{})})]})})}var K=c(14),Q=c.n(K);c(51),c(52);Q.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.8bfd38f5.chunk.js.map