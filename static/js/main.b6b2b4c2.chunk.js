(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{1:function(e,t,n){e.exports={phonebook__form:"Form_phonebook__form__2yFaA",phonebook__label:"Form_phonebook__label__1iLUh",phonebook__input:"Form_phonebook__input__1oKqu",btn:"Form_btn__AnNoc"}},13:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),l=n(11),i=n(2),u=n(3),s=n(5),m=n(4),b=n(20),_=n(6),p=n.n(_),h=function(e){var t=e.contacts,n=e.onDeleteBtnClick;return o.a.createElement("ul",{className:p.a.contacts},t.map((function(e){var t=e.name,a=e.number,c=e.id;return o.a.createElement("li",{key:Object(b.a)(),className:p.a.contacts__item},o.a.createElement("p",null,o.a.createElement("span",null,t,": "),o.a.createElement("span",null,a)),o.a.createElement("button",{className:p.a.btn,onClick:function(){return n(c)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})))},f=n(10),d=n(1),C=n.n(d),k=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleInputChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(f.a)({},a,o))},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:C.a.phonebook__form,onSubmit:this.handleFormSubmit},o.a.createElement("label",{className:C.a.phonebook__label},"Name",o.a.createElement("input",{className:C.a.phonebook__input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange})),o.a.createElement("label",{className:C.a.phonebook__label},"Number",o.a.createElement("input",{className:C.a.phonebook__input,type:"text",name:"number",value:this.state.number,onChange:this.handleInputChange})),o.a.createElement("button",{type:"submit",className:C.a.btn},"Add contact"))}}]),n}(o.a.Component),v=n(7),E=n.n(v),g=function(e){var t=e.value,n=e.onChange;return o.a.createElement("label",{className:E.a.phonebook__label},"Find contacts by name:",o.a.createElement("input",{className:E.a.phonebook__input,type:"text",value:t,onChange:n}))},F=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.name,a=t.number,o=e.state.contacts,c={id:Object(b.a)(),name:n,number:a};o.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):n&&a?e.setState((function(e){return{contacts:[c].concat(Object(l.a)(e.contacts))}})):alert("Fill both fields please")},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredContacts();return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(k,{onSubmit:this.addContact}),o.a.createElement("h2",null,"Contacts"),o.a.createElement(g,{value:e,onChange:this.changeFilter}),o.a.createElement(h,{contacts:t,onDeleteBtnClick:this.deleteContact}))}}]),n}(o.a.Component);n(18);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={contacts:"Contacts_contacts__MXyfM",contacts__item:"Contacts_contacts__item__77025",btn:"Contacts_btn__tKJAW"}},7:function(e,t,n){e.exports={phonebook__label:"Filter_phonebook__label__33vDS",phonebook__input:"Filter_phonebook__input__1Wn6c"}}},[[13,1,2]]]);
//# sourceMappingURL=main.b6b2b4c2.chunk.js.map