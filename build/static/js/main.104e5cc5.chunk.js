(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),u=t.n(c),o=t(16),a=t.n(o),i=t(17),s=t(3);var d=function(e){var n=e.filter,t=e.handleFilter;return Object(r.jsxs)("p",{children:["Filter shown with ",Object(r.jsx)("input",{value:n,onInput:t})]})},f=function(e){var n=e.name,t=e.number,c=e.nameInput,u=e.numberInput,o=e.submit;return Object(r.jsxs)("form",{onSubmit:o,children:[Object(r.jsxs)("div",{children:["name:"," ",Object(r.jsx)("input",{value:n,onInput:c})]}),Object(r.jsxs)("div",{children:["number:"," ",Object(r.jsx)("input",{value:t,onInput:u})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.persons,t=e.deletePerson;return Object(r.jsx)(r.Fragment,{children:n.map((function(e){return Object(r.jsxs)("p",{children:[e.name," "," "," ",e.number," ",Object(r.jsx)("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name,"?"))&&t(e.id)}(e)},children:"delete"})]},"person-".concat(e.id))}))})},j=function(e){var n=e.message,t=e.messageType;return n?Object(r.jsx)("div",{className:t,children:n}):null},l=t(5),m=t.n(l),h="/api/persons",p=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],u=n[1],o=Object(c.useState)(""),a=Object(s.a)(o,2),l=a[0],p=a[1],O=Object(c.useState)(""),v=Object(s.a)(O,2),g=v[0],x=v[1],w=Object(c.useState)(""),y=Object(s.a)(w,2),I=y[0],T=y[1],F=Object(c.useState)({message:"",messageType:""}),S=Object(s.a)(F,2),k=S[0],C=S[1],P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15e3;C({message:e,messageType:n}),setTimeout((function(){C({message:"",messageType:""})}),t)};Object(c.useEffect)((function(){m.a.get(h).then((function(e){var n=e.data;return u(n.map((function(e){return e.id=e._id,e})))})).catch((function(e){return console.error({err:e})}))}),[]);var L=I.trim().length?t.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())})):t;return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{message:k.message,messageType:k.messageType}),Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(d,{filter:I,handleFilter:function(e){return T(e.target.value)}}),Object(r.jsx)("h2",{children:"add a new"}),Object(r.jsx)(f,{name:l,number:g,nameInput:function(e){return p(e.target.value)},numberInput:function(e){return x(e.target.value)},submit:function(e){if(e.preventDefault(),l&&g){var n,r,c=t.find((function(e){return e.name===l}));if(c){if(!window.confirm("".concat(c.name," is already added to phonebook, replace the old number with a new one?")))return;(n=c.id,r={number:g},m.a.patch("".concat(h,"/").concat(n),r)).then((function(e){var n=e.data;u((function(e){return e.map((function(e){return e.id===n.id&&(e.number=n.number),e}))})),P("updated ".concat(l)),p(""),x("")})).catch((function(e){return console.error({err:e})}))}else{(function(e){return m.a.post(h,e)})({name:l,number:g,id:Math.max.apply(Math,Object(i.a)(t.map((function(e){return e.id}))))+1}).then((function(e){var n=e.data;u((function(e){return e.concat(n)})),P("Added ".concat(l)),p(""),x("")})).catch((function(e){return console.error({err:e})}))}}}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(b,{deletePerson:function(e){(function(e){return m.a.delete("".concat(h,"/").concat(e))})(e).then((function(){var n=t.find((function(n){return n.id===e})).name;u((function(n){return n.filter((function(n){return n.id!==e}))})),P("".concat(n," removed"))})).catch((function(n){n.response&&n.response.status&&404===n.response.status?(u((function(n){return n.filter((function(n){return n.id!==e}))})),P("".concat(t.find((function(n){return n.id===e})).name," has already been removed from server"),"error")):console.error({err:n})}))},persons:L})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,u=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),u(e),o(e)}))};t(40);a.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.104e5cc5.chunk.js.map