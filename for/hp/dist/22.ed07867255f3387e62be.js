(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[22,23],{1061:function(e,t,n){"use strict";var r=n(664);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=r(n(686)),a=n(661),s=n(684),c=(0,a.styled)(s.Box)(o||(o=(0,i.default)(["\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  clip: rect(0 0 0 0);\n  opacity: 0;\n  overflow: hidden;\n"])));t.default=c},1060:function(e,t,n){"use strict";var r=n(664);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(1061))},1070:function(e,t,n){"use strict";var r=n(664),o=n(996);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=r(n(686)),s=r(n(692)),c=(o(n(353)),n(661)),u=n(651),l=c.BaseBox.withComponent((0,c.styled)((function(e){return(0,u.jsx)("svg",(0,s.default)({width:12,height:12,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",role:"img"},e),(0,u.jsx)("path",{d:"M5.95 4.536L9.778.707a1 1 0 011.414 1.414L7.364 5.95l3.828 3.828a1 1 0 01-1.414 1.414L5.95 7.364l-3.83 3.828A1 1 0 01.707 9.778L4.536 5.95.707 2.12A1 1 0 112.121.707L5.95 4.536z",fill:"currentColor",fillRule:"evenodd"}))}))(i||(i=(0,a.default)(["\n  display: block;\n"]))),{target:"e1k7tco60"});t.default=l},1052:function(e,t,n){"use strict";var r=n(664),o=n(996);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=r(n(686)),s=r(n(692)),c=(o(n(353)),n(661)),u=n(651),l=c.BaseBox.withComponent((0,c.styled)((function(e){return(0,u.jsx)("svg",(0,s.default)({xmlns:"http://www.w3.org/2000/svg",width:16,height:4,viewBox:"0 0 16 4",role:"img"},e),(0,u.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 4a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z"}))}))(i||(i=(0,a.default)(["\n  display: block;\n"]))),{target:"e1c07le30"});t.default=l},1353:function(e){!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function r(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function i(e,n){function r(){var e=i;o(e)&&e.a.parentNode&&n(e.g)}var i=e;t(e.b,r),t(e.c,r),o(e)}function a(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var s=null,c=null,u=null,l=null;function d(){return null===l&&(l=!!document.fonts),l}function f(){if(null===u){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}u=""!==e.style.font}return u}function h(e,t){return[e.style,e.weight,f()?e.stretch:"","100px",t].join(" ")}a.prototype.load=function(e,t){var o=this,a=e||"BESbswy",u=0,l=t||3e3,f=(new Date).getTime();return new Promise((function(e,t){if(d()&&!function(){if(null===c)if(d()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);c=!!e&&603>parseInt(e[1],10)}else c=!1;return c}()){var p=new Promise((function(e,t){!function n(){(new Date).getTime()-f>=l?t(Error(l+"ms timeout exceeded")):document.fonts.load(h(o,'"'+o.family+'"'),a).then((function(t){1<=t.length?e():setTimeout(n,25)}),t)}()})),v=new Promise((function(e,t){u=setTimeout((function(){t(Error(l+"ms timeout exceeded"))}),l)}));Promise.race([v,p]).then((function(){clearTimeout(u),e(o)}),t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),e()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())}))}((function(){function c(){var t;(t=-1!=m&&-1!=w||-1!=m&&-1!=y||-1!=w&&-1!=y)&&((t=m!=w&&m!=y&&w!=y)||(null===s&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),s=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=s&&(m==g&&w==g&&y==g||m==b&&w==b&&y==b||m==E&&w==E&&y==E)),t=!t),t&&(x.parentNode&&x.parentNode.removeChild(x),clearTimeout(u),e(o))}var d=new n(a),p=new n(a),v=new n(a),m=-1,w=-1,y=-1,g=-1,b=-1,E=-1,x=document.createElement("div");x.dir="ltr",r(d,h(o,"sans-serif")),r(p,h(o,"serif")),r(v,h(o,"monospace")),x.appendChild(d.a),x.appendChild(p.a),x.appendChild(v.a),document.body.appendChild(x),g=d.a.offsetWidth,b=p.a.offsetWidth,E=v.a.offsetWidth,function e(){if((new Date).getTime()-f>=l)x.parentNode&&x.parentNode.removeChild(x),t(Error(l+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(m=d.a.offsetWidth,w=p.a.offsetWidth,y=v.a.offsetWidth,c()),u=setTimeout(e,50)}}(),i(d,(function(e){m=e,c()})),r(d,h(o,'"'+o.family+'",sans-serif')),i(p,(function(e){w=e,c()})),r(p,h(o,'"'+o.family+'",serif')),i(v,(function(e){y=e,c()})),r(v,h(o,'"'+o.family+'",monospace'))}))}))},e.exports=a}()},1380:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(353),s=n(601),c=i(n(1381));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,i=void 0===n||n,u=e.closeOnEsc,l=void 0===u||u,d=e.bindTo,f=e.isOpen,h=void 0!==f&&f,p=e.onOpen,v=e.onClose,m=e.onPortalClick,w=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=c.default(),g=y.isServer,b=y.isBrowser,E=a.useState(h),x=E[0],O=E[1],C=a.useRef(x),k=a.useCallback((function(e){C.current=e,O(e)}),[]),j=a.useRef(),L=a.useRef(b?document.createElement("div"):null);a.useEffect((function(){b&&!L.current&&(L.current=document.createElement("div"))}),[b,L]);var P=a.useMemo((function(){if(!g)return d&&s.findDOMNode(d)||document.body}),[g,d]),_=function(e){if(!e)return{portal:L,targetEl:j,event:e};var t=e||{};t.persist&&t.persist(),t.portal=L,t.targetEl=j,t.event=e;var n=e.currentTarget;return!j.current&&n&&n!==document&&(j.current=t.currentTarget),t},T=Object.entries(w).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(_(e))},e}),{}),M=a.useCallback((function(e){if(!g){var n=_(e);if(null==j.current)throw setTimeout((function(){return k(!0)}),0),Error(t.errorMessage1);p&&p(n),k(!0)}}),[g,L,k,j,p]),S=a.useCallback((function(e){if(!g){var t=_(e);v&&C.current&&v(t),C.current&&k(!1)}}),[g,v,k]),W=a.useCallback((function(e){return C.current?S(e):M(e)}),[S,M]),B=a.useCallback((function(e){return"Escape"===e.key&&l?S(e):void 0}),[l,S]),N=a.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(L)||0!==e.button||!C.current||t(j)||i&&S(e)}),[g,S,i,L]),R=a.useCallback((function(e){if(!g&&L.current instanceof HTMLElement){var t=_(e);L.current.contains(t.target)&&m&&m(t),N(e)}}),[N]),A=a.useRef({});a.useEffect((function(){if(!g&&P instanceof HTMLElement&&L.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=L.current;return P.appendChild(L.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];w[t]&&(A.current[t]=function(e){return w[t](_(e))},document.addEventListener(n,A.current[t]))})),document.addEventListener("keydown",B),document.addEventListener("mousedown",R),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];w[t]&&(document.removeEventListener(n,A.current[t]),delete A.current[t])})),document.removeEventListener("keydown",B),document.removeEventListener("mousedown",R),P.removeChild(t)}}}),[g,N,B,P,L]);var D=a.useCallback((function(e){var t=e.children;return null!=L.current?s.createPortal(t,L.current):null}),[L]);return Object.assign([M,S,C.current,D,W,j,L],r(r({isOpen:C.current,openPortal:M,ref:j,closePortal:S,togglePortal:W,Portal:D,portalRef:L},T),{bind:r({ref:j},T)}))}},1381:function(e,t){"use strict";var n,r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(n=t.Device||(t.Device={}));var o=n.Browser,i=n.Server,a=n.Native,s=!("undefined"==typeof window||!window.document||!window.document.createElement),c="undefined"!=typeof navigator&&"ReactNative"==navigator.product?a:s?o:i,u={isBrowser:c===o,isServer:c===i,isNative:c===a,device:c,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:c===o&&!!window.addEventListener,canUseViewport:c===o&&!!window.screen},l=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r({},e),t)}),{})}((e=u,Object.keys(e).map((function(t){return e[t]})),u));var e},d=l();t.weAreServer=function(){u.isServer=!0,d=l()},t.useSSR=function(){return d},t.default=t.useSSR}}]);