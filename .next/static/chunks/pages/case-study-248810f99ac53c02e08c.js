(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{3987:function(e,i,t){"use strict";t.d(i,{Z:function(){return s}});var n=t(1664),r=t(5893);function s(){return(0,r.jsx)("footer",{children:(0,r.jsxs)("div",{className:"footer-container",children:[(0,r.jsxs)("div",{className:"footer_links",children:[(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{children:"Terms Of Services"})}),(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{children:"Privacy Policy"})})]}),(0,r.jsx)("div",{className:"footer-trademark",children:(0,r.jsx)("h1",{children:"Luau Data Corporation 2021 \xa9"})})]})})}},3044:function(e,i,t){"use strict";t.d(i,{Z:function(){return a}});var n=t(7294),r=t(1664),s=t(5893);function a(){var e=(0,n.useState)(!1),i=e[0];e[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{className:"header header1",children:(0,s.jsxs)("div",{className:"header1__container",children:[(0,s.jsx)("div",{className:"header1__logo",children:(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{children:"Luau Data Corporation"})})}),(0,s.jsxs)("ul",{className:"header1__collections-nav",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/eyesonsite",children:(0,s.jsx)("a",{children:"Overview"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/system",children:(0,s.jsx)("a",{children:"System"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/products",children:(0,s.jsx)("a",{children:"Products"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/case-study",children:(0,s.jsx)("a",{children:"Case Study"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/about",children:(0,s.jsx)("a",{children:"About"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/contact",children:(0,s.jsx)("a",{children:"Contact"})})})]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"",className:"header1__menu-btn",onClick:function(){setActive(!i)},children:"MENU"})})]})}),(0,s.jsxs)("div",{className:"header1__collections-mobile-nav active",children:[(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"",className:"header1__menu-close",children:(0,s.jsx)("i",{className:"fas fa-times"})})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/eyesonsite",children:(0,s.jsx)("a",{children:"Overview"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/system",children:(0,s.jsx)("a",{children:"System"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/products",children:(0,s.jsx)("a",{children:"Products"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/case-study",children:(0,s.jsx)("a",{children:"Case Study"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/about",children:(0,s.jsx)("a",{children:"About"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/contact",children:(0,s.jsx)("a",{children:"Contact"})})})]})]})]})}},1483:function(e,i,t){"use strict";t.d(i,{Z:function(){return r}});var n=t(5893);function r(e){return console.log(e.color),console.log(e.title),(0,n.jsx)("div",{className:"hero",style:{backgroundImage:"url(".concat(e.bG,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",display:"flex",alignItems:"center",justifyContent:"center",color:"".concat(e.color),height:"550px",width:"100vw"},children:(0,n.jsx)("h1",{children:e.title})})}},3257:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});var n=t(3044),r=t(3987),s=t(5893);function a(e){return console.log(e.color),console.log(e.title),(0,s.jsx)("div",{className:"videohero__background",children:(0,s.jsx)("div",{className:"videohero__foreground",children:(0,s.jsx)("video",{loop:"true",autoPlay:"autoplay",muted:!0,children:(0,s.jsx)("source",{src:"../src/videos/new-timelapse.mp4",type:"video/mp4"})})})})}function c(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)(a,{}),(0,s.jsx)("main",{children:e.children}),(0,s.jsx)(r.Z,{})]})}},369:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});var n=t(3044),r=t(3987),s=t(1483),a=t(5893);function c(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(s.Z,{bG:e.bG,title:e.title,color:e.color}),(0,a.jsx)("main",{children:e.children}),(0,a.jsx)(r.Z,{})]})}},2167:function(e,i,t){"use strict";var n=t(3038);i.default=void 0;var r,s=(r=t(7294))&&r.__esModule?r:{default:r},a=t(1063),c=t(4651),l=t(7426);var o={};function u(e,i,t,n){if(e&&a.isLocalURL(i)){e.prefetch(i,t,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[i+"%"+t+(r?"%"+r:"")]=!0}}var d=function(e){var i,t=!1!==e.prefetch,r=c.useRouter(),d=s.default.useMemo((function(){var i=a.resolveHref(r,e.href,!0),t=n(i,2),s=t[0],c=t[1];return{href:s,as:e.as?a.resolveHref(r,e.as):c||s}}),[r,e.href,e.as]),f=d.href,h=d.as,m=e.children,x=e.replace,p=e.shallow,j=e.scroll,v=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var g=(i=s.default.Children.only(m))&&"object"===typeof i&&i.ref,y=l.useIntersection({rootMargin:"200px"}),b=n(y,2),_=b[0],N=b[1],w=s.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);s.default.useEffect((function(){var e=N&&t&&a.isLocalURL(f),i="undefined"!==typeof v?v:r&&r.locale,n=o[f+"%"+h+(i?"%"+i:"")];e&&!n&&u(r,f,h,{locale:i})}),[h,f,N,v,t,r]);var k={ref:w,onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||function(e,i,t,n,r,s,c,l){("A"!==e.currentTarget.nodeName||!function(e){var i=e.currentTarget.target;return i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),i[r?"replace":"push"](t,n,{shallow:s,locale:l,scroll:c}))}(e,r,f,h,x,p,j,v)},onMouseEnter:function(e){a.isLocalURL(f)&&(i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),u(r,f,h,{priority:!0}))}};if(e.passHref||"a"===i.type&&!("href"in i.props)){var L="undefined"!==typeof v?v:r&&r.locale,q=r&&r.isLocaleDomain&&a.getDomainLocale(h,L,r&&r.locales,r&&r.domainLocales);k.href=q||a.addBasePath(a.addLocale(h,L,r&&r.defaultLocale))}return s.default.cloneElement(i,k)};i.default=d},7426:function(e,i,t){"use strict";var n=t(3038);Object.defineProperty(i,"__esModule",{value:!0}),i.useIntersection=function(e){var i=e.rootMargin,t=e.disabled||!a,l=r.useRef(),o=r.useState(!1),u=n(o,2),d=u[0],f=u[1],h=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||d||e&&e.tagName&&(l.current=function(e,i,t){var n=function(e){var i=e.rootMargin||"",t=c.get(i);if(t)return t;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var i=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;i&&t&&i(t)}))}),e);return c.set(i,t={id:i,observer:r,elements:n}),t}(t),r=n.id,s=n.observer,a=n.elements;return a.set(e,i),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:i}))}),[t,i,d]);return r.useEffect((function(){if(!a&&!d){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[h,d]};var r=t(7294),s=t(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},6551:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return a}});var n=t(9008),r=(t(3257),t(1483),t(369)),s=t(5893);function a(){return(0,s.jsxs)(r.Z,{title:"Case Studies",bG:"https://pcacdn.azureedge.net/-/media/lhn-nhs/canaux-canal/refresh-2021/canal-trent-severn-1138.jpg?modified=20210203190038",color:"white",children:[(0,s.jsx)(n.default,{}),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"case-studys",children:[(0,s.jsxs)("div",{className:"case-study-1",children:[(0,s.jsx)("div",{className:"case-study-img",children:(0,s.jsx)("img",{src:"https://kawarthanow.com/wp-content/uploads/2017/05/lock36-kirkfield.jpg"})}),(0,s.jsxs)("div",{className:"case-study-info",children:[(0,s.jsx)("h3",{children:"Waterways"}),(0,s.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),(0,s.jsx)("button",{className:"case-study-info__button",children:"Learn More"})]})]}),(0,s.jsxs)("div",{className:"case-study-2",children:[(0,s.jsxs)("div",{className:"case-study-info",children:[(0,s.jsx)("h3",{children:"Mcdougall Church"}),(0,s.jsx)("p",{style:{textAlign:"center"},children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),(0,s.jsx)("button",{className:"case-study-info__button",children:"Learn More"})]}),(0,s.jsx)("div",{className:"case-study-img",children:(0,s.jsx)("img",{src:"../src/img/website-images/mcdougall.jpeg"})})]}),(0,s.jsxs)("div",{className:"case-study-3",children:[(0,s.jsx)("div",{className:"case-study-img",children:(0,s.jsx)("img",{src:"../src/img/website-images/DSCF1890.jpg"})}),(0,s.jsxs)("div",{className:"case-study-info",children:[(0,s.jsx)("h3",{children:"Reclamation"}),(0,s.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),(0,s.jsx)("button",{className:"case-study-info__button",children:"Learn More"})]})]}),(0,s.jsxs)("div",{className:"case-study-4",children:[(0,s.jsxs)("div",{className:"case-study-info",children:[(0,s.jsx)("h3",{children:"Oilfield  Operations"}),(0,s.jsx)("p",{style:{textAlign:"center"},children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),(0,s.jsx)("button",{className:"case-study-info__button",children:"Learn More"})]}),(0,s.jsx)("div",{className:"case-study-img",children:(0,s.jsx)("img",{src:"https://assets.spe.org/dims4/default/a8551cb/2147483647/strip/true/crop/1024x718+0+0/resize/800x561!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.amazonaws.com%2F40%2F69%2F03e1a5df7783871f348c6fae4cf4%2Fdrilling-olympus-hero.jpg"})})]})]})})]})}},9649:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/case-study",function(){return t(6551)}])},9008:function(e,i,t){e.exports=t(639)},1664:function(e,i,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return i=9649,e(e.s=i);var i}));var i=e.O();_N_E=i}]);