(this["webpackJsonpbm-tc-t"]=this["webpackJsonpbm-tc-t"]||[]).push([[0],{165:function(e,t,r){},246:function(e,t,r){},247:function(e,t,r){},249:function(e,t,r){},256:function(e,t,r){},400:function(e,t,r){},462:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(26),c=r.n(a),s=(r(246),r(61)),i=r(24),l=(r(247),r(16)),o=r.n(l),d=r(30),j=(r(249),r.p+"static/media/mobile.ad4a598f.svg"),u=r.p+"static/media/ellipse.6d43ff95.svg",b=r.p+"static/media/design.9c753d96.svg",O=r.p+"static/media/secure.a061921f.svg",h=r.p+"static/media/retina.3d9d8034.svg",x=r(27),m=function(e){return function(t){return{type:e,payload:t}}},p="@users/FETCH_USERS_REQUEST",f="@users/FETCH_USERS_SUCCESS",v="@users/FETCH_USERS_ERROR",g="@details/FETCH_DETAILS_REQUEST",y="@details/FETCH_DETAILS_SUCCESS",w="@details/FETCH_DETAILS_ERROR",E="@details/CHANGE_FROM",D="@details/CHANGE_TO",_="@error/CLEAN_ERROR",S="@details/SET_NAME",k=m("@SERVER/SERVER_ERROR"),C=r(1),T=function(){var e=Object(x.b)(),t=Object(i.e)();return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(o.a.mark((function t(){var r,n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/");case 3:if((r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:(n=t.sent).message="Internal server error",e(k({error:n}));case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.message,c=t.t0.stack,e(k({error:{message:a,stack:c}}));case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(C.jsxs)("div",{id:"homepage",children:[Object(C.jsxs)("div",{id:"top-container",children:[Object(C.jsx)("div",{children:"AppCo"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("b",{children:"Brainstorming"})," for",Object(C.jsx)("br",{})," desired perfect Usability"]}),Object(C.jsx)("div",{children:"Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!"}),Object(C.jsx)("div",{className:"button",onClick:function(){return t.push("/users/1")},children:"Views Stats"}),Object(C.jsx)("img",{id:"ellipse",src:u,alt:"ellipse"}),Object(C.jsx)("img",{id:"mobile",src:j,alt:"mobile"})]}),Object(C.jsxs)("div",{children:["Why"," ",Object(C.jsxs)("b",{children:["small business owners ",Object(C.jsx)("br",{}),"love"]})," ","AppCo?"]}),Object(C.jsx)("div",{children:"Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!"}),Object(C.jsxs)("div",{id:"products",children:[Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:b,alt:"design"})}),Object(C.jsx)("h3",{children:"Clean Design"}),Object(C.jsx)("p",{children:"Increase sales by showing true dynamics of your website."})]}),Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:O,alt:"secure"})}),Object(C.jsx)("h3",{children:"Secure Data"}),Object(C.jsx)("p",{children:"Build your online store\u2019s trust using Social Proof & Urgency."})]}),Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:h,alt:"retina"})}),Object(C.jsx)("h3",{children:"Retina Ready"}),Object(C.jsx)("p",{children:"Realize importance of social proof in customer\u2019s purchase decision."})]})]}),Object(C.jsxs)("footer",{children:[Object(C.jsxs)("form",{action:"post>",children:[Object(C.jsx)("input",{type:"e-mail",placeholder:"Enter your email"}),Object(C.jsx)("input",{type:"button",value:"Subscribe"})]}),Object(C.jsxs)("div",{className:"flex-container",children:[Object(C.jsx)("div",{children:"AppCo"}),Object(C.jsx)("div",{children:"All rights reserved by ThemeTags"}),Object(C.jsx)("div",{children:"Copyrights \xa9 2019."})]})]})]})},N=m(f),A=m(v),R=function(e){return function(){var t=Object(d.a)(o.a.mark((function t(r){var n,a,c,s,i,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:p}),n=e.limit,a=e.page,t.prev=2,t.next=5,fetch("/users/".concat(a,"?limit=").concat(n));case 5:if(!(c=t.sent).ok){t.next=13;break}return t.next=9,c.json();case 9:c=t.sent,r(N(c)),t.next=18;break;case 13:return t.next=15,c.json();case 15:(s=t.sent).message||(s.message="Internal server error"),r(A({error:s}));case 18:t.next=25;break;case 20:t.prev=20,t.t0=t.catch(2),i=t.t0.message,l=t.t0.stack,r(A({error:{message:i,stack:l}}));case 25:case"end":return t.stop()}}),t,null,[[2,20]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e,t,r){return e.users.data?e.users.data.map((function(e,n){return Object(C.jsxs)("tr",{onClick:function(){r.push("".concat(t.pathname,"/user/").concat(e.id))},children:[Object(C.jsx)("td",{children:e.id}),Object(C.jsx)("td",{children:e.first_name}),Object(C.jsx)("td",{children:e.last_name}),Object(C.jsx)("td",{children:e.email}),Object(C.jsx)("td",{children:e.gender}),Object(C.jsx)("td",{children:e.ip_address}),Object(C.jsx)("td",{children:e.total_clicks}),Object(C.jsx)("td",{children:e.total_page_views})]},n)})):null},F=864e5,M=r(487),H=function(){var e=Object(x.c)((function(e){return e})),t=Object(i.e)(),r=Object(i.g)().page,n=e.users.total,a=n%25?n/25+1:n/25;return Object(C.jsx)("div",{id:"pagination",children:Object(C.jsx)(M.a,{count:a,defaultPage:parseInt(r,10),variant:"outlined",shape:"rounded",size:"small",onChange:function(e,r){t.push("/users/".concat(r))}})})},U=r(51),L=r(20),V=r(485),P=r(467),z=r(488),B=function(){var e,t=Object(x.c)((function(e){return e})),r=Object(i.g)(),n=r.page,a=r.id,c=function(e){return Object(C.jsx)(V.a,Object(L.a)(Object(L.a)({},e),{},{component:s.b}))},l=t.details,o=l.first_name,d=l.last_name,j=(e={},Object(U.a)(e,"/users/".concat(n),["Users page ".concat(n)]),Object(U.a)(e,"/users/".concat(n,"/user/").concat(a),o?["".concat(o," ").concat(d)]:null),e);return Object(C.jsx)("div",{id:"nav-bar",className:"flex-container",children:Object(C.jsx)("div",{id:"breadcrumbs-container",children:Object(C.jsx)(i.a,{children:function(e){var t=e.location,r=t.pathname.indexOf("?")+1,n=(r>0?t.pathname.slice(0,r):t.pathname).split("/").filter((function(e){return e}));return Object(C.jsxs)(z.a,{"aria-label":"breadcrumb",children:[Object(C.jsx)(c,{color:"inherit",to:"/",children:"Home"}),n.map((function(e,t){if("users"===e||"user"===e)return null;var r=t===n.length-1,a="/".concat(n.slice(0,t+1).join("/"));return r?Object(C.jsx)(P.a,{color:"textPrimary",children:j[a]},a):Object(C.jsx)(c,{color:"inherit",to:a,children:j[a]},a)}))]})}})})})},J=(r(256),r(165),r(231)),G=r(232),Q=function(){var e=Object(C.jsx)(J.a,{icon:G.a});return Object(C.jsx)("div",{id:"spinner-container",children:Object(C.jsx)("div",{id:"spinner-icon",children:Object(C.jsx)("span",{children:e})})})},X=function(){var e=Object(x.c)((function(e){return e})),t=Object(x.b)(),r=Object(i.g)().page,a=Object(i.f)(),c=Object(i.e)();return Object(n.useEffect)((function(){t(R({limit:25,page:r-1}))}),[r]),Object(C.jsxs)("div",{id:"users",className:"flex-container",children:[Object(C.jsx)("header",{className:"flex-container",children:"AppCo"}),e.users.loading?Object(C.jsx)(Q,{}):null,Object(C.jsxs)("main",{children:[Object(C.jsx)(B,{}),Object(C.jsx)("h3",{className:"flex-container",children:"Users statistics"}),Object(C.jsxs)("table",{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Id"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"First name"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Last name"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Email"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Gender"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Ip address"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Total clicks"})}),Object(C.jsx)("th",{children:Object(C.jsx)("h3",{children:"Total page views"})})]})}),Object(C.jsx)("tbody",{children:I(e,a,c)})]})]}),Object(C.jsx)(H,{}),Object(C.jsx)("footer",{children:Object(C.jsxs)("div",{className:"flex-container",children:[Object(C.jsx)("div",{children:"AppCo"}),Object(C.jsx)("div",{children:"All rights reserved by ThemeTags"}),Object(C.jsx)("div",{children:"Copyrights \xa9 2019."})]})})]})},W=m(y),Z=m(w),q=function(e){return function(){var t=Object(d.a)(o.a.mark((function t(r){var n,a,c,s,i,l,d,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:g}),n=e.id,a=e.page,c=e.from,s=e.to,t.prev=2,t.next=5,fetch("/users/".concat(a,"/user/").concat(n,"?from=").concat(c,"&to=").concat(s));case 5:if(!(i=t.sent).ok){t.next=15;break}return t.next=9,i.json();case 9:(i=t.sent).from=c,i.to=s,r(W(i)),t.next=20;break;case 15:return t.next=17,i.json();case 17:(l=t.sent).message||(l.message="Internal server error"),r(Z({error:l}));case 20:t.next=27;break;case 22:t.prev=22,t.t0=t.catch(2),d=t.t0.message,j=t.t0.stack,r(Z({error:{message:d,stack:j}}));case 27:case"end":return t.stop()}}),t,null,[[2,22]])})));return function(e){return t.apply(this,arguments)}}()},K=m(E),Y=m(D),$=m(S),ee=r(64),te=r.n(ee);function re(e){return{html:"<div><div > <b>Date:</b> ".concat(e.argumentText,'</div>\n<div><b style="text-transform: capitalize">').concat(e.points[0].seriesName,":</b> ").concat(e.points[0].valueText,"</div></div>")}}var ne=function(e){var t=Object(x.c)((function(e){return e})).details.correctedData;return Object(C.jsxs)(te.a,{dataSource:t,children:[Object(C.jsx)(ee.Series,{name:e.values,valueField:e.values,type:"spline",color:"#3A80BA",axis:e.values,argumentField:"date"}),Object(C.jsx)(ee.ArgumentAxis,{children:Object(C.jsx)(ee.Label,{overlappingBehavior:"rotate",rotationAngle:-75})}),Object(C.jsx)(ee.ValueAxis,{name:e.values,showZero:!0}),Object(C.jsx)(ee.Tooltip,{enabled:!0,shared:!0,customizeTooltip:re}),Object(C.jsx)(ee.Legend,{verticalAlignment:"top",horizontalAlignment:"center",visible:!1})]})},ae=r(124),ce=r(160),se=r.n(ce),ie=(r(399),r(486)),le=(r(400),function(){var e=Object(x.c)((function(e){return e})),t=Object(x.b)(),r=Object(i.g)(),a=r.id,c=r.page,s=e.users,l=s.minDate,o=s.maxDate,d=s.data,j=e.details,u=j.from,b=j.to,O=j.correctedData,h=l?Date.parse(l)+5184e5:null;h=new Date(h).toISOString().slice(0,10);var m=Object(ae.b)(),p=m.handleSubmit,f=m.control,v=m.setValue;return Object(n.useEffect)((function(){if(d.length<1)t(R({limit:25,page:c-1}));else{var r=function(e,t){if(t){var r=e.users.data.filter((function(e){return e.id===Number(t)}))[0];return{first_name:r.first_name,last_name:r.last_name}}return null}(e,a);t($(r)),t(q({id:a,page:c,from:l,to:h}))}}),[d.length]),Object(C.jsxs)("div",{id:"details",children:[Object(C.jsx)("header",{className:"flex-container",children:"AppCo"}),e.details.loading?Object(C.jsx)(Q,{}):Object(C.jsxs)("main",{children:[Object(C.jsx)(B,{}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("h3",{children:[e.details.first_name," ",e.details.last_name]}),Object(C.jsx)("div",{children:Object(C.jsxs)("form",{id:"user-form",className:"flex-container",onSubmit:p((function(){t(q({id:a,page:c,from:u,to:b}))})),children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"from",children:"From: "}),Object(C.jsx)(ae.a,{name:"from",type:"from",defaultValue:u?new Date(u):null,control:f,render:function(){return Object(C.jsx)(se.a,{name:"from",minDate:new Date(l),maxDate:new Date(o),selected:u?new Date(u):null,dateFormat:"yyyy MMMM dd",withPortal:window.matchMedia("(max-width: 700px)").matches,onChange:function(e){v("from",e),t(K({from:new Date(e).toISOString().slice(0,10)})),new Date(e)>new Date(b)&&t(Y({to:new Date(e).toISOString().slice(0,10)}))}})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"to",children:"To: "}),Object(C.jsx)(ae.a,{name:"to",type:"to",defaultValue:b?new Date(b):null,control:f,render:function(){return Object(C.jsx)(se.a,{name:"to",minDate:new Date(u),maxDate:new Date(o),selected:b?new Date(b):null,dateFormat:"yyyy MMMM dd",withPortal:window.matchMedia("(max-width: 700px)").matches,onChange:function(e){v("to",e),t(Y({to:new Date(e).toISOString().slice(0,10)}))}})}})]}),Object(C.jsx)(ie.a,{type:"submit",id:"chooseDate",className:"action-button",variant:"contained",size:"medium",children:"Show charts"})]})})]}),Object(C.jsx)("div",{className:"chart-name",children:"Clicks"}),O?Object(C.jsx)(ne,{values:"clicks"}):null,Object(C.jsx)("div",{className:"chart-name",children:"Views"}),O?Object(C.jsx)(ne,{values:"page_views"}):null]}),Object(C.jsx)("footer",{children:Object(C.jsxs)("div",{className:"flex-container",children:[Object(C.jsx)("div",{children:"AppCo"}),Object(C.jsx)("div",{children:"All rights reserved by ThemeTags"}),Object(C.jsx)("div",{children:"Copyrights \xa9 2019."})]})})]})}),oe=r(118),de=function(){var e=Object(x.c)((function(e){return e.allErrorsHandler.error})),t=Object(oe.useToasts)().addToast,r=Object(x.b)();return Object(n.useEffect)((function(){e&&t("Error: ".concat(e.message),{appearance:"error",onDismiss:function(){r({type:_})}})}),[e]),Object(C.jsx)("div",{id:"error-handler",children:" "})};function je(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(de,{}),Object(C.jsxs)(s.a,{children:[Object(C.jsx)(i.a,{path:"/",exact:!0,component:T}),Object(C.jsx)(i.a,{path:"/users/:page",exact:!0,component:X}),Object(C.jsx)(i.a,{path:"/users/:page/user/:id",exact:!0,component:le})]})]})}var ue=function(){return Object(C.jsxs)(oe.ToastProvider,{children:[" ",Object(C.jsx)(je,{})," "]})},be=r(62),Oe={loading:!1,error:null,data:[],total:null,minDate:null,maxDate:null},he=function(e,t,r){for(var n=JSON.parse(JSON.stringify(e)),a=Date.parse(t),c=(Date.parse(r)-a)/F+1,s=[],i=0;i<c;i++){var l=new Date(a+F*i).toISOString().slice(0,10);s.push({clicks:0,page_views:0,date:l})}return 0===n.length?s:s.map((function(e){if(0===n.length)return e;for(var t=0;t<n.length;t++){if(e.date===n[t].date)return n.splice(t,1)[0];if(Date.parse(e.date)>Date.parse(n[t].date))return n.splice(t,1),e}return e}))},xe={loading:!1,error:null,first_name:null,last_name:null,data:null,from:null,to:null,correctedData:null},me={error:null},pe=Object(be.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:null});case v:return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:t.payload.error});case f:return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:null,data:t.payload.data,total:t.payload.total,minDate:t.payload.minDate,maxDate:t.payload.maxDate});default:return e}},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:null});case w:return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:t.payload.error});case y:var r=t.payload,n=r.data,a=r.from,c=r.to,s=he(n,a,c);return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:null,data:n,from:a,to:c,correctedData:s});case E:var i=t.payload.from;return Object(L.a)(Object(L.a)({},e),{},{from:i});case D:var l=t.payload.to;return Object(L.a)(Object(L.a)({},e),{},{to:l});case S:var o=t.payload,d=o.first_name,j=o.last_name;return Object(L.a)(Object(L.a)({},e),{},{first_name:d,last_name:j});default:return e}},allErrorsHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return t.payload&&t.payload.error?Object(L.a)(Object(L.a)({},e),{},{error:t.payload.error}):t.type===_?{error:null}:e}}),fe=r(235),ve=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d)(Object(be.a)(fe.a)),ge={users:Oe,details:xe,allErrorsHandler:me},ye=Object(be.e)(pe,ge,ve);c.a.render(Object(C.jsx)(x.a,{store:ye,children:Object(C.jsx)(ue,{})}),document.getElementById("root"))}},[[462,1,2]]]);
//# sourceMappingURL=main.337da68d.chunk.js.map