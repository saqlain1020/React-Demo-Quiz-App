(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{58:function(e,t,a){},86:function(e,t,a){e.exports=a(96)},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),c=a(11),i=a(12),l=a(13),u=a(15),m=a(14),p=a(159),h=a(141),d=a(4),g=(a(58),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.changeInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(c.a)({},a,n))},e.submit=function(t){t.preventDefault();var a=JSON.parse(localStorage.getItem("users")),n=!0;a.forEach((function(t){t.username===e.state.username&&t.password===e.state.password&&(e.props.changeState(t.username),n=!1)})),n&&alert("Wrong Credentials")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=e.textField,a=e.heading,n=e.button,o=e.form,s=e.container,c=e.containerWrapper;return r.a.createElement("div",{className:c},r.a.createElement("div",{className:s},r.a.createElement("h1",{className:a},"Login"),r.a.createElement("form",{className:o,onChange:this.changeInput,onSubmit:this.submit},r.a.createElement(p.a,{name:"username",defaultValue:this.state.username,type:"text",id:"standard-basic",label:"Username",className:t}),r.a.createElement(p.a,{type:"password",name:"password",defaultValue:this.state.password,id:"standard-basic",label:"Password",className:t}),r.a.createElement(h.a,{className:n,type:"submit",variant:"contained",color:"secondary"},"Submit"))))}}]),a}(n.Component)),f=Object(d.a)((function(e){return{textField:{display:"block",margin:10},button:{background:"#6c5ce7","&:hover":{backgroundColor:"#222"},marginTop:10},heading:{fontFamily:"Roboto",fontWeight:"900",fontSize:40,marginBottom:20},containerWrapper:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"linear-gradient(0deg, #2d3436,#0984e3);",height:"calc(100vh - 64px)",width:"100%"},container:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"white",padding:30,borderRadius:10,height:"350px"},form:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"}}}))(g),b=a(151),q=a(142),E=a(161),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={questionNo:1,buttonText:"Next",ch1:!1,ch2:!1,ch3:!1,ch4:!1,correctQs:0,checkedAns:""},n.next=function(){n.rand=(3*Math.random()).toFixed(),n.state.questionNo===Number(n.props.quiz.noOfQ)-1&&n.setState({buttonText:"Done"}),n.state.checkedAns===n.props.quiz.questions[n.state.questionNo-1].correctOp?n.setState({correctQs:Number(n.state.correctQs)+1},n.showResult):n.showResult()},n.showResult=function(){if(n.state.questionNo===n.props.quiz.noOfQ){var e=(n.state.correctQs/n.props.quiz.noOfQ*100).toFixed(2)+"%";alert("Correct Anserwes"+e);var t=JSON.parse(localStorage.getItem("users"));t=t.map((function(t){return t.username===n.props.username&&t.quizes.push({id:n.props.quiz.id,score:e}),t})),localStorage.setItem("users",JSON.stringify(t)),n.props.close()}else n.state.questionNo<n.props.quiz.noOfQ&&n.setState({questionNo:Number(n.state.questionNo)+1,ch1:!1,ch2:!1,ch3:!1,ch4:!1})},n.checked=function(e){var t=e.target;n.setState({ch1:!1,ch2:!1,ch3:!1,ch4:!1},(function(){var e;n.setState((e={},Object(c.a)(e,t.name,!0),Object(c.a)(e,"checkedAns",t.value),e))}))},n.rand=(3*Math.random()).toFixed(),n.seconds=30*n.props.quiz.noOfQ,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.questionNo===this.props.quiz.noOfQ-1&&this.setState({buttonText:"Done"});var t=document.querySelector("#timer");setInterval((function(){e.seconds--,t.innerHTML="Timer: ".concat(e.seconds," Sec Left");e.state.questionNo,e.state.correctQs;if(0===e.seconds){var a=(e.state.correctQs/e.props.quiz.noOfQ*100).toFixed(2)+"%";alert("Correct Anserwes"+a);var n=JSON.parse(localStorage.getItem("users"));n=n.map((function(t){return t.username===e.props.username&&t.quizes.push({id:e.props.quiz.id,score:a}),t})),localStorage.setItem("users",JSON.stringify(n)),e.props.close()}}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.questionNo,a=e.buttonText,n=this.props.classes;return r.a.createElement("div",{className:n.containerWrapper},r.a.createElement("div",{className:n.container},r.a.createElement("h1",{className:n.title},"Title: ",this.props.quiz.title),r.a.createElement("div",{className:n.titleBar},r.a.createElement("h2",null,"Question ",t,"/",this.props.quiz.noOfQ),r.a.createElement("h3",{id:"timer",className:n.timer},"Timer: 120 Sec Left")),r.a.createElement("h2",{className:n.question},this.props.quiz.questions[t-1].question),"0"===this.rand&&r.a.createElement("div",{className:n.answers},r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:this.props.quiz.questions[t-1].op1}),label:this.props.quiz.questions[t-1].op1}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:this.props.quiz.questions[t-1].correctOp}),label:this.props.quiz.questions[t-1].correctOp}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:this.props.quiz.questions[t-1].op2}),label:this.props.quiz.questions[t-1].op2}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:this.props.quiz.questions[t-1].op3}),label:this.props.quiz.questions[t-1].op3})),"1"===this.rand&&r.a.createElement("div",{className:n.answers},r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:this.props.quiz.questions[t-1].correctOp}),label:this.props.quiz.questions[t-1].correctOp}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:this.props.quiz.questions[t-1].op1}),label:this.props.quiz.questions[t-1].op1}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:this.props.quiz.questions[t-1].op2}),label:this.props.quiz.questions[t-1].op2}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:this.props.quiz.questions[t-1].op3}),label:this.props.quiz.questions[t-1].op3})),"2"===this.rand&&r.a.createElement("div",{className:n.answers},r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:this.props.quiz.questions[t-1].op1}),label:this.props.quiz.questions[t-1].op1}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:this.props.quiz.questions[t-1].op2}),label:this.props.quiz.questions[t-1].op2}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:this.props.quiz.questions[t-1].correctOp}),label:this.props.quiz.questions[t-1].correctOp}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:this.props.quiz.questions[t-1].op3}),label:this.props.quiz.questions[t-1].op3})),"3"===this.rand&&r.a.createElement("div",{className:n.answers},r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:this.props.quiz.questions[t-1].op1}),label:this.props.quiz.questions[t-1].op1}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:this.props.quiz.questions[t-1].op2}),label:this.props.quiz.questions[t-1].op2}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:this.props.quiz.questions[t-1].op3}),label:this.props.quiz.questions[t-1].op3}),r.a.createElement(q.a,{control:r.a.createElement(E.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:this.props.quiz.questions[t-1].correctOp}),label:this.props.quiz.questions[t-1].correctOp})),r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.next},a)))}}]),a}(n.Component),O=Object(d.a)((function(){var e;return{containerWrapper:{display:"grid",gridTemplateColumns:"minmax(10px,1fr) minmax(min-content,1100px) minmax(10px,1fr)"},container:{gridArea:"1/2",display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"},title:{fontFamily:"Roboto",fontSize:35,fontWeight:900,margin:10,color:"#222"},titleBar:(e={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background:"#2c3e50"},Object(c.a)(e,"justifyContent","space-between"),Object(c.a)(e,"height","35px"),Object(c.a)(e,"paddingLeft","20px"),Object(c.a)(e,"paddingRight","20px"),Object(c.a)(e,"color","white"),Object(c.a)(e,"borderRadius","5px"),e),question:{color:"white",background:"#0984e3",padding:5,width:"100%",marginTop:"10px",border:"2px solid #0984e3"},answers:{border:"2px solid #0984e3",display:"flex",flexFlow:"column",width:"100%",padding:5}}}))(v),y=a(146),S=a(148),z=a(150),k=a(144),j=a(147),C=a(149),w=a(145),N=a(97),x=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(k.a),I=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(w.a),Q=Object(y.a)({table:{minWidth:700}});function F(e){var t=Q();return r.a.createElement(j.a,{component:N.a},r.a.createElement(S.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(C.a,null,r.a.createElement(w.a,null,r.a.createElement(x,null,"Title"),r.a.createElement(x,{align:"right"},"Subject"),r.a.createElement(x,{align:"right"},"No of Qs"))),r.a.createElement(z.a,null,e.rows?e.rows.map((function(e){return r.a.createElement(I,{onClick:e.onclick,key:e.title},r.a.createElement(x,{component:"th",scope:"row"},e.title),r.a.createElement(x,{align:"right"},e.subject),r.a.createElement(x,{align:"right"},e.noofqs))})):r.a.createElement(x,{align:"right"},"No Quizes"))))}var T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={quizOpen:!1,quiz:""},e.quizOpen=function(t,a){console.log("QuizOpen");for(var n,o=JSON.parse(localStorage.getItem("quizes")),s=0;s<o.length;s++)if(o[s].title===t&&o[s].subject===a){n=o[s];break}if(n){var c,i=!1;JSON.parse(localStorage.getItem("users")).forEach((function(t){t.username===e.props.username&&t.quizes.forEach((function(e){e.id===n.id&&(i=!0,c=e.score)}))})),i?alert("Quiz Already Taken | ".concat(n.title," | Score: ").concat(c)):e.setState({quizOpen:!0,quiz:r.a.createElement(O,{username:e.props.username,close:function(){e.setState({quizOpen:!1})},quiz:n})})}},e.render=function(){return r.a.createElement("div",null,!e.state.quizOpen&&r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(F,{rows:e.createRows()}))),e.state.quizOpen&&e.state.quiz)},e}return Object(l.a)(a,[{key:"createRows",value:function(){var e=this;return JSON.parse(localStorage.getItem("quizes"))?JSON.parse(localStorage.getItem("quizes")).map((function(t){return{title:t.title,subject:t.subject,noofqs:t.noOfQ,onclick:function(){return e.quizOpen(t.title,t.subject)}}})):null}}]),a}(r.a.Component),R=a(152),A=a(153),J=a(42),U=a(143),D=a(54),W=a.n(D),B=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},button:{color:"white"}}}));function L(e){var t=B();return r.a.createElement("div",{className:t.root},r.a.createElement(R.a,{position:"static"},r.a.createElement(A.a,null,r.a.createElement(U.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(W.a,{onClick:function(){return e.turnFalse("quizCreate")}})),r.a.createElement(J.a,{variant:"h6",className:t.title,onClick:function(){e.turnFalse("quizCreate")}},"Quiz Application"),!e.username&&r.a.createElement("div",{style:{display:"flex",marginRight:"10px"}},r.a.createElement(h.a,{color:"inherit",onClick:function(){return e.turnTrue("signUp")}},"SignUP"),r.a.createElement(h.a,{color:"inherit",onClick:e.login},"Login")),e.username&&r.a.createElement("div",{style:{display:"flex",marginRight:"10px"}},r.a.createElement(J.a,{variant:"h6",className:t.title},"Welcome ",e.username),r.a.createElement(h.a,{color:"inherit",onClick:function(){return e.turnTrue("quizCreate")}},"Create Quiz"),r.a.createElement(h.a,{color:"inherit",onClick:e.changeState},"Logout")))))}var M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.changeInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(c.a)({},a,n))},e.submit=function(t){t.preventDefault();var a=[];JSON.parse(localStorage.getItem("users"))&&(a=JSON.parse(localStorage.getItem("users"))),a.forEach((function(t){t.username!==e.state.username||alert("User Exists")})),a.push({username:e.state.username,password:e.state.password,quizes:[]}),localStorage.setItem("users",JSON.stringify(a)),e.props.changeState(e.state.username)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=e.textField,a=e.heading,n=e.button,o=e.form,s=e.container,c=e.containerWrapper;return r.a.createElement("div",{className:c},r.a.createElement("div",{className:s},r.a.createElement("h1",{className:a},"SignUp"),r.a.createElement("form",{className:o,onChange:this.changeInput,onSubmit:this.submit},r.a.createElement(p.a,{name:"username",defaultValue:this.state.username,type:"text",placeholder:"UserName",className:t,label:"Username"}),r.a.createElement(p.a,{className:t,type:"password",name:"password",defaultValue:this.state.password,label:"Password"}),r.a.createElement(h.a,{className:n,type:"submit",variant:"contained",color:"secondary"},"Submit"))))}}]),a}(n.Component),V=Object(d.a)((function(e){return{textField:{display:"block",margin:10},button:{background:"#6c5ce7","&:hover":{backgroundColor:"#222"},marginTop:10},heading:{fontFamily:"Roboto",fontWeight:"900",fontSize:40,marginBottom:20},containerWrapper:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"linear-gradient(0deg, #2d3436,#0984e3);",height:"calc(100vh - 64px)",width:"100%"},container:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"white",padding:30,borderRadius:10,height:"350px"},form:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"}}}))(M),P=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getRandomString",value:function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a="",n=0;n<e;n++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}},{key:"uniqueId",value:function(e){for(var t=this.getRandomString(16),a=0;a<e.length;a++)if(e[a]===t)return this.uniqueId(e);return t}}]),e}(),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={noOfQ:0,title:"",subject:"",op1:"",op2:"",op3:"",question:"",questions:[],correctOp:"",currentQ:"1",quiz:{}},e.changeInputState=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.submit=function(t){t.preventDefault();var a={question:e.state.question,correctOp:e.state.correctOp,op1:e.state.op1,op2:e.state.op2,op3:e.state.op3},n=e.state.questions;if(n.push(a),console.log(n),e.setState({questions:n},(function(){e.setState({currentQ:Number(e.state.currentQ)+1,op1:"",op2:"",op3:"",question:"",correctOp:""})})),e.state.currentQ>=e.state.noOfQ){var r=e.state.quiz;r.questions=e.state.questions;var o=[];localStorage.getItem("quizes")&&(o=JSON.parse(localStorage.getItem("quizes")));var s=o.map((function(e){return e.id})),c=P.uniqueId(s);return r.id=c,o.push(r),localStorage.setItem("quizes",JSON.stringify(o)),void e.props.dashboard()}},e.render=function(){return r.a.createElement("div",{id:"quizCreate",style:{display:"flex",flexFlow:"column"}},r.a.createElement("h1",null,"Quiz: ",e.state.title),r.a.createElement("form",{onSubmit:e.submit,style:{display:"flex",flexFlow:"column"}},r.a.createElement("h2",null,"Qustion ",e.state.currentQ),r.a.createElement("textarea",{value:e.state.question,type:"text",placeholder:"Enter Question",name:"question",onChange:e.changeInputState}),r.a.createElement("input",{type:"text",value:e.state.correctOp,placeholder:"Correct Option",style:{background:"green",color:"white"},name:"correctOp",onChange:e.changeInputState}),r.a.createElement("input",{type:"text",placeholder:"Option 1",name:"op1",value:e.state.op1,onChange:e.changeInputState}),r.a.createElement("input",{type:"text",placeholder:"Option 2",name:"op2",value:e.state.op2,onChange:e.changeInputState}),r.a.createElement("input",{type:"text",placeholder:"Option 3",name:"op3",value:e.state.op3,onChange:e.changeInputState}),r.a.createElement("button",{type:"submit"},"Add")))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(P.getRandomString(16));var t=Number(prompt("Enter Number Of Questions"));isNaN(t)||t<1?this.componentDidMount():this.setState({noOfQ:t},(function(){var t=prompt("Enter Quiz Title");e.setState({title:t},(function(){var t=prompt("Enter SubjectID");e.setState({subject:t},(function(){e.setState({quiz:{subject:e.state.subject,noOfQ:e.state.noOfQ,title:e.state.title,createdBy:e.props.username}})}))}))}))}}]),a}(n.Component),H=a(154),K=(n.Component,a(60)),X=a(76),Y=a(3),Z=a(162),$=a(140),_=a(158),ee=a(155),te=a(156),ae=a(157),ne=a(61),re=a.n(ne),oe=a(62),se=a.n(oe),ce=Object(y.a)({list:{width:250},fullList:{width:"auto"}});function ie(){var e=ce(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(X.a)(t,2),n=a[0],o=a[1],s=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(Object(K.a)(Object(K.a)({},n),{},Object(c.a)({},e,t)))}};return r.a.createElement("div",null,["left"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(h.a,{onClick:s(t,!0)},r.a.createElement(W.a,{style:{color:"white"}})),r.a.createElement(Z.a,{anchor:t,open:n[t],onClose:s(t,!1)},function(t){return r.a.createElement("div",{className:Object(Y.a)(e.list,Object(c.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:s(t,!1),onKeyDown:s(t,!1)},r.a.createElement($.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,t){return r.a.createElement(ee.a,{button:!0,key:e},r.a.createElement(te.a,null,t%2===0?r.a.createElement(re.a,null):r.a.createElement(se.a,null)),r.a.createElement(ae.a,{primary:e}))}))),r.a.createElement(_.a,null),r.a.createElement($.a,null,["All mail","Trash","Spam"].map((function(e,t){return r.a.createElement(ee.a,{button:!0,key:e},r.a.createElement(te.a,null,t%2===0?r.a.createElement(re.a,null):r.a.createElement(se.a,null)),r.a.createElement(ae.a,{primary:e}))}))))}(t)))})))}a(95);var le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"".concat(e.root," Custom-Drawer")},r.a.createElement(R.a,{position:"static"},r.a.createElement(A.a,null,r.a.createElement(U.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(ie,null)),r.a.createElement(J.a,{variant:"h6",className:e.title},"News"),r.a.createElement(h.a,{className:e.loginButton,color:"inherit"},"Login"))))}}]),a}(r.a.Component),ue=(Object(d.a)((function(e){return{root:{backgroundColor:"red"},loginButton:Object(c.a)({float:"right",position:"absolute",right:0,backgroundColor:"white",width:100,marginRight:10},e.breakpoints.up("md"),{width:300})}}))(le),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:!1,login:!0,signUp:!1,username:"",quizCreate:!1},e.turnFalse=function(t){e.setState(Object(c.a)({},t,!1))},e.turnTrue=function(t){e.setState(Object(c.a)({},t,!0))},e.signUp=function(){e.setState({signUp:!0})},e.login=function(){e.setState({signUp:!1,user:!1,login:!0,username:""})},e.changeState=function(t){e.state.user?e.setState({user:!1},(function(){e.setState({username:"",signUp:!1,login:!0,quizCreate:!1})})):e.setState({user:!0},(function(){e.setState({username:t})})),console.log(e.state.username)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L,{changeState:this.changeState,username:this.state.username,turnTrue:this.turnTrue,turnFalse:this.turnFalse,login:this.login}),console.log(localStorage),!this.state.user&&this.state.signUp&&r.a.createElement(V,{changeState:this.changeState}),!this.state.user&&!this.state.signUp&&this.state.login&&r.a.createElement(f,{changeState:this.changeState}),this.state.user&&!this.state.quizCreate&&r.a.createElement(T,{username:this.state.username}),this.state.user&&this.state.quizCreate&&r.a.createElement(G,{dashboard:function(){e.turnFalse("quizCreate")},username:this.state.username}))}}]),a}(n.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.52bb653d.chunk.js.map