(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{3987:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(1664),s=r(5893);function c(){return(0,s.jsx)("footer",{children:(0,s.jsxs)("div",{className:"footer-container",children:[(0,s.jsxs)("div",{className:"footer_links",children:[(0,s.jsx)(t.default,{href:"/",children:(0,s.jsx)("a",{children:"Terms Of Services"})}),(0,s.jsx)(t.default,{href:"/",children:(0,s.jsx)("a",{children:"Privacy Policy"})})]}),(0,s.jsx)("div",{className:"footer-trademark",children:(0,s.jsx)("h1",{children:"Luau Data Corporation 2021 \xa9"})})]})})}},3044:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(7294),s=r(1664),c=r(5893);function i(){var e=(0,t.useState)(!1),n=e[0];e[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("header",{className:"header header1",children:(0,c.jsxs)("div",{className:"header1__container",children:[(0,c.jsx)("div",{className:"header1__logo",children:(0,c.jsx)(s.default,{href:"/",children:(0,c.jsx)("a",{children:"Luau Data Corporation"})})}),(0,c.jsxs)("ul",{className:"header1__collections-nav",children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/eyesonsite",children:(0,c.jsx)("a",{children:"Overview"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/system",children:(0,c.jsx)("a",{children:"System"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/products",children:(0,c.jsx)("a",{children:"Products"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/case-study",children:(0,c.jsx)("a",{children:"Case Study"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/about",children:(0,c.jsx)("a",{children:"About"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/contact",children:(0,c.jsx)("a",{children:"Contact"})})})]}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"",className:"header1__menu-btn",onClick:function(){setActive(!n)},children:"MENU"})})]})}),(0,c.jsxs)("div",{className:"header1__collections-mobile-nav active",children:[(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"",className:"header1__menu-close",children:(0,c.jsx)("i",{className:"fas fa-times"})})}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/eyesonsite",children:(0,c.jsx)("a",{children:"Overview"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/system",children:(0,c.jsx)("a",{children:"System"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/products",children:(0,c.jsx)("a",{children:"Products"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/case-study",children:(0,c.jsx)("a",{children:"Case Study"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/about",children:(0,c.jsx)("a",{children:"About"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.default,{href:"/contact",children:(0,c.jsx)("a",{children:"Contact"})})})]})]})]})}},1483:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893);function s(e){return console.log(e.color),console.log(e.title),(0,t.jsx)("div",{className:"hero",style:{backgroundImage:"url(".concat(e.bG,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",display:"flex",alignItems:"center",justifyContent:"center",color:"".concat(e.color),height:"550px",width:"100vw"},children:(0,t.jsx)("h1",{children:e.title})})}},2167:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var s,c=(s=r(7294))&&s.__esModule?s:{default:s},i=r(1063),a=r(4651),l=r(7426);var o={};function d(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;o[n+"%"+r+(s?"%"+s:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,s=a.useRouter(),u=c.default.useMemo((function(){var n=i.resolveHref(s,e.href,!0),r=t(n,2),c=r[0],a=r[1];return{href:c,as:e.as?i.resolveHref(s,e.as):a||c}}),[s,e.href,e.as]),f=u.href,h=u.as,x=e.children,j=e.replace,v=e.shallow,p=e.scroll,m=e.locale;"string"===typeof x&&(x=c.default.createElement("a",null,x));var y=(n=c.default.Children.only(x))&&"object"===typeof n&&n.ref,g=l.useIntersection({rootMargin:"200px"}),b=t(g,2),_=b[0],N=b[1],k=c.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);c.default.useEffect((function(){var e=N&&r&&i.isLocalURL(f),n="undefined"!==typeof m?m:s&&s.locale,t=o[f+"%"+h+(n?"%"+n:"")];e&&!t&&d(s,f,h,{locale:n})}),[h,f,N,m,r,s]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,s,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[s?"replace":"push"](r,t,{shallow:c,locale:l,scroll:a}))}(e,s,f,h,j,v,p,m)},onMouseEnter:function(e){i.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(s,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof m?m:s&&s.locale,E=s&&s.isLocaleDomain&&i.getDomainLocale(h,C,s&&s.locales,s&&s.domainLocales);w.href=E||i.addBasePath(i.addLocale(h,C,s&&s.defaultLocale))}return c.default.cloneElement(n,w)};n.default=u},7426:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,l=s.useRef(),o=s.useState(!1),d=t(o,2),u=d[0],f=d[1],h=s.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||u||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:s,elements:t}),r}(r),s=t.id,c=t.observer,i=t.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(s))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return s.useEffect((function(){if(!i&&!u){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[u]),[h,u]};var s=r(7294),c=r(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},3826:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(9008),s=r(3044),c=r(3987),i=(r(1483),r(5893));function a(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)("main",{children:e.children}),(0,i.jsx)(c.Z,{})]})}function l(){return(0,i.jsxs)(a,{title:"System",bG:"",color:"white",children:[(0,i.jsx)(t.default,{}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"system",children:[(0,i.jsx)("h2",{children:"The Eyes on Site System"}),(0,i.jsx)("div",{className:"system-img",children:(0,i.jsx)("img",{src:"../src/img/website-images/system-diagram.png"})})]})})]})}},8881:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system",function(){return r(3826)}])},9008:function(e,n,r){e.exports=r(639)},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8881,e(e.s=n);var n}));var n=e.O();_N_E=n}]);