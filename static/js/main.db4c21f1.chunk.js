(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/project1.96cc7dfc.jpg"},function(e,t,a){e.exports=a.p+"static/media/project2.b6e3d183.jpg"},function(e,t,a){e.exports=a.p+"static/media/project3.d380dc11.jpg"},function(e,t,a){e.exports=a.p+"static/media/project4.78c38639.jpg"},function(e,t,a){e.exports=a.p+"static/media/project5.cf705a1c.jpg"},function(e,t,a){e.exports=a.p+"static/media/project6.41bfdf86.jpg"},function(e,t,a){e.exports=a.p+"static/media/headshot.79ec9b07.jpg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=(a(20),a(21),a(1)),i=a(2),s=a(5),m=a(4),u=a(3);l.a.Component;var d=a(8),p=a.n(d),E=a(9),v=a.n(E),h=a(10),g=a.n(h),f=a(11),N=a.n(f),j=a(12),b=a.n(j),w=a(13),y=a.n(w),k=[p.a,v.a,g.a,N.a,b.a,y.a,"https://wallpapercave.com/wp/wp3727042.jpg"],O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).url=k[e.id-1],n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("img",{src:this.url,style:{width:"100%"},alt:"Project"})}}]),a}(l.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).description=l.a.createElement("div",null,l.a.createElement("h3",null,e.projects[e.id].title),l.a.createElement("p",null,e.projects[e.id].content)),n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"boxed"},l.a.createElement(O,{id:this.props.id}),this.description)}}]),a}(l.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).captions=["Tacos","Dumplings","Noodles","Corbin!"],n.state={date:new Date},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",{style:{color:"#3ded97"}},"Likes ",this.captions[this.state.date.getUTCSeconds()%4]))}}]),a}(l.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("img",{src:"http://images.clipartpanda.com/watermelon-clip-art-Gerald_G_Simple_Fruit_(FF_Menu)_16.png",className:"App-logo",alt:"logo"})),l.a.createElement("div",{className:"column"},l.a.createElement("div",null,l.a.createElement("h1",null,"Miasya"),l.a.createElement(x,null),l.a.createElement("ul",null,l.a.createElement("li",null,"Honours Software Engineering at McGill University"),l.a.createElement("li",null,"Google STEP Intern")))))}}]),a}(l.a.Component),S=a(14),M=a.n(S);var _=function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("img",{src:M.a,style:{width:"98.5vw"},alt:"Headshot of Miasya"}),l.a.createElement("div",{className:"landingText"},l.a.createElement("h2",null,"Software Engineer"),l.a.createElement("br",null),l.a.createElement("h3",null,"Schulich Leader Scholar")))},D={1:{title:"Brain-Controlled Wheelchair",content:"wooo yeet a github link"},2:{title:"EMG Finger Classification Armband",content:"wooowoooo"},3:{title:"ML Bootcamp: Sentiment Analysis Capstone",content:"woohooohooooooooo"},4:{title:"Envision Assistive Vision Device",content:"woooooo"},5:{title:"Maze-Solving Robot",content:"woooooo"},6:{title:"React Site!",content:"this thing lol"}},I={1:{title:"Quilt",content:"yesss"},2:{title:"Paint",content:"yasss"},3:{title:"Another Quilt",content:"yeet yeet"}};var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"column",style:{textAlign:"left",fontWeight:"bold"}},"Miasya Bulger"),l.a.createElement("div",{className:"column",style:{textAlign:"right"}},"Home | Technical Projects | Creative Projects | Contact")),l.a.createElement("div",{className:"App-body"},l.a.createElement(_,null),l.a.createElement("div",{className:"intro-page"},l.a.createElement(C,null)),l.a.createElement("h3",null,"Technical Projects"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column side"}),l.a.createElement("div",{className:"column middle"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"1",projects:D})),l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"2",projects:D})),l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"3",projects:D})))),l.a.createElement("div",{className:"column side"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column side"}),l.a.createElement("div",{className:"column middle"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"4",projects:D})),l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"5",projects:D})),l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"6",projects:D})))),l.a.createElement("div",{className:"column side"})),l.a.createElement("h3",null,"Creative Projects"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column side"}),l.a.createElement("div",{className:"column middle"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"1",projects:I})),l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"2",projects:I})),l.a.createElement("div",{className:"column"},l.a.createElement(A,{id:"3",projects:I})))),l.a.createElement("div",{className:"column side"})),l.a.createElement("h3",null,"Research Experience"),l.a.createElement("div",{className:"row"},l.a.createElement("ul",null,l.a.createElement("li",null,"more coming soooon!"),l.a.createElement("li",null,"wheelchair"),l.a.createElement("li",null,"brief time with mcgill med"),l.a.createElement("li",null,"genetics thing in high school"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("a",{className:"App-link",href:"mailto:miasya.bulger@mail.mcgill.ca",target:"_blank",rel:"noopener noreferrer"},"Email")),l.a.createElement("div",{className:"column"},l.a.createElement("a",{className:"App-link",href:"https://linkedin.com/in/miasyabulger",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),l.a.createElement("div",{className:"column"},l.a.createElement("a",{className:"App-link",href:"https://github.com/miasya",target:"_blank",rel:"noopener noreferrer"},"Github")))),l.a.createElement("footer",{className:"App-footer"},l.a.createElement("p",null,"Have a great day!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.db4c21f1.chunk.js.map