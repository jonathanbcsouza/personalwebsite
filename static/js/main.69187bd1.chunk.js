(this["webpackJsonpjonathanbcsouza.github.io"]=this["webpackJsonpjonathanbcsouza.github.io"]||[]).push([[0],{26:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a,r,i,o,l,c,s,m,u,d,p,h=t(1),b=t.n(h),g=t(21),f=t.n(g),x=t(11),v=t(2),w=t(3),E=[{id:0,title:"Home",url:"/home"},{id:1,title:"About",url:"/about"},{id:2,title:"Labs",url:"/lab"},{id:3,title:"Music",url:"/music"}],y=t(9),j=w.a.div(a||(a=Object(v.a)(["\n  display: none;\n  align-items: center;\n  justify-content: flex-end;\n  color: ",";\n  background-image: linear-gradient(",", #000);\n  cursor: pointer;\n  padding: 10px 25px;\n  height: 50px;\n  font-size: 24px;\n\n  &:hover {\n    background-image: linear-gradient(",", #000);\n    cursor: pointer;\n    transition: 0.5s;\n\n  }\n  @media (max-width: 615px) {\n    display: flex;\n  }\n"])),(function(e){return e.colour}),(function(e){return e.backColour}),(function(e){return e.backColour})),k=function(e){return e.isBtnCLicked?b.a.createElement(j,{colour:"var(--text-orange)"},b.a.createElement(y.a,null)):b.a.createElement(j,{backColour:"#121212",colour:"darkred"},b.a.createElement(y.f,null))},z=t(15),O=w.a.nav(r||(r=Object(v.a)(["\n  text-transform: uppercase;\n  margin-top: -10px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n"]))),C=w.a.ul(i||(i=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n\n  & :hover {\n    color: var(--text-hovers);\n    border-bottom: 1px solid;\n    border-color: var(--text-hovers);\n  }\n\n  @media (max-width: 615px) {\n    flex-direction: column;\n    border-color: none;\n\n    & :hover {\n    color: var(--text-hovers);\n    border-bottom: none;\n  }\n  }\n\n  }\n"]))),S=w.a.div(o||(o=Object(v.a)(["\n  margin: 10px;\n\n  a {\n    display: block;\n    padding: 30px;\n    color: var(--text-white);\n  }\n\n  @media (max-width: 615px) {\n    display: ",";\n    height: inherit;\n  }\n"])),(function(e){return e.isBtnCLicked?"none":""})),I=w.a.div(l||(l=Object(v.a)([""]))),A=function(){var e=Object(h.useState)(!0),n=Object(x.a)(e,2),t=n[0],a=n[1],r=function(){return a(!t)};return b.a.createElement(O,null,b.a.createElement(C,null,b.a.createElement(I,{onClick:r},b.a.createElement(k,{isBtnCLicked:t})),E.map((function(e){return b.a.createElement(S,{isBtnCLicked:t,key:e.id},b.a.createElement(z.b,{onClick:r,activeStyle:{background:"#121212"},to:e.url},e.title))}))))},D=w.a.div(c||(c=Object(v.a)(["\n  position: relative;\n  top: 0vh;\n  z-index: 11;\n  display: inline-block;\n  font-size: smaller;\n  float: right;\n  margin-right: 2%;\n\n  @media (max-width: 615px) {\n    float: left;\n    margin-left: 10px;\n  }\n"]))),J=w.a.div(s||(s=Object(v.a)(["\n  ","\n"])),""),M=(new Date).toLocaleTimeString(),P=function(){var e=Object(h.useState)("#d8b97f"),n=Object(x.a)(e,2),t=n[0],a=n[1];var r=Object(h.useState)("..."),i=Object(x.a)(r,2),o=i[0],l=i[1];var c=Object(h.useState)(M),s=Object(x.a)(c,2),u=s[0],d=s[1];function p(e,n,t,a){return m<12?n:m<18?t:a}setInterval((function(){!function(){var e=(new Date).toLocaleTimeString();d(e)}(),function(){m=(new Date).getHours();var e=p(void 0,"d8b97f","orange","green");a(e)}(),function(){m=(new Date).getHours();var e=p(void 0,"morning","afternoon","evening");l(e)}()}),1e3);var g=u.split(":"),f=Object(x.a)(g,3),v=f[0]+f[1]+f[2];function w(e){return Math.round(100*e/235959)}return b.a.createElement(b.a.Fragment,null,b.a.createElement("br",null),b.a.createElement(D,null,b.a.createElement("p",{style:{color:t}},"Good ",o,". ",b.a.createElement("br",null)," Total day spent ",w(v)," %."),b.a.createElement("br",null),b.a.createElement(J,{width:w(v)})))},L=(w.a.div(u||(u=Object(v.a)(['\n  height: 80vh;\n  background-repeat: no-repeat;\n  background-size: contain;\n  filter: grayscale(40%);\n  margin-top: 10vh;\n  background-image: url("https://pbs.twimg.com/media/EsJqDoAU0AInOjw?format=jpg&name=4096x4096");\n  opacity: ',";\n  background-attachment: fixed;\n\n  @media (min-width: 615px) {\n    background-position: center;\n    margin-top: 1vh;\n  }\n"])),(function(e){return e.opc})),w.a.div(d||(d=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  path {\n    transition: fill 0.4s ease;\n  }\n\n  svg:hover {\n    fill: red;\n    height: 30px;\n    flex-direction: row;\n    cursor: pointer;\n  }\n"])))),B=w.a.a.attrs((function(e){return{href:e.link,target:"_blank"}}))(p||(p=Object(v.a)(["\n  margin: 2px;\n"]))),F=t(0),T=t(25),G=[{component:b.a.createElement(y.b,{color:"#fff"}),link:"https://github.com/jonathanbcsouza"},{component:b.a.createElement(y.c,{color:"#0e76a8"}),link:"https://www.linkedin.com/in/jonathanbcsouza/"},{component:b.a.createElement(y.d,{color:"#fff"}),link:"https://medium.com/@jonathanbcsouza"},{component:b.a.createElement(y.e,{color:"#1DB954"}),link:"https://open.spotify.com/artist/3SzDQcUhTIhN8GvnxHIgHE?si=tyMKA77PSuCh7WNEyazPpg"},{component:b.a.createElement(y.g,{color:"#00acee"}),link:"https://www.twitter.com/jonathanbcsouza"},{component:b.a.createElement(T.a,{color:"#fff"}),link:"https://codesandbox.io/u/jonathanbcsouza"}];function H(){return G.map((function(e){return b.a.createElement(B,{key:e.link,link:e.link},e.component)}))}var _,N,q,Q,U,K,W,X=function(){return b.a.createElement("div",null,b.a.createElement("br",null),b.a.createElement(L,null,b.a.createElement(F.b.Provider,{value:{size:"32"}},b.a.createElement("h3",null,"Let's Connect!"),b.a.createElement("br",null),b.a.createElement("div",null,b.a.createElement(H,null)))))},Z=(new Date).getFullYear(),R=w.a.div(_||(_=Object(v.a)(["\n  text-align: center;\n  color: var(--text-orange);\n  font-size: 12px;\n  border-top: 1px solid var(--headers);\n  padding-bottom: 10px;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n"]))),Y=function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(R,null,b.a.createElement(X,null),b.a.createElement("br",null),b.a.createElement("p",null,"Copyright ",Z," \xa9 Jonathan Souza")))},V=t(4),$=function(){var e=w.a.div(N||(N=Object(v.a)(["\n    color: var(--text-white);\n    position: absolute;\n    top: 200px;\n    z-index: 0;\n    padding-left: 30vw;\n\n    h1,\n    p {\n      animation-name: text_entrance;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      animation-fill-mode: both;\n    }\n    p {\n      animation-delay: 2s;\n    }\n    @keyframes text_entrance {\n      from {\n        top: 0px;\n        color: black;\n      }\n      to {\n        top: 20px;\n        color: white;\n      }\n    }\n\n    @media (max-width: 615px) {\n      padding-left: 3vw;\n      margin: 0;\n      max-width: 90%;\n    }\n  "])));return b.a.createElement(e,null,b.a.createElement("h1",null,"Jonathan Souza"),b.a.createElement("br",null),b.a.createElement("p",null,"A Web Developer with passion for the web, innovation and art."))},ee=w.a.div(q||(q=Object(v.a)(["\n  color: var(--text-white);\n  padding: 15% 5%;\n  font-size: 16px;\n  line-height: 26px;\n  display: flex;\n  height: 100%;\n  padding-bottom: 20%;\n\n  @media screen and (max-width: 615px) {\n    display: block;\n    font-size: 18px;\n    line-height: 30px;\n    padding-bottom: 30%;\n  }\n"]))),ne=w.a.img.attrs({src:"https://avatars.githubusercontent.com/u/25882133?s=460&v=4"})(Q||(Q=Object(v.a)(["\n  margin-right: 40px;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n"]))),te=w.a.div(U||(U=Object(v.a)(["\n  h1 {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 16px;\n    letter-spacing: 0.05em;\n  }\n"]))),ae=function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(ee,null,b.a.createElement(ne,null),b.a.createElement(te,null,b.a.createElement("h1",null,"Learn, create, work and repeat."),b.a.createElement("p",null,"Over the years I had fun by acquiring experience and learning a bunch of tools that aligned with creativity and resilience, I could help companies to raise their value, their culture and to increase their revenue. I am addicted to innovation and very enthusiastic about learning new things, I am always improvement something!",b.a.createElement("br",null),"I am passionate about data, quality and web development as I believe that together, they are powerful and meaningful in many ways to change people's lives. In my free time, I like to stay with my family and friends, learn new stuff, compose songs or write new ideas somewhere.",b.a.createElement("br",null),"Should you want to chat with me, feel free to drop a message :)"))))},re=w.a.div(K||(K=Object(v.a)(["\n  z-index: 0;\n  margin: 20px 20px 20px 20px;\n  width: 520px;\n  height: 320px;\n  position: relative;\n  top: 0;\n  transition: top 0.5s ease;\n\n  iframe {\n    opacity: 0.5;\n    filter: blur(2px);\n    transition: filter 0.2s ease, filter 0.2s ease;\n    border-radius: 30px;\n    width: 100%;\n    height: 100%;\n    border: 0;\n    overflow: hidden;\n    box-shadow: 6px 6px 5px 0px rgba(82, 82, 82, 0.75);\n  }\n\n  img {\n    filter: blur(1px);\n\n    max-width: 100%;\n    max-height: 100%;\n    margin: 0 auto;\n    text-align: center;\n    display: block;\n    margin: auto;\n  }\n\n  p {\n    position: absolute;\n    text-align: center;\n    top: 29%;\n    width: 100%;\n    padding: 50px 0;\n  }\n\n  &:hover {\n    top: -10px;\n    transition: top 0.5s ease;\n\n    iframe,\n    img {\n      filter: blur(0);\n      opacity: 1;\n      transition: opacity 0.2s ease, filter 0.2s ease;\n      box-shadow: 8px 3px 15px 0px rgba(82, 82, 82, 0.85);\n    }\n    p {\n      display: none;\n    }\n  }\n\n  @media (max-width: 615px) {\n    width: 320px;\n    height: 220px;\n  }\n"]))),ie=function(e){var n="".concat(e.content);return b.a.createElement(re,null,b.a.createElement("p",null,b.a.createElement("h3",null,e.title),b.a.createElement("br",null),e.tech),b.a.createElement(n,{allowfullscreen:"allowfullscreen",src:e.src,title:e.title}))},oe=[{type:"img",tech:"Android - Java",src:"https://raw.githubusercontent.com/jonathanbcsouza/P6-NZ-Guide/master/screenshots/cover.png",title:"Tour Guide NZ"},{type:"img",tech:"Android - Java",src:"https://raw.githubusercontent.com/jonathanbcsouza/mymusicapp/master/screenshots/screenshot_library.png",title:"Music Player"},{type:"iframe",tech:"Javascript/React",src:"https://codesandbox.io/embed/js-array-and-object-methods-and-arrow-functions-fvyww?fontsize=14&hidenavigation=1&theme=dark&view=editor",title:"JS Array and Object Methods and Arrow Functions"},{type:"iframe",tech:"Javascript",src:"https://codesandbox.io/embed/dom-access-methods-uoxm5?fontsize=14&hidenavigation=1&theme=dark",title:"Dom Access Methods"},{type:"iframe",tech:"C programming",src:"https://www.youtube.com/embed/XKU81C9e_5I",title:"Encryption decoder"},{type:"iframe",tech:"C programming",src:"https://www.youtube.com/embed/QTI3PEhvXto",title:"Mario Pyramid"},{type:"img",tech:"Data Analysis with Python",src:"/personalwebsite/images/projects/da-python.png",title:"Medical appointments in Brazil Analysis"},{type:"img",tech:"Data Analysis with Excel",src:"/personalwebsite/images/projects/da-excel.png",title:"QA Management System and Dashboard"},{type:"iframe",tech:"Pseudocode with Scratch",src:"https://scratch.mit.edu/projects/385143391/embed",title:"Covid 19 - Pseudocode and Educational Game"}],le=function(){var e=w.a.div(W||(W=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    padding: 10% 0 12%;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    color: var(--text-white);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n    z-index: 0;\n  "])));return b.a.createElement(b.a.Fragment,null,b.a.createElement(e,null,oe.map((function(e){return b.a.createElement(ie,{content:e.type,src:e.src,title:e.title,tech:e.tech})}))))},ce=function(){return b.a.createElement(b.a.Fragment,null)},se=function(){return b.a.createElement("div",null,b.a.createElement(z.a,null,b.a.createElement(P,null),b.a.createElement(A,null),b.a.createElement(V.c,null,b.a.createElement(V.a,{path:"/",component:$,exact:!0}),b.a.createElement(V.a,{path:"/home",component:$,exact:!0}),b.a.createElement(V.a,{path:"/about",component:ae,exact:!0}),b.a.createElement(V.a,{path:"/lab",component:le,exact:!0}),b.a.createElement(V.a,{path:"/music",component:ce,exact:!0})),b.a.createElement(Y,null)))},me=(t(37),document.getElementById("root"));f.a.render(b.a.createElement(b.a.StrictMode,null,b.a.createElement(se,null)),me)}},[[26,1,2]]]);
//# sourceMappingURL=main.69187bd1.chunk.js.map