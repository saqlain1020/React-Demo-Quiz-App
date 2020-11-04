(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),s=a(30),i=a(10),u=a.n(i),l=a(18),m=a(14),p=a(22),h=a(27),d=a(24),f=a(23),b=a(176),g=a(163),v=a(6),E=(a(50),a(32)),x=a.n(E),O=a(54);O.a.initializeApp({apiKey:"AIzaSyA3OgXcuO8xj5GDwHJRgYRg4tuBtBq2q0g",authDomain:"react-quiz-app-a5116.firebaseapp.com",databaseURL:"https://react-quiz-app-a5116.firebaseio.com",projectId:"react-quiz-app-a5116",storageBucket:"react-quiz-app-a5116.appspot.com",messagingSenderId:"175000509759",appId:"1:175000509759:web:21e43ee4d93ff249dfc78a"});var y=O.a,j=O.a.firestore(),q=O.a.auth(),w=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.changeInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(m.a)({},a,n))},e.submit=function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.username,c=n.password,t.prev=2,t.next=5,y.auth().signInWithEmailAndPassword(r,c);case 5:e.props.history.push("/Dashboard"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),x()(null,t.t0.message,"error");case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=e.textField,a=e.heading,n=e.button,c=e.form,o=e.container,s=e.containerWrapper;return r.a.createElement("div",{className:s},r.a.createElement("div",{className:o},r.a.createElement("h1",{className:a},"Login"),r.a.createElement("form",{className:c,onChange:this.changeInput,onSubmit:this.submit},r.a.createElement(b.a,{name:"username",defaultValue:this.state.username,type:"text",id:"standard-basic",label:"Username",className:t}),r.a.createElement(b.a,{type:"password",name:"password",defaultValue:this.state.password,id:"standard-basic",label:"Password",className:t}),r.a.createElement(g.a,{className:n,type:"submit",variant:"contained",color:"secondary"},"Submit"))))}}]),a}(n.Component),k=Object(v.a)((function(e){return{textField:{display:"block",margin:10},button:{background:"#6c5ce7","&:hover":{backgroundColor:"#222"},marginTop:10},heading:{fontFamily:"Roboto",fontWeight:"900",fontSize:40,marginBottom:20},containerWrapper:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"linear-gradient(0deg, #2d3436,#0984e3);",height:"calc(100vh - 64px)",width:"100%"},container:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"white",padding:30,borderRadius:10,height:"350px"},form:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"}}}))(w),C=a(173),N=a(164),z=a(177),S=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={user:null,questionNo:1,buttonText:"Next",ch1:!1,ch2:!1,ch3:!1,ch4:!1,correctQs:0,checkedAns:"",quiz:{title:"",questions:[""]}},n.componentDidUpdate=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.user){e.next=6;break}return e.next=3,j.collection("users").where("uid","==",n.props.uid).get();case 3:e.sent.forEach((function(e){a=e.data()})),n.setState({user:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=Object(l.a)(u.a.mark((function e(){var t,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.rand=(3*Math.random()).toFixed(),t=n.props.match.params.quizid,e.next=4,j.collection("quizes").doc(t).get();case 4:a=e.sent,(r=a.data()).id=a.id,n.setState({quiz:r}),n.seconds=30*n.state.quiz.noOfQ,n.state.questionNo===n.state.quiz.noOfQ-1&&n.setState({buttonText:"Done"}),c=document.querySelector("#timer"),n.done=!1,setInterval(Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state.user,n.seconds--,c.innerHTML="Timer: ".concat(n.seconds," Sec Left"),0!==n.seconds){e.next=10;break}return a=(n.state.correctQs/n.state.quiz.noOfQ*100).toFixed(2)+"%",x()("Result","Correct Answers"+a,"info"),t.quizes.push({id:n.state.quiz.id,score:a}),e.next=9,j.collection("users").doc(t.docId).set(t);case 9:n.props.history.goBack();case 10:case"end":return e.stop()}}),e)}))),1e3);case 13:case"end":return e.stop()}}),e)}))),n.next=function(){n.rand=(3*Math.random()).toFixed(),n.state.questionNo===Number(n.state.quiz.noOfQ)-1&&n.setState({buttonText:"Done"}),n.state.checkedAns===n.state.quiz.questions[n.state.questionNo-1].correctOp?n.setState({correctQs:Number(n.state.correctQs)+1},n.showResult):n.showResult()},n.showResult=Object(l.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state.user,a=t.quizes?t.quizes:[],n.state.questionNo!==n.state.quiz.noOfQ){e.next=13;break}return r=(n.state.correctQs/n.state.quiz.noOfQ*100).toFixed(2)+"%",x()("Result","Correct Answers"+r,"info"),a.push({id:n.state.quiz.id,score:r}),t.quizes=a,console.log(t),e.next=10,j.collection("users").doc(t.docId).set(t);case 10:n.props.history.goBack(),e.next=15;break;case 13:return n.state.questionNo<n.state.quiz.noOfQ&&n.setState({questionNo:Number(n.state.questionNo)+1,ch1:!1,ch2:!1,ch3:!1,ch4:!1}),e.abrupt("return");case 15:case"end":return e.stop()}}),e)}))),n.checked=function(e){var t=e.target;n.setState({ch1:!1,ch2:!1,ch3:!1,ch4:!1},(function(){var e;n.setState((e={},Object(m.a)(e,t.name,!0),Object(m.a)(e,"checkedAns",t.value),e))}))},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.questionNo,a=e.buttonText,n=e.quiz,c=this.props.classes;return r.a.createElement("div",{className:c.containerWrapper},r.a.createElement("div",{className:c.container},r.a.createElement("h1",{className:c.title},"Title: ",n.title),r.a.createElement("div",{className:c.titleBar},r.a.createElement("h2",null,"Question ",t,"/",n.noOfQ),r.a.createElement("h3",{id:"timer",className:c.timer},"Timer: 120 Sec Left")),r.a.createElement("h2",{className:c.question},n.questions[t-1].question),"0"===this.rand&&r.a.createElement("div",{className:c.answers},r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:n.questions[t-1].op1}),label:n.questions[t-1].op1}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:n.questions[t-1].correctOp}),label:n.questions[t-1].correctOp}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:n.questions[t-1].op2}),label:n.questions[t-1].op2}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:n.questions[t-1].op3}),label:n.questions[t-1].op3})),"1"===this.rand&&r.a.createElement("div",{className:c.answers},r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:n.questions[t-1].correctOp}),label:n.questions[t-1].correctOp}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:n.questions[t-1].op1}),label:n.questions[t-1].op1}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:n.questions[t-1].op2}),label:n.questions[t-1].op2}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:n.questions[t-1].op3}),label:n.questions[t-1].op3})),"2"===this.rand&&r.a.createElement("div",{className:c.answers},r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:n.questions[t-1].op1}),label:n.questions[t-1].op1}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:n.questions[t-1].op2}),label:n.questions[t-1].op2}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:n.questions[t-1].correctOp}),label:n.questions[t-1].correctOp}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:n.questions[t-1].op3}),label:n.questions[t-1].op3})),"3"===this.rand&&r.a.createElement("div",{className:c.answers},r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch1,onChange:this.checked,name:"ch1",color:"primary",value:n.questions[t-1].op1}),label:n.questions[t-1].op1}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch2,onChange:this.checked,name:"ch2",color:"primary",value:n.questions[t-1].op2}),label:n.questions[t-1].op2}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch3,onChange:this.checked,name:"ch3",color:"primary",value:n.questions[t-1].op3}),label:n.questions[t-1].op3}),r.a.createElement(N.a,{control:r.a.createElement(z.a,{checked:this.state.ch4,onChange:this.checked,name:"ch4",color:"primary",value:n.questions[t-1].correctOp}),label:n.questions[t-1].correctOp})),r.a.createElement(g.a,{style:{marginTop:20},variant:"contained",color:"primary",onClick:this.next},a)))}}]),a}(n.Component),Q=Object(v.a)((function(){var e;return{containerWrapper:{display:"grid",gridTemplateColumns:"minmax(10px,1fr) minmax(min-content,1100px) minmax(10px,1fr)"},container:{gridArea:"1/2",display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"},title:{fontFamily:"Roboto",fontSize:35,fontWeight:900,margin:10,color:"#222"},titleBar:(e={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background:"#2c3e50"},Object(m.a)(e,"justifyContent","space-between"),Object(m.a)(e,"height","35px"),Object(m.a)(e,"paddingLeft","20px"),Object(m.a)(e,"paddingRight","20px"),Object(m.a)(e,"color","white"),Object(m.a)(e,"borderRadius","5px"),e),question:{color:"white",background:"#0984e3",padding:5,width:"100%",marginTop:"10px",border:"2px solid #0984e3"},answers:{border:"2px solid #0984e3",display:"flex",flexFlow:"column",width:"100%",padding:5}}}))(S),F=a(170),R=a(172),I=a(167),D=a(169),A=a(171),U=a(168),T=a(123),W=a(166),B=a(20),L=Object(W.a)((function(e){return{root:{padding:5,borderTop:"2px solid #222",height:"250px",flexFlow:"column",justifyContent:"space-around",alignItems:"left",width:"100%"},para:{fontSize:"20px",fontWeight:"500"}}})),M=Object(B.f)((function(e){var t=L();return r.a.createElement("div",{className:"".concat(t.root," flex")},r.a.createElement("p",{className:t.para},"Quiz Title: ",e.title,r.a.createElement("br",null),"Total Questions: ",e.noOfQ,r.a.createElement("br",null)),r.a.createElement("div",null,!e.score&&r.a.createElement(g.a,{style:{marginRight:5},variant:"contained",color:"primary",onClick:function(){e.history.push("/Quizes/".concat(e.id))}},"Continue"),r.a.createElement(g.a,{variant:"contained",color:"secondary",className:"back",onClick:function(){return e.history.goBack()}},"Back")),e.score&&r.a.createElement("h1",null,"Score: ",e.score))})),J=a(49),H=Object(v.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(I.a),P=Object(v.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(U.a),V=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={quizResult:"",rows:[],user:{}},e.componentDidUpdate=function(t){t!=e.props&&e.createRows()},e.createRows=Object(l.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.props.quizes,n=a?a.map((function(t){return{title:t.title,subject:t.subject,noofqs:t.noOfQ,id:t.id,onclick:function(){return e.quizClick(t.id)}}})):[],e.setState({rows:n});case 3:case"end":return t.stop()}}),t)}))),e.quizClick=function(t){var a,n=e.props.user;n.quizes&&n.quizes.forEach((function(e){e.id===t.id&&(!0,a=e.score)})),e.setState({quizResult:r.a.createElement(M,{key:Object(J.v4)(),title:t.title,noOfQ:t.noofqs,score:a,id:t.id})})},e.render=function(){var t=e.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(D.a,{component:T.a},r.a.createElement(F.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(A.a,null,r.a.createElement(U.a,null,r.a.createElement(H,null,"Title"),r.a.createElement(H,{align:"right"},"Subject"),r.a.createElement(H,{align:"right"},"No of Qs"))),r.a.createElement(R.a,null,e.state.rows?e.state.rows.map((function(t){return r.a.createElement(P,Object(m.a)({key:Object(J.v4)(),onClick:function(){e.quizClick(t)}},"key",t.title),r.a.createElement(H,{component:"th",scope:"row"},t.title),r.a.createElement(H,{align:"right"},t.subject),r.a.createElement(H,{align:"right"},t.noofqs))})):r.a.createElement(H,{align:"right"},"No Entries")))),e.state.quizResult)},e}return a}(r.a.Component),G=Object(v.a)((function(e){return{table:{},root:Object(m.a)({display:"flex"},e.breakpoints.down("md"),{flexFlow:"column"})}}))(V),K=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={quizOpen:!1,quiz:"",quizes:[],rows:[],user:{}},e.componentDidMount=Object(l.a)(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.courseName,n=[],t.next=4,j.collection("quizes").where("subject","==",a).get();case 4:return t.sent.forEach((function(e){var t=e.data();t.id=e.id,n.push(t)})),t.next=8,j.collection("users").where("uid","==",q.currentUser.uid).get();case 8:t.sent.forEach((function(e){r=e.data()})),e.setState({quizes:n,user:r});case 11:case"end":return t.stop()}}),t)}))),e.render=function(){return r.a.createElement("div",null,!e.state.quizOpen&&r.a.createElement("div",null,r.a.createElement(C.a,{style:{marginTop:30}},r.a.createElement(G,{quizes:e.state.quizes,username:e.props.username,rows:e.state.rows,user:e.state.user}))),e.state.quizOpen&&e.state.quiz)},e}return a}(r.a.Component),X=a(174),Y=a(175),Z=a(124),$=a(165),_=a(80),ee=a.n(_),te=Object(W.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginRight:10},button:{color:"white"}}}));function ae(e){var t=te();return r.a.createElement("div",{className:t.root},r.a.createElement(X.a,{position:"static"},r.a.createElement(Y.a,null,r.a.createElement($.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(s.b,{to:q.currentUser?"/Dashboard":"/Login"},r.a.createElement(ee.a,null))),r.a.createElement(Z.a,{variant:"h6",className:t.title,onClick:function(){e.turnFalse("quizCreate")}},"Quiz Application"),!e.user&&r.a.createElement("div",{style:{display:"flex",marginRight:"10px"}},r.a.createElement(s.b,{to:"/Signup"},r.a.createElement(g.a,{color:"inherit"},"SignUP")),r.a.createElement(s.b,{to:"/Login"},r.a.createElement(g.a,{color:"inherit"},"Login"))),e.user&&r.a.createElement("div",{style:{display:"flex",marginRight:"10px"}},r.a.createElement(Z.a,{variant:"h6",className:t.title},"Welcome ",e.username),r.a.createElement(s.b,{to:"/Quizcreate"},r.a.createElement(g.a,{color:"inherit"},"Create Quiz")),r.a.createElement(s.b,{onClick:function(){q.signOut()}},r.a.createElement(g.a,{color:"inherit"},"Logout"))))))}var ne=y.firestore(),re=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.componentDidMount=function(){},e.changeInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(m.a)({},a,n))},e.componentDidUpdate=function(){console.log(y.auth().currentUser)},e.submit=function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r,c,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.username,c=n.password,t.prev=2,t.next=5,y.auth().createUserWithEmailAndPassword(r,c);case 5:return t.sent,o={uid:y.auth().currentUser.uid,courses:[]},t.next=9,ne.collection("users").add(o);case 9:e.props.history.push("/Dashboard"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),x()(null,t.t0.message,"error");case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=e.textField,a=e.heading,n=e.button,c=e.form,o=e.container,s=e.containerWrapper;return r.a.createElement("div",{className:s},r.a.createElement("div",{className:o},r.a.createElement("h1",{className:a},"SignUp"),r.a.createElement("form",{className:c,onChange:this.changeInput,onSubmit:this.submit},r.a.createElement(b.a,{name:"username",defaultValue:this.state.username,type:"text",placeholder:"UserName",className:t,label:"Username"}),r.a.createElement(b.a,{className:t,type:"password",name:"password",defaultValue:this.state.password,label:"Password"}),r.a.createElement(g.a,{className:n,type:"submit",variant:"contained",color:"secondary"},"Submit"))))}}]),a}(n.Component),ce=Object(v.a)((function(e){return{textField:{display:"block",margin:10},button:{background:"#6c5ce7","&:hover":{backgroundColor:"#222"},marginTop:10},heading:{fontFamily:"Roboto",fontWeight:"900",fontSize:40,marginBottom:20},containerWrapper:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"linear-gradient(0deg, #2d3436,#0984e3);",height:"calc(100vh - 64px)",width:"100%"},container:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",background:"white",padding:30,borderRadius:10,height:"350px"},form:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column"}}}))(re),oe=a(82),se=a(81),ie=a.n(se),ue=(a(120),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={noOfQ:0,title:"",subject:"",op1:"",op2:"",op3:"",question:"",questions:[],correctOp:"",currentQ:"1",quiz:{}},e.changeInputState=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.submit=function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={question:e.state.question,correctOp:e.state.correctOp,op1:e.state.op1,op2:e.state.op2,op3:e.state.op3},(r=e.state.questions).push(n),e.setState({questions:r},(function(){e.setState({currentQ:Number(e.state.currentQ)+1,op1:"",op2:"",op3:"",question:"",correctOp:""})})),!(e.state.currentQ>=e.state.noOfQ)){t.next=13;break}return(c=e.state.quiz).questions=e.state.questions,console.log(c),t.next=11,j.collection("quizes").add(c);case 11:return e.props.history.push("/Dashboard"),t.abrupt("return");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.render=function(){var t=e.props.classes;return r.a.createElement(C.a,{style:{padding:"0 50px"}},r.a.createElement("div",{id:"quizCreate",style:{display:"flex",flexFlow:"column"}},r.a.createElement("h1",{className:t.mainHeading},"Quiz: ",e.state.title),r.a.createElement("form",{onSubmit:e.submit,style:{display:"flex",flexFlow:"column"}},r.a.createElement("h2",{className:t.mainHeading},"Question ",e.state.currentQ),r.a.createElement("textarea",{className:t.textArea,value:e.state.question,type:"text",placeholder:"Enter Question",name:"question",onChange:e.changeInputState}),r.a.createElement(b.a,{className:t.textField,style:{background:"#7bed9f"},onChange:e.changeInputState,name:"correctOp",value:e.state.correctOp,id:"outlined-basic",label:"Correct Option",variant:"outlined"}),r.a.createElement(b.a,{className:t.textField,name:"op1",value:e.state.op1,onChange:e.changeInputState,id:"standard-basic",label:"Option 1"}),r.a.createElement(b.a,{className:t.textField,name:"op2",value:e.state.op2,onChange:e.changeInputState,id:"standard-basic",label:"Option 2"}),r.a.createElement(b.a,{className:t.textField,name:"op3",value:e.state.op3,onChange:e.changeInputState,id:"standard-basic",label:"Option 3"}),r.a.createElement(g.a,{variant:"contained",color:"primary",type:"submit"},"Add"))))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Number,e.next=3,x()("Enter Number Of Questions",{content:"input"});case 3:e.t1=e.sent,t=(0,e.t0)(e.t1),isNaN(t)||t<1?this.componentDidMount():this.setState({noOfQ:t},Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("Enter Quiz Title",{content:"input"});case 2:t=e.sent,a.setState({title:t},Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,y.firestore().collection("courses").get();case 3:return e.sent.forEach((function(e){t.push(e.data().courseName)})),e.next=7,ie.a.fire({title:"Enter Course Name",input:"select",inputOptions:Object.assign.apply(Object,Object(oe.a)(t.map((function(e){return Object(m.a)({},e,e)}))))});case 7:n=e.sent,a.setState({subject:n.value},(function(){a.setState({quiz:{subject:a.state.subject,noOfQ:a.state.noOfQ,title:a.state.title,createdBy:q.currentUser.uid}})}));case 9:case"end":return e.stop()}}),e)}))));case 4:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component)),le=Object(v.a)((function(e){return{textArea:{outline:"1px solid blue",margin:"10px 0",height:"45px",fontWeight:"900",fontFamily:"Roboto",fontSize:"30px",color:"#222"},textField:{marginBottom:10},mainHeading:{fontFamily:"Roboto",fontWeight:"900"}}}))(ue),me=(a(121),Object(W.a)((function(e){var t;return{container:{width:"500px",borderRadius:5,overflow:"hidden"},heading:(t={background:"#6c5ce7",color:"white",fontFamily:"Roboto",fontSize:"20px",fontWeight:"30px"},Object(m.a)(t,"fontWeight","900"),Object(m.a)(t,"border","2px solid #6c5ce7"),Object(m.a)(t,"height","40px"),Object(m.a)(t,"letterSpacing","2px"),t),table:{border:"2px solid #6c5ce7"},item:{justifyContent:"space-between",padding:5},button:{height:"30px",background:"#0984e3"},buttonJoined:{background:"#00b894",color:"white",textDecoration:"none","&:hover":{color:"black"}},courseName:{fontFamily:"Raleway",fontWeight:"600"}}}))),pe=function(e){var t=me();return r.a.createElement("div",{className:"".concat(t.item," flex")},r.a.createElement("span",{className:t.courseName},e.courseName),r.a.createElement(s.b,{to:"/AllQuizes/".concat(e.courseName)},r.a.createElement(g.a,{className:"".concat(t.button," ").concat(t.buttonJoined),variant:"contained"},"Open")))},he=function(e){var t=me(),a=function(){var t=Object(l.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),(a=e.user.courses).push(e.courseName),console.log(a),(n=e.user).courses=a,t.next=8,j.collection("users").doc(e.user.docId).set(n);case 8:e.fetchCourses();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"".concat(t.item," flex")},r.a.createElement("span",{className:t.courseName},e.courseName),r.a.createElement(g.a,{onClick:a,className:t.button,variant:"contained",color:"primary"},"Join"))},de=function(e){var t=me();return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:"".concat(t.heading," flex")},e.heading),r.a.createElement("div",{className:t.table},e.joinedCourses&&e.joinedCourses.map((function(e){return r.a.createElement(pe,{key:Object(J.v4)(),courseName:e})})),e.recommendedCourses&&e.recommendedCourses.map((function(t){return r.a.createElement(he,{key:Object(J.v4)(),user:e.user,fetchCourses:e.fetchCourses,courseName:t})}))))},fe=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={joinedCourses:[],recommendedCourses:[],courses:[]},e.componentDidUpdate=function(t,a){console.log("Update"),t.user!==e.props.user&&e.fetchCourses()},e.getUserCourses=function(){try{var t=[];e.state.courses.filter((function(a){e.state.joinedCourses.some((function(e){if(e===a)return!0}))||t.push(a)})),e.setState({recommendedCourses:t})}catch(a){console.log(a)}},e.fetchCourses=Object(l.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,y.firestore().collection("courses").get();case 3:t.sent.forEach((function(e){a.push(e.data().courseName)})),e.setState({courses:a,joinedCourses:e.props.user.courses},e.getUserCourses);case 6:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){console.log(q.currentUser),console.log(e.props),console.log(e.state),console.log("Mounted"),e.fetchCourses()},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex",style:{flexFlow:"column",padding:50,height:"100%",justifyContent:"space-around"}},r.a.createElement(de,{joinedCourses:this.state.joinedCourses,heading:"JOINED COURSES"}),r.a.createElement(de,{recommendedCourses:this.state.recommendedCourses,user:this.props.user,fetchCourses:this.fetchCourses,heading:"RECOMMENDED COURSES"}))}}]),a}(n.Component),be=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:!1,login:!0,signUp:!1,username:"",quizCreate:!1,uid:""},e.turnFalse=function(t){e.setState(Object(m.a)({},t,!1))},e.turnTrue=function(t){e.setState(Object(m.a)({},t,!0))},e.fetchUser=Object(l.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.collection("users").where("uid","==",e.state.uid).get();case 2:t.sent.forEach((function(e){(a=e.data()).docId=e.id})),e.setState({user:a});case 5:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){var t=e.props.history;y.auth().onAuthStateChanged((function(a){var n=t.location.pathname.substring(1);a?(e.setState({uid:a.uid,user:a},(function(){console.log(e.state),e.fetchUser()})),"Signup"!==n&&"Login"!==n||t.push("/Dashboard")):("Signup"===n&&"Login"===n||t.push("/Login"),e.setState({user:null,uid:null}))}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"grid",gridTemplateRows:"64px 1fr",minHeight:"100vh"}},r.a.createElement(ae,{changeState:function(){e.changeState()},user:this.state.user,username:this.state.username,turnTrue:this.turnTrue,turnFalse:this.turnFalse,login:this.login}),r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"./",render:function(t){e.state.username?t.history.push("/Dashboard"):t.history.push("/Login")},exact:!0}),r.a.createElement(B.a,{path:"./Login",render:function(t){return r.a.createElement(k,Object.assign({},t,{changeState:e.changeState}))}}),r.a.createElement(B.a,{path:"./Signup",render:function(t){return r.a.createElement(ce,Object.assign({},t,{changeState:e.changeState}))}}),r.a.createElement(B.a,{path:"./Quizcreate",component:le}),r.a.createElement(B.a,{path:"./Dashboard",render:function(t){return r.a.createElement(fe,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(B.a,{path:"./AllQuizes/:courseName",render:function(e){return r.a.createElement(K,e)}}),r.a.createElement(B.a,{path:"./Quizes/:quizid",render:function(t){return r.a.createElement(Q,Object.assign({},t,{uid:e.state.uid}))}})),this.state.user&&this.state.quizCreate&&r.a.createElement(le,{dashboard:function(){e.turnFalse("quizCreate")},username:this.state.username}))}}]),a}(n.Component),ge=Object(B.f)(be);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(ge,null))),document.getElementById("root"))},50:function(e,t,a){},93:function(e,t,a){e.exports=a(122)}},[[93,1,2]]]);
//# sourceMappingURL=main.d1821940.chunk.js.map