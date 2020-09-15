(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),c=n.n(u),o=n(2),l=n(3),s=n.n(l),i="/api/persons",m=function(){return s.a.get(i).then((function(e){return e.data}))},f=function(e){var t=e.message,n=e.setErrorMessage;return null===t?null:(setTimeout((function(){n(null)}),3e3),t.includes("Successfully")?r.a.createElement("div",{className:"success"},t):r.a.createElement("div",{className:"error"},t))},d=function(e){var t=e.searchResults,n=e.setSearchResults,a=e.persons;return r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){""===e.target.value?n([]):n(a.filter((function(t){return t.name.toLowerCase().charAt(e.target.value.length-1)===e.target.value.toLowerCase().charAt(e.target.value.length-1)})))}}),t.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number)})))},h=function(e){var t=e.newName,n=e.newNumber,a=e.setNewNumber,u=e.setNewName,c=e.setPersons,o=e.persons,l=e.setErrorMessage,m=function(e){return o.every((function(t){return t.name!==e.name}))},f=function(e){if(window.confirm("Person ".concat(e.name," already exists, do you want to replace old number?"))){var n=o.filter((function(e){return e.name===t}));(function(e,t){return s.a.put("".concat(i,"/").concat(e),t).then((function(e){return e.data}))})(n[0].id,e).then((function(e){return c(o.map((function(t){return t.id!==e.id?t:e})))})).catch((function(e){l("".concat(n[0].name," was already deleted from server")),c(o.filter((function(e){return e.id!==n[0].id})))}))}};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={name:t,number:n};0===r.name.length||0===r.number.length?l("You cannot submit empty form!"):m(r)?function(e){return s.a.post(i,e).then((function(e){return e.data}))}(r).then((function(e){return c(o.concat(e))})).catch((function(e){e?alert("Name requires at least 3 chars, phone number requires at least 8 chars!"):l("Successfully created new person")})):f(r),u(""),a("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var t=e.persons,n=e.setPersons,a=function(e){window.confirm("Do you want to delete that")&&(!function(e){s.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data})).catch((function(e){console.log("fail")}))}(e),m().then((function(e){n(e)})))};return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return a(e.id)}},"Delete"))})))},p=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))};var b=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),s=l[0],i=l[1],b=Object(a.useState)(""),v=Object(o.a)(b,2),g=v[0],w=v[1],N=Object(a.useState)([]),y=Object(o.a)(N,2),S=y[0],j=y[1],O=Object(a.useState)(null),k=Object(o.a)(O,2),C=k[0],P=k[1];return Object(a.useEffect)((function(){m().then((function(e){u(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{message:C,setErrorMessage:P}),r.a.createElement(d,{searchResults:S,setSearchResults:j,persons:n}),r.a.createElement("h2",null,"Add a New"),r.a.createElement(h,{newName:s,newNumber:g,setNewNumber:w,setNewName:i,setPersons:u,persons:n,setErrorMessage:P}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:n,setPersons:u}),r.a.createElement(p,null))};n(36);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.047f8898.chunk.js.map