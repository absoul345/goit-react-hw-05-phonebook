(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"AddContacts_container__2wxZ_",form:"AddContacts_form__cwar6",input:"AddContacts_input__2YS4k",label:"AddContacts_label__3uaVG",btn:"AddContacts_btn__3cZEu"}},11:function(t,e,n){t.exports={section:"Section_section__3Iloc",title__AddContacts:"Section_title__AddContacts__VOJ1G",title__List:"Section_title__List__3IIy_"}},22:function(t,e,n){t.exports={contact__Item:"ContactsItem_contact__Item__3nF2q",contacts__ItemBtn:"ContactsItem_contacts__ItemBtn__1IUvH"}},27:function(t,e,n){t.exports={filter:"Filter_filter__2Q2je"}},43:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),i=n.n(r),s=n(9),o=n(29),l=n(26),u=n(16),d=n(17),b=n(19),j=n(18),m=n(11),h=n.n(m),O=n(3),f=n.n(O),_=n(1),p=function(t){var e=t.title,n=t.children;return Object(_.jsxs)("div",{className:h.a.section,children:[Object(_.jsx)("h2",{className:h.a.title__AddContacts,children:e}),n]})};p.prototype={title:f.a.string.isRequired,children:f.a.element.isRequired};var x=p,C=function(t){var e=t.title,n=t.children;return Object(_.jsxs)("div",{className:h.a.section,children:[Object(_.jsx)("h2",{className:h.a.title__List,children:e}),n]})};C.prototype={title:f.a.string.isRequired,children:f.a.element.isRequired};var v=C,g=n(12),y=n(44),F=n(10),A=n.n(F),N=n(7),q={addContacts:Object(N.b)("contacts/add",(function(t,e){return{payload:{id:Object(y.a)(),name:t,number:e}}})),deleteContacts:Object(N.b)("contacts/delete"),changeFilter:Object(N.b)("contacts/Filter")},I=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:Object(y.a)(),name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(g.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()||e.number===t.state.number})))return alert("Name ".concat(t.state.name," or number ").concat(t.state.number," are alredy in contacts"));t.props.onSubmit(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(_.jsx)("div",{className:A.a.container,children:Object(_.jsxs)("form",{className:A.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:A.a.label,htmlFor:Object(y.a)(),children:["Name",Object(_.jsx)("input",{className:A.a.input,type:"text",name:"name",id:Object(y.a)(),value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(_.jsxs)("label",{className:A.a.label,htmlFor:Object(y.a)(),children:["Number",Object(_.jsx)("input",{className:A.a.input,type:"tel",name:"number",id:Object(y.a)(),value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(_.jsx)("button",{className:A.a.btn,type:"submit",children:"Add contacts"})]})})}}]),n}(a.Component),S=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(q.addContacts(e,n))}}}))(I),w=n(27),R=n.n(w),k=function(t){var e=t.value,n=t.changeFilter;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("label",{className:R.a.filter,children:["Find contacts by name",Object(_.jsx)("input",{type:"text",value:e,onChange:n})]})})};k.prototype={changeFilter:f.a.func.isRequired,filter:f.a.string.isRequired};var D=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(q.changeFilter(e.target.value))}}}))(k),L=n(22),z=n.n(L),B=function(t){var e=t.contact,n=t.onDeleteContact,a=e.name,c=e.number,r=e.id;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("li",{className:z.a.contact__Item,children:Object(_.jsxs)("p",{children:[a,":",c,Object(_.jsx)("button",{className:z.a.contacts__ItemBtn,onClick:function(){return n(r)},children:"Delete"})]})},Object(y.a)())})};B.prototype={contacts:f.a.arrayOf(f.a.shape({id:f.a.string.isRequired,name:f.a.bool.isRequired,number:f.a.string.isRequired})).isRequired,onDeleteContact:f.a.func.isRequired};var Z,J=B,E=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},G=Object(s.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:E(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(q.deleteContacts(e))}}}))((function(t){var e=t.contacts,n=t.filter,a=t.changeFilter,c=t.onDeleteContact;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(D,{value:n,changeFilter:a}),Object(_.jsx)("ul",{children:e.map((function(t){return Object(_.jsx)(J,{contact:t,onDeleteContact:c},t.id)}))})]})})),M=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(x,{title:"Phonebook",children:Object(_.jsx)(S,{})}),Object(_.jsx)(v,{title:"Contacts",children:Object(_.jsx)(G,{})})]})}}]),n}(a.Component),V=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(M,{})})},H=n(8),P=n(30),Q=n(4),T=Object(N.c)([],(Z={},Object(g.a)(Z,q.addContacts,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(g.a)(Z,q.deleteContacts,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Z)),U=Object(N.c)("",Object(g.a)({},q.changeFilter,(function(t,e){return e.payload}))),Y=Object(Q.b)({items:T,filter:U}),$=n(28),K={key:"contects",storage:n.n($).a,blacklist:["filter"]},W=Object(N.a)({reducer:{contacts:Object(H.g)(K,Y)},middleware:Object(N.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})}),X={store:W,persistior:Object(H.h)(W)};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(s.a,{store:X.store,children:Object(_.jsx)(l.a,{loading:null,persistor:X.persistior,children:Object(_.jsx)(o.a,{children:Object(_.jsx)(V,{})})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.546e50c0.chunk.js.map