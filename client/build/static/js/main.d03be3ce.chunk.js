(this["webpackJsonpreact-profile"]=this["webpackJsonpreact-profile"]||[]).push([[0],[,,,,,,,,function(e,t,n){var s={"./0.jpg":18,"./1.jpg":19,"./2.jpg":20,"./3.jpg":21,"./4.jpg":22,"./5.jpg":23,"./6.jpg":24};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=a,e.exports=c,c.id=8},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.fc2cc639.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.59513767.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.6286c903.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3.fba3b545.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/4.10b5aa93.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5.7e6c4a67.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6.81856060.jpg"},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(9),r=n.n(a),i=(n(14),n(2)),o=(n(15),n.p+"static/media/profile.398ddfdf.png"),l=n(0);var u=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"container hero-form justify-center",children:[Object(l.jsx)("img",{src:o,style:{width:"300px"},alt:"profile"}),Object(l.jsx)("h1",{id:"about",children:"About Me"}),Object(l.jsx)("p",{children:"My name is Jason Smith, I am a full-stack web developer from Utah! I started my web development career by putting myself through a bootcamp that I pursued while working a full-time job. I am well versed in the MERN stack as well as other technologies such as JavaScript, MySQL, Jest, HTML and CSS. I am fresh to the development world but I am a fast and determined learner. I love a good challenge and I am not afraid to jump into something new."}),Object(l.jsx)("p",{children:"If I am not on my computer building a project you can usually find me somewhere in the mountains doing something fun like hiking, mountain biking, or skiing. I feel being outdoors is a great way to balance out the time spent in front of my computer, it's also a great way to debug code when I get stuck."})]})})},j=n(4),h=n.n(j),d=n(7),m=n(5),b=n(3);var p=function(){var e=Object(s.useState)({name:"",email:"",subject:"",message:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],a=n.name,r=n.email,o=n.subject,u=n.message,j=Object(s.useState)(""),p=Object(i.a)(j,2),f=p[0],x=p[1];function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?x(""):x("".concat(e.target.name," is required")):x("Your email is invalid")}f||c(Object(b.a)(Object(b.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))}function g(){return(g=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log({formState:n}),e.next=4,fetch("http://localhost:3001/send",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({formState:n})}).then((function(e){return e.json()})).then(function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,console.log(n),"success"===n.status?alert("Message Sent"):"fail"===n.status&&alert("Message failed to send");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){c({name:"",email:"",subject:"",message:""})}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsx)("section",{className:"hero-form my-5 flex-row",children:Object(l.jsxs)("form",{id:"contact-form",className:"",onSubmit:function(e){return g.apply(this,arguments)},method:"POST",children:[Object(l.jsx)("h1",{children:"Contact Me"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",className:"form-input",defaultValue:a,onBlur:O,required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(l.jsx)("input",{type:"email",name:"email",id:"email",className:"form-input",defaultValue:r,onBlur:O,required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{hmtlFor:"subject",children:"Subject:"}),Object(l.jsx)("input",{type:"text",name:"subject",id:"subject",className:"form-input",defaultValue:o,onBlur:O,required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",id:"message",className:"form-input",rows:"5",defaultValue:u,onBlur:O,required:!0})]})," ",Object(l.jsx)("br",{}),f&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:f})}),Object(l.jsx)("button",{className:"",type:"submit",children:"Submit"})]})})};var f=function(){return Object(l.jsx)("section",{class:"hero justify-flex-end-md justify-center",children:Object(l.jsxs)("div",{class:"hero-cta align-center",children:[Object(l.jsxs)("h2",{children:["Hi, I'm Jason, ",Object(l.jsx)("br",{}),"Web Developer"]}),Object(l.jsx)("p",{children:"Frontend / Backend / Full Stack"})]})})};var x=function(e){var t=e.onClose,s=e.currentProject,c=s.name,a=s.description,r=s.url,i=s.github,o=s.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsx)("h3",{className:"modalTitle",children:c}),Object(l.jsx)("img",{alt:"current category",src:n(8)("./".concat(o,".jpg")).default}),Object(l.jsxs)("p",{children:[a," ",Object(l.jsx)("br",{}),"published at: ",Object(l.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:r})," ",Object(l.jsx)("br",{}),"github: ",Object(l.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:i})]}),Object(l.jsx)("button",{type:"button",onClick:t,children:"Close"})]})})};var O=function(){var e=Object(s.useState)([{name:"Golf Buddy",category:"MERN Stack",description:"A site for golfers to log their scores, make friends with other golfers and comment on scores",url:"https://bearded-leaf-21355.herokuapp.com/",github:"https://github.com/Jasonpsmith180/golf-buddy"},{name:"Run Buddy",category:"front-end",description:"A site for runners to connect with trainers to improve their runs",url:"https://jasonpsmith180.github.io/run-buddy/",github:"https://github.com/Jasonpsmith180/run-buddy"},{name:"Horiseon",category:"front-end",description:"A site for a SEO business looking to find more customers",url:"https://jasonpsmith180.github.io/horiseon/",github:"https://github.com/Jasonpsmith180/horiseon"},{name:"Movie Search",category:"back-end",description:"A movie search site that uses API calls to display movie information",url:"https://jasonpsmith180.github.io/movie-search/",github:"https://github.com/Jasonpsmith180/movie-search"},{name:"Weather Dashboard",category:"back-end",description:"A weather dashboard that allows users to search for weather in their area",url:"https://jasonpsmith180.github.io/weather-dashboard/",github:"https://github.com/Jasonpsmith180/weather-dashboard"},{name:"Full-Stack Appointment App",category:"full-stack",description:"A full-stack appointment application that allows users to set appointments with persistent data and logins",url:"https://secure-basin-72350.herokuapp.com/",github:"https://github.com/Jasonpsmith180/fullstack-appointment-app"},{name:"Deep Thoughts",category:"full-stack",description:"A full-stack site that allows users to share thoughts and react to other's thoughts with persistent data and logins",url:"https://obscure-plateau-59580.herokuapp.com/",github:"https://github.com/Jasonpsmith180/deep-thoughts"}]),t=Object(i.a)(e,1)[0],c=Object(s.useState)(),a=Object(i.a)(c,2),r=a[0],o=a[1],u=Object(s.useState)(!1),j=Object(i.a)(u,2),h=j[0],d=j[1],m=function(e,t){o(Object(b.a)(Object(b.a)({},e),{},{index:t})),d(!h)};return Object(l.jsxs)("div",{children:[h&&Object(l.jsx)(x,{currentProject:r,onClose:m}),Object(l.jsx)("div",{className:"flex-row justify-center",children:t.map((function(e,t){return Object(l.jsx)("img",{src:n(8)("./".concat(t,".jpg")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return m(e,t)}},e.name)}))})]})};var g=function(e){return Object(l.jsx)("section",{children:Object(l.jsx)(O,{})})};var v=function(){return Object(l.jsxs)("section",{className:"hero-form justify-center my-5",children:[Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsx)(g,{})]})},y=n.p+"static/media/JasonSmithResume.1c581e0d.pdf";var w=function(){return Object(l.jsxs)("section",{className:"my-5 hero-form",children:[Object(l.jsx)("h2",{children:"Proficiencies"}),Object(l.jsx)("p",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"Node.js"}),Object(l.jsx)("li",{children:"Express.js"}),Object(l.jsx)("li",{children:"MySQL"}),Object(l.jsx)("li",{children:"MongoDB"}),Object(l.jsx)("li",{children:"React.js"})]})}),Object(l.jsx)("h4",{children:Object(l.jsx)("a",{href:y,download:"JasonSmithResume",children:"Download Resume"})})]})};var k=function(e){var t=e.navSelected,n=e.setNavSelected;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2 ".concat(t===Object(l.jsx)(u,{})&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n("<About />")},children:"About Me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(t===Object(l.jsx)(v,{})&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n("<Portfolio />")},children:"Portfolio"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(t===Object(l.jsx)(p,{})&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n("<ContactForm />")},children:"Contact"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(t===Object(l.jsx)(w,{})&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n("<Resume />")},children:"Resume"})})]})})};var S=function(e){var t=e.navSelected,n=e.setNavSelected;return Object(l.jsx)("header",{className:"flex-row",children:Object(l.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(l.jsx)("h2",{className:"py-1 px-1 ".concat(t===Object(l.jsx)(f,{})&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n("<Home />")},children:"Jason Smith"})}),Object(l.jsx)(k,{navSelected:t,setNavSelected:n})]})})},N=function(){return Object(l.jsxs)("footer",{className:"flex-row",children:[Object(l.jsxs)("address",{className:"container flex-row justify-center align-center",children:[Object(l.jsx)("a",{className:"mx-2",href:"mailto:jasonpsmith180@gmail.com",target:"_blank",rel:"noreferrer",children:"Jasonpsmith180@gmail.com"}),Object(l.jsx)("a",{className:"mx-2",href:"https://github.com/Jasonpsmith180",target:"_blank",rel:"noreferrer",children:"Github"}),Object(l.jsx)("a",{className:"mx-2",href:"https://www.linkedin.com/in/jason-smith-972657148/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]}),Object(l.jsx)("div",{className:"container",children:"\xa92021 by Jason Smith"})]})};var C=function(){var e=Object(s.useState)(Object(l.jsx)(u,{})),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)(S,{navSelected:n,setNavSelected:c}),Object(l.jsx)("main",{children:function(e){switch(e){case"<About />":return Object(l.jsx)(u,{});case"<Portfolio />":return Object(l.jsx)(v,{});case"<ContactForm />":return Object(l.jsx)(p,{});case"<Resume />":return Object(l.jsx)(w,{});default:return Object(l.jsx)(f,{})}}(n)}),Object(l.jsx)(N,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),A()}],[[25,1,2]]]);
//# sourceMappingURL=main.d03be3ce.chunk.js.map