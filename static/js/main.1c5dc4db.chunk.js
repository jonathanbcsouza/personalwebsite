(this["webpackJsonpjonathanbcsouza.github.io"]=this["webpackJsonpjonathanbcsouza.github.io"]||[]).push([[0],{25:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a,i,r,o,l,c,s,m,p,d,u,h,b,g,x,f,w=t(1),v=t.n(w),y=t(20),E=t.n(y),j=t(13),k=t(4),z=t(8),O=t(2),I=t(3),S=[{id:0,title:"Home",url:"/home"},{id:1,title:"About",url:"/about"},{id:2,title:"Labs",url:"/lab"},{id:3,title:"Music",url:"/music"}],C=t(7),D=I.a.div(a||(a=Object(O.a)(["\n  display: none;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 10px 25px;\n  height: 50px;\n  font-size: 1.3333em;\n  cursor: pointer;\n  color: var(--text-orange);\n  background-image: linear-gradient(",", #000);\n\n  @media (max-width: 615px) {\n    display: flex;\n  }\n"])),(function(e){return e.colour})),A=function(e){return e.isBtnCLicked?v.a.createElement(D,null,v.a.createElement(C.a,null)):v.a.createElement(D,null,v.a.createElement(C.f,null))},H=I.a.nav(i||(i=Object(O.a)(["\n  text-transform: uppercase;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  padding-left: 5vw;\n  width: 100%;\n\n  @media (max-width: 615px) {\n    padding-left: 0vw;\n  }\n\n  ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    text-align: center;\n    float: left;\n\n    @media (max-width: 615px) {\n      flex-direction: column;\n      border-color: none;\n      float: none;\n      padding-left: 0vw;\n    }\n\n    * :hover {\n      color: var(--text-hovers);\n      border-bottom: 1px solid;\n      border-color: var(--text-hovers);\n    }\n  }\n"]))),J=I.a.div(r||(r=Object(O.a)(["\n  margin: 10px;\n\n  a {\n    display: block;\n    padding: 30px;\n    color: var(--text-white);\n  }\n  @media (max-width: 615px) {\n    display: ",";\n    height: inherit;\n    margin: 10px 0;\n  }\n"])),(function(e){return e.isBtnCLicked?"none":""})),L=function(){var e=Object(w.useState)(!0),n=Object(z.a)(e,2),t=n[0],a=n[1],i=function(){return a(!t)};return v.a.createElement(H,null,v.a.createElement("ul",null,v.a.createElement("div",{onClick:i},v.a.createElement(A,{isBtnCLicked:t})),S.map((function(e){return v.a.createElement(J,{isBtnCLicked:t,key:e.id},v.a.createElement(j.b,{onClick:i,activeStyle:{background:"#121212"},to:e.url},e.title))}))))},M=t(0),P=t(24),G=[{component:v.a.createElement(C.b,{color:"#fff"}),link:"https://github.com/jonathanbcsouza"},{component:v.a.createElement(C.c,{color:"#0e76a8"}),link:"https://www.linkedin.com/in/jonathanbcsouza/"},{component:v.a.createElement(C.d,{color:"#fff"}),link:"https://medium.com/@jonathanbcsouza"},{component:v.a.createElement(C.e,{color:"#1DB954"}),link:"https://open.spotify.com/artist/3SzDQcUhTIhN8GvnxHIgHE?si=tyMKA77PSuCh7WNEyazPpg"},{component:v.a.createElement(C.g,{color:"#00acee"}),link:"https://www.twitter.com/jonathanbcsouza"},{component:v.a.createElement(P.a,{color:"#fff"}),link:"https://codesandbox.io/u/jonathanbcsouza"}],B=I.a.div(o||(o=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 10px;\n  path {\n    transition: fill 0.4s ease;\n  }\n  svg:hover {\n    fill: red;\n    height: 30px;\n    flex-direction: row;\n    cursor: pointer;\n  }\n"]))),T=I.a.a.attrs((function(e){return{href:e.link,target:"_blank"}}))(l||(l=Object(O.a)(["\n  margin: 2px;\n"]))),N=function(){return v.a.createElement(B,null,v.a.createElement(M.b.Provider,{value:{size:"32"}},v.a.createElement("h3",null,"Let's Connect!"),v.a.createElement("br",null),v.a.createElement("div",null,G.map((function(e){return v.a.createElement(T,{key:e.link,link:e.link},e.component)})))))},_=(new Date).getFullYear(),Q=I.a.div(c||(c=Object(O.a)(["\n  position: fixed;\n  color: var(--text-orange);\n  padding-bottom: 10px;\n  bottom: 0;\n  width: 100vw;\n  text-align: center;\n  font-size: 12px;\n  border-top: 1px solid var(--headers);\n"]))),U=function(){return v.a.createElement(Q,null,v.a.createElement(N,null),v.a.createElement("br",null),v.a.createElement("p",null,"Copyright ",_," \xa9 Jonathan Souza"))},F=I.a.p(s||(s=Object(O.a)(["\n  z-index: 2;\n  color: hsl(35, 100%, ",");\n"])),(function(e){return e.setLightness+"%"})),X=(new Date).getHours(),q=function(e){var n=Object(w.useState)("loading..."),t=Object(z.a)(n,2),a=t[0],i=t[1];return setInterval((function(){i(X>6&&X<12?"morning":X<17?"afternoon":"evening")}),1e3),v.a.createElement(F,{setLightness:e.setHsl},v.a.createElement("p",null,"Good ",a))},W=I.a.div(m||(m=Object(O.a)(["\n  position: relative;\n  top: 20vh;\n  padding-left: 7.5vw;\n  color: var(--text-white);\n  z-index: 0;\n  height: 200px;\n\n  h2 {\n    animation-name: text_entrance;\n    animation-duration: 3s;\n    animation-fill-mode: both;\n  }\n  p {\n    position: relative;\n    animation-name: text_entrance;\n    animation-duration: 3s;\n    animation-fill-mode: both;\n  }\n  p {\n    height: 0;\n    animation-delay: 1s;\n  }\n\n  @keyframes text_entrance {\n    from {\n      top: 0px;\n      opacity: 0;\n    }\n    to {\n      top: 20px;\n      opacity: 1;\n    }\n  }\n\n  @media (max-width: 615px) {\n    padding-left: 3vw;\n  }\n"]))),K=function(){var e=Object(w.useState)("loading..."),n=Object(z.a)(e,2),t=n[0],a=n[1];var i=Object(w.useState)("..."),r=Object(z.a)(i,2),o=r[0],l=r[1];function c(){var e=100-Math.round(100*p/235959)/2;l(e)}var s=t.split(":"),m=Object(z.a)(s,3),p=m[0]+m[1]+m[2];return setInterval((function(){!function(){var e=(new Date).toLocaleTimeString();a(e)}(),c()}),1e3),v.a.createElement(W,null,v.a.createElement("h2",null,"I am Jonathan Souza."),v.a.createElement("p",null,"I am a Web Developer with passion for the web, innovation and art."),v.a.createElement("br",null),v.a.createElement(q,{setHsl:o}))},Y=I.a.div(p||(p=Object(O.a)(["\n  display: flex;\n  padding: 18% 5% 20px;;\n  height: 100%;\n  color: var(--text-white);\n  font-size: 1em;\n  line-height: 26px;\n  @media screen and (max-width: 615px) {\n    display: block;\n    line-height: 30px;\n    padding-bottom: 35%;\n  }\n"]))),Z=I.a.img.attrs({src:"https://avatars.githubusercontent.com/u/25882133?s=460&v=4"})(d||(d=Object(O.a)(["\n  margin-right: 40px;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n"]))),R=I.a.div(u||(u=Object(O.a)(["\n  h1 {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 16px;\n    letter-spacing: 0.05em;\n  }\n"]))),V=function(){return v.a.createElement(Y,null,v.a.createElement(Z,null),v.a.createElement(R,null,v.a.createElement("h1",null,"Learn, create, work and repeat."),v.a.createElement("p",null,"I am a Web Developer passionate about the internet, data and quality as I believe that together, they can be powerful and meaningful in many ways to change people's lives.",v.a.createElement("br",null),"Over the years I have got experience and knowledge of a wide range of tools that aligned with creativity and resilience, allowed me to help people to solve their problems and improve their processes on a daily basis. I love to be learning, chasing innovation and helping whoever is around me to achieve their goals and reach their next level",v.a.createElement("br",null),"I am also a multi-instrumentalist/producer/mixer and since I was young, music has been a big passion. In my free time, I like to stay with my family and friends, learn new stuff, play my guitar, compose songs or make notes about new ideas.")))},$=I.a.div(h||(h=Object(O.a)(["\n  z-index: 0;\n  margin: 25px 20px 0 20px;\n  width: 520px;\n  height: 320px;\n  position: relative;\n  top: 0;\n  transition: top 0.5s ease;\n  border-radius: 20px;\n  box-shadow: 3px 3px 4px 1px rgba(50, 50, 50, 0.75);\n  background: rgba(28, 27, 27, 0.29);\n\n  iframe {\n    filter: blur(2px);\n    opacity: 0.5;\n    width: 100%;\n    height: 95%;\n    text-align: center;\n    margin: 10px;\n    border: none;\n    border-radius: 20px;\n    max-width: 96%;\n  }\n\n  img {\n    filter: blur(2px);\n    max-height: 95%;\n    margin: auto;\n    display: block;\n    border-radius: 20px;\n    max-width: 96%;\n  }\n\n  p {\n    position: absolute;\n    text-align: center;\n    top: 29%;\n    width: 100%;\n    padding: 50px 0;\n    opacity: 0.9;\n  }\n\n  &:hover {\n    top: -10px;\n    transition: top 0.5s ease;\n    -webkit-filter: saturate(1);\n\n    iframe,\n    img {\n      filter: blur(0);\n      opacity: 1;\n      transition: opacity 0.2s ease, filter 0.2s ease;\n      border: none;\n    }\n    p {\n      display: none;\n    }\n  }\n\n  @media (max-width: 615px) {\n    width: 320px;\n    height: 220px;\n  }\n"]))),ee=function(e){var n="".concat(e.content);return v.a.createElement($,null,v.a.createElement("p",null,v.a.createElement("h3",null,e.title),v.a.createElement("br",null),e.tech),v.a.createElement(n,{allowfullscreen:"allowfullscreen",src:e.src,title:e.title}))},ne=[{type:"img",tech:"Android - Java",src:"https://raw.githubusercontent.com/jonathanbcsouza/P6-NZ-Guide/master/screenshots/cover.png",title:"Tour Guide NZ"},{type:"img",tech:"Android - Java",src:"https://raw.githubusercontent.com/jonathanbcsouza/mymusicapp/master/screenshots/screenshot_library.png",title:"Music Player"},{type:"iframe",tech:"Javascript/React",src:"https://codesandbox.io/embed/js-array-and-object-methods-and-arrow-functions-fvyww?fontsize=14&hidenavigation=1&theme=dark&view=editor",title:"JS Array and Object Methods and Arrow Functions"},{type:"iframe",tech:"Javascript",src:"https://codesandbox.io/embed/dom-access-methods-uoxm5?fontsize=14&hidenavigation=1&theme=dark",title:"Dom Access Methods"},{type:"iframe",tech:"C programming",src:"https://www.youtube.com/embed/XKU81C9e_5I",title:"Encryption decoder"},{type:"iframe",tech:"C programming",src:"https://www.youtube.com/embed/QTI3PEhvXto",title:"Mario Pyramid"},{type:"img",tech:"Data Analysis with Python",src:"/personalwebsite/images/projects/da-python.png",title:"Medical appointments in Brazil Analysis"},{type:"img",tech:"Data Analysis with Excel",src:"/personalwebsite/images/projects/da-excel.png",title:"QA Management System and Dashboard"},{type:"iframe",tech:"Pseudocode with Scratch",src:"https://scratch.mit.edu/projects/385143391/embed",title:"Covid 19 - Pseudocode and Educational Game"}],te=I.a.div(b||(b=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  margin: 7% 0 20% 0;\n  color: var(--text-white);\n  z-index: 0;\n"]))),ae=function(){return v.a.createElement(te,null,ne.map((function(e){return v.a.createElement(ee,{content:e.type,src:e.src,title:e.title,tech:e.tech})})))},ie=t(14),re=Object(I.a)(ie.a)(g||(g=Object(O.a)(["\n  border: none;\n"]))),oe=I.a.div(x||(x=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 10% 0 28% 0;\n\n  iframe {\n    margin: 5% 8px 8px 5px;\n  }\n"]))),le=function(){return v.a.createElement(v.a.Fragment,null,v.a.createElement(oe,null,v.a.createElement(re,{src:"https://open.spotify.com/follow/1/?uri=spotify:artist:3SzDQcUhTIhN8GvnxHIgHE&size=detail&theme=dark&show-count=0",width:"300",height:"56"},v.a.createElement("p",null,"asds")),v.a.createElement(ie.a,{src:"https://open.spotify.com/embed/artist/3SzDQcUhTIhN8GvnxHIgHE",width:"400",height:"300",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}),v.a.createElement("br",null),v.a.createElement(ie.a,{width:"400",height:"300",src:"https://www.youtube.com/embed/XG4swCFqX38",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))},ce=(I.a.div(f||(f=Object(O.a)(['\n  height: 80vh;\n  margin-top: 10vh;\n  background-image: url("https://pbs.twimg.com/media/EsJqDoAU0AInOjw?format=jpg&name=4096x4096");\n  background-repeat: no-repeat;\n  background-size: contain;\n  filter: grayscale(40%);\n  background-attachment: fixed;\n  opacity: ',";\n\n  @media (min-width: 615px) {\n    background-position: center;\n    margin-top: 1vh;\n  }\n"])),(function(e){return e.opc})),function(){return v.a.createElement(j.a,null,v.a.createElement(q,null),v.a.createElement(L,null),v.a.createElement(k.c,null,v.a.createElement(k.a,{path:"/personalwebsite",component:K,exact:!0}),v.a.createElement(k.a,{path:"/home",component:K,exact:!0}),v.a.createElement(k.a,{path:"/about",component:V,exact:!0}),v.a.createElement(k.a,{path:"/lab",component:ae,exact:!0}),v.a.createElement(k.a,{path:"/music",component:le,exact:!0})),v.a.createElement(U,null))}),se=(t(36),document.getElementById("root"));E.a.render(v.a.createElement(v.a.StrictMode,null,v.a.createElement(ce,null)),se)}},[[25,1,2]]]);
//# sourceMappingURL=main.1c5dc4db.chunk.js.map