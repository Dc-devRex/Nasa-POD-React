(this["webpackJsonpnasa-apod-react"]=this["webpackJsonpnasa-apod-react"]||[]).push([[0],{25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(16),i=a.n(r),o=(a(25),a(8)),l=a(2);var j=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsx)(o.b,{className:"home-link",to:"/nasaphoto",children:"View Nasa's Picture of the Day"})})},d=a(14),p=a.n(d),u=a(18),h=a(19);var b=function(){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsx)("ul",{children:Object(n.jsx)(o.b,{className:"link",to:"/",exact:!0,children:"Take Me Home"})})})},x="AMO1VoSe10MvgOuGfg33Xgw9kGUFKPrzaGEdXLSp";var O=function(){var e=Object(c.useState)(null),t=Object(h.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a),console.log(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"nasa-photo",children:["image"===a.media_type?Object(n.jsx)("img",{src:a.url,alt:a.title,className:"photo"}):Object(n.jsx)("iframe",{title:"space-video",src:a.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:a.title}),Object(n.jsx)("p",{className:"date",children:a.date}),Object(n.jsx)("p",{className:"explanation",children:a.explanation})]})]})]}):Object(n.jsx)("div",{})};a(32);var m=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l.a,{component:j,path:"/",exact:!0}),Object(n.jsx)(l.a,{component:O,path:"/nasaphoto"})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.ce817a02.chunk.js.map