(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(8),l=a.n(s),n=a(28),c=a.n(n),o=(a(35),a(12)),r=a(2),i=a(11),m=a(16),b=a(13),d=a(29),j=a.n(d),u=a(0),h=function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(b.a)(t,2),l=a[0],n=a[1],c=function(e){var t=e.target,a=t.id,s=t.value;n((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},a,s))}))},o=function(){if(l.email.length&&l.password.length){var t={email:l.email,password:l.password};console.log("---------------"),console.log(t),console.log("---------------");try{j.a.post("api/login",t).then((function(a){"Login Successful"===a.data.message&&(localStorage.setItem("userToken",a.data.token),localStorage.setItem("email",t.email),e.history.push("/"))}))}catch(a){console.error(a)}}else alert("Login Not successful")};return Object(u.jsx)("div",{className:"ml-2 mr-2",children:Object(u.jsxs)("div",{className:"card col-12 col-lg-4 login-card mt-2 hv-center",children:[Object(u.jsx)("div",{className:"pt-2",children:Object(u.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(u.jsx)("div",{className:"row col-12 d-flex justify-content-center text-white",children:Object(u.jsx)("span",{className:"h3",children:"Login"})})})}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==l.password||""!==l.email?o():alert("Passwords do not match")},children:[Object(u.jsxs)("div",{className:"form-group text-left",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",value:l.email,onChange:c}),Object(u.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(u.jsxs)("div",{className:"form-group text-left",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:l.password,onChange:c})]}),Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-primary pb-2",children:"Login"})})]})]})})};var p=function(e){var t=Object(s.useState)(),a=Object(b.a)(t,2),l=a[0],n=a[1],c=localStorage.getItem("userToken");return Object(s.useEffect)((function(){n(null!==c?localStorage.getItem("email"):"")}),[c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border-bottom",children:[Object(u.jsx)("button",{className:"navbar-toggler ml-auto",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:null===c?Object(u.jsx)("ul",{className:"navbar-nav ml-auto ",children:Object(u.jsx)("li",{className:"nav-item pt-2",children:Object(u.jsx)(o.b,{to:"/login",className:"btn btn-success btn-sm ml-1",children:"Login"})})}):Object(u.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(u.jsx)("li",{className:"nav-item pt-2",children:Object(u.jsx)("button",{className:"btn btn-success btn-sm ml-1",onClick:function(){localStorage.removeItem("userToken"),localStorage.removeItem("email"),console.log(l),e.history.push("/")},children:"Logout"})})})})]}),null!==c?Object(u.jsxs)("h3",{children:["Welcome Home ",Object(u.jsx)("h2",{children:l})," ",Object(u.jsx)("small",{style:{wordBreak:"break-word"},children:c})," "]}):Object(u.jsx)("h1",{children:"Hi"})]})};var g=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/login",component:h}),Object(u.jsx)(r.a,{exact:!0,path:"/",component:p})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,l=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),l(e),n(e),c(e)}))};c.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),x()}},[[62,1,2]]]);
//# sourceMappingURL=main.85c30bf6.chunk.js.map