(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a(403)},204:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(195),c=a.n(i),l=(a(204),a(12)),s=a(13),o=a(15),u=a(14),m=a(16),d=a(405),p=a(8),h=Object(p.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:"/"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/create"},"Create new post")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/",className:"btn-floating red lighten-1 center"},e.initials)),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/",onClick:function(){return e.signOut()}},"SignOut")))}),E=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:"/signin"},"SIGN IN")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/signup"},"SIGN UP")))},f=a(211),b=Object(p.b)(function(e){return console.log(e),{auth:e.firebase.auth,initials:e.firebase.profile.initials}})(function(e){var t=e.auth.uid?r.a.createElement(h,{initials:e.initials}):r.a.createElement(E,null);return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{to:"/",className:"brand-logo"},"BLOG"),r.a.createElement("a",{href:"#","data-target":"mobile-links",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("div",{className:"right hide-on-med-and-down"},t)))),r.a.createElement("div",{className:"sidenav",id:"mobile-links"},t))}),v=a(42),g=a.n(v),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"col s12 m5 section right",id:"notifications"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null," ",e.content),r.a.createElement("div",{className:"grey-text note-date smaller-text"},g()(e.time.toDate()).fromNow()))})))))},j=(a(212),function(e){var t=e.project;return r.a.createElement("div",{className:"card blue-grey darken-1 project-summary"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",{className:"smaller-text"},"posted by ",t.firstName+" "+t.lastName),r.a.createElement("p",{className:"smaller-text"},"created at ",g()(t.createdAt.toDate().toString()).calendar())))}),O=function(e){var t=e.projects;return r.a.createElement("div",{className:"col s12 m6 project-container section",id:"projects"},t&&t.map(function(e){return r.a.createElement(f.a,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(j,{project:e}))}))},w=(a(214),a(23)),y=a(17),C=a(407),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.projects,n=e.notifications;return t.uid?r.a.createElement("div",{className:"container dashboard"},r.a.createElement("div",{className:"row"},r.a.createElement(O,{projects:a}),r.a.createElement(N,{notifications:n}))):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component),R=Object(y.d)(Object(p.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(w.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(S),x=a(406),I=a(408),F=a(404),k=Object(y.d)(Object(p.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.auth,a=e.project;return t.uid?a?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0 lighten-4"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.title),r.a.createElement("p",null,a.content)),r.a.createElement("div",{className:"card-action lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",a.firstName),r.a.createElement("div",null,"Created at ",g()(a.createdAt.toDate()).format("LLLL"))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(C.a,{to:"/signin"})}),P=a(27),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(C.a,{to:"/"}):r.a.createElement("div",{className:"container auth"},r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null),r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s10 offset-s1"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"email",type:"email",className:"validate",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",type:"password",className:"validate",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn-large waves-effect waves-light col s4 offset-s4"},"Sign In")))))}}]),t}(n.Component),A=Object(p.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",error:e})})}}(t))}}})(U),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(C.a,{to:"/"}):r.a.createElement("div",{className:"container auth"},r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null),r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s10 offset-s1"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{onChange:this.handleChange,id:"firstName",type:"text",className:"validate"}),r.a.createElement("label",{htmlFor:"firstName"},"First Name")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{onChange:this.handleChange,id:"lastName",type:"text",className:"validate"}),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.handleChange,id:"email",type:"email",className:"validate"}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.handleChange,id:"password",type:"password",className:"validate"}),r.a.createElement("label",{htmlFor:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn-large waves-effect waves-light col s4 offset-s4"},"Sign Up")))))}}]),t}(n.Component),_=Object(p.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,i=n.getFirestore,c=r(),l=i();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:(e.firstName[0]+e.lastName[0]).toUpperCase()})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",error:e})})}}(t))}}})(q),L=a(29),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container auth"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s10 offset-s1"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Post a blog"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"title",type:"text",className:"validate",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Title"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"content"},"Content"))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn-large waves-effect waves-light col s4 offset-s4"},"Post"))))):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component),T=Object(p.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),i=a().firebase.auth.uid,c=a().firebase.profile;r.collection("projects").add(Object(L.a)({},e,{firstName:c.firstName,lastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(G),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{basename:"/blog.react"},r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(I.a,null,r.a.createElement(F.a,{exact:!0,path:"/",component:R}),r.a.createElement(F.a,{path:"/project/:id",component:k}),r.a.createElement(F.a,{path:"/signin",component:A}),r.a.createElement(F.a,{path:"/signup",component:_}),r.a.createElement(F.a,{path:"/create",component:T}))))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("Signed in"),Object(L.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log(t.error.message),Object(L.a)({},e,{authError:t.error.message});case"LOGOUT_SUCCESS":return console.log("Signed out"),e;case"SIGNUP_SUCCESS":return console.log("Signed up"),Object(L.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log(t.error.message),Object(L.a)({},e,{authError:t.error.message});default:return Object(L.a)({},e,{authError:null})}},W={projects:[{id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",content:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},{id:2,title:"qui est esse",content:"est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"},{id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",content:"et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"},{id:4,title:"eum et est occaecati",content:"ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;default:return e}},M=a(56),V=Object(y.c)({auth:z,project:K,firestore:M.firestoreReducer,firebase:w.firebaseReducer}),X=a(198),$=a(82),H=a.n($);a(396),a(401);H.a.initializeApp({apiKey:"AIzaSyDMFWm_ya-Kf7XsGIwIbthVLibzqEOIKls",authDomain:"marioplan-6dd66.firebaseapp.com",databaseURL:"https://marioplan-6dd66.firebaseio.com",projectId:"marioplan-6dd66",storageBucket:"marioplan-6dd66.appspot.com",messagingSenderId:"1083091140770"}),H.a.firestore().settings({timestampsInSnapshots:!0});var Q=H.a,Y=Object(y.e)(V,Object(y.d)(Object(y.a)(X.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:M.getFirestore})),Object(w.reactReduxFirebase)(Q,{userProfile:"users",attachAuthIsReady:!0,useFirestoreForProfile:!0}),Object(M.reduxFirestore)(Q)));Y.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(p.a,{store:Y},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[199,2,1]]]);
//# sourceMappingURL=main.304b41e7.chunk.js.map