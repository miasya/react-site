(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/project1.96cc7dfc.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/project2.b6e3d183.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/project3.d380dc11.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/project4.78c38639.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/project5.cf705a1c.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/project6.41bfdf86.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/headshot.79ec9b07.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/watermelon-logo.01862a67.jpg"},27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),r=a.n(l),o=(a(32),a(5)),i=(a(43),a(1)),s=a(2),m=a(10),u=a(4),d=a(3);c.a.Component;var p=a(19),E=a.n(p),v=a(20),h=a.n(v),j=a(21),f=a.n(j),b=a(22),N=a.n(b),g=a(23),k=a.n(g),y=a(24),w=a.n(y),O=[E.a,h.a,f.a,N.a,k.a,w.a,"https://wallpapercave.com/wp/wp3727042.jpg"],C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).url=O[e.id-1],n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("img",{src:this.url,style:{width:"100%"},alt:"Project"})}}]),a}(c.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).description=c.a.createElement("div",null,c.a.createElement("h3",null,e.projects[e.id].title),c.a.createElement("p",null,e.projects[e.id].content)),n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"boxed"},c.a.createElement(C,{id:this.props.id}),this.description)}}]),a}(c.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).captions=["Tacos","Dumplings","Noodles","Corbin!"],n.state={date:new Date},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{style:{color:"#3ded97"}},"Likes ",this.captions[this.state.date.getUTCSeconds()%4]))}}]),a}(c.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:"http://images.clipartpanda.com/watermelon-clip-art-Gerald_G_Simple_Fruit_(FF_Menu)_16.png",className:"App-logo",alt:"logo"})),c.a.createElement("div",{className:"column"},c.a.createElement("div",null,c.a.createElement("h2",null,"Miasya"),c.a.createElement(x,null),c.a.createElement("ul",null,c.a.createElement("li",null,"Honours Software Engineering at McGill University"),c.a.createElement("li",null,"Google STEP Intern")))))}}]),a}(c.a.Component),L=a(25),M=a.n(L);var T=function(){return c.a.createElement("div",{className:"landing"},c.a.createElement("img",{src:M.a,style:{width:"100%"},alt:"Headshot of Miasya"}),c.a.createElement("div",{className:"landingText"},c.a.createElement("h2",null,"Software Engineer"),c.a.createElement("br",null),c.a.createElement("h3",null,"Schulich Leader Scholar")))},_=a(26),D=a.n(_),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).scrollToTop=function(){o.animateScroll.scrollToTop()},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"nav",id:"navbar"},c.a.createElement("div",{className:"nav-content"},c.a.createElement("img",{src:D.a,className:"nav-logo",alt:"Logo",onClick:this.scrollToTop}),c.a.createElement("ul",{className:"nav-items"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.Link,{activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:-70,duration:500},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.Link,{activeClass:"active",to:"section2",spy:!0,smooth:!0,offset:-70,duration:500},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.Link,{activeClass:"active",to:"section3",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.Link,{activeClass:"active",to:"section4",spy:!0,smooth:!0,offset:-70,duration:500},"Hobbies")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.Link,{activeClass:"active",to:"section5",spy:!0,smooth:!0,offset:-70,duration:500},"Research")),c.a.createElement("li",{className:"nav-item"},"CV"))))}}]),a}(c.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).title=e.title,n.content=e.content,n.dark=e.dark,n.id=e.id,n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"section"+(this.dark?" section-dark":"")},c.a.createElement("div",{className:"section-content",id:this.id},c.a.createElement("h1",{style:{textAlign:"center"}},this.title),c.a.createElement("p",null,this.content)))}}]),a}(c.a.Component),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).projects=e.projects,n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column side"}),c.a.createElement("div",{className:"column middle"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"1",projects:this.projects})),c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"2",projects:this.projects})),c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"3",projects:this.projects})))),c.a.createElement("div",{className:"column side"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column side"}),c.a.createElement("div",{className:"column middle"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"4",projects:this.projects})),c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"5",projects:this.projects})),c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"6",projects:this.projects})))),c.a.createElement("div",{className:"column side"})))}}]),a}(c.a.Component),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).projects=e.projects,n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column side"}),c.a.createElement("div",{className:"column middle"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"1",projects:this.projects})),c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"2",projects:this.projects})),c.a.createElement("div",{className:"column"},c.a.createElement(A,{id:"3",projects:this.projects})))),c.a.createElement("div",{className:"column side"})))}}]),a}(c.a.Component),B={1:{title:"Brain-Controlled Wheelchair",content:"wooo yeet a github link"},2:{title:"EMG Finger Classification Armband",content:"wooowoooo"},3:{title:"ML Bootcamp: Sentiment Analysis Capstone",content:"woohooohooooooooo"},4:{title:"Envision Assistive Vision Device",content:"woooooo"},5:{title:"Maze-Solving Robot",content:"woooooo"},6:{title:"React Site!",content:"this thing lol"}},F={1:{title:"Quilt",content:"yesss"},2:{title:"Paint",content:"yasss"},3:{title:"Another Quilt",content:"yeet yeet"}};var W=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(I,null),c.a.createElement("div",{className:"App-body"},c.a.createElement(G,{title:"Miasya",content:c.a.createElement(T,null),dark:!0,id:"section1"}),c.a.createElement(G,{title:"About",content:c.a.createElement(S,null),dark:!1,id:"section2"}),c.a.createElement(G,{title:"Projects",content:c.a.createElement(H,{projects:B}),dark:!0,id:"section3"}),c.a.createElement(G,{title:"Hobbies",content:c.a.createElement(P,{projects:F}),dark:!1,id:"section4"}),c.a.createElement(G,{title:"Experience",content:"end stuff",dark:!0,id:"section5"}),c.a.createElement("div",{className:"row"},c.a.createElement("ul",null,c.a.createElement("li",null,"more coming soooon!"),c.a.createElement("li",null,"wheelchair"),c.a.createElement("li",null,"brief time with mcgill med"),c.a.createElement("li",null,"genetics thing in high school"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement("a",{className:"App-link",href:"mailto:miasya.bulger@mail.mcgill.ca",target:"_blank",rel:"noopener noreferrer"},"Email")),c.a.createElement("div",{className:"column"},c.a.createElement("a",{className:"App-link",href:"https://linkedin.com/in/miasyabulger",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),c.a.createElement("div",{className:"column"},c.a.createElement("a",{className:"App-link",href:"https://github.com/miasya",target:"_blank",rel:"noopener noreferrer"},"Github")))),c.a.createElement("footer",{className:"App-footer"},c.a.createElement("p",null,"Have a great day!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0648d353.chunk.js.map