(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=(a(44),a(119)),u=a(122),m=a(121),s=a(15),i=a(35),h=a.n(i);a(45);var E=function(){return l.a.createElement("div",null,l.a.createElement("img",{className:"ourLogo",src:h.a}))};var f=function(e){return Object(s.a)(e),l.a.createElement("div",{className:"navbar"},l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement("h1",{className:"teamName"},"SafeState")))},p=a(36),g=a(6),d=a(7),v=a(10),b=a(8),N=a(11),j=new(function(){function e(){Object(g.a)(this,e),this.authenticated=!1,this.token=void 0}return Object(d.a)(e,[{key:"login",value:function(e,t){localStorage.setItem("safe-token",e),t()}},{key:"logout",value:function(e){localStorage.removeItem("safe-token"),e()}},{key:"getToken",value:function(){return localStorage.getItem("safe-token")}},{key:"isAuthenticated",value:function(){return!!localStorage.getItem("safe-token")}}]),e}()),O=(a(46),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;"password"===n&&(t=t.substring(0,15)),a.setState(Object(p.a)({},n,t))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.email?fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){j.login(e.token,function(){return a.props.history.push("/home")})}).catch(function(e){console.log(e),alert("ERROR")}):a.state.password&&a.state.email||alert("Enter valid email or password"),a.setState({email:"",password:""})},a}return Object(N.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",{className:"signup"},"Login"),l.a.createElement("form",{className:"form"},l.a.createElement("br",null),l.a.createElement("input",{value:this.state.email,name:"email",onChange:this.handleInputChange,type:"email",placeholder:"Email"}),l.a.createElement("br",null),l.a.createElement("input",{value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"})),l.a.createElement("button",{className:"btn",onClick:this.handleFormSubmit},"Login"),l.a.createElement("div",null,l.a.createElement("h1",{className:"register"}," ",l.a.createElement("hr",null)),l.a.createElement("button",{className:"btn btnSignUp",onClick:function(){return e.props.history.push("/signup")}},"Sign Up!")),l.a.createElement("div",{className:"backgroundBox"}),l.a.createElement("div",{className:"backgroundBox2"}))}}]),t}(n.Component));a(47);var y=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",{className:"copyright"},"Copyright \xa9 2019"))};a(48);var w=function(){return l.a.createElement("body",null,l.a.createElement("div",{className:"message"},"Whoops! It Looks Like You're Not On A Mobile Device, Please Use SafeState On Your Phone!"),l.a.createElement("div",{className:"smokeBox"}))},S=window.innerWidth<=450;var C=function(e){var t=e.history;return S?l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(O,{history:t}),l.a.createElement(y,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null))},k=a(120);a(52);var x=a(37),P=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(d.a)(t,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){return l.a.createElement(x.slide,{onClick:this.showSettings,right:!0},l.a.createElement("a",{id:"home",className:"menu-item",href:"/home"},"Home"),l.a.createElement("a",{id:"settings",className:"menu-item",href:"/settings"},"Settings"),l.a.createElement("a",{className:"menu-item small logout",href:"/logout"},"Log Out"))}}]),t}(l.a.Component);a(68);var F=function(e){return Object(s.a)(e),l.a.createElement("div",{className:"navbar"},l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement("h1",{className:"teamName"},"SafeState")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(P,null))))};a(69);var L=function(){return l.a.createElement("div",null,l.a.createElement("button",{className:"start"},"Start Your Walk"))};var A=function(){return l.a.createElement("div",null,"Hello World")};a(70);var I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(A,null),l.a.createElement(L,null),l.a.createElement(y,null))};a(71);var T=function(){return l.a.createElement("button",{className:"sosButton"},"S.O.S")};a(72);var M=function(){return l.a.createElement("div",{className:"timerBox"},"Placeholder Timer")};a(73);var U=function(){return l.a.createElement("button",{className:"stop"},"Stop")},B=a(38),J=a.n(B),Y=(a(93),function(e){var t=e.text;return l.a.createElement("div",null,t)}),D=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={center:{lat:0,lng:0},zoom:13},a}return Object(N.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};return console.log("yfjytfjytfjytfjytfj",a),e.setState({center:a}),a})}},{key:"render",value:function(){return l.a.createElement("div",{className:"theMap",style:{height:"30vh",width:"100vw"}},l.a.createElement(J.a,{bootstrapURLKeys:{key:"AIzaSyAvh-RJE3-FnbTJlwKg-npCYZl_Yo8P6RU"},defaultCenter:this.state.center,defaultZoom:this.state.zoom},l.a.createElement(Y,{lat:59.955413,lng:30.337844,text:"My Marker"})))}}]),t}(n.Component);var R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(M,null),l.a.createElement(D,null),l.a.createElement(T,null),l.a.createElement(U,null),l.a.createElement(y,null))},W=(a(29),a(3));a(112);function z(){var e=Object(n.useState)(""),t=Object(W.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(W.a)(c,2),u=o[0],m=o[1],s=Object(n.useState)(""),i=Object(W.a)(s,2),h=i[0],E=i[1];return l.a.createElement("div",{className:"settings1"},l.a.createElement("div",{className:"newContact"},l.a.createElement("h1",null,l.a.createElement("label",{for:"newContact"},"Add Emergency Contact"))),l.a.createElement("form",{className:"addNewContact"},l.a.createElement("label",{for:"fname"}),l.a.createElement("input",{type:"text",id:"fname",value:a,name:"firstname",onChange:function(e){return r(e.target.value)},placeholder:"First Name"}),l.a.createElement("label",{for:"lname"}),l.a.createElement("input",{type:"text",id:"lname",value:u,name:"lastname",onChange:function(e){return m(e.target.value)},placeholder:"Last Name"}),l.a.createElement("label",{for:"phone"}),l.a.createElement("input",{type:"text",id:"phone",value:h,name:"mobile",onChange:function(e){return E(e.target.value)},placeholder:"Mobile Number"}),l.a.createElement("button",{type:"submit",className:"btn1",value:"Submit",onClick:function(e){e.preventDefault(),fetch("/api/contacts",{method:"POST",headers:{"Content-Type":"application/json",authorization:"bearer "+j.getToken()},body:JSON.stringify({contacts:[{firstName:a,lastName:u,phoneNumber:h}]})}).then(function(e){return e.json()}).then(function(e){console.log(e),j.login(e.token,function(){alert("success!")})}).catch(function(e){console.log(e)})}},"Add Contact")))}var H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(z,null),l.a.createElement(y,null))};a(113);var K=function(){return l.a.createElement("div",{className:"div1"},l.a.createElement("span",null,l.a.createElement("div",{className:"div2"},l.a.createElement("h2",{className:"wrongPage"}," You reached the wrong page!",l.a.createElement("button",{className:"btn1",href:"/home"},"Go Home")))))};var Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(K,null))},$=(a(114),a(115),function(e){return/^.+@.+\..+$/.test(e)});var G=function(){var e=Object(n.useState)(""),t=Object(W.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(W.a)(c,2),u=o[0],m=o[1],s=Object(n.useState)(""),i=Object(W.a)(s,2),h=i[0],E=i[1],f=Object(n.useState)(""),p=Object(W.a)(f,2),g=p[0],d=p[1],v=Object(n.useState)(""),b=Object(W.a)(v,2),N=b[0],O=b[1],y=Object(n.useState)(""),w=Object(W.a)(y,2),S=w[0],C=w[1],k=Object(n.useState)(""),x=Object(W.a)(k,2),P=x[0],F=x[1],L=Object(n.useState)(""),A=Object(W.a)(L,2),I=A[0],T=A[1],M=Object(n.useState)(""),U=Object(W.a)(M,2),B=U[0],J=U[1];return l.a.createElement("form",{className:"mainForm"},l.a.createElement("label",null,l.a.createElement("h2",null,"First Name:"),l.a.createElement("input",{className:"firstName",type:"text",name:"First Name",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Last Name:"),l.a.createElement("input",{className:"lastName",type:"text",name:"Last Name",value:u,onChange:function(e){return m(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Email:"),l.a.createElement("input",{className:"email",type:"text",name:"Password",value:g,onChange:function(e){return d(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Password:"),l.a.createElement("input",{className:"password",type:"password",name:"Password",value:h,onChange:function(e){return E(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Enter Password Again:"),l.a.createElement("input",{className:"password",type:"password",name:"Passwords Must Match",value:N,onChange:function(e){return O(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Pin:"),l.a.createElement("input",{className:"pin",type:"text",name:"Enter Your Pin",value:S,onChange:function(e){return C(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Contact First Name:"),l.a.createElement("input",{className:"contactFirst",type:"text",name:"contact First",value:P,onChange:function(e){return F(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Contact Last Name:"),l.a.createElement("input",{className:"contactLast",type:"text",name:"contact Last",value:I,onChange:function(e){return T(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("h2",null,"Contact Phone Number:"),l.a.createElement("input",{className:"contactPhone",type:"text",name:"Phone Number",value:B,onChange:function(e){return J(e.target.value)}})),l.a.createElement("button",{className:"button",onClick:function(e){e.preventDefault(),a&&u&&g&&h&&N&&S&&P&&I&&B&&(h.length<7&&h===N?alert("Choose a more secure password"):S.length<4?alert("Choose a more secure pin"):S.length>4?alert("Choose a shorter pin"):$(g)?fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:a,lastName:u,password:h,email:g,pin:S,contacts:[{firstName:P,lastName:I,phoneNumber:B}]})}).then(function(e){return e.json()}).then(function(e){j.login(e.token,function(){window.location="/home"})}).catch(function(e){return console.log(e)}):alert("Choose a valid email")),r(""),m(""),E(""),O(""),C(""),F(""),T(""),J(""),d("")}},"Submit"))};var _=function(e){var t=e.login;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signUpHeader"},l.a.createElement("h1",{className:"signUp"},"Sign Up")),l.a.createElement(G,{login:t}),l.a.createElement(y,null),l.a.createElement("div",{className:"background"}),l.a.createElement("div",{className:"background1"}))};a(116);var q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null))},Q=a(18),V=function(e){var t=e.component,a=Object(Q.a)(e,["component"]);return l.a.createElement(m.a,Object.assign({},a,{render:function(e){return j.isAuthenticated()?l.a.createElement(t,e):l.a.createElement(k.a,{to:{pathname:"/"}})}}))},X=function(e){e.component;var t=Object(Q.a)(e,["component"]);return l.a.createElement(m.a,Object.assign({},t,{render:function(e){return j.logout(function(){}),l.a.createElement(k.a,{to:{pathname:"/"}})}}))};var ee=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:C}),l.a.createElement(V,{exact:!0,path:"/home",component:I}),l.a.createElement(m.a,{exact:!0,path:"/signup",component:q}),l.a.createElement(X,{exact:!0,path:"/logout"}),l.a.createElement(V,{exact:!0,path:"/main",component:R}),l.a.createElement(V,{exact:!0,path:"/settings",component:H}),l.a.createElement(m.a,{component:Z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){e.exports=a.p+"static/media/logo.8b6c6b3b.svg"},39:function(e,t,a){e.exports=a(117)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},93:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.0d6cfd40.chunk.js.map