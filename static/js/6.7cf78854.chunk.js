(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(2),c=n(110),r=n(0),o=n(11),i=n(50),l=n(111),s=n(46),u={container:{justifyContent:"center",alignItems:"center",padding:"20px",border:"2px solid #39c4ef"},title:{fontWeight:500,fontSize:48,textAlign:"center"}};var j=function(){var e=Object(o.c)(i.c.getAllContacts),t=Object(o.b)(),n=Object(r.useState)(""),j=Object(c.a)(n,2),b=j[0],d=j[1],m=Object(r.useState)(""),p=Object(c.a)(m,2),f=p[0],h=p[1],O=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return d(a);case"number":return h(a);default:return}};return Object(a.jsxs)(l.a,{onSubmit:function(n){n.preventDefault(),""===b||""===f?alert("PLEASE, ENTER NAME OR TELEPHONE NUMBER"):e.find((function(e){return e.name.toLowerCase()===b.toLowerCase()?alert(b+" is already in contacts"):t(i.a.addContact({name:b,number:f}))})),d(""),h("")},style:u.container,children:[Object(a.jsxs)(l.a.Group,{controlId:"formBasicName",children:[Object(a.jsx)(l.a.Label,{children:"Name"}),Object(a.jsx)(l.a.Control,{type:"text",placeholder:"Enter name of new contact",name:"name",value:b,onChange:O,autoComplete:"off"}),Object(a.jsx)(l.a.Text,{className:"text-muted",children:"Please enter the name of which is not in your phone book"})]}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicNumber",autoComplete:"off",children:[Object(a.jsx)(l.a.Label,{children:"Telephone number"}),Object(a.jsx)(l.a.Control,{type:"number",placeholder:"Enter telephone number of new contact ",name:"number",value:f,onChange:O,autoComplete:"off"})]}),Object(a.jsx)(s.a,{variant:"primary",size:"lg",type:"submit",children:"Add contact"})]})},b=n(112),d=n(114),m={contactItem:{display:"flex",alignItems:"baseline",justifyContent:"space-around",margin:"5px",borderRadius:"10px"},button:{marginLeft:"10px"},text:{fontSize:"20px",fontWeight:"bold"}};var p=function(e){var t=e.openModal,n=e.getId,u=Object(o.c)(i.c.getAllContacts),j=Object(o.b)(),p=Object(r.useState)(""),f=Object(c.a)(p,2),h=f[0],O=f[1];Object(r.useEffect)((function(){j(i.a.getAllContacts())}),[j]);var x,g=(x=h,u.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())})));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(b.a,{children:[Object(a.jsx)(b.a.Prepend,{children:Object(a.jsx)(b.a.Text,{id:"inputGroup-sizing-lg",children:"Find contacts by name"})}),Object(a.jsx)(l.a.Control,{type:"text",name:"filter",value:h,onChange:function(e){return O(e.target.value)},autoComplete:"off",placeholder:"Enter name","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"})]}),Object(a.jsx)("br",{}),0===g.length?Object(a.jsx)("p",{className:"contact-item__text",children:"There are no contacts on your list yet"}):Object(a.jsx)(d.a,{children:g.map((function(e){return Object(a.jsxs)(d.a.Item,{style:m.contactItem,variant:"info",children:[Object(a.jsxs)("span",{style:m.text,children:[e.name," : ",e.number]}),Object(a.jsxs)("span",{children:[Object(a.jsx)(s.a,{variant:"outline-primary",type:"button",onClick:function(){n(e.id),t()},children:"Update"}),Object(a.jsx)(s.a,{variant:"outline-primary",style:m.button,type:"button",onClick:function(){j(i.a.deleteContact(e.id))},children:"Delete"})]})]},e.id)}))})]})},f=n(22),h=n(113),O=document.querySelector("#modal-root");function x(e){var t=e.showModal,n=e.onClose,c=e.children,o=function(e){"Escape"===e.code&&n()};return Object(r.useEffect)((function(){window.addEventListener("keydown",o)}),[o]),Object(f.createPortal)(Object(a.jsxs)(h.a,{show:t,onHide:function(){return n()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,onClick:function(e){e.currentTarget===e.target&&n()},children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{id:"contained-modal-title-vcenter",children:"Edite Contact"})}),Object(a.jsx)(h.a.Body,{children:c}),Object(a.jsx)(h.a.Footer,{children:Object(a.jsx)(s.a,{size:"lg",onClick:n,children:"Close"})})]}),O)}function g(e){var t=e.onSave,n=e.idForUpdate,u=Object(r.useState)(""),j=Object(c.a)(u,2),b=j[0],d=j[1],m=Object(r.useState)(""),p=Object(c.a)(m,2),f=p[0],h=p[1],O=Object(o.b)(),x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return d(a);case"number":return h(a);default:return}};return Object(a.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var a={name:b,number:f};""===b||""===f?alert("PLEASE, ENTER NAME AND NUMBER"):O(i.a.updateContact({idForUpdate:n,credentials:a})),t()},children:[Object(a.jsxs)(l.a.Group,{controlId:"formBasicName",autoComplete:"off",children:[Object(a.jsx)(l.a.Label,{children:"Name"}),Object(a.jsx)(l.a.Control,{type:"text",placeholder:"Enter new name",name:"name",value:b,onChange:x,autoComplete:"off"}),Object(a.jsx)(l.a.Text,{className:"text-muted",children:"Please enter the new name of this contact"})]}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicNumber",autoComplete:"off",children:[Object(a.jsx)(l.a.Label,{children:"Telephone number"}),Object(a.jsx)(l.a.Control,{type:"number",placeholder:"Enter telephone number of new contact ",name:"number",value:f,onChange:x,autoComplete:"off"})]}),Object(a.jsx)(s.a,{variant:"success",size:"lg",type:"submit",children:"Update contact"})]})}var C={container:{minHeight:"calc(100vh - 50px)",padding:"20px",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}};function v(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),l=Object(c.a)(i,2),s=l[0],u=l[1],b=function(){return o((function(e){return!e}))};return Object(a.jsxs)("div",{style:C.container,children:[Object(a.jsxs)("h1",{style:C.title,children:["This is PHONEBOOK PAGE"," ",Object(a.jsx)("span",{role:"img","aria-label":"Hello",children:"\ud83d\udc81\u200d\u2640\ufe0f"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(j,{}),Object(a.jsx)("br",{}),Object(a.jsx)(p,{openModal:b,getId:u}),n&&Object(a.jsx)(x,{showModal:n,onClose:b,children:Object(a.jsx)(g,{onSave:b,idForUpdate:s})})]})}}}]);
//# sourceMappingURL=6.7cf78854.chunk.js.map